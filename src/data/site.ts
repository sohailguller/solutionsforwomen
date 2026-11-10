// Organisation-wide details. Edit here and every page updates.

export const site = {
  name: 'Solutions for Women',
  tagline: 'Walking the road together',
  description:
    'Solutions for Women is a San Francisco nonprofit that supports and connects women to resources, encourages emotional wellness and promotes education so women aspire to become leaders in their community.',
  url: 'https://solutionsforwomen.net',
  ein: '45-5163133',
  founded: 2010,
  city: 'San Francisco, CA',

  email: 'info@solutionsforwomen.net',
  phone: '415-323-6893',
  director: {
    name: 'Shannon Wise',
    email: 'shannon@solutionsforwomen.net',
    phone: '415-572-2873',
  },

  // PayPal donate button link. Use a permanent `hosted_button_id` link, never a
  // `donate?token=` link: those are single checkout sessions and expire.
  donateUrl: 'https://www.paypal.com/donate/?hosted_button_id=FHBVDZDJLFXT4',

  // Where contact, newsletter and volunteer submissions are emailed (via FormSubmit.co).
  formsTo: 'info@solutionsforwomen.net',

  social: {
    facebook: 'https://www.facebook.com/SolutionsForWomen',
    linkedin: 'https://www.linkedin.com/company/solutions-for-women/',
  },

  supportGroup: {
    day: 'Tuesdays',
    time: '6:30 pm to 8:00 pm',
    where: 'on Zoom',
    zoomUrl: 'https://us02web.zoom.us/j/211052282?pwd=YnJuTGRKU08rNU1YZlIrODRmSFdUQT09',
    meetingId: '211 052 282',
    passcode: '711010',
    dialIn: '1-669-444-9171',
  },
} as const;

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export const tel = (n: string) => `tel:+1${n.replace(/\D/g, '')}`;
