import { motion } from 'framer-motion';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../lib/motion.js';

function PackageCard({ item }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group premium-card flex flex-col overflow-hidden rounded-lg border border-[#eadbc7] bg-white shadow-[0_14px_34px_rgba(13,27,42,0.11)] transition-colors duration-500"
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <img className="h-full w-full object-cover card-img" src={item.image} alt={item.title} loading="lazy" />
        <div className="absolute inset-0 bg-linear-to-t from-[#071421]/88 via-[#071421]/16 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d1b2a] backdrop-blur dark:bg-[#060f1e]/82 dark:text-white">
          Sacred Journey
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="flex items-center gap-1.5 text-xs font-medium text-white/88">
            <MapPin size={13} className="text-[#d99a2b]" /> Vrindavan, Mathura
          </p>
          <h3 className="mt-1 text-xl font-bold leading-tight text-white">{item.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 border-b border-[#eadbc7] pb-4 dark:border-[#c9964a]/25">
          <p className="text-sm font-semibold text-[#0d1b2a] dark:text-white/88">{item.duration}</p>
          <span className="rounded-full bg-[#f5ebdd] px-3 py-1 text-[10px] font-bold uppercase text-[#c9964a] dark:bg-[#c9964a]/12">
            Private Vehicle (Taxi)
          </span>
        </div>

        <ul className="mt-4 grid gap-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-[#384252] dark:text-white/84">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#c9964a]/12 text-[#c9964a]">
                <Check size={13} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* Price + CTA — pushed to bottom */}
        <div className="mt-auto pt-5">
          <div className="rounded-lg bg-[#fffaf3] p-4 dark:bg-[#060f1e]/80">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b7280] dark:text-white/54">Starting from</p>
            <p className="mt-1 text-2xl font-semibold text-[#c9964a]">{item.price.replace(' /-', '/-')}</p>
            <Link
              to={item.id ? `/packages/${item.id}` : '/packages'}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded border border-[#c9964a] py-2.5 text-[10px] font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
            >
              View Details <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>

  );
}

export default PackageCard;
