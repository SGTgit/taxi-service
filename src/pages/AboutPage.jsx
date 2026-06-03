import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Shield, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import { stats } from '../data/siteData.jsx';
import StatCard from '../components/cards/StatCard.jsx';
import SEO from '../components/ui/SEO.jsx';

const values = [
  { icon: Heart,   title: 'Customer First',    body: 'Every trip is planned around comfort, punctuality and clear communication.' },
  { icon: Shield,  title: 'Safety & Comfort',  body: 'Well-maintained vehicles, verified drivers, and 24/7 support ensure a worry-free experience.' },
  { icon: Star,    title: 'Vedic Quality',   body: 'From the vehicles to service delivery, we maintain high standards at every step.' },
  { icon: Target,  title: 'Personalised Care', body: "Every booking is tailored to your group's needs, timing, and budget." },
];

const milestones = [
  { year: '2014', event: 'Founded in Vrindavan with a single cab and a passion for reliable transport services.' },
  { year: '2016', event: 'Expanded fleet to 10+ vehicles. Began offering corporate and group transfer solutions.' },
  { year: '2019', event: 'Reached 2,000+ happy customers. Added Mathura and Barsana routes.' },
  { year: '2022', event: 'Introduced comfortable SUV options and premium coach hire services with Vedic hospitality.' },
  { year: '2024', event: 'Crossed 5,000+ satisfied customers. Launched 24/7 concierge support.' },
];

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Our Story Since 2014"
        description="Founded in 2014 in Vrindavan, Gautam Taxi and Bus has been offering trusted pilgrimage and cab services across the Braj Mandal for over a decade. Meet our team and our story."
        path="/about"
      />
      {/* Page Hero */}
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-[#0d1b2a] pb-16 pt-40">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/assets/whychooseus.webp"
          alt="Vrindavan corridor"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" />
        <motion.div
          className="section-shell relative z-10"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">
            Our Story
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">
            About Gautam Taxi & Bus
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-7 text-white/75">
            A decade of trust and seamless transport services across Vrindavan and surrounding regions.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Who We Are</motion.p>
            <motion.h2 variants={fadeUp} className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">
              Born from a Love for Vrindavan
            </motion.h2>
            <div className="mt-4 h-px w-16 bg-[#c9964a]" />
            <motion.p variants={fadeUp} className="mt-6 text-sm leading-8 text-[#4b5563] dark:text-white/75">
              Gautam Taxi and Bus was founded in 2014 by a family with one simple mission — to make travel
              effortless, comfortable and dependable. Over the years we have served thousands of customers,
              growing from a single car into a modern fleet serving Vrindavan, Mathura and nearby regions.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-8 text-[#4b5563] dark:text-white/75">
              We believe that the journey to a sacred place should itself feel sacred — calm, unhurried and full of
              warmth. That belief shapes every decision we make, from the vehicles we choose to the drivers we hire.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link to="/contact" className="gold-gradient inline-flex items-center gap-3 rounded px-6 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25">
                Plan Your Journey <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img className="h-full min-h-[380px] w-full object-cover" src="/assets/whychooseus.webp" alt="Vrindavan temple" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#c9964a]/30" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5ebdd] py-20 dark:bg-[#0a1829]">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">What Drives Us</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">Our Core Values</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[#c9964a]" />
          </div>
          <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {values.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-xl border border-[#eadbc7] bg-white p-7 dark:border-[#c9964a]/25 dark:bg-[#060f1e]">
                <div className="mb-4 inline-flex rounded-full bg-[#c9964a]/10 p-3">
                  <Icon size={24} className="text-[#c9964a]" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-[#0d1b2a] dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280] dark:text-white/70">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="navy-gradient py-16 text-white">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">By the Numbers</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">A Decade of Milestones</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[#c9964a]" />
          </div>
          <motion.div className="grid gap-8 sm:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </motion.div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-20">
        <div className="section-shell">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Timeline</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">Our Journey So Far</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[#c9964a]" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-6 top-0 h-full w-px bg-[#c9964a]/30" />
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                className="relative mb-10 pl-16"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
              >
                <span className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c9964a] bg-[#fffaf3] text-xs font-bold text-[#c9964a] dark:bg-[#060f1e]">
                  {year}
                </span>
                <p className="pt-3 text-sm leading-7 text-[#4b5563] dark:text-white/75">{event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5ebdd] py-16 dark:bg-[#0a1829]">
        <div className="section-shell text-center">
          <Award size={44} className="mx-auto text-[#c9964a]" strokeWidth={1.5} />
          <h2 className="font-display mt-5 text-3xl font-semibold text-[#0d1b2a] dark:text-white">Ready to Experience the Difference?</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6b7280] dark:text-white/70">
            Let us take care of every detail so you can focus on your spiritual journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/packages" className="gold-gradient inline-flex items-center gap-3 rounded px-7 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25">
              View Packages <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 rounded border border-[#c9964a] px-7 py-4 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
