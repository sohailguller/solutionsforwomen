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
}

export const events: EventItem[] = [
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
export const upcoming = events.filter((e) => new Date(e.end) >= now);
export const past = events.filter((e) => new Date(e.end) < now);
