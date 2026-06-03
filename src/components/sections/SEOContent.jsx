import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Car, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../../lib/motion.js';

/**
 * SEOContent — visible text block beneath the Hero.
 * Provides 300+ words of crawlable, keyword-rich copy about the
 * business, fleet, pilgrimage circuits and services so that search
 * engines can index real content on the homepage.
 */
export default function SEOContent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[#fffaf3] py-16 transition-colors dark:bg-[#060f1e]">
      <div className="section-shell">
        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]"
            >
              About Our Services
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display mt-1 text-2xl font-semibold leading-tight text-[#0d1b2a] dark:text-white sm:text-3xl md:text-[34px]"
            >
              Trusted Taxi &amp; Tour Services Across Vrindavan &amp; Mathura
            </motion.h2>

            <motion.div variants={fadeUp} className="h-px w-16 bg-[#c9964a]" />

            {/* Feature pills */}
            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap gap-2"
            >
              {[
                { icon: Car, label: 'Modern AC Fleet' },
                { icon: MapPin, label: 'Braj Mandal Routes' },
                { icon: Shield, label: 'Verified Drivers' },
                { icon: Clock, label: '24/7 Support' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-[#eadbc7] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0d1b2a] dark:border-[#c9964a]/25 dark:bg-[#0a1829] dark:text-white/80"
                >
                  <Icon size={12} className="text-[#c9964a]" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-3">
              <Link
                to="/book"
                className="gold-gradient inline-flex items-center gap-3 rounded px-6 py-3 text-xs font-bold uppercase text-white shadow-lg shadow-[#c9964a]/20 transition hover:opacity-90"
              >
                Book Your Taxi Now <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Text Paragraphs inside Glassmorphic Card */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="premium-card premium-corners rounded-2xl border border-[#eadbc7] bg-white p-6 shadow-[0_12px_32px_rgba(13,27,42,0.08)] dark:bg-[#0a1829] md:p-8">
              <div className="relative">
                {/* Expander container */}
                <div
                  className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                    expanded ? 'max-h-[1200px]' : 'max-h-[180px] md:max-h-none'
                  }`}
                >
                  <div className="columns-1 gap-6 text-[13px] leading-7 text-[#4b5563] dark:text-white/70 md:columns-2 md:text-[13px] md:leading-7">
                    <p className="mb-4 break-inside-avoid">
                      <strong>Gautam Taxi and Bus</strong> is Vrindavan's most trusted taxi and coach hire service, with over 10 years
                      of experience helping pilgrims, families and groups explore the sacred Braj Mandal circuit.
                      Whether you need a comfortable cab for Vrindavan temple darshan, an airport transfer from Delhi or Agra,
                      or a full-day coach for large group pilgrimage yatras, our fleet and professional drivers ensure
                      every journey is safe, punctual and spiritually fulfilling.
                    </p>

                    <p className="mb-4 break-inside-avoid">
                      We offer a wide range of <strong>pilgrimage tour packages</strong> covering every major temple and sacred site
                      in the region — from the beloved <strong>Banke Bihari Temple</strong> and <strong>Prem Mandir</strong> in Vrindavan,
                      to <strong>Krishna Janmabhoomi</strong> in Mathura, <strong>Govardhan Parikrama</strong>, and the
                      festive Lathmar Holi celebrations at Barsana and Nandgaon. Each itinerary is crafted by locals who know
                      every ghat, grove and temple lane in the Braj region.
                    </p>

                    <p className="mb-4 break-inside-avoid">
                      Our fleet includes air-conditioned hatchbacks, SUVs like Innova Crysta, Tempo Travellers for groups of
                      12–16, and coaches for large yatra parties of 30 or more. Every vehicle is well-maintained, GPS-equipped,
                      and driven by experienced, background-verified drivers who are familiar with pilgrimage routes across
                      Uttar Pradesh and beyond.
                    </p>

                    <p className="break-inside-avoid">
                      <strong>Book a taxi in Vrindavan</strong> through our simple online form — your booking details are
                      sent directly to our team on WhatsApp, and we confirm within minutes. We also offer custom itineraries
                      for families, corporate groups and spiritual retreat organisers. Festival season packages — including
                      Janmashtami, Radhashtami, Govardhan Puja and Kartik Maas — are available with early-bird booking
                      discounts.
                    </p>
                  </div>
                </div>

                {/* Gradient fade overlay — visible only when collapsed on mobile */}
                {!expanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0a1829] dark:via-[#0a1829]/80 to-transparent pointer-events-none md:hidden" />
                )}
              </div>

              {/* Read More / Read Less button — mobile only */}
              <div className="mt-4 text-center md:hidden border-t border-[#eadbc7]/30 pt-3 dark:border-[#c9964a]/10">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9964a] hover:text-[#d4a255] transition-colors cursor-pointer"
                >
                  {expanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
