import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../../lib/motion.js';

const vehicles = [
  {
    name: 'Hatchback',
    model: 'Swift Dzire / Similar',
    capacity: 4,
    image: '/assets/vechiles/hatchback.webp',
    badge: 'Economy',
    badgeColor: 'bg-blue-500',
    price: '₹999/day',
    features: ['Air Conditioned', 'Music System', 'Comfortable Seats', 'City & Local Trips'],
  },
  {
    name: 'SUV',
    model: 'Innova / Ertiga',
    capacity: 7,
    image: '/assets/vechiles/suv.webp',
    badge: 'Popular',
    badgeColor: 'bg-[#c9964a]',
    price: '₹1,799/day',
    features: ['Air Conditioned', 'GPS Navigation', 'Extra Luggage Space', 'Outstation Ready'],
  },
  {
    name: 'Innova Crysta',
    model: 'Toyota Innova Crysta',
    capacity: 7,
    image: '/assets/vechiles/creta.webp',
    badge: 'Premium',
    badgeColor: 'bg-emerald-600',
    price: '₹2,499/day',
    features: ['Air-conditioned comfort', 'Professional Driver', 'USB Charging', 'All Terrain Ready'],
  },
  {
    name: 'Tempo Traveller',
    model: '12–16 Seater',
    capacity: 16,
    image: '/assets/vechiles/traveller.webp',
    badge: 'Groups',
    badgeColor: 'bg-purple-600',
    price: '₹4,999/day',
    features: ['Pushback Seats', 'AC Throughout', 'Large Luggage Bay', 'Pilgrimage Groups'],
  },
];

export default function VehicleFleet() {
  return (
    <section className="bg-white py-16 transition-colors dark:bg-[#060f1e]">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Our Fleet</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">
            Choose Your Ride
          </h2>
          <div className="mx-auto mt-3 h-px w-14 bg-[#c9964a]" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#6b7280] dark:text-white/55">
            Well-maintained, air-conditioned vehicles for every group size — from solo travellers to large pilgrimage groups.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} variants={stagger}
        >
          {vehicles.map((v) => (
            <motion.article
              key={v.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group premium-card flex flex-col overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-[0_12px_32px_rgba(13,27,42,0.09)]"
            >
              {/* Vehicle image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={v.image}
                  alt={`${v.name} – ${v.model} for taxi hire in Vrindavan`}
                  loading="lazy"
                  className="h-full w-full object-cover card-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/70 via-transparent to-transparent" />

                {/* Badge */}
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${v.badgeColor}`}>
                  {v.badge}
                </span>

                {/* Capacity pill */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <Users size={11} /> {v.capacity} Seats
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-[#0d1b2a] dark:text-white">{v.name}</h3>
                <p className="mt-0.5 text-xs text-[#6b7280] dark:text-white/45">{v.model}</p>

                <ul className="mt-4 space-y-1.5">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#4b5563] dark:text-white/65">
                      <Check size={12} className="shrink-0 text-[#c9964a]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#9ca3af]">Starting</p>
                      <p className="text-lg font-bold text-[#c9964a]">{v.price}</p>
                    </div>
                    <Link
                      to="/book"
                      className="rounded border border-[#c9964a] px-4 py-2 text-[10px] font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
