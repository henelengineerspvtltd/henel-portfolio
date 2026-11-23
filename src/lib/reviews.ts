/**
 * Customer reviews shown on the home page, copied word for word from Henel
 * Engineers' two Google Business Profiles (copied 2026-11-23).
 *
 * Rules:
 * - Only real customer reviews, copied exactly. Do not edit, shorten or invent.
 * - First name and last initial only.
 * - Never add reviews by owners, directors or staff.
 * - Do not add Review / AggregateRating structured data: Google ignores
 *   self-published reviews of a LocalBusiness and treats them as spam.
 * - If Google removes a review from the profile, remove it here too.
 */

export type ReviewSource = 'lightning' | 'windmill';

export interface CustomerReview {
  name: string;
  text: string;
  /** Month and year the review was posted. */
  date: string;
  source: ReviewSource;
}

/** Google Maps listing for each profile. */
export const REVIEW_PROFILES: Record<ReviewSource, { label: string; button: string; href: string }> = {
  lightning: {
    label: 'Lightning protection & solar',
    button: 'Lightning & solar reviews',
    href: 'https://maps.app.goo.gl/2whf2eEDufEqSfZw9',
  },
  windmill: {
    label: 'Windmill services',
    button: 'Windmill reviews',
    href: 'https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8',
  },
};

export const customerReviews: CustomerReview[] = [
  {
    name: 'Prasannaraj S.',
    text: 'Outstanding work on our lightning arrester installation. Very professional team, neat finishing, and great peace of mind. Truly excellent service',
    date: 'Nov 2026',
    source: 'lightning',
  },
  {
    name: 'Raffin R.',
    text: 'Windmill service was very good and alse the gearbox work 👍🏻',
    date: 'Nov 2026',
    source: 'windmill',
  },
  {
    name: 'Rahul M.',
    text: 'Very good service! The solar panel installation went smoothly, and the team was friendly, professional, and helpful throughout. Really happy with their work. Highly recommended!',
    date: 'Nov 2026',
    source: 'lightning',
  },
  {
    name: 'Emila',
    text: 'great windmill maintenance service, everyone were so knowledgeable.Quality work',
    date: 'Aug 2026',
    source: 'windmill',
  },
  {
    name: 'Hashwin D.',
    text: 'I’ve previously installed a lightning arrester in house but it had few issues and we were not able to identify what those issues were… Henel engineers were able to come up with a proper solution.',
    date: 'Nov 2026',
    source: 'lightning',
  },
  {
    name: 'Subaram S.',
    text: 'Good service and availability of windmill spares gearbox generator blade reworks',
    date: 'Nov 2026',
    source: 'windmill',
  },
  {
    name: 'Faheem',
    text: 'Recently got their service for our lightning arrester and the service provided by them is very satisfied and a reasonable price.',
    date: 'Nov 2026',
    source: 'lightning',
  },
  {
    name: 'Pugazharasu S.',
    text: 'Excellent service and a great overall experience. The team was professional, friendly, and helpful throughout. They provided good support and completed the work satisfactorily',
    date: 'Nov 2026',
    source: 'windmill',
  },
  {
    name: 'Saran R.',
    text: 'I recently got a solar and lighting arrester through them it is really good and quality product',
    date: 'Nov 2026',
    source: 'lightning',
  },
  {
    name: 'Prithvi M.',
    text: 'Amazing products, great service, excellent pricing to the products',
    date: 'Nov 2026',
    source: 'windmill',
  },
  {
    name: 'Sermannganesh S.',
    text: 'Good quality and sturdy build. It gives confidence during thunderstorms and power surges.',
    date: 'Aug 2026',
    source: 'lightning',
  },
  {
    name: 'Vidhesh V.',
    text: 'Satisfied with the work.',
    date: 'Nov 2026',
    source: 'windmill',
  },
];
