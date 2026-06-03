import {
  CalendarDays,
  CarFront,
  Clock3,
  Heart,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';

export const navItems = ['Home', 'About Us', 'Destinations', 'Packages', 'Fare Calculator', 'Gallery', 'Contact Us'];

export const features = [
  { icon: CarFront, title: 'Modern Fleet', body: 'Well maintained AC cars, SUVs and buses' },
  { icon: Users, title: 'Professional Drivers', body: 'Experienced, polite and background verified' },
  { icon: CalendarDays, title: 'Custom Transfers', body: 'Hourly, airport or outstation transfers on demand' },
  { icon: Hotel, title: 'Flexible Options', body: 'Taxi, tempo traveller and coach solutions for all group sizes' },
  { icon: Clock3, title: '24/7 Assistance', body: 'Support for bookings, cancellations and route planning' },
];

export const destinations = [
  {
    name: "Prem Mandir",
    image: "/assets/gallery-2.webp",
    copy: "A symbol of love, devotion and divinity.",
    tag: "Vrindavan",
  },
  {
    name: "Iskcon Temple",
    image: "/assets/gallery-3.webp",
    copy: "A spiritual retreat for peace and devotion.",
    tag: "Vrindavan",
  },
  {
    name: "Nidhivan",
    image: "/assets/gallery-4.webp",
    copy: "Experience the mystical groves of Vrindavan.",
    tag: "Vrindavan",
  },
  {
    name: "Barsana",
    image: "/assets/gallery-5.webp",
    copy: "Where the pure love showers upon you.",
    tag: "Barsana",
  },
  {
    name: "Kusum Sarovar",
    image: "/assets/temples/kusumsarovar.webp",
    copy: "Feel the divine blessings of Thakurji.",
    tag: "Goverdhan",
  },
  
];

export const packages = [
  {
    id: 'program-part-1',
    badge: 'Program 1',
    title: 'Barsana & Nandgaon Circuit',
    duration: '1 Day',
    price: 'On Request',
    image: '/assets/temples/barsana.webp',
    gallery: ['/assets/temples/barsana.webp'],
    tagline: 'Visit Barsana, Nandgaon and nearby sacred stops associated with Radha and Krishna.',
    about: 'A full-day pilgrimage visiting Barsana, Nandgaon, Vrinda Kund, Goverdhan stops and other nearby holy sites. Ideal during festival seasons or for cultural visits.',
    highlights: ['Barsana & Nandgaon', 'Pilgrimage towns', 'Local sightseeing'],
    itinerary: [
      { time: 'Morning', title: 'Barsana', desc: 'Darshan and local darbar.' },
      { time: 'Late morning', title: 'Nandgaon', desc: 'Visit Nandgaon temples.' },
      { time: 'Afternoon', title: 'Vrinda Kund & Goverdhan (stop)', desc: 'Short darshan and walking stops.' },
      { time: 'Evening', title: 'Return', desc: 'Drop at hotel / station.' },
    ],
    inclusions: ['Vehicle & driver', 'Fuel'],
    exclusions: ['Meals', 'Entry/offerings'],
    points: ['Barsana', 'Nandgaon', 'Goverdhan'],
    vehicleType: 'Taxi',
  },

  {
    id: 'program-part-2',
    badge: 'Program 2',
    title: 'Krishna Janmasthan & Gokul Circuit',
    duration: '1 Day',
    price: 'On Request',
    image: '/assets/temples/janamsthan.webp',
    gallery: ['/assets/temples/janamsthan.webp'],
    tagline: 'Explore Shri Krishna Janmasthan, Gokul Raman Reti, and historic ghats and shrines.',
    about: 'A contemplative day visiting Krishna Janmasthan, Gokul sites and other sacred locations important to Krishna’s early pastimes.',
    highlights: ['Janmasthan', 'Gokul', 'Holy ghats'],
    itinerary: [
      { time: 'Morning', title: 'Shri Krishna Janmasthan', desc: 'Darshan and temple visit.' },
      { time: 'Midday', title: 'Gokul Raman Reti & Brahmand Ghat', desc: 'Visit sacred ghats and shrines.' },
      { time: 'Afternoon', title: 'Chinta Haran Mahadev / Chaurasi Khamba', desc: 'Local historic sites.' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Guide fees', 'Donations'],
    points: ['Gokul', 'Janmasthan', 'Holy Ghats'],
    vehicleType: 'Taxi',
  },

  {
    id: 'program-part-3',
    badge: 'Program 3',
    title: 'Himalayan Pilgrimage (Badrinath / Char Dham style)',
    duration: 'Multi-Day',
    price: 'On Request',
    image: '/assets/temples/rishikesh.webp',
    gallery: ['/assets/temples/rishikesh.webp'],
    tagline: 'Extended pilgrimage covering major Himalayan shrines and ghats.',
    about: 'A multi-day program visiting high-altitude temples such as Badrinath, Gangotri, Yamunotri and related sacred stops. Ideal for organised groups.',
    highlights: ['Badrinath', 'Gangotri', 'Yamunotri', 'Kedarnath'],
    itinerary: [
      { title: 'Aadi Badrinath', desc: 'Darshan and prayers at the ancient Badrinath shrine.' },
      { title: 'Gangotri', desc: 'Visit the source shrine of the Ganga and perform puja.' },
      { title: 'Yamunotri', desc: 'Darshan at Yamunotri and nearby ghats.' },
      { title: 'Alaknand(a) Valley / Alaknand', desc: 'Scenic stops along the Alaknanda river and nearby shrines.' },
      { title: 'Laxman Jhula', desc: 'Visit the iconic suspension bridge and temples at Rishikesh.' },
      { title: 'Kedarnath', desc: 'High-altitude darshan at Kedarnath temple (seasonal access).' },
      { title: 'Charan Pahadi', desc: 'Pilgrim stop at Charan Pahadi for blessings and viewing.' },
      { title: 'Bhojan Thali / Local Meal', desc: 'Enjoy traditional prasadam / bhojan thali as part of the pilgrimage experience.' },
      { title: 'Kamvan', desc: 'Visit the sacred Kamvan area and local shrines.' },
      { title: 'Kameshwar Mahadev', desc: 'Darshan at the Kameshwar Mahadev temple.' },
    ],
    inclusions: ['Coach/vehicle & driver', 'Driver allowances'],
    exclusions: ['Accommodation', 'Guide / porter charges'],
    points: ['Char Dham style', 'High-altitude pilgrimage'],
    vehicleType: 'Coach',
  },

  {
    id: 'program-part-4',
    badge: 'Program 4',
    title: 'Belvan / Devra Baba / Bhandirvan Circuit',
    duration: '1 Day',
    price: 'On Request',
    image: '/assets/temples/belvan.webp',
    gallery: ['/assets/temples/belvan.webp'],
    tagline: 'Visit lesser-known sacred groves and ashrams around Braj.',
    about: 'A soulful itinerary visiting Belvan, Devra Baba, Bhandirvan, Vanshivat and Mansoravar (Radharani). Good for devotees seeking quieter sacred spots.',
    highlights: ['Sacred groves', 'Quiet shrines', 'Nature & devotion'],
    itinerary: [
      { time: 'Morning', title: 'Belvan', desc: 'Visit local grove.' },
      { time: 'Midday', title: 'Bhandirvan & Vanshivat', desc: 'Explore sacred trees and shrines.' },
      { time: 'Afternoon', title: 'Mansoravar (Radharani)', desc: 'Visit Mansoravar.' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Entry / offerings'],
    points: ['Bhandirvan', 'Belvan', 'Mansoravar'],
    vehicleType: 'Taxi',
  },

  {
    id: 'program-part-5',
    badge: 'Program 5',
    title: 'Agra Sightseeing (Taj Mahal & Fort)',
    duration: '1 Day',
    price: 'On Request',
    image: '/assets/gallery-5.webp',
    gallery: ['/assets/gallery-5.webp'],
    tagline: 'A classic Agra day trip covering the Taj Mahal, Red Fort and Sikandra.',
    about: 'Ideal for travellers who want to combine Vrindavan visits with the Agra monument circuit. Comfortable vehicle and experienced driver provided.',
    highlights: ['Taj Mahal', 'Red Fort', 'Sikandra'],
    itinerary: [
      { time: 'Morning', title: 'Taj Mahal', desc: 'Sunrise / morning darshan at the Taj.' },
      { time: 'Midday', title: 'Red Fort', desc: 'Guided visit (optional).' },
      { time: 'Afternoon', title: 'Sikandra (Akbar tomb)', desc: 'Historic site visit.' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Monument entry fees', 'Guide'],
    points: ['Agra', 'Taj Mahal', 'Red Fort'],
    vehicleType: 'Taxi',
  },

  {
    id: 'program-part-6',
    badge: 'Program 6',
    title: 'Jaipur Sightseeing',
    duration: '1-2 Days',
    price: 'On Request',
    image: '/assets/gallery-1.webp',
    gallery: ['/assets/gallery-1.webp'],
    tagline: 'Key temples and sights of Jaipur including Govind Dev and Madan Mohan.',
    about: 'A compact Jaipur package focusing on important temples and cultural stops. Combine with long-distance transfers if required.',
    highlights: ['Govind Dev Temple', 'Madan Mohan Temple'],
    itinerary: [
      { time: 'Day 1', title: 'Govind Dev Temple', desc: 'Darshan and local visit.' },
      { time: 'Day 2', title: 'Madan Mohan Temple', desc: 'Continue temple visits.' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Hotel', 'Guide'],
    points: ['Jaipur', 'Temple visits'],
    vehicleType: 'Taxi',
  },

  {
    id: 'program-part-7',
    badge: 'Program 7',
    title: 'Haridwar & Rishikesh',
    duration: '1-3 Days',
    price: 'On Request',
    image: '/assets/gallery-4.webp',
    gallery: ['/assets/gallery-4.webp'],
    tagline: 'Sacred Ganga towns for a spiritual stay and aarti at the ghats.',
    about: 'Transport and local support for Haridwar and Rishikesh visits — suitable for yoga, ashram stays and Ganga aarti experiences.',
    highlights: ['Ganga aarti', 'Rishikesh activities', 'Haridwar darshan'],
    itinerary: [
      { time: 'Day 1', title: 'Haridwar', desc: 'Ganga aarti and local temples.' },
      { time: 'Day 2', title: 'Rishikesh', desc: 'Ganga activities and temples.' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Activity fees', 'Accommodation'],
    points: ['Haridwar', 'Rishikesh'],
    vehicleType: 'Coach',
  },

  {
    id: 'program-part-8',
    badge: 'Program 8',
    title: 'Delhi Sightseeing & Transfers',
    duration: 'Half / Full Day',
    price: 'On Request',
    image: '/assets/vechiles/hero-car-temple.webp',
    gallery: ['/assets/vechiles/hero-car-temple.webp'],
    tagline: 'Delhi pick-up / drop and classic city sightseeing options.',
    about: 'Airport or station pickups combined with a Delhi city circuit. Flexible pickup and drop options available.',
    highlights: ['Airport pickup', 'City sights', 'Flexible timing'],
    itinerary: [],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Entry fees', 'Guide'],
    points: ['Delhi', 'Pickup & drop', 'Sightseeing'],
    vehicleType: 'Taxi',
  },

  {
    id: 'brij-vrindavan-local',
    badge: 'Local',
    title: 'Brij Vrindavan Darshan (Local Sightseen)',
    duration: 'Half / Full Day',
    price: 'On Request',
    image: '/assets/banke-bihari.webp',
    gallery: ['/assets/banke-bihari.webp', '/assets/gallery-2.webp'],
    tagline: 'A curated list of the principal temples of Vrindavan for darshan and worship.',
    about: 'Visit the key temples of Vrindavan — ideal for pilgrims who want a respectful, well-paced local darshan.',
    highlights: ['Banke Bihari', 'Prem Mandir', 'ISKCON', 'Radha Raman'],
    itinerary: [
      { title: 'Iskcon Krishna Balram Temple' },
      { title: 'Shri Radha Vallabh Temple' },
      { title: 'Shri Radha Shyam Sundar Temple' },
      { title: 'Shri Govind Dev Temple' },
      { title: 'Maa Vaishno Devi Temple' },
      { title: 'Shri Bankey Bihari Temple' },
      { title: 'Shri Radha Damodar Temple' },
      { title: 'Shri Radha Mohan Temple' },
      { title: 'Shri Radha Gokulanand Temple' },
      { title: 'Shri Rang Ji Temple' },
      { title: 'Prem Mandir' },
    ],
    inclusions: ['Vehicle & driver'],
    exclusions: ['Temple dakshina', 'Meals'],
    points: ['Vrindavan', 'Temple circuit', 'Local darshan'],
    vehicleType: 'Taxi',
  },
];


export const stats = [
  { value: '10+', label: 'Years of Experience', icon: ShieldCheck },
  { value: '5000+', label: 'Happy Customers', icon: Users },
  { value: '50+', label: 'Tour Packages', icon: Hotel },
  { value: '100%', label: 'Customer Satisfaction', icon: Heart },
];

export const gallery = [
  '/assets/gallery-1.webp',
  '/assets/gallery-2.webp',
  '/assets/gallery-3.webp',
  '/assets/gallery-4.webp',
  '/assets/gallery-5.webp',
];

export const footerSocials = [MessageCircle, Users, Mail, Phone];

import { BUSINESS } from '../config/business.js';

export const contactItems = [
  { icon: Phone, label: BUSINESS.phone1 },
  { icon: Phone, label: BUSINESS.phone2 },
  { icon: Mail,  label: BUSINESS.email },
  { icon: MapPin, label: BUSINESS.address, href: BUSINESS.googleMapsUrl },
];

export const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    trip: 'Vrindavan Darshan',
    quote: 'Excellent service! The cab was very comfortable and the driver was polite and knowledgeable. Our Vrindavan trip was beautiful and hassle-free.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    location: 'Jaipur',
    trip: 'Mathura Vrindavan Tour',
    quote: 'Gautam Tours & Travels made our spiritual journey truly memorable. The itinerary was perfectly planned and every temple visit was well-organised. Highly recommended!',
    quote: 'Gautam Taxi and Bus made our spiritual journey truly memorable. The itinerary was perfectly planned and every temple visit was well-organised. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amit Agarwal',
    location: 'Mumbai',
    trip: 'Braj 84 Kos Yatra',
    quote: 'Very professional and reliable service. Everything was well planned and our group of 12 was handled perfectly. The driver was experienced and very caring.',
    rating: 5,
  },
  {
    name: 'Sunita Gupta',
    location: 'Lucknow',
    trip: 'Govardhan Parvat Visit',
    quote: 'We had an amazing experience. The cab was on time, clean and comfortable. The entire Govardhan parikrama was arranged beautifully. Will definitely book again!',
    rating: 5,
  },
  {
    name: 'Vijay Tiwari',
    location: 'Kanpur',
    trip: 'Family Package — 3 Days',
    quote: 'Took a 3-day family package with my wife and parents. Everything was smooth — hotel, transport, meals. The team is genuinely caring and trustworthy.',
    rating: 5,
  },
];
