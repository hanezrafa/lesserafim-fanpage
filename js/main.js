/* =========================================================
   LE SSERAFIM fan page - the archive
   The page is an index (a rail of tabs) beside a detail pane that
   changes in place. Everything renders from data.js, and the hash
   records what you are looking at, so items can be linked and the
   back button works. Plain JS, no framework.
   ========================================================= */

(function () {
  'use strict';

  var PHOTO_BASE = 'assets/photos/';

  /* ---------- tiny helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function absUrl(p) { return new URL(p, document.baseURI).href; }
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ''); }

  /* ---------- render: intro text ---------- */
  var introText = document.getElementById('intro-text');
  if (introText) introText.textContent = NJ.group.intro;

  /* =========================================================
     The archive data, flattened into one list
     Each item has: tab, id (hash), label, sub (a second line),
     and the content the pane renders.
     ========================================================= */
  var TABS = ['members', 'releases', 'eras', 'milestones'];
  var TAB_LABEL = { members: 'Members', releases: 'Discography', eras: 'Eras', milestones: 'Milestones' };

  function previewFor(title) {
    return (window.NJ_PREVIEWS || []).filter(function (p) {
      return norm(p.track) === norm(title) || norm(p.track).indexOf(norm(title)) === 0 || norm(title).indexOf(norm(p.track)) === 0;
    })[0];
  }

  var ITEMS = [];

  (NJ.members || []).forEach(function (m, i) {
    ITEMS.push({
      tab: 'members',
      id: m.id,
      label: m.name,
      sub: String(i + 1).padStart(2, '0') + ' / ' + (m.role || 'Member'),
      tone: m.tone,
      member: m
    });
  });
  (NJ.releases || []).forEach(function (r) {
    ITEMS.push({
      tab: 'releases',
      id: slug(r.year + '-' + r.title),
      label: r.title,
      sub: r.year + ' / ' + r.type,
      tone: null,
      release: r,
      preview: previewFor(r.title)
    });
  });
  (NJ.eras || []).forEach(function (e) {
    ITEMS.push({
      tab: 'eras',
      id: 'era-' + e.id,
      label: e.title,
      sub: e.year,
      tone: e.tone,
      era: e
    });
  });
  (NJ.achievements || []).forEach(function (a, i) {
    ITEMS.push({
      tab: 'milestones',
      id: 'mile-' + slug(a.year + '-' + a.title),
      label: a.title,
      sub: a.year + ' / ' + a.date,
      tone: null,
      milestone: a
    });
  });

  function itemsFor(tab) {
    return ITEMS.filter(function (it) { return it.tab === tab; });
  }
  function itemById(id) {
    for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].id === id) return ITEMS[i];
    return null;
  }
  function firstOf(tab) { return itemsFor(tab)[0] || null; }

  /* =========================================================
     Rail: tabs + the list for the active tab
     ========================================================= */
  var railTabs = document.getElementById('rail-tabs');
  var railList = document.getElementById('rail-list');
  var pane = document.getElementById('pane');

  var state = { tab: 'members', id: null };

  function buildRail() {
    if (!railList) return;
    railList.innerHTML = '';
    itemsFor(state.tab).forEach(function (it, i) {
      var li = el('li', 'rail-item');
      var b = el('button', 'rail-item__btn');
      b.type = 'button';
      b.dataset.id = it.id;
      b.setAttribute('role', 'option');
      b.innerHTML =
        '<span class="rail-item__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="rail-item__text">' +
          '<span class="rail-item__label">' + esc(it.label) + '</span>' +
          '<span class="rail-item__sub">' + esc(it.sub) + '</span>' +
        '</span>';
      if (it.tone) b.style.setProperty('--tone', it.tone);
      li.appendChild(b);
      railList.appendChild(li);
    });
  }

  function markActive(keepRowInView) {
    if (!railList) return;
    Array.prototype.forEach.call(railList.querySelectorAll('.rail-item__btn'), function (b) {
      var on = b.dataset.id === state.id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
    });
    // when the tab changes, bring the active row into the rail's own view.
    // We scroll the rail container by hand: scrollIntoView would scroll the
    // whole page, which threw the visitor to the archive on first load.
    if (keepRowInView) {
      var wrap = railList.closest('.rail-list-wrap');
      var active = railList.querySelector('.rail-item__btn.is-active');
      if (wrap && active) {
        var top = active.offsetTop;
        var h = active.offsetHeight;
        if (top < wrap.scrollTop) wrap.scrollTop = top;
        else if (top + h > wrap.scrollTop + wrap.clientHeight) wrap.scrollTop = top + h - wrap.clientHeight;
      }
    }
  }

  function setTab(tab, opts) {
    opts = opts || {};
    if (TABS.indexOf(tab) === -1) tab = 'members';
    state.tab = tab;
    Array.prototype.forEach.call(document.querySelectorAll('.rail__tab'), function (t) {
      var on = t.dataset.tab === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    var panel = document.getElementById('rail-list');
    if (panel) panel.setAttribute('aria-labelledby', 'tab-' + tab);
    buildRail();
    if (opts.keepSelection) {
      markActive(!opts.firstPaint);
    } else {
      var first = firstOf(tab);
      if (first) selectItem(first.id, { replaceHash: true, noScroll: true, keepRow: !opts.firstPaint });
    }
  }

  /* =========================================================
     Pane: the detail for one item
     ========================================================= */
  function paneMember(m) {
    var facts = (m.facts || []).map(function (row) {
      return '<li class="kv"><span class="k">' + esc(row[0]) + '</span><span class="v">' + esc(row[1]) + '</span></li>';
    }).join('');
    return '' +
      '<div class="pane__media">' +
        '<img class="pane__portrait" src="' + PHOTO_BASE + esc(m.photo) + '" alt="' + esc(m.name) + ' of LE SSERAFIM" width="600" height="750">' +
        '<span class="pane__wash" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="pane__body">' +
        '<p class="pane__eyebrow">' + esc(m.status || 'Member') + ' \u00b7 LE SSERAFIM</p>' +
        '<h3 class="pane__title">' + esc(m.name) + '</h3>' +
        '<p class="pane__full">' + esc(m.full) + ' \u00b7 ' + esc(m.hangul) + '</p>' +
        '<p class="pane__lead">' + esc(m.blurb || '') + '</p>' +
        '<p class="pane__text">' + esc(m.bio || '') + '</p>' +
        '<ul class="pane__facts">' + facts + '</ul>' +
      '</div>';
  }

  function paneRelease(r) {
    var pv = previewFor(r.title);
    var play = pv
      ? '<button class="pane__play" type="button" data-track="' + esc(pv.track) + '" ' +
        'aria-label="Play a preview of ' + esc(r.title) + '">' +
        '<span class="release__play-tri" aria-hidden="true"></span><span class="pane__play-label">Play preview</span></button>'
      : '<p class="pane__note">No preview available for this release.</p>';
    var art = pv && pv.art
      ? '<div class="pane__art"><img src="' + esc(pv.art) + '" alt="Cover of ' + esc(pv.album) + '" width="300" height="300"></div>'
      : '';
    return '' +
      '<div class="pane__media pane__media--art">' + art +
        '<span class="pane__wash" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="pane__body">' +
        '<p class="pane__eyebrow">' + esc(r.year) + ' \u00b7 ' + esc(r.type) + '</p>' +
        '<h3 class="pane__title">' + esc(r.title) + '</h3>' +
        (r.note ? '<p class="pane__lead">' + esc(r.note) + '</p>' : '') +
        (pv ? '<p class="pane__text">' + esc(pv.album) + '</p>' : '') +
        '<div class="pane__actions">' + play + '</div>' +
      '</div>';
  }

  function paneEra(e) {
    var idx = (NJ.eras || []).indexOf(e);
    var next = (NJ.eras || [])[idx + 1];
    return '' +
      '<div class="pane__media pane__media--era">' +
        '<span class="pane__era-bg" style="background-image:url(&quot;' + absUrl(e.bg || '') + '&quot;)" aria-hidden="true"></span>' +
        '<span class="pane__wash" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="pane__body">' +
        '<p class="pane__eyebrow">Era \u00b7 ' + esc(e.year) + '</p>' +
        '<h3 class="pane__title">' + esc(e.title) + '</h3>' +
        '<p class="pane__text">' + esc(e.blurb) + '</p>' +
        (next ? '<p class="pane__next">Next era \u00b7 ' + esc(next.title) + ', ' + esc(next.year) + '</p>' : '<p class="pane__next">Latest era on this page.</p>') +
      '</div>';
  }

  function paneMilestone(a) {
    return '' +
      '<div class="pane__body pane__body--wide">' +
        '<p class="pane__eyebrow">Milestone \u00b7 ' + esc(a.date) + '</p>' +
        '<h3 class="pane__title pane__title--year">' + esc(a.year) + '</h3>' +
        '<p class="pane__lead">' + esc(a.title) + '</p>' +
        '<p class="pane__text">' + esc(a.note) + '</p>' +
      '</div>';
  }

  function renderPane(it) {
    if (!pane || !it) return;
    document.documentElement.style.setProperty('--tone', it.tone || 'var(--fearless)');
    if (it.member) pane.innerHTML = paneMember(it.member);
    else if (it.release) pane.innerHTML = paneRelease(it.release);
    else if (it.era) pane.innerHTML = paneEra(it.era);
    else if (it.milestone) pane.innerHTML = paneMilestone(it.milestone);
    // replay the pane's own small entrance
    pane.classList.remove('is-in');
    void pane.offsetWidth;
    pane.classList.add('is-in');
  }

  /* =========================================================
     Selection + hash routing
     ========================================================= */
  var suppressHash = false;

  function selectItem(id, opts) {
    var it = itemById(id);
    if (!it) return;
    opts = opts || {};
    state.id = id;
    if (it.tab !== state.tab) {
      state.tab = it.tab;
      Array.prototype.forEach.call(document.querySelectorAll('.rail__tab'), function (t) {
        var on = t.dataset.tab === it.tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      var panel = document.getElementById('rail-list');
      if (panel) panel.setAttribute('aria-labelledby', 'tab-' + it.tab);
      buildRail();
    }
    markActive(opts.keepRow === true);
    renderPane(it);

    if (!opts.replaceHash) {
      suppressHash = true;
      if (('#/' + id) !== location.hash) {
        location.hash = '/' + id;
      }
      setTimeout(function () { suppressHash = false; }, 0);
    }
    if (!opts.noScroll && !opts.keepScroll) {
      // on a phone the pane is below the rail, so bring it into view
      if (window.matchMedia('(max-width: 860px)').matches && pane) {
        var top = pane.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    }
  }

  function readHash() {
    var h = location.hash.replace(/^#\/?/, '');
    if (!h) return null;
    // a tab alias (#members, #eras ...) opens that tab
    if (TABS.indexOf(h) !== -1) return { tab: h };
    if (h === 'archive') return { tab: state.tab };
    var it = itemById(h);
    if (it) return { item: it };
    return null;
  }

  function applyHash() {
    var r = readHash();
    if (!r) return false;
    if (r.tab) {
      // a tab link: keep the tab, select its first item
      state.tab = r.tab;
      Array.prototype.forEach.call(document.querySelectorAll('.rail__tab'), function (t) {
        var on = t.dataset.tab === r.tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      var panel = document.getElementById('rail-list');
      if (panel) panel.setAttribute('aria-labelledby', 'tab-' + r.tab);
      buildRail();
      var first = firstOf(r.tab);
      if (first) selectItem(first.id, { replaceHash: true, keepScroll: true });
      return true;
    }
    if (r.item) {
      selectItem(r.item.id, { replaceHash: true, keepScroll: true });
      return true;
    }
    return false;
  }

  /* ---------- wire the controls ---------- */
  if (railTabs) {
    railTabs.addEventListener('click', function (e) {
      var b = e.target.closest('.rail__tab');
      if (!b) return;
      setTab(b.dataset.tab);
      var first = firstOf(b.dataset.tab);
      if (first) {
        suppressHash = true;
        location.hash = '/' + first.id;
        setTimeout(function () { suppressHash = false; }, 0);
      }
    });
  }
  if (railList) {
    railList.addEventListener('click', function (e) {
      var b = e.target.closest('.rail-item__btn');
      if (b) selectItem(b.dataset.id);
    });
    // keyboard: up/down move through the list
    railList.addEventListener('keydown', function (e) {
      var b = e.target.closest('.rail-item__btn');
      if (!b) return;
      var btns = Array.prototype.slice.call(railList.querySelectorAll('.rail-item__btn'));
      var i = btns.indexOf(b);
      if (e.key === 'ArrowDown' && i < btns.length - 1) { e.preventDefault(); btns[i + 1].focus(); btns[i + 1].click(); }
      else if (e.key === 'ArrowUp' && i > 0) { e.preventDefault(); btns[i - 1].focus(); btns[i - 1].click(); }
    });
  }
  var nav = document.querySelector('.topbar__nav');
  if (nav) {
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('[data-goto-tab]');
      if (!a) return;
      e.preventDefault();
      setTab(a.dataset.gotoTab);
      var first = firstOf(a.dataset.gotoTab);
      if (first) { suppressHash = true; location.hash = '/' + first.id; setTimeout(function () { suppressHash = false; }, 0); }
      var arch = document.getElementById('archive');
      if (arch) {
        var top = arch.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  }
  if (pane) {
    pane.addEventListener('click', function (e) {
      var b = e.target.closest('.pane__play');
      if (b && b.dataset.track && window.lssPlayTrack) {
        window.lssPlayTrack(b.dataset.track);
      }
    });
  }

  window.addEventListener('hashchange', function () {
    if (suppressHash) return;
    applyHash();
  });

  /* =========================================================
     The anagram lockup
     The group's name is an anagram of "I am fearless". The hero
     sets one phrase, then the letters slide into the other, and
     back, on a loop. Letters shared by both spellings keep their
     node; the extras fade out and back in.
     ========================================================= */
  function initAnagram() {
    var word = document.getElementById('hero-word');
    if (!word) return;

    var PHRASE = "I'M FEARLESS";   // 11 glyphs
    var NAME = 'LE SSERAFIM';      // 10 glyphs
    var sub = document.getElementById('hero-sub');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function glyphs(s) { return s.split('').filter(function (c) { return c !== ' '; }); }

    // ---- build a fixed pool of nodes ----
    var pool = [];
    function addNode(ch) {
      var s = document.createElement('span');
      s.className = 'ch';
      s.textContent = ch;
      word.appendChild(s);
      var n = { ch: ch, el: s };
      pool.push(n);
      return n;
    }

    function counts(s) {
      var c = {};
      glyphs(s).forEach(function (g) { c[g] = (c[g] || 0) + 1; });
      return c;
    }
    var cp = counts(PHRASE), cn = counts(NAME);
    var glyphSet = {};
    Object.keys(cp).forEach(function (g) { glyphSet[g] = 1; });
    Object.keys(cn).forEach(function (g) { glyphSet[g] = 1; });
    Object.keys(glyphSet).forEach(function (g) {
      var need = Math.max(cp[g] || 0, cn[g] || 0);
      for (var k = 0; k < need; k++) addNode(g);
    });

    // ---- measurement ----
    var glyphW = {};
    function measure() {
      var cs = getComputedStyle(word);
      var probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;' +
        'font-family:' + cs.fontFamily + ';font-weight:' + cs.fontWeight +
        ';font-size:' + cs.fontSize + ';letter-spacing:' + cs.letterSpacing;
      document.body.appendChild(probe);
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ'".split('').forEach(function (c) {
        probe.textContent = c;
        glyphW[c] = probe.getBoundingClientRect().width;
      });
      document.body.removeChild(probe);
    }
    function widthOf(str) {
      var w = 0;
      glyphs(str).forEach(function (c) { w += glyphW[c] || 0; });
      return w;
    }

    // ---- assign nodes to slots for a phrase ----
    function place(str) {
      var free = pool.slice();
      var slots = [];
      glyphs(str).forEach(function (g) {
        var idx = -1;
        for (var i = 0; i < free.length; i++) { if (free[i].ch === g) { idx = i; break; } }
        if (idx === -1) { slots.push(addNode(g)); }
        else { slots.push(free.splice(idx, 1)[0]); }
      });
      return { slots: slots, free: free };
    }

    var current = null;
    var STAGGER = 42;
    function apply(str) {
      var placed = place(str);
      var clean = str.replace(/ /g, '');
      var full = widthOf(clean) + (str.indexOf(' ') !== -1 ? glyphW['M'] * 0.5 : 0);
      var boxW = word.getBoundingClientRect().width;
      var x = (boxW - full) / 2;
      var shown = placed.slots;
      var n = shown.length;
      var si = 0;
      str.split('').forEach(function (ch) {
        if (ch === ' ') { x += glyphW['M'] * 0.5; return; }
        var node = shown[si];
        var dist = Math.abs(si - (n - 1) / 2);
        node.el.style.setProperty('--d', (dist * STAGGER).toFixed(0) + 'ms');
        node.el.style.setProperty('--x', x.toFixed(2) + 'px');
        node.el.style.setProperty('--y', '0px');
        node.el.style.opacity = '1';
        node.el.classList.toggle('is-accent', node.ch === 'F' || node.ch === 'R');
        si++;
        x += glyphW[node.ch] || 0;
      });
      placed.free.forEach(function (node, k) {
        node.el.style.setProperty('--d', (k * STAGGER * 0.7).toFixed(0) + 'ms');
        node.el.style.opacity = '0';
        node.el.style.setProperty('--y', '0.4em');
        node.el.classList.remove('is-accent');
      });
      if (sub) {
        sub.textContent = str === PHRASE ? '\u201cI\u2019m fearless\u201d, rearranged' : 'the name, reassembled';
      }
      current = str;
    }

    function build() {
      measure();
      word.classList.add('no-anim');
      apply(PHRASE);
      void word.offsetWidth;
      word.classList.remove('no-anim');
      word.classList.add('is-ready');
    }

    build();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { measure(); apply(current); }, 180);
    }, { passive: true });

    if (reduce) { apply(NAME); return; }

    var order = [PHRASE, NAME];
    var at = 0;
    var timer = null;
    function tick() { at = (at + 1) % order.length; apply(order[at]); }
    function start() { clearInterval(timer); timer = setInterval(tick, 3200); }
    start();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearInterval(timer); else start();
    });
  }

  /* =========================================================
     Section heading type-in (the numbered labels)
     ========================================================= */
  function typeableHeadings() {
    var heads = document.querySelectorAll('.section-num');
    Array.prototype.forEach.call(heads, function (h) {
      var label = '';
      Array.prototype.forEach.call(h.childNodes, function (node) {
        if (node.nodeType === 3) label += node.nodeValue;
      });
      if (!label.trim()) return;
      Array.prototype.forEach.call([].slice.call(h.childNodes), function (node) {
        if (node.nodeType === 3) h.removeChild(node);
      });
      var wrap = el('span', 'ti-text');
      label.replace(/^\s+|\s+$/g, '').split('').forEach(function (ch, i) {
        var s = el('span', 'ti');
        s.textContent = ch === ' ' ? '\u00a0' : ch;
        s.style.setProperty('--d', (0.12 + i * 0.045).toFixed(3) + 's');
        wrap.appendChild(s);
      });
      var caret = el('span', 'ti-caret');
      caret.setAttribute('aria-hidden', 'true');
      h.appendChild(wrap);
      h.appendChild(caret);
      h.setAttribute('aria-label', label.trim());
    });
  }

  /* =========================================================
     Scroll reveal (replays on every entry, as before)
     ========================================================= */
  function heroReveal() {
    var targets = [
      document.querySelector('.hero__masthead'),
      document.querySelector('.hero__kicker'),
      document.querySelector('.hero__title'),
      document.querySelector('.hero__sub'),
      document.querySelector('.hero__cta'),
      document.querySelector('.hero__strip')
    ].filter(Boolean);
    targets.forEach(function (t, i) {
      t.classList.add('rv', 'rv-rise');
      t.style.setProperty('--i', i);
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        targets.forEach(function (t) { t.classList.add('is-in'); });
      });
    });
  }

  function bindReveal() {
    var items = document.querySelectorAll('.rv, .section-num');
    if (!('IntersectionObserver' in window) || !items.length) {
      Array.prototype.forEach.call(items, function (it) { it.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        en.target.classList.toggle('is-in', en.isIntersecting);
      });
    }, { rootMargin: '-12% 0px -12% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(items, function (it) { io.observe(it); });
  }

  /* ---------- boot ---------- */
  var yr = document.getElementById('foot-year');
  if (yr) yr.textContent = new Date().getFullYear();
  if (NJ.members && NJ.members[0]) document.documentElement.style.setProperty('--tone', NJ.members[0].tone);

  typeableHeadings();
  initAnagram();
  heroReveal();
  bindReveal();

  // the archive: start from the hash if it names something, else the first member.
  // On this first paint we never scroll, so the page opens at the hero.
  if (!applyHash()) {
    setTab('members', { replaceHash: true, firstPaint: true });
  } else {
    markActive(false);
  }
})();
