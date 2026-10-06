# Design

<!-- impeccable:design-schema 1 -->

## World

**Anagram Interlude, under a rotating sky.** The hero opens with the words
**I'M FEARLESS** set huge across the viewport, then, on its own, the letters
slide and settle into **LE SSERAFIM**. The group's name is an anagram of the
phrase, so the hero is the group's own origin story as a typographic event, not a
decorative wordmark. Behind it a **rotating starfield** turns slowly like a real
night sky. Below the hero the page is quiet and editorial: uniform photo grids,
hairlines, mono captions.

Direction **#2 of 6** by resonance, chosen with the page owner (after the
"Seraphic Masthead" Swiss-grid cover, and ahead of the contact sheet, gatefold
sleeve, billboard and specimen options). Seed key **lssrfm-anagram**. It replaces
the earlier firmament/pinboard direction, which read too close to the source
template: a centred wordmark ringed by photos pinned at angles.

## Palette

Restrained: a deep night ground, ink-white type, one celestial accent (the
group's own official colour) and each member's own colour as their pin only.

| Role | Token | Value |
|------|-------|-------|
| Night | `--board` | `#080b16` |
| Night raised | `--board-2` / `-3` | `#101528` / `#1d2540` |
| Ink | `--ink` | `#eef2fb` |
| Ink secondary | `--ink-soft` | `#c2cade` |
| Ink faint | `--ink-faint` | `#8b95b2` |
| **Accent (Fearless Blue)** | `--fearless` / `--fearless-dk` | `#4d8dff` / `#7fb0ff` |
| Highlight (wing) | `--wing` | `#f5f7ff` |
| Star | `--star` | `#ffffff` |

The ground is a **deep blue-night** (`#080b16`), not pure black, so the starfield
has room to layer. Fearless Blue (`#4d8dff`) is the single accent, taken from the
group's official fandom colour; ink-white is the wing highlight. Member colours
(gem tones taken from the fan wiki: silver, pink, green, blue, red) appear only as
each member's pin and their card's glow, never as a page-wide palette.

## Typography

- **Oswald** (condensed) - the hero wordmark and section headings. The wordmark is
  set as one all-caps line, LETTERSPACED, each letter given its own small
  rise/rotation so it reads hand-set, straightening on hover.
- **Archivo** - body and UI (a grotesque with character; not the overused Inter).
- **Space Mono** - labels, facts, meta rows, numerals.

Condensed caps display keeps the type feeling like mission-patch and instrument
lettering, which suits a sky world. The scale is fluid for display (`clamp`) and
fixed for UI. Functional text never falls below 11px; body measure stays within
62ch.

## Material and components

- **The name (anagram lockup)** - the hero is two typed lines, `I'M FEARLESS` and
  `LE SSERAFIM`, lettered one glyph per span. Letters carry a shared identity
  (a letter that appears in both words keeps its place); the rest slide to their
  new positions. Not a centred wordmark: the line breathes across the width and
  the two spellings share the same box.
- **Starfield** - a canvas sky of hard points on two depth layers that **rotates**
  slowly around a point above the viewport, so the whole sky turns like the real
  thing. Brighter than before. No twinkle, no glow.
- **Member cell** - a clean editorial cell: a square photo, a hairline below it,
  a mono index and the name set flush left. No pin, no tilt, no border. Opens the
  member as a **pop-up card** on the same page (no navigation).
- **Profile modal** - the member enlarged: portrait, a mono fact table (position,
  birthday, from, MBTI and so on), a short bio, and their colour as a wash.
- **Track row** - a tracklist with a play control: year, type, title and note as
  hairline-ruled rows. A "Now playing" read-out shows the cover, the track and a
  small equaliser. The discography **loops on repeat**, armed on first
  interaction, with a header Play/Pause.
- **Era timeline** - a vertical spine carrying the group's eras as a sky gradient;
  each card wears its era's colour as a small square chip, never a side border.
- **Milestones record** - a mono-ruled table of documented firsts, each dated.

## Motion

**The name rearranges; the sky turns.** The motion comes from the group's own
etymology (the name *is* an anagram of the phrase) and from the seraphic sky.

- **Focal moment:** the **anagram lockup**. On load the hero sets `I'M FEARLESS`;
  after a beat the letters slide into `LE SSERAFIM`, then it alternates. It is the
  authored sequence this surface earned, it is specific to this group, and it
  cannot be copied by a generic template. Each letter is staggered from the centre
  outward, so the word reassembles like a run of dominoes.
- **One motion per section, replayed on every entry:** the page never repeats the
  same reveal twice. The hero rises in, the About paragraphs are uncovered by a
  mask, the member grid waves up, the track rows sweep in from the left, each era
  opens like a curtain with its dot popping and its text rising, and the milestones
  fade from the right while their years climb. Every section heading **types itself
  in** letter by letter, with one closing caret, and a hairline sweeps under it.
  Each motion **plays every time its element enters the viewport**: leaving the
  screen resets it to its start state, so scrolling up and back animates it again.
- **Rotating sky:** the starfield turns slowly around a pivot above the fold, so
  the background is alive without any element twinkling or blinking.
- **Custom cursor:** a small star-dot plus a trailing ring; on links the dot swells
  and the ring turns Fearless Blue. Pointer devices only.
- **Depth:** the hero contents parallax gently; a mono ticker runs between the hero
  and the board.
- **Member burst:** opening a profile card fires a burst of points in that member's
  colour, reusing the same particle code as the play-button burst.
- **Budget and control:** the starfield is a bounded canvas sized to the viewport,
  with a reduced count on narrow screens; it pauses when the tab is hidden.
  Under `prefers-reduced-motion` the anagram holds on one spelling, the starfield,
  cursor, ticker and all decorative motion are removed, and content stays visible.

## Banned (the tell list)

- No decorative gradients as ornament (only the two functional scrims over era
  photos and the modal backdrop).
- No glassmorphism, no frosted panels.
- No rounded cards (0 radius on cells, chips, rows).
- No emoji anywhere.
- No neon, no glow or bloom, no twinkling or sparkle stars. Stars are hard points
  that move; they do not blink.
- No em dash or en dash in visible copy.
- **No centred wordmark ringed by angled polaroid/pinboard photos.** That was the
  template look; it is an anti-reference now.

## Structure

**An archive with a rail and a pane, not a stack of sections.** After the hero,
the page is one **index** (a sticky rail of tabs: MEMBERS, DISCOGRAPHY, ERAS,
MILESTONES, each listing its items) beside a **detail pane** that changes in
place when an item is chosen. There is no "About / Members / Discography" scroll
stack; the whole archive lives in one screen you browse, and the URL records what
you are looking at (`#chaewon`, `#crazy`, `#unforgiven`) so it can be bookmarked
and the back button works.

This is the **dual-mode album-archive** structure, the recommended option from a
survey of real archives (referenced: the Radiohead Public Library's index+view,
MoMA and V&A collection browsers). It removes the template's signature shape, a
vertical run of centred sections, while keeping the two things a fan actually
wants: find a member, find a release.

On a phone the rail becomes a tab strip above a plain stacked detail, so nothing
depends on drag or horizontal scroll.

## Story

The fan understands instantly: the page says the group's name, then shows that the
name is "I'm fearless" rearranged; the index invites them to pick a member, a
release, an era or a milestone, and the pane fills with it while the music loops.

## First viewport

A turning night sky with `I'M FEARLESS` set huge across the width, resolving into
`LE SSERAFIM`, and a mono strip across the bottom (DEBUT 2022 · 5 MEMBERS · SOURCE
MUSIC · FEARNOT). Primary action: a Fearless Blue "PLAY THE MUSIC" control that
starts the looping discography.

## Form

Grounded direction **#2 of 6** (the anagram interlude), ordered by resonance after
the "Seraphic Masthead" Swiss-grid cover and ahead of the contact sheet, gatefold
sleeve, billboard and specimen options. Seed key **lssrfm-anagram** (assigned
index 2).

## Raises from declined challengers (kept disciplines)

- From the **"Seraphic Masthead"** challenger (declined as the hero carrier, but
  the closest runner-up): keep its *masthead discipline* - a thin rule at the top
  of the hero and a small mono line opposite it, so the page opens like a cover,
  not a shrine.
- From the **"Specimen Grid"** challenger (declined: a type-demo hero would read
  as a foundry page, not a fan page): keep its *index+mono caption* habit - every
  member cell carries a small numbered mono label flush left.

## Verification

- Horizontal overflow: none at 320 / 375 / 390 / 414 / 428 / 768 / 1440.
- Contrast: all text passes WCAG AA on the night ground.
- No console or network errors; `favicon` present.
- Headless render + vision pass confirm the hero text stays readable over the
  starfield and the anagram reads as words at both spellings.
