/* =========================================================
   LE SSERAFIM fan page - the text effects
   Each kind of text gets its own motion, none of them the usual
   "fade up". Plain JS + CSS, runs once per element when it enters
   the view (and replays when it comes back), and is skipped
   entirely under prefers-reduced-motion.
   ========================================================= */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>';

  /* ---------- scramble decode: noise resolving into the real text ---------- */
  function scramble(el) {
    var target = el.getAttribute('data-text');
    if (target == null) { target = el.textContent; el.setAttribute('data-text', target); }
    if (reduce) { el.textContent = target; return; }
    // long blocks of prose resolving letter by letter feels broken, so keep the
    // decode for short lines only; longer text gets a plain fade instead
    if (target.length > 150) { el.textContent = target; el.classList.add('fx-faded'); return; }
    // stop any earlier run on this element
    if (el._scTimer) clearInterval(el._scTimer);
    var chars = target.split('');
    var total = chars.length;
    // a fixed total duration, so a short line and a longer one read the same
    var DUR = 900;
    var INTERVAL = 40;
    var ticks = Math.max(6, Math.round(DUR / INTERVAL));
    var perTick = Math.ceil(total / ticks);
    var revealed = 0, frame = 0;
    el._scTimer = setInterval(function () {
      frame++;
      revealed = Math.min(total, revealed + perTick);
      var out = '';
      for (var i = 0; i < total; i++) {
        var c = chars[i];
        if (c === ' ' || c === '\n') out += c;
        else if (i < revealed) out += c;
        else out += NOISE[(Math.random() * NOISE.length) | 0];
      }
      el.textContent = out;
      if (revealed >= total) {
        clearInterval(el._scTimer);
        el._scTimer = null;
        el.textContent = target;
      }
    }, INTERVAL);
  }

  /* ---------- count up: a number climbs to its value ---------- */
  function countUp(el) {
    var raw = el.getAttribute('data-count');
    var suffix = el.getAttribute('data-suffix') || '';
    var end = parseFloat(raw);
    if (isNaN(end)) { el.textContent = raw + suffix; return; }
    if (reduce) { el.textContent = raw + suffix; return; }
    var dur = 900, t0 = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = raw + suffix;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- split a line into per-word spans (footer, etc.) ---------- */
  function splitWords(el) {
    if (el.getAttribute('data-split') === 'done') return;
    var text = el.textContent;
    el.textContent = '';
    var frag = document.createDocumentFragment();
    text.split(/(\s+)/).forEach(function (chunk, i) {
      if (/^\s+$/.test(chunk)) { frag.appendChild(document.createTextNode(chunk)); return; }
      var s = document.createElement('span');
      s.className = 'w';
      s.style.setProperty('--wi', i);
      s.textContent = chunk;
      frag.appendChild(s);
    });
    el.appendChild(frag);
    el.setAttribute('data-split', 'done');
  }

  function prepare(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll('[data-scramble]'), function (el) {
      if (el.getAttribute('data-text') == null) el.setAttribute('data-text', el.textContent);
    });
    Array.prototype.forEach.call(scope.querySelectorAll('[data-splitwords]'), splitWords);
  }

  function run(el) {
    if (el.hasAttribute('data-scramble')) scramble(el);
    if (el.hasAttribute('data-count')) countUp(el);
    el.classList.add('is-live');
  }

  function showNow(el) {
    if (el.hasAttribute('data-count')) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    }
    if (el.hasAttribute('data-scramble')) {
      var t = el.getAttribute('data-text');
      if (t != null) el.textContent = t;
    }
    el.classList.add('is-live');
  }

  var SELECTOR = '[data-scramble], [data-count], [data-splitwords], ' +
    '.fx-glitch, .fx-wipe, .fx-track, .fx-fact, .fx-eyebrow, .fx-cascade';

  var io = null;

  function observe(root) {
    var scope = root || document;
    var items = scope.querySelectorAll(SELECTOR);
    Array.prototype.forEach.call(items, function (el) {
      if (el._fxObserved) return;
      el._fxObserved = true;
      if (reduce || !io) { showNow(el); return; }
      io.observe(el);
    });
  }

  function boot() {
    prepare(document);

    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) run(en.target);
          else {
            // reset on leave so the effect replays next time
            en.target.classList.remove('is-live');
            if (en.target.hasAttribute('data-scramble')) {
              var t = en.target.getAttribute('data-text');
              if (t != null) en.target.textContent = t;
            }
          }
        });
      }, { rootMargin: '-8% 0px -8% 0px', threshold: 0.15 });
    }

    observe(document);

    // the pane is rebuilt on every selection, so re-scan when it changes
    document.addEventListener('lss:pane', function () {
      var pane = document.getElementById('pane') || document;
      prepare(pane);
      observe(pane);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
