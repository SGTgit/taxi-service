import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData.jsx';

/* Avatar initials bubble */
function Avatar({ name }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const colors = [
    'from-[#c9964a] to-[#e8b56a]',
    'from-[#8b5cf6] to-[#a78bfa]',
    'from-[#0ea5e9] to-[#38bdf8]',
    'from-[#10b981] to-[#34d399]',
    'from-[#f43f5e] to-[#fb7185]',
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors[idx]} text-sm font-bold text-white shadow-md`}>
      {initials}
    </span>
  );
}

function StarRow({ rating = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? 'text-[#f59e0b]' : 'text-white/20'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);

  /* Auto-advance every 5 s, pause on hover */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section
      className="relative overflow-hidden bg-[#0d1b2a] py-14 text-white md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
    >
      {/* Dot-grid watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#c9964a 1px,transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* Decorative large quote mark */}
      <Quote
        size={180}
        className="pointer-events-none absolute right-8 top-6 rotate-180 text-white/[0.03]"
        aria-hidden
      />

      <div className="section-shell relative">

        {/* ── Header ── */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center md:mb-14"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9964a]">Client Stories</p>
          <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">What Our Travellers Say</h2>
          <div className="mt-3 h-px w-14 bg-[#c9964a]" />
        </motion.div>

        {/* ── Featured quote (large, centred) ── */}
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group premium-card premium-corners flex flex-col items-center text-center px-6 py-8 md:px-12 md:py-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Gold open-quote — smaller on mobile */}
              <span className="font-display text-[48px] leading-none text-[#c9964a] select-none md:text-[80px]" aria-hidden>"</span>

              <p className="mt-1 text-base font-light leading-8 text-white/90 sm:text-lg sm:leading-9 md:text-xl md:leading-10">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="mt-6 flex justify-center">
                <StarRow rating={t.rating} />
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <Avatar name={t.name} />
                <div className="text-left">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="mt-0.5 text-xs text-white/55">{t.location} · {t.trip}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="mt-8 flex flex-col items-center gap-5 md:mt-12 md:gap-6">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'h-2.5 w-8 bg-[#c9964a]' : 'h-2 w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next arrows — larger touch targets on mobile */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#c9964a] hover:text-[#c9964a] md:h-10 md:w-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#c9964a] hover:text-[#c9964a] md:h-10 md:w-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Reviewer strip: scrollable pills on mobile, wrap on desktop ── */}
        <div className="mt-8 md:mt-10">
          {/* Mobile: horizontal scroll, compact */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:hidden">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${
                  i === active
                    ? 'border-[#c9964a] bg-[#c9964a]/15 text-white'
                    : 'border-white/15 text-white/50'
                }`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white bg-gradient-to-br ${
                  ['from-[#c9964a] to-[#e8b56a]','from-[#8b5cf6] to-[#a78bfa]','from-[#0ea5e9] to-[#38bdf8]','from-[#10b981] to-[#34d399]','from-[#f43f5e] to-[#fb7185]'][item.name.charCodeAt(0) % 5]
                }`}>{item.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase()}</span>
                <span className="font-semibold whitespace-nowrap">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop: wrapping pills with full-size avatar */}
          <div className="hidden flex-wrap justify-center gap-3 md:flex">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 rounded-full border px-3 py-2 text-xs transition-all duration-300 ${
                  i === active
                    ? 'border-[#c9964a] bg-[#c9964a]/15 text-white'
                    : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white/75'
                }`}
              >
                <Avatar name={item.name} />
                <span className="font-semibold">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
