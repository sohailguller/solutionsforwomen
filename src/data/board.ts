export interface BoardMember {
  slug: string;
  name: string;
  role: string;
  quote?: string;
  bio: string[];
}

// Bios carried over from the previous site. Only obvious typos were corrected.
export const board: BoardMember[] = [
  {
    slug: 'shannon-wise',
    name: 'Shannon Wise',
    role: 'Board President',
    bio: [
      "Driven, caring, and resilient, Shannon's knowledge and professionalism is supported by over 20 years of experience in the nonprofit social services sector. Having worked for agencies that serve justice impacted, low to moderate income earners looking for housing, families, and/or those that battle substance and mental health issues, coupled with her own background in recovery and deliverance, her focus has been to teach others the life skills necessary to survive and help them develop the self-esteem and emotional support needed to live strong, independent lives.",
      "A San Francisco native, she received her bachelor’s degree from San Francisco State University in Liberal Studies with an emphasis in Creative Arts and a master’s degree in Nonprofit Administration from the University of San Francisco. She and her peers went on to cofound a women's empowerment program, Solutions for Women.",
      'She currently works for the Felton Institute and serves as the Program Director. Ms. Wise is a CalMHSA (California Mental Health Services Act) certified peer support specialist, a licensed insurance agent and a HUD certified housing counselor.',
    ],
  },
  {
    slug: 'alisea-wesley-clark',
    name: 'Alisea Wesley-Clark',
    role: 'Board Treasurer',
    quote: 'If you believe then you can achieve.',
    bio: [
      'Alisea Wesley-Clark has worked in the Human Services field and her knowledge of business and professionalism is supported by over 20 years of experience acquired from the Corporate, federal government and nonprofit industries.',
      'She received her Bachelors in Sociology from National University. She currently serves as a Program Director and has managed housing programs for women and has always served the justice impacted and recovery populations.',
      'She also has 27 years of personal experience in which she “walks the walk she talks.” She is a co-founder of Solutions for Women, and is a mentor to several women. She also does service work for Cocaine Anonymous. She received the San Francisco Recovery Ambassador award in 2018, for her commitment to recovery and for working with others.',
      'In addition to being a member of the Professional Women’s Network, Ms. Clark is a Certified Woman’s Empowerment Coach and is also a co-author of ‘The Power of God, a Daily Devotional 2013’.',
      'Ms. Clark’s motto is “If you believe then you can achieve”.',
    ],
  },
  {
    slug: 'denise-lamb',
    name: 'Denise Lamb',
    role: 'Board Secretary',
    quote:
      'The best solution to a problem is to find someone who has walked that walk before and has gained the wisdom from their experience.',
    bio: [
      'Denise brings to Solutions for Women her dual experience in both the for-profit and nonprofit worlds.',
      'In her professional life, she is a certified paralegal and bookkeeper, working for a major law firm in San Francisco. In the nonprofit arena, she has years of experience serving on boards and volunteering her administrative and fundraising expertise, particularly in the area of grant writing and contract compliance.',
      'From her own experience of other women helping her through her walk of life, Denise truly believes in our motto “walking the road together”.',
    ],
  },
  {
    slug: 'deb-turner',
    name: 'Deb Turner',
    role: 'Board Member',
    quote:
      'In helping others, we shall help ourselves, for whatever good we give out completes the circle and comes back to us.',
    bio: [
      'With a heart of gold, “Deb” is the kind of woman driven to help everyone she sees in need. She has battled and recovered from many issues that life has cast her way, including personal loss and redemption. She has claimed a new life and has emerged stronger, wiser and happier.',
      'She brings years of social service experience to the Solutions for Women board of directors, specifically strengths of being a great case manager, group facilitation and mentoring experience.',
      'Deb completed her Drug and Alcohol certificate studies at City College of San Francisco and serves as a program manager with Westside Community Services and Positive Directions Equals Change.',
    ],
  },
  {
    slug: 'sharon-thrower',
    name: 'Sharon Thrower',
    role: 'Board Member',
    quote: 'Life is what you make it, always has been, always will be.',
    bio: [
      'Sharon brings to Solutions for Women a background in customer service and years of experience working with San Francisco’s vulnerable and unhoused populations.',
      'In addition to the work she does with the San Francisco Department of Public Health, she also mentors women in her personal and professional life. Assisting women who desire to move forward in their lives, is her passion.',
      '“You have to believe in people and show them you care and are behind them 1000%. In my own life, no one gave up on me, so I’m a living testament that not giving up on any woman works. There was always someone who believed in me, even when I didn’t believe in myself.”',
      'Sharon attended City College of San Francisco, finished her AA degree and a Community Health worker certificate.',
    ],
  },
  {
    slug: 'natra-williams',
    name: 'Natra Williams',
    role: 'Board Member',
    // The previous site only had template placeholder text here.
    bio: [],
  },
  {
    slug: 'denesha-bridges',
    name: 'Denesha Bridges',
    role: 'Board Member',
    bio: [
      'Denesha Bridges is a dedicated leader and advocate in the Bay Area and Sacramento regions, committed to addressing housing challenges and enhancing community well-being. She is the founder of Concrete Roses, a ministry of the Impact Church Bay Area where the organization promotes equitable housing access.',
      "Pursuing an Associate in Arts in Sociology from Los Rios College and an Associate in Arts in Teacher's Permit from Las Positas, Denesha is also a member of the Phi Theta Kappa Honor Society and consistently ranks in the top 10% of her class, earning the President's Highest Honor Award for Academic Achievement.",
      'Her professional background includes roles as a Trauma-Informed Case Manager, a Resident Manager at Bridge Housing, and project coordination.',
      'Denesha has volunteered for Solutions for Women since its inception and created and organized the first annual Fundraiser.',
    ],
  },
];

export const partners = [
  { name: 'Because Black Is Still Beautiful', logo: 'partners/bbisb', url: 'https://www.becauseblackisstillbeautiful.org/' },
  { name: 'Positive Directions Equals Change', logo: 'partners/positive-directions', url: 'https://www.positivedirectionsequalschange.org/' },
  { name: 'Stand in Peace International', logo: 'partners/stand-in-peace', url: 'https://www.standinpeaceinc.org/' },
  { name: 'Reentry Council of the City and County of San Francisco', logo: 'partners/sf-seal', url: 'https://www.sf.gov/departments/reentry-council-city-and-county-san-francisco' },
  { name: "San Francisco Sheriff's Office Women's Resource Center", logo: 'partners/sf-sheriff', url: 'https://www.sfsheriff.com/services/jail-services/getting-released-jail/womens-resource-center' },
];
