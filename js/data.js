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
      silhouette: 'SAKU-02.webp'
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
      silhouette: 'CHAE-02.webp'
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
      silhouette: 'YUNJIN-02.webp'
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
      silhouette: 'KAZUHA-02.webp'
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
      silhouette: 'EUNCHAE-02.webp'
    }
  ],

  // Discography. Releases and dates are public (Wikipedia).
  // type: Studio Album / EP / Single Album / Single.
  releases: [
    { year: '2022', month: 'May', title: 'Fearless', type: 'EP', note: 'Debut EP; lead single "Fearless"' },
    { year: '2022', month: 'Oct', title: 'Antifragile', type: 'EP', note: 'First release as five members' },
    { year: '2023', month: 'Jan', title: 'Fearless (JP)', type: 'Single', note: 'Japanese debut single' },
    { year: '2023', month: 'May', title: 'Unforgiven', type: 'Studio Album', note: 'First studio album; feat. Nile Rodgers' },
    { year: '2023', month: 'Aug', title: 'Unforgiven (JP)', type: 'Single', note: 'With "Jewelry"' },
    { year: '2023', month: 'Oct', title: 'Perfect Night', type: 'Single', note: 'First English single; with Overwatch 2' },
    { year: '2024', month: 'Feb', title: 'Easy', type: 'EP', note: 'Lead single "Easy"; later "Smart"' },
    { year: '2024', month: 'Aug', title: 'Crazy', type: 'EP', note: 'Lead single "Crazy"' },
    { year: '2024', month: 'Dec', title: 'Crazy (JP)', type: 'Single', note: 'With "Star Signs"' },
    { year: '2025', month: 'Mar', title: 'Hot', type: 'EP', note: 'Lead single "Hot"' },
    { year: '2025', month: 'Jun', title: 'Different (JP)', type: 'Single', note: 'With "Kawaii"' },
    { year: '2025', month: 'Oct', title: 'Spaghetti', type: 'Single Album', note: 'Lead single feat. J-Hope of BTS' },
    { year: '2026', month: 'May', title: 'Pureflow Pt. 1', type: 'Studio Album', note: 'Lead single "Celebration"; main track "Boompala"' },
    { year: '2026', month: 'Sep', title: 'Made My Night', type: 'Single Album', note: 'Lead single "Made My Night"' }
  ],

  // Era timeline. Each era carries a colour drawn from its own release art,
  // so the story reads as a spectrum, not a grey list.
  eras: [
    { id: 'fearless', year: '2022', title: 'Fearless', tone: '#4d8dff', bg: 'assets/eras/era-fearless.webp',
      blurb: 'The debut EP, released May 2, 2022, with lead single "Fearless". Eight days later the group took their first music show win, on SBS MTV\u2019s The Show.' },
    { id: 'antifragile', year: '2022', title: 'Antifragile', tone: '#9b7bff', bg: 'assets/eras/era-antifragile.webp',
      blurb: 'The first release as five members, in October 2022. It made them the fastest K-pop girl group to debut on the Billboard 200 at the time, at number 14, and their first million-selling release.' },
    { id: 'unforgiven', year: '2023', title: 'Unforgiven', tone: '#ffb35c', bg: 'assets/eras/era-unforgiven.webp',
      blurb: 'The first studio album, in May 2023, with a Nile Rodgers feature on the title track. It became their first number one on the Circle Album Chart, and they made their Japanese debut that January.' },
    { id: 'perfectnight', year: '2023', title: 'Perfect Night', tone: '#ff9ec4', bg: 'assets/eras/era-perfectnight.webp',
      blurb: 'Their first English single, in October 2023, made with Blizzard for Overwatch 2. It became their first number one on the Circle Digital Chart, holding the top spot for six weeks.' },
    { id: 'easy-crazy', year: '2024', title: 'Easy / Crazy', tone: '#6fe0d0', bg: 'assets/eras/era-easy-crazy.webp',
      blurb: 'Two EPs in 2024. "Easy" gave them their first Billboard Hot 100 entry and a Coachella debut; "Crazy" followed in August and won them a first MTV VMA, PUSH Performance of the Year.' },
    { id: 'hot', year: '2025', title: 'Hot', tone: '#ff7a8a', bg: 'assets/eras/era-hot.webp',
      blurb: 'The fifth EP, in March 2025, and the launch of the Easy Crazy Hot Tour, their first world tour. It grossed 34.1 million US dollars, one of the ten highest-grossing K-pop tours of 2025.' },
    { id: 'now', year: '2025-26', title: 'Now', tone: '#6fdca0', bg: 'assets/eras/era-now.webp',
      blurb: 'The single album "Spaghetti" in October 2025, then the second studio album "Pureflow Pt. 1" in May 2026 with lead single "Celebration", and a second world tour.' }
  ],

  // Documented milestones only, each with its date. Re-checked against public
  // sources; nothing here is a fan claim.
  achievements: [
    { year: '2022', date: 'May 10, 2022', title: 'First music show win', note: 'Eight days after debut, on SBS MTV\u2019s The Show.' },
    { year: '2022', date: 'Oct 2022', title: 'Fastest K-pop girl group on the Billboard 200', note: '"Antifragile" debuted at number 14, the fastest debut on the chart by a K-pop girl group at the time.' },
    { year: '2023', date: 'May 2023', title: 'First number one album', note: '"Unforgiven" topped the Circle Album Chart, their first number one album in Korea.' },
    { year: '2023', date: 'Oct 2023', title: 'First Circle Digital Chart number one', note: '"Perfect Night" held number one for six weeks.' },
    { year: '2024', date: 'Feb 2024', title: 'First Billboard Hot 100 entry', note: '"Easy" debuted at number 99, their first entry on the Hot 100.' },
    { year: '2024', date: 'Sep 2024', title: 'First MTV VMA', note: 'Won PUSH Performance of the Year for "Easy" and performed at the ceremony.' },
    { year: '2024', date: 'Nov 2024', title: 'First MTV EMA', note: 'Won Best Push at the MTV Europe Music Awards.' },
    { year: '2025', date: '2025', title: 'Highest-grossing tour', note: 'The Easy Crazy Hot Tour grossed 34.1 million US dollars, one of the ten highest-grossing K-pop tours of 2025.' }
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
