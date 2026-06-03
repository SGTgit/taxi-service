import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { features } from '../../data/siteData.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import FeatureCard from '../cards/FeatureCard.jsx';
import { fadeUp, stagger } from '../../lib/motion.js';

function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className="hero-stage relative overflow-hidden pb-8 pt-24 md:pb-10 md:pt-28">
      <div className="section-shell relative grid items-center gap-8 lg:grid-cols-[0.38fr_0.62fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="z-30 max-w-[460px] pb-3 pt-10 md:pt-12">
          <motion.p variants={fadeUp} className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#c9964a]">
            Vedic Vrindavan Journeys
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-2 text-[32px] font-semibold leading-[1.12] text-[#0d1b2a] dark:text-white sm:text-[38px] lg:text-[40px] xl:text-[44px]">
            Premium Pilgrimage <span className="text-[#c9964a]">Taxi &amp; Tour Packages</span> in Vrindavan
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 max-w-[340px] text-sm leading-7 text-[#0d1b2a] dark:text-white/90">
            Respectful taxi and coach services across Vrindavan — comfortable, attentive and inspired by local tradition to support your spiritual visit.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#packages"
            className="gold-gradient mt-2 inline-flex items-center justify-center gap-4 rounded px-6 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25"
          >
            Discover More <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-image-panel relative min-h-[320px] overflow-hidden -mr-[18px] md:mr-0 md:min-h-[420px] lg:-ml-12 lg:-mr-[calc((100vw-1180px)/2)] lg:min-h-[470px]"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.18 }}
        >
          <img className="absolute inset-0 h-full w-full object-cover" src={isDark ? '/assets/vechiles/hero-car-temple-dark.webp' : '/assets/vechiles/hero-car-temple.webp'} alt="Vedic taxi for Vrindavan temple tours" fetchPriority="high" loading="eager" />
          <div className="hero-gold-line" />
        </motion.div>
      </div>

      <HeroFeatures />
    </section>
  );
}

function HeroFeatures() {
  return (
    <motion.div
      id="services"
      className="relative z-20 -mt-10 md:-mt-6"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Outer scroll container — full bleed on mobile, section-shell on desktop */}
      <div className="section-shell">
        <div className="navy-gradient rounded-2xl border-2 border-white text-white shadow-[0_12px_28px_rgba(13,27,42,0.2)] dark:border-[#c9964a]/70 dark:shadow-[0_12px_32px_rgba(0,0,0,0.38)] md:rounded-[22px] md:border-2">

          {/* Mobile: horizontal scroll row | Desktop: 5-col grid */}
          <div className="flex overflow-x-auto no-scrollbar divide-x divide-[#c9964a]/30 md:grid md:grid-cols-5 md:overflow-visible md:divide-x">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Hero;

