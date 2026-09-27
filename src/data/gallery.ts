export interface Album {
  id: string;
  title: string;
  folder?: string;
  keys?: string[];
}

export const albums: Album[] = [
  { id: 'retreat-2025', title: 'Black Women in Leadership Retreat 2025', folder: 'gallery/retreat-2025' },
  { id: 'womens-day', title: "Women's Day Event", folder: 'gallery/womens-day' },
  { id: 'christmas-brunch-2024', title: 'Christmas Brunch 2024', folder: 'gallery/christmas-brunch-2024' },
  { id: 'fleet-week-2024', title: 'Fleet Week 2024', folder: 'gallery/fleet-week-2024' },
  { id: 'equality-day-2024', title: "Women's Equality Day 2024", folder: 'gallery/equality-day-2024' },
  {
    id: 'through-the-years',
    title: 'Through the years',
    // Photos from the previous site that are not shown in an album or elsewhere on this site.
    keys: [
      'about/collage-01',
      'about/collage-02',
      'about/collage-03',
      'about/2013-03',
      'about/2013-05',
      'about/2013-06',
      'about/2020-03',
      'about/2020-05',
      'about/anniversary-cake',
      'about/misc-01',
      'about/misc-shan-and-shervon',
      'support/collage',
      'who/01',
      'who/03',
      'who/04',
      'who/05',
      'who/07',
      'footer/01',
      'footer/02',
      'footer/03',
      'footer/mayor',
      'home/photo-05',
      'home/slide-01',
      'home/slide-02',
      'home/slide-03',
      'home/slide-04',
      'home/slide-forum-crowd',
      'home/slide-honorees',
      'home/slide-paint-night',
      'home/slide-vision-boards',
      'misc/01',
      'misc/02',
      'misc/03',
      'misc/04',
      'misc/05',
      'misc/06',
      'misc/07',
      'misc/08',
      'misc/09',
      'brand/logo-bag',
    ],
  },
];
