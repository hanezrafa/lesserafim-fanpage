# LE SSERAFIM · Fan Firmament

An unofficial, fan-made single-page site for the K-pop girl group **LE SSERAFIM**
(르세라핌). Built with the `kpop-fanpage` skill from a working template, reskinned
into a new visual world.

## What is on the page

The site is an **archive with a rail and a pane**, not a stack of sections: one
index of tabs (Members, Discography, Eras, Milestones) beside a detail pane that
changes in place. The URL records what you are looking at, so `#/chaewon` or
`#/era-hot` can be linked and the back button works.

- **Hero** — the anagram lockup: `I'M FEARLESS` and `LE SSERAFIM` alternate,
  letter by letter, over a rotating starfield. A thin masthead rule runs across
  the top, and a mono fact strip sits at the bottom.
- **01 About** — who the group is, in two sentences.
- **02 The Archive** — the rail lists the items for the active tab; picking one
  fills the pane. Members show a portrait, fact table and bio; Discography shows
  the release with a **play control**; Eras show the era photo and note;
  Milestones show the dated record. The 30-second iTunes previews **loop on
  repeat**, armed on the first interaction, with a Play/Pause in the header.

## Facts and sources

Every fact is public and traceable. Nothing is invented.

- Group, label, debut, releases, tours and milestones: English Wikipedia
  (Le Sserafim; Le Sserafim discography).
- Member detail (birthdays, positions, representative colours, MBTI): the
  kprofiles fan wiki. Heights and MBTI are self or fan-wiki reported and are
  labelled as such.
- Music: 30-second previews via the public Apple iTunes Search API.

The site states the settled public line only about the 2022 line-up change:
Kim Garam departed in July 2022. It says nothing about the contested claims
around it.

## Photos

Member and group photography is fan-sourced from the public wallpaper archive
**uhdpaper.com**, used as an unofficial fan page and credited in the footer.
Originals are kept on disk only; the repo ships **WebP** (1600 px, q82), which
brought ~164 MB of source images down to ~25 MB with no visible loss.

## Layout

```
index.html          the whole site (one page)
css/style.css       the design world: tokens, hero, archive rail + pane, starfield, motion
js/data.js          window.NJ: group, members, releases, eras, achievements (source of truth)
js/photos.json      the photo list: [{ file, cat }]
js/previews.js      window.NJ_PREVIEWS: 30s iTunes previews
js/main.js          builds the archive rail + pane, the hash router, and the anagram
js/audio.js         the looping discography
js/immersive.js     the starfield, cursor, parallax, bursts
tools/to_webp.py    the WebP pipeline
tools/vision.js     ask a vision model about an image
assets/photos/      WebP photos (portraits, silhouettes, board)
assets/eras/        WebP era backgrounds
favicon.svg/.png    a star mark (no official logo is used or redrawn)
```

## Run it

No build step. Open `index.html`, or serve it:

```
python -m http.server 8088
```

## Rebuild the photos

The downloader and contact sheets live in `_src/` (gitignored):

```
node _src/fetch.js          # pull the fan wallpapers from uhdpaper.com
python _src/categorize.py   # tag singles vs group shots from filenames
python _src/build_assets.py # crop portraits, build hero + era WebPs
python _src/build_assets.py board   # export the board photos + js/photos.json
```

Portrait and hero selection used `tools/vision.js` (a vision model picked the
best crops, and confirmed the crops kept the face in frame).

## Verify

`_verify/` holds the puppeteer checks (gitignored): horizontal overflow at seven
widths, every image loaded, no 404s, zero console errors, reduced-motion, and the
profile modal. Run `npm install --prefix _verify puppeteer-core@25` once, then:

```
node _verify/final.js
```

## Notice

Unofficial fan page. Not affiliated with LE SSERAFIM, Source Music or HYBE.
