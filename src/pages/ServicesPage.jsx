import { motion } from 'framer-motion';
import { ArrowRight, HeadphonesIcon, Hotel, Map, Shield, Utensils, Users, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import SEO from '../components/ui/SEO.jsx';

const services = [
  {
    icon: Car,
    title: 'Vedic Cab Service',
    description: 'Travel with reverence and comfort in our well-maintained, air-conditioned taxis and SUVs. All vehicles are GPS-tracked and sanitized before every trip.',
    highlights: ['Sedan / Hatchback', 'Innova & SUV', 'Tempo Traveller', 'Comfort Coach'],
    image: '/assets/vechiles/hero-car-temple.webp',
  },
  {
    icon: Map,
    title: 'Custom Transfers',
    description: 'Tailor-made transfer plans for airport pickups, outstation trips and local hourly needs — customised to your schedule.',
    highlights: ['Airport & station transfers', 'Outstation plans', 'Hourly hires', 'Group coordination'],
    image: '/assets/package-temple.webp',
  },
  {
    icon: Hotel,
    title: 'Hotel & Stay Arrangements',
    description: 'We partner with caring dharamshalas, guest houses and comfortable stays near temples so you can rest respectfully between spiritual explorations.',
    highlights: ['Budget to Vedic Comfort', 'Dharamshalas', 'Temple-adjacent', 'Breakfast included'],
    image: '/assets/whychooseus.webp',
  },
  {
    icon: Users,
    title: 'Group & Corporate Transfers',
    description: 'Planning a company outing, school trip or group transfer? We manage logistics for groups of any size with dedicated coordinators.',
    highlights: ['Up to 200+ pax', 'Dedicated coordinator', 'Group rates', 'Custom planning'],
    image: '/assets/gallery-3.webp',
  },
  {
    icon: Utensils,
    title: 'Meal Arrangements',
    description: 'Savor authentic Braj cuisine and prasad meals at our trusted restaurant partners. Pure vegetarian options honoring the sanctity of the region.',
    highlights: ['Pure vegetarian', 'Prasad meals', 'Jain options', 'Group bookings'],
    image: '/assets/gallery-2.webp',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    description: 'Our support team is available round the clock via phone and WhatsApp to resolve any queries, changes or emergencies during your journey.',
    highlights: ['Phone & WhatsApp', 'Real-time updates', 'Emergency assist', 'Hindi & English'],
    image: '/assets/gallery-4.webp',
  },
];

const process = [
  { step: '01', title: 'Get in Touch',     body: 'Call or WhatsApp us with your dates, group size and preferred destinations.' },
  { step: '02', title: 'Custom Itinerary', body: 'We craft a personalized itinerary and quote within a few hours.' },
  { step: '03', title: 'Confirm & Book',   body: 'Review the plan, confirm with an advance and we handle the rest.' },
  { step: '04', title: 'Travel in Peace',  body: 'Our driver picks you up and ensures a seamless experience throughout.' },
];

function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Taxi, Transfers & Coach Hire"
        description="Gautam Taxi and Bus offers taxi and bus hire, airport transfers, hourly cabs, outstation services and 24/7 support across Vrindavan and Mathura."
        path="/services"
      />

      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-[#0d1b2a] pb-16 pt-40">
        <img className="absolute inset-0 h-full w-full object-cover opacity-25" src="/assets/gallery-3.webp" alt="ISKCON temple Vrindavan – Gautam Taxi and Bus services" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" />
        <motion.div className="section-shell relative z-10" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">What We Offer</motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">Our Services</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-7 text-white/75">
            End-to-end transport solutions for families, businesses and visitors across Vrindavan and surrounding regions.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10">
          {services.map(({ icon: Icon, title, description, highlights, image }, i) => (
            <motion.div
              key={title}
              className={`grid overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-[0_12px_32px_rgba(13,27,42,0.08)] dark:border-[#c9964a]/20 dark:bg-[#0a1829] lg:grid-cols-2 lg:items-stretch`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={`relative min-h-[240px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img className="h-full w-full object-cover card-img" src={image} alt={title} />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4 inline-flex w-fit rounded-full bg-[#c9964a]/10 p-3">
                  <Icon size={26} className="text-[#c9964a]" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-bold text-[#0d1b2a] dark:text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4b5563] dark:text-white/70">{description}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs font-medium text-[#0d1b2a] dark:text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c9964a]" /> {h}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase text-[#c9964a] hover:underline">
                  Enquire Now <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="navy-gradient py-20 text-white">
        <div className="section-shell">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Simple Process</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">How It Works</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[#c9964a]" />
          </div>
          <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {process.map(({ step, title, body }) => (
              <motion.div key={step} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#c9964a] text-xl font-bold text-[#c9964a]">{step}</div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell text-center">
          <Shield size={44} className="mx-auto text-[#c9964a]" strokeWidth={1.5} />
          <h2 className="font-display mt-5 text-3xl font-semibold text-[#0d1b2a] dark:text-white">Every Journey, Perfectly Planned</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6b7280] dark:text-white/70">Get a free, no-obligation quote for your upcoming transfer or group travel.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gold-gradient inline-flex items-center gap-3 rounded px-7 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25">
              Get Free Quote <ArrowRight size={16} />
            </Link>
            <Link to="/packages" className="inline-flex items-center gap-3 rounded border border-[#c9964a] px-7 py-4 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white">
              View Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
