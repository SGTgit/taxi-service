import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '../../config/business.js';

/**
 * SEO component — drop into any page to set dynamic meta tags.
 *
 * Usage:
 *   <SEO
 *     title="Page Title"
 *     description="Page description"
 *     path="/page-slug"           // optional, for canonical URL
 *     image="/assets/og-img.webp"  // optional, for OG image
 *   />
 */
export default function SEO({ title, description, path = '', image = '/assets/vechiles/hero-car-temple.webp', noIndex = false, faq = null, services = null, offers = null }) {
  const fullTitle  = title ? `${title} | ${BUSINESS.name}` : `${BUSINESS.name} | ${BUSINESS.tagline}`;
  const canonical  = `${BUSINESS.domain}${path}`;
  const ogImage    = image && image.startsWith('http') ? image : `${BUSINESS.domain}${image}`;

  // Keywords — focused on taxi/transfer keywords and city
  const keywords = [
    'Vrindavan taxi',
    'Vrindavan cab booking',
    'Vrindavan tour packages',
    'taxi service Vrindavan',
    'temple tour Mathura Vrindavan',
    'pilgrimage packages Vrindavan',
    'book taxi Vrindavan',
    'bus hire',
    'airport transfer',
    'outstation cab',
    'coach hire',
    'Braj Mandal tour',
    'Mathura cab service',
    'spiritual travel India',
    BUSINESS.city,
    BUSINESS.name,
  ].join(', ');

  // Build JSON-LD structured data: LocalBusiness + Breadcrumbs + optional FAQ
  const ldLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    image: ogImage,
    '@id': BUSINESS.domain,
    url: BUSINESS.domain,
    telephone: BUSINESS.phone1,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: 'Uttar Pradesh',
    },
    description: description || BUSINESS.tagline,
    areaServed: BUSINESS.city,
    sameAs: [BUSINESS.instagram, BUSINESS.youtube].filter(Boolean),
    hasMap: BUSINESS.googleMapsUrl || undefined,
    geo: BUSINESS.lat && BUSINESS.lng ? { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng } : undefined,
    service: (Array.isArray(services) && services.length > 0)
      ? services.map((s) => ({ '@type': 'Service', name: s.name || s }))
      : [
        { '@type': 'Service', name: 'Hourly Taxi Service' },
        { '@type': 'Service', name: 'Airport Transfer' },
        { '@type': 'Service', name: 'Outstation Cab' },
        { '@type': 'Service', name: 'Coach & Group Transfer' },
        { '@type': 'Service', name: 'Point-to-Point Transfer' },
      ],
  };

  const ldBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.domain },
      ...(path ? [{ '@type': 'ListItem', position: 2, name: title || path.replace('/', ''), item: canonical }] : []),
    ],
  };

  const ld = [ldLocalBusiness, ldBreadcrumbs];
  if (Array.isArray(faq) && faq.length > 0) {
    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    };
    ld.push(faqLd);
  }

  // Add Offer schema when provided (array of offers)
  if (Array.isArray(offers) && offers.length > 0) {
    const offersLd = offers.map((o) => ({
      '@context': 'https://schema.org',
      '@type': 'Offer',
      url: o.url || BUSINESS.domain,
      price: o.price || undefined,
      priceCurrency: o.priceCurrency || 'INR',
      availability: o.availability || 'https://schema.org/InStock',
      description: o.description || undefined,
      itemOffered: { '@type': 'Service', name: o.name || o.title },
    }));
    ld.push(...offersLd);
  }

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:locale"      content="en_IN" />
      <meta property="og:site_name"   content={BUSINESS.name} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* Preload primary image for faster LCP when it's a local asset */}
      {ogImage && ogImage.startsWith(BUSINESS.domain) && (
        <link rel="preload" as="image" href={ogImage} />
      )}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
