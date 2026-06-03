import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../../lib/motion.js';

const festivals = [
  {
    name: 'Janmashtami Special',
    date: 'Aug 2026',
    month: 'AUG',
    desc: 'Midnight darshan at Mathura & Vrindavan. Witness the grand celebrations at Krishna Janmabhoomi temple.',
    image: '/assets/festivals/janamashtami.webp',
    tag: 'Most Popular',
    tagColor: 'bg-[#c9964a]',
    slots: '12 slots left',
    urgent: true,
  },
  {
    name: 'Lathmar Holi — Barsana',
    date: 'Mar 2026',
    month: 'MAR',
    desc: 'Experience the world-famous Lathmar Holi at Barsana & Nandgaon — a once-in-a-lifetime celebration.',
    image: '/assets/festivals/lathmar.webp',
    tag: 'Seasonal',
    tagColor: 'bg-pink-500',
    slots: '20 slots',
    urgent: false,
  },
  {
    name: 'Radhashtami Yatra',
    date: 'Sep 2026',
    month: 'SEP',
    desc: 'Join the divine celebration of Radha Rani\'s birthday with special pujas at Barsana Lad Liji temple.',
    image: '/assets/festivals/radhashtami.webp',
    tag: 'Upcoming',
    tagColor: 'bg-emerald-600',
    slots: '30 slots',
    urgent: false,
  },
  {
    name: 'Govardhan Puja Tour',
    date: 'Oct 2026',
    month: 'OCT',
    desc: 'Complete the sacred Govardhan Parikrama (21km) on the auspicious day with our guided yatra group.',
    image: '/assets/festivals/goverdhanpooja.webp',
    tag: 'Guided Yatra',
    tagColor: 'bg-blue-600',
    slots: '25 slots',
    urgent: false,
  },
  {
    name: 'Kartik Maas Package',
    date: 'Oct–Nov 2026',
    month: 'OCT',
    desc: 'The holiest month in Vrindavan — daily parikramas, deepdan at Yamuna ghat, and temple darshans.',
    image: '/assets/festivals/kartik.webp',
    tag: 'Month-long',
    tagColor: 'bg-violet-600',
    slots: 'Open',
    urgent: false,
  },
];

export default function FestivalTours() {
  return (
    <section className="navy-gradient py-16 text-white dark:bg-[#060f1e]">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">
              <Flame size={11} className="mr-1.5 inline" />
              Special Events
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              Festival &amp; Seasonal Tours
            </h2>
            <div className="mt-3 h-px w-14 bg-[#c9964a]" />
          </div>
          <Link
            to="/packages"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-white/25 px-5 py-2.5 text-xs font-bold uppercase text-white/80 transition hover:border-[#c9964a] hover:text-[#c9964a]"
          >
            All Packages <ArrowRight size={13} />
          </Link>
        </motion.div>

        {/* Horizontal scroll on mobile, 3-col grid on desktop */}
        <motion.div
          className="no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 xl:grid-cols-5"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          {festivals.map((f) => (
            <motion.article
              key={f.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative flex w-[78vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:w-auto lg:w-auto"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={f.image} alt={`${f.name} – ${f.date} festival tour in Vrindavan`}
                  loading="lazy"
                  className="h-full w-full object-cover card-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/90 via-[#071421]/20 to-transparent" />

                {/* Tag */}
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-white ${f.tagColor}`}>
                  {f.tag}
                </span>

                {/* Month badge */}
                <div className="absolute right-3 top-3 rounded-lg bg-white/10 px-2.5 py-1.5 text-center backdrop-blur-sm">
                  <p className="text-[8px] font-bold uppercase text-white/60">{f.month}</p>
                  <p className="text-xs font-bold text-white">{f.date.split(' ')[1] || ''}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold leading-tight text-white">{f.name}</h3>

                <div className="mt-1.5 flex items-center gap-1.5">
                  <Calendar size={11} className="text-[#c9964a]" />
                  <span className="text-[11px] text-white/55">{f.date}</span>
                  {f.urgent && (
                    <span className="ml-auto flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                      {f.slots}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs leading-5 text-white/55">{f.desc}</p>

                <Link
                  to="/book"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-[#c9964a] transition hover:gap-3"
                >
                  Book Now <ArrowRight size={12} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
