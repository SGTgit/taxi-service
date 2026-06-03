import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../../data/siteData.jsx';

function Destinations() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const dest = destinations[active];
  const image = dest.image;

  const prev = () => setActive((i) => (i - 1 + destinations.length) % destinations.length);
  const next = () => setActive((i) => (i + 1) % destinations.length);

  /* ─── Mobile: scroll to a card index ─── */
  const scrollTo = (i) => {
    const card = scrollRef.current?.children[i];
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActive(i);
  };

  return (
    <section id="destinations" className="relative overflow-hidden bg-[#0d1b2a] py-20 text-white">

      {/* ── Gold dot-grid watermark ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#c9964a 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="section-shell relative">

        {/* ── Section label ── */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9964a]">Sacred Sites</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">Popular Destinations</h2>
          <div className="mt-3 h-px w-12 bg-[#c9964a]" />
        </motion.div>

        {/* ════════════ DESKTOP LAYOUT ════════════ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] lg:gap-6">

          {/* ── Big feature image ── */}
          <div className="relative h-[520px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={image}
                src={image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/85 via-[#071421]/20 to-transparent" />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                <MapPin size={11} className="text-[#c9964a]" /> {dest.tag || 'Vrindavan'}
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h3 className="font-display text-3xl font-semibold">{dest.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{dest.copy}</p>
                  <Link
                    to="/destinations"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c9964a] px-5 py-2 text-[11px] font-bold uppercase text-white transition hover:bg-[#d4a255]"
                  >
                    Plan Your Visit <ArrowRight size={13} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <div className="absolute right-5 top-5 flex gap-2">
              <button onClick={prev} className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm transition hover:bg-[#c9964a]" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="rounded-full bg-white/10 p-2.5 backdrop-blur-sm transition hover:bg-[#c9964a]" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
              <motion.div
                className="h-full bg-[#c9964a]"
                animate={{ width: `${((active + 1) / destinations.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* ── Numbered destination list ── */}
          <div className="flex flex-col gap-2">
            {destinations.map((d, i) => {
              const isActive = i === active;
              return (
                <button
                  key={d.name}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-[#c9964a]/15 ring-1 ring-[#c9964a]/60'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                    <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover card-img" />
                    {isActive && <div className="absolute inset-0 ring-1 ring-inset ring-[#c9964a]" />}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className={`text-[11px] font-bold tabular-nums ${isActive ? 'text-[#c9964a]' : 'text-white/40'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className={`mt-0.5 truncate text-sm font-semibold ${isActive ? 'text-white' : 'text-white/60'}`}>
                      {d.name}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-white/40">{d.copy}</p>
                  </div>

                  {/* Active arrow */}
                  <ArrowRight
                    size={15}
                    className={`shrink-0 transition-opacity ${isActive ? 'text-[#c9964a] opacity-100' : 'opacity-0'}`}
                  />
                </button>
              );
            })}

            {/* View All CTA */}
            <Link
              to="/destinations"
              className="mt-auto inline-flex items-center justify-center gap-3 rounded-xl border border-[#c9964a]/40 py-3.5 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white hover:border-transparent"
            >
              Explore All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ════════════ MOBILE LAYOUT ════════════ */}
        <div className="lg:hidden">
          {/* Horizontal swipe cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {destinations.map((d, i) => {
              return (
                <div key={d.name} className="relative h-[380px] w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[60vw]">
                  <img src={d.image} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/90 via-[#071421]/25 to-transparent" />
                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
                    <MapPin size={10} className="text-[#c9964a]" /> {d.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] font-bold text-[#c9964a]">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 text-lg font-bold">{d.name}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/80">{d.copy}</p>
                    <Link to="/destinations" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#c9964a] px-4 py-1.5 text-[11px] font-bold uppercase text-white">
                      Plan Visit <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {destinations.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-[#c9964a]' : 'w-1.5 bg-white/20'}`}
                aria-label={`Go to destination ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-full border border-[#c9964a]/50 px-6 py-2.5 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white hover:border-transparent">
              Explore All Destinations <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Destinations;
