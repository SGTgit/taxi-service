import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import { packages } from '../data/siteData.jsx';
import SEO from '../components/ui/SEO.jsx';
import TourPackageCard from '../components/cards/TourPackageCard.jsx';
import { BUSINESS } from '../config/business.js';

const allPackages = [
  ...packages,
  {
    title: 'Braj Mandal Circuit',
    duration: '5 Days / 4 Nights',
    price: '₹ 19,999 /-',
    image: '/assets/gallery-4.webp',
    badge: 'Best Value',
    points: ['Mathura, Vrindavan, Govardhan', 'Barsana & Nandgaon', 'Sacred, comfortable temple-adjacent stay', 'All meals', 'Private vehicle (taxi)'],
  },
  {
    title: 'Holi Special Package',
    duration: '3 Days / 2 Nights',
    price: '₹ 12,499 /-',
    image: '/assets/gallery-5.webp',
    badge: 'Seasonal',
    points: ['Lathmar Holi at Barsana', 'Vrindavan Holi', 'Comfortable stay near festivities', 'Breakfast', 'Private vehicle (taxi)'],
  },
  {
    title: 'Janmashtami Special',
    duration: '2 Days / 1 Night',
    price: '₹ 7,999 /-',
    image: '/assets/banke-bihari.webp',
    badge: 'Festival',
    points: ['Mathura Janmashtami', 'Midnight darshan', 'Comfortable stay', 'Dinner', 'Private vehicle (taxi)'],
  },
  {
    title: 'Corporate Group Tour',
    duration: 'Custom Duration',
    price: 'On Request',
    image: '/assets/gallery-3.webp',
    badge: 'Corporate',
    points: ['Group of 20+ pax', 'Comfort coaches with Vedic hospitality', 'All meals', 'Full sightseeing', 'Dedicated coordinator'],
  },
];

