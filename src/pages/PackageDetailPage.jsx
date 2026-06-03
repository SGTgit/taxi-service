import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Calendar, Check, ChevronRight,
  Clock, Star, Users, X,
} from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import { packages } from '../data/siteData.jsx';
import { BUSINESS, WA_LINK } from '../config/business.js';
import SEO from '../components/ui/SEO.jsx';
import NotFoundPage from './NotFoundPage.jsx';

// Build wa.me link with pre-filled booking enquiry
function waLink(pkg) {
  const msg = `🙏 Hello! I'd like to enquire about the *${pkg.title}* package (${pkg.duration}).\n\nCould you please share more details and availability?`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export default function PackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.id === id);
  const [heroImg, setHeroImg] = useState(0);

  if (!pkg) return <NotFoundPage />;

  const allImgs = [pkg.image, ...(pkg.gallery || [])];
  const related = packages.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${pkg.title} | ${pkg.duration}`}
        description={pkg.tagline}
        path={`/packages/${pkg.id}`}
        image={pkg.image}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] overflow-hidden bg-[#0d1b2a] pt-24 md:min-h-[500px]">
        <motion.img
          key={heroImg}
          src={allImgs[heroImg]}
          alt={pkg.title}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-[#0d1b2a]/20" />

        <div className="section-shell relative z-10 flex h-full flex-col pb-14 pt-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-white/50">
            <Link to="/" className="hover:text-white/80">Home</Link>
            <ChevronRight size={10} />
            <Link to="/packages" className="hover:text-white/80">Packages</Link>
            <ChevronRight size={10} />
            <span className="text-[#c9964a]">{pkg.title}</span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <span className="rounded-full bg-[#c9964a] px-3 py-1 text-[10px] font-bold uppercase text-white">
              {pkg.badge}
            </span>
            <h1 className="font-display mt-4 text-4xl font-semibold text-white md:text-5xl">
              {pkg.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/70">{pkg.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
                <Clock size={12} className="text-[#c9964a]" /> {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
                <Users size={12} className="text-[#c9964a]" /> Private Vehicle (Taxi)
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
                <Star size={12} className="text-[#c9964a] fill-[#c9964a]" /> 4.9 Rated
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          {allImgs.length > 1 && (
            <div className="mt-8 flex gap-2">
              {allImgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setHeroImg(i)}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    heroImg === i ? 'border-[#c9964a] opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt={`${pkg.title} – photo ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Main content + Sidebar ─────────────────────────────── */}
      <section className="bg-[#fffaf3] py-14 dark:bg-[#060f1e]">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">

          {/* ── LEFT: content ──────────────────────────────── */}
          <div className="flex flex-col gap-12">

            {/* About */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">
                About This Package
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display mt-2 text-2xl font-semibold text-[#0d1b2a] dark:text-white">
                What's Included
              </motion.h2>
              <div className="mt-3 h-px w-12 bg-[#c9964a]" />
              <motion.p variants={fadeUp} className="mt-5 text-sm leading-8 text-[#4b5563] dark:text-white/70">
                {pkg.about}
              </motion.p>

              {/* Highlights */}
              <motion.ul variants={fadeUp} className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#384252] dark:text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9964a]/12 text-[#c9964a]">
                      <Check size={12} />
                    </span>
                    {h}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Itinerary */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Day by Day</p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-[#0d1b2a] dark:text-white">
                Your Itinerary
              </h2>
              <div className="mt-3 h-px w-12 bg-[#c9964a]" />

              <div className="relative mt-8">
                {/* Vertical line */}
                <div className="absolute left-[22px] top-0 h-full w-px bg-[#c9964a]/20" />

                <div className="flex flex-col gap-8">
                  {pkg.itinerary.map((step, i) => (
                    <motion.div
                      key={i}
                      className="relative flex gap-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: i * 0.07 }}
                    >
                      {/* Circle */}
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#c9964a] bg-[#fffaf3] dark:bg-[#060f1e]">
                        <span className="text-xs font-bold text-[#c9964a]">{String(i + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="pt-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#c9964a]">{step.time}</p>
                        <h3 className="mt-1 text-sm font-bold text-[#0d1b2a] dark:text-white">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-[#6b7280] dark:text-white/60">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#eadbc7] bg-white p-6 dark:border-[#c9964a]/20 dark:bg-[#0a1829]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#c9964a]">What's Included</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#384252] dark:text-white/80">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#eadbc7] bg-white p-6 dark:border-[#c9964a]/20 dark:bg-[#0a1829]">
                <p className="text-xs font-bold uppercase tracking-widest text-rose-500">Not Included</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#6b7280] dark:text-white/60">
                      <X size={14} className="mt-0.5 shrink-0 text-rose-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── RIGHT: sticky booking sidebar ───────────────── */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-[0_20px_48px_rgba(13,27,42,0.12)] dark:border-[#c9964a]/25 dark:bg-[#0a1829]">

              {/* Price header */}
              <div className="navy-gradient px-6 py-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Starting from</p>
                <p className="font-display mt-1 text-3xl font-semibold text-[#c9964a]">
                  {pkg.price.replace(' /-', '')}
                </p>
                <p className="mt-0.5 text-xs text-white/50">{pkg.priceNote}</p>

                <div className="mt-4 flex items-center gap-1.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={13} className="fill-[#c9964a] text-[#c9964a]" />
                  ))}
                  <span className="ml-1 text-xs text-white/60">4.9 (200+ reviews)</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 p-6">
                <Link
                  to="/book"
                  state={{ package: pkg.title }}
                  className="gold-gradient flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold text-white shadow-lg shadow-[#c9964a]/25 transition hover:opacity-90"
                >
                  <Calendar size={16} /> Book This Package
                </Link>
                <a
                  href={waLink(pkg)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#25D366] py-3.5 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon size={18} className="text-current" /> Enquire on WhatsApp
                </a>
              </div>

              {/* Quick facts */}
              <div className="border-t border-[#eadbc7] px-6 py-5 dark:border-[#c9964a]/15">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] dark:text-white/40">
                  Package Details
                </p>
                <dl className="mt-3 flex flex-col gap-3">
                  {[
                    { label: 'Duration', value: pkg.duration },
                    { label: 'Group Type', value: 'Private (exclusive cab)' },
                    { label: 'Pickup', value: 'From your location' },
                    { label: 'Availability', value: 'Year-round' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-xs">
                      <dt className="text-[#9ca3af] dark:text-white/40">{label}</dt>
                      <dd className="font-semibold text-[#0d1b2a] dark:text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#eadbc7] bg-white py-3 text-xs font-bold text-[#6b7280] transition hover:border-[#c9964a] hover:text-[#c9964a] dark:border-[#c9964a]/20 dark:bg-[#0a1829] dark:text-white/50"
            >
              <ArrowLeft size={13} /> Back to All Packages
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Related Packages ───────────────────────────────────── */}
      <section className="border-t border-[#eadbc7] bg-white py-14 dark:border-[#c9964a]/15 dark:bg-[#060f1e]">
        <div className="section-shell">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">You May Also Like</p>
              <h2 className="font-display mt-1 text-2xl font-semibold text-[#0d1b2a] dark:text-white">
                Other Packages
              </h2>
            </div>
            <Link
              to="/packages"
              className="hidden items-center gap-1.5 text-xs font-bold text-[#c9964a] hover:underline sm:flex"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((rp) => (
              <Link
                key={rp.id}
                to={`/packages/${rp.id}`}
                className="group overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-sm transition hover:shadow-md dark:border-[#c9964a]/20 dark:bg-[#0a1829]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={rp.image} alt={rp.title} className="h-full w-full object-cover card-img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/70 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#c9964a] px-2.5 py-0.5 text-[10px] font-bold text-white">
                    {rp.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#0d1b2a] dark:text-white">{rp.title}</h3>
                  <p className="mt-0.5 text-xs text-[#6b7280] dark:text-white/50">{rp.duration}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-semibold text-[#c9964a]">{rp.price.replace(' /-', '')}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-[#c9964a] group-hover:gap-2 transition-all">
                      View <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
