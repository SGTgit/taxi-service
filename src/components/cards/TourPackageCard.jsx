import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../lib/motion.js';

/**
 * TourPackageCard — horizontal landscape card for the /packages page.
 * Image on the left (40%), rich content on the right (60%).
 */
function TourPackageCard({ item, index }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group premium-card flex flex-col overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-[0_16px_40px_rgba(13,27,42,0.1)] sm:flex-row"
    >
      {/* ── Image panel ── */}
      <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-[38%]">
        <img
          className="h-full w-full object-cover card-img"
          src={item.image}
          alt={item.title}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#071421]/10" />

        {/* Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#c9964a] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
          {item.badge || 'Premium'}
        </span>

        {/* Index number watermark */}
        <span className="pointer-events-none absolute bottom-3 right-4 font-display text-6xl font-bold leading-none text-white/10 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* ── Content panel ── */}
      <div className="flex flex-1 flex-col p-6 md:p-8">

        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[#0d1b2a] dark:text-white md:text-xl">{item.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-[#6b7280] dark:text-white/55">
              <MapPin size={12} className="text-[#c9964a]" /> Service Area: Vrindavan & Mathura
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] dark:text-white/40">Starting from</p>
            <p className="mt-0.5 text-2xl font-semibold text-[#c9964a]">{item.price.replace(' /-', '/-')}</p>
          </div>
        </div>

        {/* Meta pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-[#eadbc7] px-3 py-1 text-[11px] font-semibold text-[#4b5563] dark:border-[#c9964a]/25 dark:text-white/60">
            <Clock size={12} className="text-[#c9964a]" /> {item.duration}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-[#eadbc7] px-3 py-1 text-[11px] font-semibold text-[#4b5563] dark:border-[#c9964a]/25 dark:text-white/60">
            <Users size={12} className="text-[#c9964a]" /> {item.vehicleType || 'Taxi'}
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-[#eadbc7] dark:bg-[#c9964a]/15" />

        {/* Inclusions list — 2-column grid */}
        <ul className="grid gap-y-2 gap-x-4 sm:grid-cols-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-[#384252] dark:text-white/80">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9964a]/12 text-[#c9964a]">
                <Check size={12} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA row — pushed to bottom */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <Link
            to="/book"
            state={{ package: item.title }}
            className="gold-gradient inline-flex items-center gap-2 rounded px-6 py-3 text-xs font-bold uppercase text-white shadow-md shadow-[#c9964a]/25 transition hover:opacity-90"
          >
            Book Now <ArrowRight size={13} />
          </Link>
          <Link
            to={`/packages/${item.id}`}
            className="inline-flex items-center gap-2 rounded border border-[#c9964a] px-6 py-3 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default TourPackageCard;
