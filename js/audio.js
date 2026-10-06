/* =========================================================
   LE SSERAFIM fan page - looping discography
   Plays the official 30-second Apple iTunes previews of the
   group's tracks in a loop. The visitor's first interaction arms
   playback (browsers block sound before that). The header button
   starts and stops the loop, and the pane's Play button jumps to a
   specific track. Everything degrades quietly when the previews are
   unavailable (offline, blocked network).
   ========================================================= */

(function () {
  'use strict';

  var box = document.getElementById('nowplaying');
  if (!box) return;

  var artEl = document.getElementById('np-art');
  var trackEl = document.getElementById('np-track');
  var albumEl = document.getElementById('np-album');
  var labelEl = document.getElementById('np-label');
  var stopBtn = document.getElementById('np-stop');
  var toggle = document.getElementById('sound-toggle');
  var toggleIcon = toggle && toggle.querySelector('.sound-toggle__icon');
  var toggleLabel = toggle && toggle.querySelector('.sound-toggle__label');
  var heroPlay = document.getElementById('hero-play');

  var previews = (window.NJ_PREVIEWS || []);
  var audio = new Audio();
  audio.preload = 'none';

  // the loop runs over the previews that actually have a clip
  var queue = previews.filter(function (p) { return p.preview; });
  var pos = 0;
  var armed = false;      // has the visitor interacted yet
  var wantPlay = false;   // does the visitor want the loop running
  var blockedNotice = false;

  function find(track) {
    return previews.filter(function (p) { return p.track === track; })[0];
  }

  // keep any Play buttons in the page (the pane) in sync
  function setPlayingButton(trackName) {
    var btns = document.querySelectorAll('.pane__play, .release__play, .track__play');
    Array.prototype.forEach.call(btns, function (b) {
      var on = b.dataset.track === trackName;
      b.classList.toggle('is-playing', on);
      if (b.dataset.track) b.setAttribute('aria-pressed', String(on));
    });
  }

  function show(pv, playing) {
    if (artEl && pv.art) { artEl.src = pv.art; artEl.alt = 'Cover of ' + pv.album; }
    if (trackEl) trackEl.textContent = pv.track;
    if (albumEl) albumEl.textContent = pv.album;
    if (labelEl) labelEl.textContent = playing ? 'Now playing \u00b7 on repeat' : (wantPlay ? 'Loading\u2026' : 'Paused');
    box.classList.toggle('is-playing', !!playing);
  }

  function setToggle(on) {
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', String(on));
    if (toggleIcon) toggleIcon.textContent = on ? toggleIcon.getAttribute('data-off') : toggleIcon.getAttribute('data-on');
    if (toggleLabel) toggleLabel.textContent = on ? 'Pause' : 'Play';
    toggle.setAttribute('aria-label', on ? 'Pause the discography' : 'Play the discography');
  }

  function load(i) {
    var pv = queue[i];
    if (!pv) return null;
    audio.src = pv.preview;
    show(pv, false);
    setPlayingButton(pv.track);
    return pv;
  }

  function next(autoplay) {
    if (!queue.length) return;
    pos = (pos + 1) % queue.length;
    var pv = load(pos);
    if (pv && autoplay) play();
  }

  function play() {
    var pv = queue[pos];
    if (!pv) return;
    if (!audio.src) load(pos);
    var p = audio.play();
    if (p && p.then) {
      p.then(function () {
        blockedNotice = false;
        show(queue[pos], true);
        setToggle(true);
        var origin = toggle || box;
        var r = origin.getBoundingClientRect();
        document.dispatchEvent(new CustomEvent('lss:play', {
          detail: { x: r.left + r.width / 2, y: r.top + r.height / 2 }
        }));
      }).catch(function () {
        setToggle(false);
        box.classList.remove('is-playing');
        if (labelEl) labelEl.textContent = 'Ready';
        if (trackEl) trackEl.textContent = trackEl.textContent || 'Press play to start';
        if (!blockedNotice) {
          blockedNotice = true;
          var hint = document.querySelector('.archive__hint');
          if (hint) hint.textContent = 'The previews play in a loop. Press Play in the header to start (needs internet).';
        }
      });
    }
  }

  function stop() {
    wantPlay = false;
    audio.pause();
    box.classList.remove('is-playing');
    setToggle(false);
    setPlayingButton(null);
    if (labelEl) labelEl.textContent = 'Paused';
  }

  function startLoop(originEl) {
    wantPlay = true;
    if (!queue.length) {
      if (labelEl) labelEl.textContent = 'No previews available';
      return;
    }
    if (!audio.src) load(pos);
    play();
    if (originEl && originEl.getBoundingClientRect) {
      var r = originEl.getBoundingClientRect();
      document.dispatchEvent(new CustomEvent('lss:play', {
        detail: { x: r.left + r.width / 2, y: r.top + r.height / 2 }
      }));
    }
  }

  /* ---------- loop through the queue ---------- */
  audio.addEventListener('ended', function () {
    if (wantPlay) next(true);
  });
  audio.addEventListener('error', function () {
    if (wantPlay) setTimeout(function () { next(true); }, 300);
  });

  /* ---------- controls ---------- */
  if (stopBtn) stopBtn.addEventListener('click', stop);
  if (toggle) toggle.addEventListener('click', function () {
    armed = true;
    if (wantPlay) stop(); else startLoop(toggle);
  });
  if (heroPlay) heroPlay.addEventListener('click', function () {
    armed = true;
    startLoop(heroPlay);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && wantPlay) stop();
  });

  /* ---------- public hook: the pane's Play button and main.js ---------- */
  window.lssPlayTrack = function (trackName) {
    armed = true;
    var pv = find(trackName);
    if (!pv || !pv.preview) return;
    pos = queue.indexOf(pv);
    wantPlay = true;
    load(pos);
    play();
  };

  /* ---------- arm on the first interaction ---------- */
  function arm() {
    if (armed) return;
    armed = true;
    if (!queue.length) return;
    load(pos);
    if (labelEl) labelEl.textContent = 'Ready';
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, arm, { once: true, passive: true });
  });

  // ready state, before any interaction
  if (queue.length) {
    show(queue[0], false);
    if (labelEl) labelEl.textContent = 'Ready';
    setToggle(false);
  } else if (labelEl) {
    labelEl.textContent = 'No previews available';
  }
})();
