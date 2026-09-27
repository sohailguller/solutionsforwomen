export interface Milestone {
  year: string;
  title: string;
  body: string[];
  photos: { key: string; alt: string; fit?: 'contain' }[];
}

// Wording from the previous About page. Duplicate paragraphs were merged.
export const history: Milestone[] = [
  {
    year: '2010',
    title: 'We started our own support groups',
    body: [
      'Solutions for Women began in 2010 as a network of 10+ justice impacted women, who sought additional therapeutic support via group and social interaction, after exiting various behavioral modification treatment and/or traditional 12-step recovery model programs.',
      'We started having support groups in our living rooms. As a way to pay it forward, we wanted to continue the collective work and reach out to our community of sisters, also impacted by systems, substance abuse disorders and/or mental health issues.',
      'A huge thank you to our predecessors, Juanita Johnson and the original women of PDEC, Positive Directions Equals Change, for paving a way for us.',
    ],
    photos: [
      { key: 'about/2010-founding-members', alt: 'Solutions for Women founding members' },
      { key: 'about/2010-02', alt: 'Founding members gathered outdoors' },
      { key: 'about/2010-03', alt: 'Founding members together at an early gathering' },
    ],
  },
  {
    year: '2011',
    title: 'Transitional home management',
    body: [
      "Co-Managed Nanny's Transitional House for Women, with Ms. Suritha Jackson. The 2 year housing program was located in Bayview Hunters Point.",
      'Solutions for Women then went on to operate our own three bedroom, 6-8 person, transitional house on Third Street in Bayview, SF.',
    ],
    photos: [
      { key: 'about/2011-01', alt: 'Women gathered at a community event in 2011' },
      { key: 'about/2011-02', alt: 'Two members holding program materials outside the transitional house' },
      { key: 'about/2011-third-street-house', alt: 'Members outside the Third Street transitional house in Bayview' },
      { key: 'about/2011-03', alt: 'Three members together' },
    ],
  },
  {
    year: '2012',
    title: 'Free community groups',
    body: [
      'Solutions began free community groups for women in the Bayview community at the Clean Lounge, a community space.',
      'Here we held, hosted and facilitated in-person groups, activities, workshops and guest speakers.',
    ],
    photos: [
      { key: 'about/2012-01', alt: 'Members in Women Supporting Women shirts at an outdoor gathering' },
      { key: 'about/2012-clean-lounge', alt: 'The Clean Lounge logo' },
      { key: 'about/2012-02', alt: 'A community group meeting at the Clean Lounge' },
    ],
  },
  {
    year: '2013',
    title: 'Bayview Commons',
    body: [
      'Solutions groups and activities relocated in late 2013 to a new space across the street from the Clean Lounge, to SFHDC’s Bayview Commons Community Room at 4445 Third Street, SF CA 94124.',
      'We contracted with the SF Adult Probation department to host events, in-person groups, activities, workshops and guest speakers.',
    ],
    photos: [
      { key: 'about/2013-01', alt: 'A workshop at the Bayview Commons Community Room' },
      { key: 'about/2013-vision-boards', alt: 'Members holding their vision boards' },
      { key: 'about/2013-04', alt: 'Women at a group session' },
      { key: 'about/2013-02', alt: 'Members and guests at a Bayview Commons event' },
      { key: 'about/2013-03', alt: 'A support group seated in a circle' },
      { key: 'about/2013-06', alt: 'A mother and children making crafts at a workshop' },
    ],
  },
  {
    year: '2014',
    title: 'First annual fundraiser',
    body: ['Hosted in Bayview, attendees included then supervisor Malia Cohen and community activist Marie Harrison.'],
    photos: [
      { key: 'about/2014-01', alt: 'Guests at the first annual fundraiser' },
      { key: 'about/2014-02', alt: 'A speaker at the podium during the fundraiser' },
      { key: 'about/2014-03', alt: 'Two attendees at the fundraiser' },
    ],
  },
  {
    year: '2020',
    title: "Bayview Women's Forum",
    body: ['In March 2020 we cohosted a women’s forum at the Bayview YMCA with law enforcement and the women’s reentry community.'],
    photos: [
      { key: 'about/2020-forum-crowd', alt: "A full room at the Bayview Women's Forum" },
      { key: 'about/2020-01', alt: 'Forum organizers and guests' },
      { key: 'about/2020-02', alt: 'Forum attendees' },
      { key: 'about/2020-04', alt: 'Attendees at the forum' },
    ],
  },
  {
    year: '2021',
    title: 'Heaven gained an angel',
    body: ['In December 2021 we lost one of our ladies, Jeris P. Woodson. May you continue to rest in peace.'],
    photos: [
      { key: 'about/2021-in-memory', alt: 'In loving memory of our beloved sister Jeris Woodson', fit: 'contain' },
      { key: 'about/2021-altar', alt: 'A memorial altar with photos of Jeris Woodson' },
    ],
  },
  {
    year: '2022',
    title: "Black Women's Wellness Retreat",
    body: ["In honor of Jeris P. Woodson, aka 'Peaches'. The J. P. Woodson Black Women in Leadership Wellness Retreat Weekend was held May 20th to 22nd, 2022 at Westerbeke Ranch in Sonoma."],
    photos: [
      { key: 'home/hero-retreat-2022', alt: 'Retreat participants in Black Women in Leadership shirts, seated on a lawn' },
      { key: 'about/2022-retreat-flyer', alt: 'Wellness Retreat Weekend 2022 presentation slide', fit: 'contain' },
    ],
  },
  {
    year: '2023',
    title: 'San Francisco Board of Supervisors Certificate of Honor',
    body: ['For our work with the women at Pier 94 in Bayview.'],
    photos: [
      { key: 'about/2023-certificate', alt: 'Certificate of Honor from the San Francisco Board of Supervisors' },
      { key: 'about/2023-honorees-02', alt: 'Members holding their Certificates of Honor' },
      { key: 'about/2023-honorees-01', alt: 'Two honorees at City Hall with their certificates' },
    ],
  },
  {
    year: '2023',
    title: 'Recovery Day Community Appreciation Award',
    body: ['For our work in the San Francisco Reentry Community.'],
    photos: [
      { key: 'about/2023-recovery-day-group', alt: 'Members at the Recovery Day table with the Appreciation Award' },
      { key: 'about/2023-appreciation-award', alt: 'Appreciation Award presented to Solutions for Women, August 18th, 2023' },
      { key: 'about/2023-recovery-day-01', alt: 'Members at Recovery Day' },
    ],
  },
];
