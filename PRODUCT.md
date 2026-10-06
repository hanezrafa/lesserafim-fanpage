# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML + CSS + JavaScript, no framework and no build step.
Chosen because the brief is a fan-made single-page archive where the point is to
write the markup, styles and interaction directly and to ship it on GitHub Pages
with nothing to install.

## Users

Fans of the K-pop girl group LE SSERAFIM, and the person building this site. A
visitor arrives from a search, a link or curiosity about the group; they want to
look at the members, hear the music and follow the group's story from debut to
now. They are typically at a desk or on a phone in a dark room, browsing quietly,
with a fan's appetite for detail (birthdays, positions, eras) rather than news.

## Product Purpose

A one-page fan site for LE SSERAFIM: who they are, the five members, their
releases and the eras between them, plus a record of the group's documented
milestones. It exists to gather the group's public facts and its era story into
one calm, easy-to-wander page with playable music. Success means a fan scrolls it,
hears a track, opens a member, and trusts every fact on the page, and the builder
ships a real responsive site.

## Positioning

A fan-made archive, not the group's official site. Its character comes from the
group's own documented visual language (the name is an anagram of "I'm Fearless"
and a reference to the seraphim, six-winged heavenly beings; the official fandom
colour is Fearless Blue) rather than from news or commerce. It is explicitly
unofficial and says so.

## Operating Context

- Browsed on desktop first, then phone; opened from a link; no login, no app.
- Fully static: no backend, no build, no accounts, no tracking.
- Served locally for the build, then pushed to GitHub Pages; images live in
  `assets/photos/` as WebP and audio streams from the public Apple iTunes preview
  endpoints.

## Capabilities and Constraints

- Static single page: hero, intro, members (with pop-up profiles), a playable
  discography, an era timeline, and an achievements record.
- Member profiles open as a card on the same page; the visitor never leaves it.
- Music is 30-second Apple iTunes previews, streamed; no audio files are hosted.
- All facts about the group (names, label, debut, releases, milestones) must be
  true and sourced; nothing invented. No news, no rumours, and nothing about the
  2022 line-up change beyond the settled public fact that Kim Garam departed in
  July 2022.
- No fabricated prices, products, tickets or streaming or sales claims.

## Brand Commitments

The subject is **LE SSERAFIM** (르세라핌, stylized in all caps; Sakura, Kim
Chaewon, Huh Yunjin, Kazuha, Hong Eunchae), a South Korean girl group formed by
Source Music, a sub-label of Hybe; debut EP *Fearless*, May 2, 2022; fandom name
**FEARNOT**; official colour **Fearless Blue**. The site borrows the group's own
celestial and fearless imagery but is an unofficial fan page and must read as
such, not as the official site.

## Evidence on Hand

- Public, verifiable facts from Wikipedia (group, members, label, releases,
  tours, milestones) and a fan wiki (kprofiles) for member detail such as
  birthdays, positions and representative colours.
- Public Apple iTunes previews for the discography.
- Fan-sourced member photography kept in `assets/photos/` (WebP).
- Absent (must not be invented): official brand assets, press quotes, sales
  figures presented as our own, tour dates, prices. No official lightstick or
  logo artwork is held or redrawn.

## Product Principles

- The music and the members carry the page; chrome stays out of their way.
- Calm, never loud; the page should feel like the firmament it borrows, not a
  storefront.
- Everything on the page is true and traceable; a fan page owes its visitors
  honesty.
- Real, responsive craft over decoration.

## Accessibility and Inclusion

Readable in a dark room: strong contrast on a deep night ground, large legible
type, alt text on every photo naming the member, keyboard-reachable profiles and
music controls, a visible mute for the audio, and `prefers-reduced-motion`
respected (the firmament and every decorative layer still and disappear).
