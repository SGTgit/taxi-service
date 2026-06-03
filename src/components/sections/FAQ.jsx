import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx';
import { fadeUp, stagger } from '../../lib/motion.js';
import { WA_LINK } from '../../config/business.js';

const faqs = [
  {
    q: 'What is included in your tour packages?',
    a: 'Our packages include a private air-conditioned cab, professional driver, guided temple visits, and optional hotel stays. Meals are included in select packages — the details are mentioned on each package card.',
  },
  {
    q: 'How do I book a cab or tour?',
    a: 'Simply fill out our booking form and your details are sent directly to us on WhatsApp. Our team will call you back within 15 minutes to confirm your booking and finalize the itinerary.',
  },
  {
    q: 'Can I get a custom itinerary for my group?',
    a: 'Absolutely! We specialise in custom group packages. Share your group size, dates, preferred destinations, and budget — we\'ll put together a tailored plan at no extra charge.',
  },
  {
    q: 'What vehicles do you have for large groups?',
    a: 'We have Tempo Travellers (12–16 seater), Innova Crysta (7 seater), and comfort SUVs and coaches for groups. For very large groups of 30+, we can arrange multiple vehicles with a dedicated coordinator.',
  },
  {
    q: 'Is the driver experienced with pilgrimage routes?',
    a: 'Yes. All our drivers are local, experienced, and familiar with every temple, ghat, and sacred site in the Braj Mandal region. Many have been with us for 5+ years.',
  },
  {
    q: 'Do you operate during festivals like Holi and Janmashtami?',
    a: 'Yes — in fact, festival seasons are our speciality! We offer dedicated Janmashtami, Holi, Radhashtami, and Govardhan Puja packages. Slots fill quickly so early booking is recommended.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI (GPay, PhonePe, Paytm), NEFT/bank transfer, and card payments. A small advance is required to confirm the booking; the remaining amount can be paid on the day of travel.',
  },
  {
    q: 'Is there a cancellation policy?',
    a: 'Yes. Cancellations made 48+ hours before the trip are fully refunded. Cancellations within 24–48 hours attract a 25% fee. No-shows or same-day cancellations are non-refundable. Festival packages have a stricter policy.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? 'border-[#c9964a]/50 bg-[#fffaf3] shadow-[0_4px_20px_rgba(201,150,74,0.1)] dark:bg-[#0a1829]'
          : 'border-[#eadbc7] bg-white hover:border-[#c9964a]/30 dark:border-[#c9964a]/15 dark:bg-[#0a1829]/50 dark:hover:border-[#c9964a]/30'
      }`}
    >
      <button
        id={`faq-btn-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className={`shrink-0 text-xs font-bold tabular-nums transition-colors ${isOpen ? 'text-[#c9964a]' : 'text-[#c9964a]/50'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-[#c9964a]' : 'text-[#0d1b2a] dark:text-white'}`}>
            {item.q}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#c9964a] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="px-6 pb-5 pl-[3.5rem] text-sm leading-7 text-[#4b5563] dark:text-white/65">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns for desktop
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section className="bg-white py-16 transition-colors dark:bg-[#060f1e]">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Got Questions?</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-px w-14 bg-[#c9964a]" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#6b7280] dark:text-white/50">
            Everything you need to know before booking your pilgrimage with us.
          </p>
        </motion.div>

        {/* FAQ grid — single col mobile, 2-col desktop */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} variants={stagger}
          >
            {col1.map((item, i) => (
              <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} onToggle={toggle} />
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} variants={stagger}
          >
            {col2.map((item, i) => {
              const globalIndex = i + half;
              return (
                <FAQItem key={globalIndex} item={item} index={globalIndex} isOpen={openIndex === globalIndex} onToggle={toggle} />
              );
            })}
          </motion.div>
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[#c9964a]/40 py-8 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-[#0d1b2a] dark:text-white">Still have questions?</p>
          <p className="text-xs text-[#6b7280] dark:text-white/50">We're happy to help — reach us directly on WhatsApp.</p>
          <a
            href={WA_LINK}
            target="_blank" rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#25D366]/25 transition hover:bg-[#1ebe5c]"
          >
            <WhatsAppIcon size={16} className="text-white" /> Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
