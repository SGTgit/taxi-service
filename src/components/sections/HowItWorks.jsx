import { motion } from 'framer-motion';
import { ArrowRight, Car, CheckCircle2, ClipboardList, MessageCircle } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx';
import { Link } from 'react-router-dom';
import { stagger, fadeUp } from '../../lib/motion.js';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Fill the Booking Form',
    desc: 'Share your travel dates, group size, destination, and vehicle preference in our quick booking form.',
    cta: { label: 'Open Form', to: '/book' },
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'We Receive on WhatsApp',
    desc: 'Your details are sent directly to our WhatsApp — instantly, no emails, no waiting. We get it the moment you submit.',
    highlight: true,
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'We Call & Confirm',
    desc: 'Our team reaches out within minutes to confirm your booking, finalize the itinerary, and answer any questions.',
  },
  {
    number: '04',
    icon: Car,
    title: 'Travel in Comfort',
    desc: 'Your vehicle arrives on time. Sit back and enjoy a safe, comfortable, and spiritually enriching journey.',
  },
];

import { WA_LINK } from '../../config/business.js';

export default function HowItWorks() {
  return (
    <section className="bg-[#fffaf3] py-16 dark:bg-[#060f1e]">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Simple &amp; Instant</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">
            How Booking Works
          </h2>
          <div className="mx-auto mt-3 h-px w-14 bg-[#c9964a]" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#6b7280] dark:text-white/55">
            Fill a quick form → we receive it on WhatsApp → confirm your booking. That's it.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          {/* Connecting dashed line — desktop only */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px border-t-2 border-dashed border-[#c9964a]/25 lg:block" />

          {steps.map(({ number, icon: Icon, title, desc, highlight, cta }) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative z-10 mb-5">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  highlight
                    ? 'border-[#25D366] bg-[#25D366]/8 dark:bg-[#25D366]/12'
                    : 'border-[#c9964a]/30 bg-[#fffaf3] group-hover:border-[#c9964a] dark:bg-[#0a1829]'
                }`}>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                    highlight
                      ? 'bg-[#25D366]/15 group-hover:bg-[#25D366]'
                      : 'bg-[#c9964a]/10 group-hover:bg-[#c9964a] dark:bg-[#c9964a]/15'
                  }`}>
                    <Icon
                      size={20}
                      className={`transition-colors duration-300 group-hover:text-white ${
                        highlight ? 'text-[#25D366]' : 'text-[#c9964a]'
                      }`}
                    />
                  </div>
                </div>

                {/* Step number badge */}
                <span className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ${
                  highlight ? 'bg-[#25D366]' : 'bg-[#c9964a]'
                }`}>
                  {number}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0d1b2a] dark:text-white">{title}</h3>

              {/* WhatsApp label */}
              {highlight && (
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#25D366]/12 px-2.5 py-0.5 text-[10px] font-bold text-[#25D366]">
                  <WhatsAppIcon size={11} className="text-[#25D366]" /> via WhatsApp
                </span>
              )}

              <p className="mt-2 text-sm leading-6 text-[#6b7280] dark:text-white/55">{desc}</p>

              {cta && (
                <Link
                  to={cta.to}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#c9964a] transition hover:gap-3"
                >
                  {cta.label} <ArrowRight size={12} />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#eadbc7] bg-white px-6 py-7 text-center shadow-sm premium-card sm:flex-row sm:text-left"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-1">
            <p className="text-sm font-bold text-[#0d1b2a] dark:text-white">Ready to plan your trip?</p>
            <p className="mt-1 text-xs text-[#6b7280] dark:text-white/50">
              Fill the form and we'll confirm your booking on WhatsApp — usually within 15 minutes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            <Link
              to="/book"
              className="gold-gradient inline-flex items-center gap-2 rounded px-5 py-2.5 text-xs font-bold uppercase text-white shadow"
            >
              Book Now <ArrowRight size={13} />
            </Link>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#25D366] px-5 py-2.5 text-xs font-bold uppercase text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon size={15} className="text-current" /> WhatsApp Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
