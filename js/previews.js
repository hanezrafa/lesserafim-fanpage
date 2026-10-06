/* =========================================================
   window.NJ_PREVIEWS - 30-second Apple iTunes previews
   Pulled from the public iTunes Search API (free, legal clips).
   main.js / audio.js match each release to a preview by
   normalised title, so a missing one simply shows as a
   non-playable row (for example "Spaghetti" and "Made My Night",
   which are not on iTunes at the time of writing).

   Rebuild with the iTunes Search API:
   https://itunes.apple.com/search?term=LE+SSERAFIM+<title>&entity=song&limit=1
   ========================================================= */

window.NJ_PREVIEWS = [
  {
    track: 'Fearless',
    album: 'FEARLESS - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/77/c9/7f/77c97fcc-e72d-13e9-2e41-d5c23ceb5e43/196922016622_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2e/e8/40/2ee84088-b80c-28bf-c277-9eaeaae0a8d5/mzaf_10950096593083239512.plus.aac.p.m4a'
  },
  {
    track: 'Antifragile',
    album: 'ANTIFRAGILE - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c8/79/da/c879dadf-db1e-95a5-caf5-b18c7c81d2b6/192641874413_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9c/5b/33/9c5b33cb-f6c0-1cf5-61c4-ac465bce2b7b/mzaf_16974808219393622487.plus.aac.p.m4a'
  },
  {
    track: 'Unforgiven',
    album: 'UNFORGIVEN',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/27/13/c3/2713c389-4f01-b5e7-59f5-3204b37cb594/196922444470_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fd/05/0c/fd050c13-7a38-55fd-3d97-ca5f976915b1/mzaf_9965317674295586639.plus.aac.p.m4a'
  },
  {
    track: 'Perfect Night',
    album: 'Perfect Night - Single',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a0/cd/40/a0cd4013-89cf-0554-0aa5-1ac5a0bb3db1/196922680779_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bc/f7/7f/bcf77f57-ea7e-e483-aa46-6cb919eee7e5/mzaf_16548890274351085831.plus.aac.p.m4a'
  },
  {
    track: 'Easy',
    album: 'EASY - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/22/0f/fd/220ffdbf-152c-5b65-d5af-01256c1328c2/196922796531_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/f6/98/19f6985f-4633-0de9-6529-22e9c84e31be/mzaf_2983769807683393748.plus.aac.p.m4a'
  },
  {
    track: 'Smart',
    album: 'EASY - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/22/0f/fd/220ffdbf-152c-5b65-d5af-01256c1328c2/196922796531_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/29/d4/d329d495-f621-3dc9-8330-456cc2879b0a/mzaf_2324066985438057196.plus.aac.p.m4a'
  },
  {
    track: 'Crazy',
    album: 'CRAZY - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/38/95/ed/3895ed80-ba5b-7846-ce5b-b49805a818ef/198704101359_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/46/0b/ae/460bae7f-536e-9df1-8aa4-ef1ed6d3b314/mzaf_17541894071969246196.plus.aac.p.m4a'
  },
  {
    track: 'Hot',
    album: 'HOT - EP',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cb/5d/2c/cb5d2c9e-74e1-a562-6c40-04479aa0afdf/198704375187_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/46/5e/d0465e7a-48c9-4863-71b4-dcf3732be2ed/mzaf_16343066430882034672.plus.aac.p.m4a'
  },
  {
    track: 'Different',
    album: 'DIFFERENT - Single',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a6/d9/39/a6d9396e-bc27-d1d8-afdd-269540ff46e2/25UMGIM74307.rgb.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a2/2c/68/a22c6833-c9bb-ac94-dad5-561d16107264/mzaf_7470468871923746252.plus.aac.p.m4a'
  },
  {
    track: 'Celebration',
    album: 'CELEBRATION - Single',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/54/4f/4a/544f4a6d-71e3-3527-7024-ff4d1b649b30/823375107163_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/31/51/1a31519f-acf9-567a-990d-51e289390cc5/mzaf_18066518294178149785.plus.aac.p.m4a'
  },
  {
    track: 'Boompala',
    album: 'PUREFLOW, Pt. 1',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/0c/98/b80c980c-52c6-a180-ff3e-2afaaab75fdd/823375107286_Cover.jpg/300x300bb.jpg',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/e9/67/81e96793-c88e-5be4-95f2-2c53ae1ef263/mzaf_11198696615091070328.plus.aac.p.m4a'
  }
];
