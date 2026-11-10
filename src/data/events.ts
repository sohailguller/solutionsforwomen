export interface EventItem {
  slug: string;
  title: string;
  start: string; // ISO, Pacific time
  end: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
  volunteer: boolean;
  /** For events run by a partner organisation. */
  host?: string;
  /** External registration page, shown as the main button. */
  registerUrl?: string;
}

export const events: EventItem[] = [
  {
    slug: 'diabetes-walk-2026',
    title: '3rd Annual Diabetes Walk 3K & Health Fair',
    start: '2026-11-28T09:00:00-08:00',
    end: '2026-11-28T14:00:00-08:00',
    dateLabel: 'Saturday, November 28, 2026',
    timeLabel: '9:00 am to 2:00 pm',
    location: 'Lakeside Park Garden Center, 666 Bellevue Ave, Oakland, CA',
    summary: 'A 3K walk and health fair supporting diabetes awareness and healthy living, hosted by the Carl Bolds Foundation.',
    details: [
      '9:00 am: Registration at the Lakeside Park Garden Center.',
      '10:00 am: 3K Walk, starting at the Bandstand across from the Garden.',
      '10:30 am to 2:00 pm: Health Fair in the Garden Center’s Vista Room.',
      '12:00 pm to 2:00 pm: Ceremony and awards at the Garden Center.',
      'Registration and information are on Eventbrite.',
    ],
    image: 'events/diabetes-walk-2026-flyer',
    imageAlt:
      'Carl Bolds Foundation 3rd Annual Diabetes Walk 3K and Health Fair, Saturday, November 28, 9 am to 2 pm, Lakeside Park Garden Center, 666 Bellevue Ave, Oakland.',
    volunteer: false,
    host: 'Carl Bolds Foundation',
    registerUrl: 'https://www.eventbrite.com/e/carl-bolds-diabetes-walk-health-fair-tickets-2004494459889',
  },
  {
    slug: 'fleet-week-2026',
    title: 'Fleet Week 2026',
    start: '2026-10-09T09:00:00-07:00',
    end: '2026-10-11T17:00:00-07:00',
    dateLabel: 'Friday, October 9 to Sunday, October 11, 2026',
    timeLabel: '9:00 am to 5:00 pm',
    location: "Two locations at Fisherman's Wharf, San Francisco",
    summary: 'Come and enjoy Fleet Week while volunteering with Solutions for Women! We need volunteers.',
    details: [
      'Volunteer shifts are four hours long, 9:00 am to 1:00 pm or 12:30 pm to 5:00 pm, Friday, Saturday and Sunday, with a free lunch every day.',
      'You can also apply to be a shift lead. Shift lead is an all-day position, and a stipend is included for shift leaders.',
      'For more information, contact Shannon Wise.',
    ],
    image: 'events/fleet-week-2026-flyer',
    imageAlt:
      "A Solutions for Women event: Fleet Week 2026. We need volunteers. Four-hour volunteer shifts at Fisherman's Wharf, free lunch every day.",
    volunteer: true,
  },
];

const now = new Date();
export const upcoming = events
  .filter((e) => new Date(e.end) >= now)
  .sort((a, b) => a.start.localeCompare(b.start));
export const past = events.filter((e) => new Date(e.end) < now);
