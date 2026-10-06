/* =========================================================
   FAN PAGE DATA - EDIT THIS FILE FIRST
   LE SSERAFIM (르세라핌), a South Korean girl group formed by
   Source Music, a sub-label of Hybe. Debut EP "Fearless",
   May 2, 2022. Fandom name: FEARNOT. Official colour: Fearless
   Blue. Every field is documented in reference/data-model.md.
   The home page and the member pop-up cards read only from this
   file, so change it and the site follows.

   Facts here are drawn from public sources (English Wikipedia
   for the group, releases and milestones; kprofiles for member
   detail such as birthdays, positions and colours). Nothing on
   this page is invented. Member heights and MBTI are self or
   fan-wiki reported and are labelled as such.

   Photos live in assets/photos/ (WebP). The portrait / silhouette
   filenames here must also be listed in `featured` below.
   ========================================================= */

var NJ = {
  group: {
    name: 'LE SSERAFIM',
    hangul: '르세라핌',
    label: 'Source Music (Hybe)',
    debut: 'May 2, 2022',
    debutSingle: 'Fearless',
    fandom: 'FEARNOT',
    tagline: 'I am fearless.',
    intro:
      'LE SSERAFIM is a five-member South Korean girl group formed by Source Music, a sub-label of Hybe. The name is an anagram of "I am fearless" and a reference to the seraphim, the six-winged heavenly beings. They debuted on May 2, 2022 with the EP "Fearless" and are known for a confident, fashion-forward image and a message of advancing without fear.'
  },

  // Members, in the order chosen for this page: Sakura, Chaewon, Yunjin,
  // Kazuha, Eunchae. (Wikipedia lists the same five; some pages lead with the
  // leader, Chaewon.)
  members: [
    {
      id: 'sakura',
      name: 'Sakura',
      full: 'Miyawaki Sakura',
      hangul: '사쿠라',
      role: 'Vocalist',
      status: 'Member',
      born: '1998',
      birthday: 'March 19, 1998',
      from: 'Kagoshima, Japan',
      tone: '#ff9ec4',            // representative colour: pink
      emoji: '',
      blurb: 'A decade-long idol and the group\u2019s eldest: from HKT48 to IZ*ONE to the first member of LE SSERAFIM.',
      bio: 'Miyawaki Sakura made her acting debut in 2011 and joined HKT48 that same year, graduating in June 2021. She placed second on Produce 48 and promoted with IZ*ONE until April 2021, then was revealed as the first member of LE SSERAFIM in April 2022.',
      facts: [
        ['Position', 'Vocalist, Rapper, Dancer'],
        ['Birthday', 'March 19, 1998'],
        ['From', 'Kagoshima, Japan'],
        ['Height', '163 cm'],
        ['MBTI', 'INTP'],
        ['Colour', 'Pink']
      ],
      photo: 'SAKU-01.webp',
      silhouette: 'SAKU-02.webp',
      gallery: ['SAKU-11.webp', 'SAKU-12.webp', 'SAKU-13.webp', 'SAKU-14.webp']
    },
    {
      id: 'chaewon',
      name: 'Chaewon',
      full: 'Kim Chaewon',
      hangul: '김채원',
      role: 'Leader',
      status: 'Member',
      born: '2000',
      birthday: 'August 1, 2000',
      from: 'Seoul, South Korea',
      tone: '#c9d2e0',            // representative colour: silver
      emoji: '',
      blurb: 'The group\u2019s leader, a former IZ*ONE member, and the steady voice that opens most LE SSERAFIM songs.',
      bio: 'Kim Chaewon was born in Seoul and trained at Woollim Entertainment before appearing on Produce 48, where she finished tenth and joined IZ*ONE until its disbandment in April 2021. She is the leader of LE SSERAFIM, and the daughter of the theatre actress Lee Ran Hee.',
      facts: [
        ['Position', 'Leader, Vocalist, Dancer'],
        ['Birthday', 'August 1, 2000'],
        ['From', 'Seoul, South Korea'],
        ['Height', '164 cm'],
        ['MBTI', 'ESTP'],
        ['Colour', 'Silver']
      ],
      photo: 'CHAE-01.webp',
      silhouette: 'CHAE-02.webp',
      gallery: ['CHAE-11.webp', 'CHAE-12.webp', 'CHAE-13.webp', 'CHAE-14.webp']
    },
    {
      id: 'yunjin',
      name: 'Yunjin',
      full: 'Huh Yunjin',
      hangul: '허윤진',
      role: 'Vocalist',
      status: 'Member',
      born: '2001',
      birthday: 'October 8, 2001',
      from: 'Seoul, South Korea',
      tone: '#6fdca0',            // representative colour: green
      emoji: '',
      blurb: 'Seoul-born, New York-raised, a trained opera singer, and the member who writes and composes for the group.',
      bio: 'Huh Yunjin was born in Seoul and grew up in New York. She trained at SM Entertainment, then represented Pledis Entertainment on Produce 48, where she was eliminated in episode 11 at rank 26. She debuted as LE SSERAFIM\u2019s sixth and final revealed member, and writes her own songs.',
      facts: [
        ['Position', 'Vocalist, Rapper'],
        ['Birthday', 'October 8, 2001'],
        ['From', 'Seoul; raised in New York, USA'],
        ['Height', '172.3 cm'],
        ['MBTI', 'ENFJ'],
        ['Colour', 'Green']
      ],
      photo: 'YUNJIN-01.webp',
      silhouette: 'YUNJIN-02.webp',
      gallery: ['YUNJIN-11.webp', 'YUNJIN-12.webp', 'YUNJIN-13.webp', 'YUNJIN-14.webp']
    },
    {
      id: 'kazuha',
      name: 'Kazuha',
      full: 'Nakamura Kazuha',
      hangul: '카즈하',
      role: 'Dancer',
      status: 'Member',
      born: '2003',
      birthday: 'August 9, 2003',
      from: 'Kochi, Japan',
      tone: '#6fb0ff',            // representative colour: blue
      emoji: '',
      blurb: 'A professional ballerina before she was an idol, scouted by Bang Si-hyuk, and called LE SSERAFIM\u2019s swan.',
      bio: 'Nakamura Kazuha was born in Kochi and grew up in Osaka. She trained as a professional ballerina, studying at the Dutch National Ballet Academy in Amsterdam and attending the Bolshoi Academy and the Royal Ballet School, before Bang Si-hyuk scouted her. She had the shortest training period of any member, about three months.',
      facts: [
        ['Position', 'Sub-vocalist, Rapper, Dancer'],
        ['Birthday', 'August 9, 2003'],
        ['From', 'Kochi, Japan'],
        ['Height', '169.9 cm'],
        ['MBTI', 'INFJ'],
        ['Colour', 'Blue']
      ],
      photo: 'KAZUHA-01.webp',
      silhouette: 'KAZUHA-02.webp',
      gallery: ['KAZUHA-11.webp', 'KAZUHA-12.webp', 'KAZUHA-13.webp', 'KAZUHA-14.webp']
    },
    {
      id: 'eunchae',
      name: 'Eunchae',
      full: 'Hong Eunchae',
      hangul: '홍은채',
      role: 'Maknae',
      status: 'Member',
      born: '2006',
      birthday: 'November 10, 2006',
      from: 'Seoul, South Korea',
      tone: '#ff7a8a',            // representative colour: red
      emoji: '',
      blurb: 'The youngest member, a Music Bank host, and the group\u2019s lead dancer.',
      bio: 'Hong Eunchae was born in Seoul and studied at Def Dance School. She auditioned for JYP and Pledis before joining Source Music in 2021, and was revealed as the third member of LE SSERAFIM. Since February 2023 she has co-hosted KBS2\u2019s Music Bank.',
      facts: [
        ['Position', 'Vocalist, Lead Dancer, Maknae'],
        ['Birthday', 'November 10, 2006'],
        ['From', 'Seoul, South Korea'],
        ['Height', '169 cm'],
        ['MBTI', 'ISTJ'],
        ['Colour', 'Red']
      ],
      photo: 'EUNCHAE-01.webp',
      silhouette: 'EUNCHAE-02.webp',
      gallery: ['EUNCHAE-11.webp', 'EUNCHAE-12.webp', 'EUNCHAE-13.webp', 'EUNCHAE-14.webp']
    }
  ],

  // Discography. Every date, tracklist, chart peak and sale figure is public
  // and sourced (English Wikipedia: the group page, the discography page, and
  // each release page). Nothing here is invented; where a figure is wiki-only
  // it is left out. type: Studio Album / EP / Single Album / Single.
  // tags: short flags shown as chips (MV, Collab, Japanese, English).
  releases: [
    {
      year: '2022', month: 'May', date: 'May 2, 2022', title: 'Fearless', type: 'EP',
      note: 'Debut EP; lead single "Fearless"',
      tags: ['Debut', 'MV'],
      lead: 'Fearless',
      tracks: ['The World Is My Oyster', 'Fearless', 'Blue Flame', 'The Great Mermaid', 'Sour Grapes'],
      chart: [['Circle Album', '2'], ['Oricon Albums', '3'], ['Billboard Japan', '1']],
      sales: 'KMCA 2x Platinum \u00b7 570,995 in Korea',
      extra: 'Sold over 175,000 on release day, then a record for a girl group debut album.'
    },
    {
      year: '2022', month: 'Oct', date: 'October 17, 2022', title: 'Antifragile', type: 'EP',
      note: 'First release as five members',
      tags: ['MV', 'Million seller'],
      lead: 'Antifragile',
      tracks: ['The Hydra', 'Antifragile', 'Impurities', 'No Celestial', 'Good Parts (When the Quality Is Bad but I Am)'],
      chart: [['Circle Album', '2'], ['Billboard 200', '14'], ['Oricon Albums', '1']],
      sales: 'KMCA Million \u00b7 1,233,769 in Korea',
      extra: 'Their first million-selling release, and the fastest Billboard 200 debut by a K-pop girl group at the time.'
    },
    {
      year: '2023', month: 'Jan', date: 'January 25, 2023', title: 'Fearless (JP)', type: 'Single',
      note: 'Japanese debut single',
      tags: ['Japanese', 'MV'],
      lead: 'Fearless (Japanese ver.)',
      tracks: ['Fearless (Japanese ver.)', 'Blue Flame (Japanese ver.)', 'Choices'],
      chart: [['Oricon Singles', '1'], ['Billboard Japan', '1']],
      sales: 'RIAJ 2x Platinum \u00b7 277,391 in Japan',
      extra: '"Choices" was written for the Japanese drama 3000 Yen.'
    },
    {
      year: '2023', month: 'May', date: 'May 1, 2023', title: 'Unforgiven', type: 'Studio Album',
      note: 'First studio album; feat. Nile Rodgers',
      tags: ['Collab', 'MV', 'Million seller'],
      lead: 'Unforgiven (feat. Nile Rodgers)',
      tracks: ['The World Is My Oyster (2023 ver.)', 'Fearless (2023 ver.)', 'Blue Flame (2023 ver.)', 'The Hydra', 'Antifragile', 'Impurities', 'Burn the Bridge', 'Unforgiven (feat. Nile Rodgers)', 'No-Return (Into the Unknown)', 'Eve, Psyche & the Bluebeard\u2019s Wife', 'Fearnot (Between You, Me and the Lamppost)', 'Flash Forward', 'Fire in the Belly'],
      chart: [['Circle Album', '1'], ['Billboard 200', '6'], ['Oricon Albums', '1']],
      sales: 'KMCA Million \u00b7 1,571,548 in Korea',
      extra: 'Their first number one album in Korea and first top-ten album on the Billboard 200.'
    },
    {
      year: '2023', month: 'Aug', date: 'August 23, 2023', title: 'Unforgiven (JP)', type: 'Single',
      note: 'With "Jewelry"; feat. Nile Rodgers and Ado',
      tags: ['Japanese', 'Collab'],
      lead: 'Unforgiven (Japanese ver.)',
      tracks: ['Unforgiven (Japanese ver., feat. Nile Rodgers & Ado)', 'Jewelry'],
      chart: [['Oricon Singles', '2']],
      sales: 'RIAJ Platinum',
      extra: ''
    },
    {
      year: '2023', month: 'Oct', date: 'October 27, 2023', title: 'Perfect Night', type: 'Single',
      note: 'First English single; with Overwatch 2',
      tags: ['English', 'Collab', 'MV'],
      lead: 'Perfect Night',
      tracks: ['Perfect Night'],
      chart: [['Circle Digital', '1'], ['Billboard Japan', '7'], ['Global 200', '18']],
      sales: 'KMCA Platinum \u00b7 RIAJ 2x Platinum (streaming)',
      extra: 'Their first number one on the Circle Digital Chart, and it held the top spot for six weeks.'
    },
    {
      year: '2024', month: 'Feb', date: 'February 19, 2024', title: 'Easy', type: 'EP',
      note: 'Lead single "Easy"; later "Smart"',
      tags: ['MV', 'Million seller'],
      lead: 'Easy',
      tracks: ['Good Bones', 'Easy', 'Swan Song', 'Smart', 'We Got So Much'],
      chart: [['Circle Album', '1'], ['Billboard 200', '8'], ['Billboard Hot 100', '99']],
      sales: 'KMCA Million \u00b7 1,185,248 in Korea',
      extra: '"Easy" gave them their first entry on the Billboard Hot 100.'
    },
    {
      year: '2024', month: 'Aug', date: 'August 30, 2024', title: 'Crazy', type: 'EP',
      note: 'Lead single "Crazy"; remixes with PinkPantheress and David Guetta',
      tags: ['Collab', 'MV'],
      lead: 'Crazy',
      tracks: ['Chasing Lightning', 'Crazy', 'Pierrot', '1-800-Hot-N-Fun', 'Crazier'],
      chart: [['Circle Album', '2'], ['Billboard 200', '7'], ['Billboard Hot 100', '76']],
      sales: 'KMCA 3x Platinum \u00b7 825,191 in Korea',
      extra: 'Remixes followed with PinkPantheress and David Guetta.'
    },
    {
      year: '2024', month: 'Dec', date: 'December 11, 2024', title: 'Crazy (JP)', type: 'Single',
      note: 'With "Star Signs"',
      tags: ['Japanese'],
      lead: 'Crazy (Japanese ver.)',
      tracks: ['Crazy (Japanese ver.)', 'Easy (Japanese ver.)', 'Star Signs'],
      chart: [['Oricon Singles', '2']],
      sales: 'RIAJ Gold \u00b7 150,605 in Japan',
      extra: 'The Japanese single also carried "Star Signs".'
    },
    {
      year: '2025', month: 'Mar', date: 'March 14, 2025', title: 'Hot', type: 'EP',
      note: 'Lead single "Hot"; launched the first world tour',
      tags: ['MV'],
      lead: 'Hot',
      tracks: ['Born Fire', 'Hot', 'Come Over', 'Ash', 'So Cynical (Badum)'],
      chart: [['Circle Album', '1'], ['Billboard 200', '9']],
      sales: 'KMCA 2x Platinum \u00b7 735,492 in Korea',
      extra: 'It opened the Easy Crazy Hot Tour, their first world tour.'
    },
    {
      year: '2025', month: 'Jun', date: 'June 9, 2025', title: 'Different (JP)', type: 'Single',
      note: 'With "Kawaii"',
      tags: ['Japanese'],
      lead: 'Different',
      tracks: ['Different', 'Hot (Japanese ver.)', 'Kawaii'],
      chart: [['Oricon Singles', '2'], ['Billboard Japan', '2']],
      sales: 'RIAJ Gold \u00b7 157,152 in Japan',
      extra: 'The physical single followed on June 24, 2025.'
    },
    {
      year: '2025', month: 'Oct', date: 'October 24, 2025', title: 'Spaghetti', type: 'Single Album',
      note: 'Lead single feat. J-Hope of BTS',
      tags: ['Collab', 'MV'],
      lead: 'Spaghetti (feat. J-Hope)',
      tracks: ['Spaghetti (feat. J-Hope)', 'Pearlies (My Oyster Is the World)'],
      chart: [['Circle Digital', '5'], ['Billboard Hot 100', '50'], ['Global 200', '6']],
      sales: 'KMCA 2x Platinum \u00b7 627,899 in Korea',
      extra: 'J-Hope of BTS features on the lead single.'
    },
    {
      year: '2026', month: 'May', date: 'May 22, 2026', title: 'Pureflow Pt. 1', type: 'Studio Album',
      note: 'Lead single "Celebration"; main track "Boompala"',
      tags: ['Collab', 'MV'],
      lead: 'Celebration',
      tracks: ['Pureflow', 'Boompala', 'Celebration', 'Creatures', 'Iffy Iffy', 'Need Your Company', 'Sonder', 'Saki (feat. Aliyah\u2019s Interlude)', 'Irony', 'Trust Exercise', 'Liminal Space'],
      chart: [['Circle Album', '1'], ['Billboard 200', '10'], ['Oricon Albums', '2']],
      sales: 'KMCA Platinum \u00b7 679,669 in Korea',
      extra: 'Their second studio album, and a fifth top-ten album on the Billboard 200.'
    },
    {
      year: '2026', month: 'Sep', date: 'September 11, 2026', title: 'Made My Night', type: 'Single Album',
      note: 'Lead single "Made My Night"; English, with Overwatch',
      tags: ['English', 'Collab', 'MV'],
      lead: 'Made My Night',
      tracks: ['Made My Night', 'AEIOU'],
      chart: [['Circle Album', '3'], ['Billboard Japan', '24']],
      sales: '',
      extra: 'A second English collaboration with Overwatch.'
    }
  ],

  // Era timeline. Each era carries a colour drawn from its own release art,
  // so the story reads as a spectrum, not a grey list.
  eras: [
    { id: 'fearless', year: '2022', title: 'Fearless', tone: '#4d8dff', bg: 'assets/eras/era-fearless.webp', gallery: ['assets/eras/era-fearless-1.webp', 'assets/eras/era-fearless-2.webp', 'assets/eras/era-fearless-3.webp', 'assets/eras/era-fearless-4.webp'],
      blurb: 'The debut EP, released May 2, 2022, with lead single "Fearless". Eight days later the group took their first music show win, on SBS MTV\u2019s The Show.' },
    { id: 'antifragile', year: '2022', title: 'Antifragile', tone: '#9b7bff', bg: 'assets/eras/era-antifragile.webp', gallery: ['assets/eras/era-antifragile-1.webp', 'assets/eras/era-antifragile-2.webp', 'assets/eras/era-antifragile-3.webp', 'assets/eras/era-antifragile-4.webp'],
      blurb: 'The first release as five members, in October 2022. It made them the fastest K-pop girl group to debut on the Billboard 200 at the time, at number 14, and their first million-selling release.' },
    { id: 'unforgiven', year: '2023', title: 'Unforgiven', tone: '#ffb35c', bg: 'assets/eras/era-unforgiven.webp', gallery: ['assets/eras/era-unforgiven-1.webp', 'assets/eras/era-unforgiven-2.webp', 'assets/eras/era-unforgiven-3.webp', 'assets/eras/era-unforgiven-4.webp'],
      blurb: 'The first studio album, in May 2023, with a Nile Rodgers feature on the title track. It became their first number one on the Circle Album Chart, and they made their Japanese debut that January.' },
    { id: 'perfectnight', year: '2023', title: 'Perfect Night', tone: '#ff9ec4', bg: 'assets/eras/era-perfectnight.webp', gallery: ['assets/eras/era-perfectnight-1.webp', 'assets/eras/era-perfectnight-2.webp', 'assets/eras/era-perfectnight-3.webp', 'assets/eras/era-perfectnight-4.webp'],
      blurb: 'Their first English single, in October 2023, made with Blizzard for Overwatch 2. It became their first number one on the Circle Digital Chart, holding the top spot for six weeks.' },
    { id: 'easy-crazy', year: '2024', title: 'Easy / Crazy', tone: '#6fe0d0', bg: 'assets/eras/era-easy-crazy.webp', gallery: ['assets/eras/era-easy-crazy-1.webp', 'assets/eras/era-easy-crazy-2.webp', 'assets/eras/era-easy-crazy-3.webp', 'assets/eras/era-easy-crazy-4.webp'],
      blurb: 'Two EPs in 2024. "Easy" gave them their first Billboard Hot 100 entry and a Coachella debut; "Crazy" followed in August and won them a first MTV VMA, PUSH Performance of the Year.' },
    { id: 'hot', year: '2025', title: 'Hot', tone: '#ff7a8a', bg: 'assets/eras/era-hot.webp', gallery: ['assets/eras/era-hot-1.webp', 'assets/eras/era-hot-2.webp', 'assets/eras/era-hot-3.webp', 'assets/eras/era-hot-4.webp'],
      blurb: 'The fifth EP, in March 2025, and the launch of the Easy Crazy Hot Tour, their first world tour. It grossed 34.1 million US dollars, one of the ten highest-grossing K-pop tours of 2025.' },
    { id: 'now', year: '2025-26', title: 'Now', tone: '#6fdca0', bg: 'assets/eras/era-now.webp', gallery: ['assets/eras/era-now-1.webp', 'assets/eras/era-now-2.webp', 'assets/eras/era-now-3.webp', 'assets/eras/era-now-4.webp'],
      blurb: 'The single album "Spaghetti" in October 2025, then the second studio album "Pureflow Pt. 1" in May 2026 with lead single "Celebration", and a second world tour.' }
  ],

  // Milestones, grouped. Each entry is public and dated, and re-checked against
  // English Wikipedia (the group page, the awards list, and each release page).
  // The award tally is Wikipedia's own count; other pages round it differently.
  // group: 'first' (documented firsts) / 'award' / 'record'.
  stats: [
    ['41', 'award wins', 'Per Wikipedia\u2019s tally'],
    ['148', 'nominations', 'Across all award shows'],
    ['3', 'million sellers', 'Antifragile, Unforgiven, Easy'],
    ['3', 'world tours', '2023 to now']
  ],

  achievements: [
    { year: '2022', date: 'May 10, 2022', title: 'First music show win', tone: '#4d8dff', group: 'first',
      note: 'Eight days after debut, on SBS MTV\u2019s The Show.' },
    { year: '2022', date: 'October 2022', title: 'Fastest K-pop girl group on the Billboard 200', tone: '#9b7bff', group: 'record',
      note: '"Antifragile" debuted at number 14, the fastest debut on the chart by a K-pop girl group at the time.' },
    { year: '2022', date: 'November 29, 2022', title: 'First MAMA award', tone: '#9b7bff', group: 'award',
      note: 'Favorite New Artist at the Mnet Asian Music Awards.' },
    { year: '2022', date: 'December 2022', title: 'First Melon Music Awards', tone: '#9b7bff', group: 'award',
      note: 'Best Performance (Female) and Hot Trend.' },
    { year: '2023', date: 'May 2023', title: 'First number one album', tone: '#ffb35c', group: 'first',
      note: '"Unforgiven" topped the Circle Album Chart, their first number one album in Korea.' },
    { year: '2023', date: 'October 2023', title: 'First Circle Digital Chart number one', tone: '#ff9ec4', group: 'first',
      note: '"Perfect Night" held number one for six weeks.' },
    { year: '2024', date: 'February 2024', title: 'First Billboard Hot 100 entry', tone: '#6fe0d0', group: 'first',
      note: '"Easy" debuted at number 99, their first entry on the Hot 100.' },
    { year: '2024', date: 'April 2024', title: 'Coachella debut', tone: '#6fe0d0', group: 'first',
      note: 'Performed at Coachella with Nile Rodgers, and debuted a new song, "1-800-Hot-N-Fun".' },
    { year: '2024', date: 'September 11, 2024', title: 'First MTV VMA', tone: '#6fe0d0', group: 'award',
      note: 'Won Push Performance of the Year for "Easy" and performed at the ceremony.' },
    { year: '2024', date: 'November 10, 2024', title: 'First MTV EMA', tone: '#6fe0d0', group: 'award',
      note: 'Won Best Push at the MTV Europe Music Awards.' },
    { year: '2024', date: 'December 2024', title: 'Performance of the Year', tone: '#6fe0d0', group: 'award',
      note: 'A Daesang (grand prize) at the Asia Artist Awards, with Best Artist and Best Music Video.' },
    { year: '2025', date: '2025', title: 'Highest-grossing tour', tone: '#ff7a8a', group: 'record',
      note: 'The Easy Crazy Hot Tour grossed 34.1 million US dollars, one of the ten highest-grossing K-pop tours of 2025.' },
    { year: '2025', date: '2025', title: 'Third million-selling release', tone: '#ff7a8a', group: 'record',
      note: 'Antifragile, Unforgiven and Easy have each passed a million copies in Korea.' },
    { year: '2026', date: '2026', title: 'A second world tour', tone: '#6fdca0', group: 'record',
      note: 'The Pureflow Tour followed, with the group\u2019s first solo shows in Europe.' }
  ],

  // Tours. Show counts and gross come from English Wikipedia\u2019s tour pages.
  tours: [
    { year: '2023', name: 'Flame Rises Tour', shows: '11 shows', gross: '$7.9M', note: 'Six cities across Asia, August to October 2023.' },
    { year: '2025', name: 'Easy Crazy Hot Tour', shows: '31 shows', gross: '$34.1M', note: 'Their first world tour, Asia and North America, 2025 into 2026.' },
    { year: '2026', name: 'Pureflow Tour', shows: '36 shows', gross: '', note: 'Asia, North America and their first solo shows in Europe.' }
  ],

  // Photos already used somewhere prominent (member cards + profile cards).
  // Kept in sync with the portraits and silhouettes above.
  featured: [
    'CHAE-01.webp', 'SAKU-01.webp', 'YUNJIN-01.webp', 'KAZUHA-01.webp', 'EUNCHAE-01.webp',
    'CHAE-02.webp', 'SAKU-02.webp', 'YUNJIN-02.webp', 'KAZUHA-02.webp', 'EUNCHAE-02.webp'
  ]
};


/* expose for the home page and the profile cards */
window.NJ = NJ;
