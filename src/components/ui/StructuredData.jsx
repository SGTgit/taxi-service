import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '../../config/business.js';

/**
 * LocalBusiness JSON-LD structured data for Google.
 * Add once — inside Layout or App — so it appears on every page.
 */
export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    url: BUSINESS.domain,
    telephone: BUSINESS.phone1,
    email: BUSINESS.email,
    foundingDate: BUSINESS.established,
    image: `${BUSINESS.domain}/assets/icons/notextlogo.webp`,
    logo: `${BUSINESS.domain}/assets/icons/notextlogo.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Banke Bihari Temple',
      addressLocality: 'Vrindavan',
      addressRegion: 'Uttar Pradesh',
      postalCode: '281121',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.5820,
      longitude: 77.6455,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      BUSINESS.instagram,
      BUSINESS.youtube,
    ],
    areaServed: [
      { '@type': 'City', name: 'Vrindavan' },
      { '@type': 'City', name: 'Mathura' },
      { '@type': 'City', name: 'Govardhan' },
      { '@type': 'City', name: 'Barsana' },
    ],
    serviceType: ['Pilgrimage Tours', 'Cab Service', 'Hotel Arrangements', 'Group Tours'],
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '5000',
      bestRating: '5',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
