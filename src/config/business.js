/**
 * ─────────────────────────────────────────────────────────────────
 *  BUSINESS CONFIG — Single source of truth
 *  Update the values below and they will propagate everywhere.
 * ─────────────────────────────────────────────────────────────────
 */

export const BUSINESS = {
  // ── Identity ────────────────────────────────────────────────────
  name:       'Gautam Taxi and Bus',
  tagline:    'Premium Pilgrimage & Cab Service in Vrindavan',
  established: '2014',
  city:       'Vrindavan',

  // ── Contact numbers ─────────────────────────────────────────────
  phone1:     '+91 78957 06303',   // Primary — shown in UI
  phone2:     '+91 63983 53446',   // Secondary / alternate

  /**
   * WhatsApp number in international format WITHOUT the leading +
   * Example: for +91 98765 43210 → '919876543210'
   */
  whatsapp:   '917895706303',

  // ── Digital ─────────────────────────────────────────────────────
  email:      'info@gautamtours.com',
  domain:     'https://www.gautamtoursandtravels.com',

  // ── Social media ────────────────────────────────────────────────
  instagram:  'https://instagram.com',
  youtube:    'https://youtube.com',

  // ── Address ─────────────────────────────────────────────────────
  address:    'Near ISKCON, Raman Reti, Vrindavan, Uttar Pradesh – 281121',
  mapEmbed:   'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3536.7080317447685!2d77.6768772!3d27.5715704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f1bd9440781%3A0x605804a58005f228!2sGautam%20taxis%20%26%20bus%20service%20Vrindavan!5e0!3m2!1sen!2sin!4v1779935152860!5m2!1sen!2sin',
  // Google Maps canonical URL for the business (useful for links/share)
  googleMapsUrl: 'https://www.google.com/maps/place/Gautam+taxis+%26+bus+service+Vrindavan/@27.5715704,77.6768772,17z',
  // Coordinates extracted from the Maps URL
  lat: 27.5715704,
  lng: 77.6768772,
  // Optional short place identifier (from the Maps path)
  placeId: 'g/11hzjgvrk2',

  // ── Default WhatsApp message ─────────────────────────────────────
  waMessage:  'Hello! I would like to enquire about taxi and coach services.',
  // Monitoring toggle (set sentryEnabled=true and add sentryDsn to enable)
  MONITORING: {
    sentryEnabled: false,
    sentryDsn: '',
  },
};

// ── Computed helpers (do not edit below this line) ───────────────

/** wa.me link — opens WhatsApp chat */
export const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}`;

/** wa.me link with pre-filled enquiry message */
export const WA_BOOKING_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMessage)}`;

/** tel: link for primary phone */
export const TEL1 = `tel:${BUSINESS.phone1.replace(/\s/g, '')}`;

/** tel: link for secondary phone */
export const TEL2 = `tel:${BUSINESS.phone2.replace(/\s/g, '')}`;

/** mailto: link */
export const MAILTO = `mailto:${BUSINESS.email}`;

/** Google Maps link for the address */
export const MAP_LINK = BUSINESS.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`;
