/* =========================================================
   LE SSERAFIM fan page - immersive layer (the firmament)
   A canvas starfield that drifts in depth, a star cursor, hero
   parallax, tilt, drag, and a star burst. All authored in plain
   CSS/JS. Everything is skipped under prefers-reduced-motion.
   ========================================================= */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------------------------------------------------------
     The sky: layers of hard stars that ROTATE slowly, as if the
     whole night were turning. Brighter than a faint dust. No
     twinkle, no glow: the points are hard and only the sky moves.
     --------------------------------------------------------- */
  function initStarfield() {
    var cvs = document.getElementById('starfield');
    var host = document.getElementById('firmament');
    if (!cvs || !host || reduce) { if (host) host.style.display = 'none'; return; }
    var ctx = cvs.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var stars = [];
    var w = 0, h = 0;

    function build() {
      w = window.innerWidth;
      h = window.innerHeight;
      cvs.width = Math.floor(w * dpr);
      cvs.height = Math.floor(h * dpr);
      cvs.style.width = w + 'px';
      cvs.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // dense sky: most stars sit inside the viewport, some revolve on a wide
      // polar field so the whole sky still turns. Counts scale down on phones.
      var base = w < 720 ? 420 : w < 1200 ? 780 : 1150;
      var dust = Math.round(base * 0.8);
      stars = [];
      for (var i = 0; i < base + dust; i++) {
        var isBig = i < base * 0.07;      // a few standout stars
        var isDust = i >= base;           // tiny faint specks
        var depth = 0.3 + Math.random() * 0.7;   // near stars turn a touch faster
        var ang, rad;
        if (Math.random() < 0.72) {
          // seeded inside the screen, so the field reads dense right away
          ang = Math.random() * Math.PI * 2;
          rad = Math.random() * Math.max(w, h) * 0.75;
        } else {
          // a wide ring that revolves around the pivot above the fold
          ang = Math.random() * Math.PI * 2;
          rad = (0.7 + Math.random() * 0.6) * Math.max(w, h) * 1.1;
        }
        var r, a;
        if (isDust) {
          r = 0.6 + Math.random() * 0.7;
          a = 0.45 + Math.random() * 0.35;
        } else if (isBig) {
          r = depth * 2.8 + 1.8;
          a = 0.95;
        } else {
          r = depth * 2.2 + 0.9;
          a = 0.8 + depth * 0.2;
        }
        stars.push({
          ang: ang,
          rad: rad,
          depth: depth,
          r: r,
          a: Math.min(a, 1),
          // a faint blue cast for some stars, so the sky is not flat white
          tint: Math.random() < 0.25 ? '#bcd4ff' : '#ffffff'
        });
      }
    }
    build();

    var cxp = 0, cyp = 0;
    function pivot() {
      // a point high above the fold, so rotation reads as a slow sky turn
      cxp = w * 0.5;
      cyp = -h * 0.35;
    }
    pivot();

    var paused = false;
    document.addEventListener('visibilitychange', function () { paused = document.hidden; });
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { build(); pivot(); }, 180);
    }, { passive: true });

    // the sky fades as the visitor leaves the hero, so the reading sections sit
    // on a calm ground. Driven from scroll, not a fixed gradient.
    function syncVeil() {
      var past = window.scrollY / Math.max(1, window.innerHeight);
      var dim = Math.max(0, Math.min(1, (past - 0.35) / 0.9));   // 0 at top, 1 further down
      host.style.opacity = (1 - dim * 0.72).toFixed(3);
    }
    window.addEventListener('scroll', syncVeil, { passive: true });
    syncVeil();
    window.addEventListener('resize', syncVeil, { passive: true });

    var t0 = performance.now();
    function frame(now) {
      requestAnimationFrame(frame);
      if (paused) return;
      var t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        // the whole sky rotates; nearer layers turn slightly faster
        var a = s.ang + t * 0.012 * s.depth;
        var x = cxp + Math.cos(a) * s.rad;
        var y = cyp + Math.sin(a) * s.rad;
        // scroll adds a small parallax so the sky has depth
        y -= (window.scrollY * s.depth * 0.12);
        if (x < -6 || x > w + 6 || y < -6 || y > h + 6) continue;
        ctx.globalAlpha = s.a;
        ctx.fillStyle = s.tint || '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
        // the standout stars get a short hard cross, like a real bright star
        if (s.r > 2.6) {
          ctx.globalAlpha = s.a * 0.6;
          var len = s.r * 2.8;
          ctx.fillRect(x - len, y - 0.5, len * 2, 1);
          ctx.fillRect(x - 0.5, y - len, 1, len * 2);
        }
      }
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(frame);
  }

  /* ---------------------------------------------------------
     Star cursor (pointer devices only)
     --------------------------------------------------------- */
  function initCursor() {
    var cursor = document.getElementById('star-cursor');
    if (!cursor || !finePointer || reduce) return;
    var dot = cursor.querySelector('.star-cursor__dot');
    var ring = cursor.querySelector('.star-cursor__ring');
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;
    var shown = false;

    document.addEventListener('mousemove', function (e) {
      // do not draw the ring until the pointer actually moves, so a stray
      // ring never sits over the wordmark at load
      if (!shown) {
        shown = true;
        document.body.classList.add('has-star-cursor');
        cursor.classList.add('is-live');
        rx = e.clientX; ry = e.clientY;
        ring.style.setProperty('--rx', rx + 'px');
        ring.style.setProperty('--ry', ry + 'px');
      }
      mx = e.clientX; my = e.clientY;
      dot.style.setProperty('--cx', mx + 'px');
      dot.style.setProperty('--cy', my + 'px');
      var hot = e.target.closest('a, button, input');
      cursor.classList.toggle('is-hot', !!hot);
    });
    (function loop() {
      rx += (mx - rx) * 0.17;
      ry += (my - ry) * 0.17;
      ring.style.setProperty('--rx', rx + 'px');
      ring.style.setProperty('--ry', ry + 'px');
      requestAnimationFrame(loop);
    })();
  }

  /* ---------------------------------------------------------
     Scroll progress bar + live section counter
     --------------------------------------------------------- */
  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    var counter = document.getElementById('section-here');
    var sections = [].slice.call(document.querySelectorAll('[data-section]'));
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      if (counter && sections.length) {
        var here = sections[0];
        var mid = window.scrollY + window.innerHeight * 0.35;
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].offsetTop <= mid) here = sections[i];
        }
        var idx = sections.indexOf(here) + 1;
        var label = here.getAttribute('data-section') || '';
        if (counter.firstChild) {
          counter.firstChild.nodeValue = String(idx).padStart(2, '0') + ' / ' +
            String(sections.length).padStart(2, '0') + '  ' + label;
        }
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* ---------------------------------------------------------
     Click ripple
     --------------------------------------------------------- */
  function initRipple() {
    if (reduce) return;
    document.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      var host = e.target.closest('a, button');
      if (!host) return;
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      var r = host.getBoundingClientRect();
      var span = document.createElement('span');
      span.className = 'ripple';
      span.style.left = (e.clientX - r.left) + 'px';
      span.style.top = (e.clientY - r.top) + 'px';
      span.style.width = span.style.height = Math.max(r.width, r.height) * 1.6 + 'px';
      host.appendChild(span);
      setTimeout(function () { span.remove(); }, 600);
    });
  }

  /* ---------------------------------------------------------
     Star burst: from the play control, and around a member card
     --------------------------------------------------------- */
  function burst(x, y, colour, n, spread) {
    if (reduce) return;
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      s.className = 'burst-star';
      s.style.background = colour || '#ffffff';
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      var ang = (Math.PI * 2 * i) / n + Math.random() * 0.5;
      var dist = spread * (0.6 + Math.random() * 0.9);
      s.style.setProperty('--dx', (Math.cos(ang) * dist).toFixed(0) + 'px');
      s.style.setProperty('--dy', (Math.sin(ang) * dist).toFixed(0) + 'px');
      var size = 4 + Math.random() * 7;
      s.style.width = s.style.height = size + 'px';
      document.body.appendChild(s);
      (function (node) { setTimeout(function () { node.remove(); }, 750); })(s);
    }
  }

  function initBurst() {
    if (reduce) return;
    document.addEventListener('lss:play', function (e) {
      var d = e.detail || {};
      if (typeof d.x === 'number') burst(d.x, d.y, '#4d8dff', 12, 60);
    });
    document.addEventListener('lss:member', function (e) {
      var d = e.detail || {};
      setTimeout(function () {
        burst(window.innerWidth / 2, window.innerHeight * 0.4, d.tone || '#4d8dff', 26, 170);
      }, 220);
    });
  }

  /* ---------------------------------------------------------
     Day / night: the page is dark first; the header has no switch,
     but a stored 'light' choice is still honoured (see index.html).
     --------------------------------------------------------- */
  function themeFromStorage() {
    try {
      var s = localStorage.getItem('lss-theme');
      document.documentElement.setAttribute('data-theme', s === 'light' ? 'light' : 'dark');
    } catch (e) {}
  }

  function boot() {
    initStarfield();
    initCursor();
    initScrollProgress();
    initRipple();
    initBurst();
    themeFromStorage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
