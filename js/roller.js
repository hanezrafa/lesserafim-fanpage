/* =========================================================
   LE SSERAFIM fan page - the roller
   One line under the hero that changes, instead of the old name
   ticker that just repeated the five names. It cycles through
   three kinds of fact - a member, a release, a milestone - and
   the line climbs: the old text rises out, the new one rises in.
   The label and the meta on the right change with it, and a thin
   bar shows the time until the next turn.
   ========================================================= */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function boot() {
    var root = document.getElementById('roller');
    var line = document.getElementById('roller-line');
    var sr = document.getElementById('roller-sr');
    var label = document.getElementById('roller-label');
    var meta = document.getElementById('roller-meta');
    var bar = document.getElementById('roller-bar');
    if (!root || !line || !window.NJ) return;

    // ---- build the cycle ----
    var items = [];

    (NJ.members || []).forEach(function (m, i) {
      items.push({
        kind: 'member',
        label: 'Member',
        text: m.name,
        meta: String(i + 1).padStart(2, '0') + ' \u00b7 ' + (m.role || 'Member'),
        tone: m.tone || null
      });
    });
    (NJ.releases || []).forEach(function (r) {
      items.push({
        kind: 'release',
        label: 'Release',
        text: r.title,
        meta: r.year + ' \u00b7 ' + r.type,
        tone: null
      });
    });
    (NJ.achievements || []).forEach(function (a) {
      items.push({
        kind: 'milestone',
        label: 'Milestone',
        text: a.title,
        meta: a.year,
        tone: a.tone || null
      });
    });

    if (!items.length) return;

    // interleave the three kinds so member then release then milestone, and so on
    var byKind = {
      member: items.filter(function (x) { return x.kind === 'member'; }),
      release: items.filter(function (x) { return x.kind === 'release'; }),
      milestone: items.filter(function (x) { return x.kind === 'milestone'; })
    };
    var order = ['member', 'milestone', 'release', 'member', 'milestone', 'release'];
    var seq = [];
    var cursors = { member: 0, release: 0, milestone: 0 };
    var guard = 0;
    while (seq.length < items.length && guard++ < 500) {
      var k = order[seq.length % order.length];
      var list = byKind[k];
      if (list && cursors[k] < list.length) { seq.push(list[cursors[k]++]); }
      else {
        // that kind ran out; take from whichever still has some
        var left = Object.keys(byKind).filter(function (kk) { return cursors[kk] < byKind[kk].length; });
        if (!left.length) break;
        var kk2 = left[0];
        seq.push(byKind[kk2][cursors[kk2]++]);
      }
    }

    var at = 0;
    var timer = null;

    function paint(item, animate) {
      var apply = function () {
        line.textContent = item.text;
        if (sr) sr.textContent = item.label + ': ' + item.text + (item.meta ? ', ' + item.meta : '');
        if (label) label.textContent = item.label;
        if (meta) meta.textContent = item.meta || '';
        if (bar) {
          bar.classList.remove('is-ticking');
          void bar.offsetWidth;
          bar.classList.add('is-ticking');
        }
        var card = document.querySelector('.roller');
        if (card) card.style.setProperty('--roller-tone', item.tone || 'var(--fearless)');
      };
      if (!animate || reduce) { apply(); return; }
      // the climb: current line out, then swap the text, then in
      line.classList.remove('is-in');
      line.classList.add('is-out');
      setTimeout(function () {
        apply();
        line.classList.remove('is-out');
        line.classList.add('is-in');
      }, 430);
    }

    function next() {
      at = (at + 1) % seq.length;
      paint(seq[at], true);
    }

    paint(seq[0], false);

    function start() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
      if (bar) {
        bar.classList.remove('is-ticking');
        void bar.offsetWidth;
        bar.classList.add('is-ticking');
      }
    }

    if (!reduce) start();
    document.addEventListener('visibilitychange', function () {
      if (reduce) return;
      if (document.hidden) clearInterval(timer); else start();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