const durations = ['All', 'Hourly', 'Point-to-Point', 'Outstation', 'Corporate'];
const vehicleTypes = ['All', 'Taxi', 'Tempo Traveller', 'Mini Bus', 'Coach'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Duration'];

function PackagesPage() {
  const [active, setActive] = useState('All');
  const [vehicle, setVehicle] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');

  const filtered = useMemo(() => allPackages.filter((p) => {
    if (active === 'All' && vehicle === 'All') return true;

    // Service type filtering (active)
    if (active !== 'All') {
      if (active === 'Hourly' && !(p.badge === 'Hourly' || /hour/i.test(p.duration))) return false;
      if (active === 'Point-to-Point' && !( /point/i.test(p.duration) || p.id === 'airport-transfer' || p.serviceType === 'Point-to-Point')) return false;
      if (active === 'Outstation' && !(p.badge === 'Outstation' || /\d+\s?days?/i.test(p.duration) || (p.serviceType && p.serviceType === 'Outstation'))) return false;
      if (active === 'Corporate' && !(p.badge === 'Corporate' || p.vehicleType === 'Coach' || p.title.toLowerCase().includes('coach') || p.title.toLowerCase().includes('corporate'))) return false;
    }

    // Vehicle type filtering
    if (vehicle !== 'All' && (p.vehicleType || 'Taxi') !== vehicle) return false;

    return true;
  }), [allPackages, active, vehicle]);

  // Sorting
  const sorted = useMemo(() => {
    const parsePrice = (it) => {
      if (!it || !it.price) return Infinity;
      const nums = String(it.price).match(/\d+/g);
      if (!nums) return Infinity;
      return parseInt(nums.join(''), 10);
    };

    const parseDurationRank = (it) => {
      const d = (it.duration || '').toLowerCase();
      if (/hour/.test(d)) return 1;
      if (/point/.test(d)) return 2;
      const days = d.match(/(\d+)\s?days?/i);
      if (days) return 3 + parseInt(days[1], 10);
      return 10;
    };

    const copy = [...filtered];
    if (sortBy === 'Price: Low to High') return copy.sort((a, b) => parsePrice(a) - parsePrice(b));
    if (sortBy === 'Price: High to Low') return copy.sort((a, b) => parsePrice(b) - parsePrice(a));
    if (sortBy === 'Duration') return copy.sort((a, b) => parseDurationRank(a) - parseDurationRank(b));
    return copy; // Relevance (default)
  }, [filtered, sortBy]);

  const services = allPackages.map((p) => ({ name: p.title, description: p.tagline || p.about || '' }));
  const offers = allPackages.map((p) => {
    const priceMatch = String(p.price || '').match(/(\d+[\d,]*)/);
    const numeric = priceMatch ? priceMatch[1].replace(/,/g, '') : null;

    return {
      name: p.title,
      description: p.tagline || p.about || (priceMatch ? '' : 'Available on request'),
      price: numeric,
      priceCurrency: 'INR',
      url: `${BUSINESS.domain}/packages${p.id ? `/${p.id}` : ''}`,
      availability: numeric ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
    };
  });

  return (
    <>
      <SEO
        title="Taxi & Bus Services | Transfers, Outstation & Coach Hire"
        description="Book taxis, airport transfers, outstation cabs and coach hires. Flexible hourly, point-to-point and group transportation across Vrindavan, Mathura and nearby regions."
        path="/packages"
        image="/assets/og/packages.svg"
        services={services}
        offers={offers}
      />
      {/* Hero */}
      <section className="relative flex min-h-105 items-end overflow-hidden bg-[#0d1b2a] pb-16 pt-40">
        <picture className="absolute inset-0 h-full w-full block">
          <source
            type="image/webp"
            srcSet="/assets/responsive/package-temple-400.webp 400w, /assets/responsive/package-temple-800.webp 800w, /assets/responsive/package-temple-1200.webp 1200w, /assets/responsive/package-temple-1600.webp 1600w"
            sizes="100vw"
          />
          <img className="absolute inset-0 h-full w-full object-cover opacity-25"
            src="/assets/package-temple.webp" alt="Vrindavan temple – pilgrimage tour packages by Gautam Taxi and Bus"
            loading="eager" fetchpriority="high" decoding="sync" width="1600" height="900"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" />
        <motion.div className="section-shell relative z-10" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Reliable Transport</motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">Taxi & Bus Services</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-7 text-white/75">
            Book hourly taxis, airport transfers, outstation cabs or charter a coach for groups.
          </motion.p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="section-shell">
          {/* Controls: service type, vehicle type, sort */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex flex-wrap gap-3">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setActive(d)}
                  className={`rounded-full px-3 py-1 text-xs font-bold  tracking-tight transition ${active === d ? 'gold-gradient text-white shadow-lg shadow-[#c9964a]/25' : 'border border-[#c9964a] text-[#c9964a] hover:bg-[#c9964a]/10'}`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="rounded-full px-4 py-2 text-xs border border-[#e5d5c0] bg-white/90 dark:bg-[#0a1829] dark:text-white"
              >
                {vehicleTypes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full px-4 py-2 text-xs border border-[#e5d5c0] bg-white/90 dark:bg-[#0a1829] dark:text-white"
              >
                {sortOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <motion.div
            key={`${active}-${vehicle}-${sortBy}`}
            className="flex flex-col gap-6"
            initial="hidden" animate="visible" variants={stagger}
          >
            {sorted.map((item, i) => (
              <TourPackageCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="bg-[#f5ebdd] py-16 dark:bg-[#0a1829]">
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Can't find what you need?</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white">Get a Custom Package</h2>
            <div className="mt-3 h-px w-16 bg-[#c9964a]" />
            <p className="mt-5 text-sm leading-7 text-[#4b5563] dark:text-white/70">
              Tell us your travel dates, group size and preferred destinations. We'll create a bespoke itinerary that perfectly fits your needs and budget — at no extra charge.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a href={`tel:${BUSINESS.phone1}`} className="inline-flex items-center justify-center gap-3 rounded border border-[#c9964a] px-7 py-4 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white">
              <Phone size={15} /> Call Us Now
            </a>
            <Link to="/contact" className="gold-gradient inline-flex items-center justify-center gap-3 rounded px-7 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25">
              Request Custom Package <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackagesPage;
