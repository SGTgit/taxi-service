import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { fadeUp, stagger } from '../lib/motion.js';
import { BUSINESS, WA_LINK, TEL1, MAILTO, MAP_LINK } from '../config/business.js';
import SEO from '../components/ui/SEO.jsx';

const contactDetails = [
  { icon: Phone,         label: 'Call Us',    value: BUSINESS.phone1, href: TEL1 },
  { icon: MessageCircle, label: 'WhatsApp',   value: BUSINESS.phone1, href: WA_LINK },
  { icon: Mail,          label: 'Email Us',   value: BUSINESS.email,  href: MAILTO },
  { icon: MapPin,        label: 'Our Office', value: BUSINESS.address, href: MAP_LINK },
];

const faqs = [
  { q: 'Do you offer airport pickup from Agra or Delhi?',         a: 'Yes, we provide pickup and drop from Delhi, Agra, Mathura Railway Station, and Yamuna Expressway.' },
  { q: 'Are the vehicles air-conditioned?',                       a: 'All our vehicles are fully air-conditioned and sanitized before every trip.' },
  { q: 'Can I modify my itinerary after booking?',                a: 'Yes, modifications can be made up to 24 hours before the journey start time at no extra cost.' },
  { q: 'Do you arrange accommodation in Vrindavan?',              a: 'Yes, we have tie-ups with dharamshalas, guesthouses and premium hotels across Vrindavan and Mathura.' },
];

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', destination: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | Get in Touch"
        description="Contact Gautam Taxi and Bus via phone, WhatsApp, or email. Visit our office near Banke Bihari Temple, Vrindavan. We're available 24/7 for taxi, transfer and coach enquiries."
        path="/contact"
        image="/assets/og/contact.svg"
        faq={faqs}
      />
      {/* Hero */}
      <section className="relative flex min-h-65 md:min-h-95 items-end overflow-hidden bg-[#0d1b2a] pb-14 pt-28 md:pt-36">
        <img className="absolute inset-0 h-full w-full object-cover opacity-20" src="/assets/gallery-4.webp" alt="Contact Gautam Taxi and Bus – Nidhivan Vrindavan" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" />
        <motion.div className="section-shell relative z-10" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Get in Touch</motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">Contact Us</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-7 text-white/75">
            Ready to plan your spiritual journey? Reach out and we'll get back to you within a few hours.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left: details */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Reach Us</motion.p>
            <motion.h2 variants={fadeUp} className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white">We'd Love to Hear From You</motion.h2>
            <div className="mt-3 h-px w-14 bg-[#c9964a]" />
              <motion.p variants={fadeUp} className="mt-5 text-sm leading-7 text-[#4b5563] dark:text-white/70">
                Whether you're planning an airport transfer, family outing, or corporate group transfer — our team is ready to help.
              </motion.p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-[#eadbc7] bg-white p-4 md:p-5 transition hover:border-[#c9964a] hover:shadow-[0_6px_20px_rgba(201,150,74,0.15)] dark:border-[#c9964a]/20 dark:bg-[#0a1829]"
                >
                  <div className="rounded-full bg-[#c9964a]/10 p-2 md:p-3">
                    <Icon size={18} className="text-[#c9964a]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#c9964a]">{label}</p>
                    <p className="mt-1 text-sm text-[#0d1b2a] dark:text-white">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map embed */}
            <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-xl border border-[#eadbc7] dark:border-[#c9964a]/20">
              <iframe
                title="Vrindavan Map"
                src={BUSINESS.mapEmbed}
                className="w-full h-48 md:h-60"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="rounded-2xl border border-[#eadbc7] bg-white p-6 shadow-[0_16px_40px_rgba(13,27,42,0.1)] dark:border-[#c9964a]/20 dark:bg-[#0a1829] md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle size={56} className="text-[#c9964a]" strokeWidth={1.5} />
                <h3 className="font-display mt-5 text-2xl font-semibold text-[#0d1b2a] dark:text-white">Thank You!</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#6b7280] dark:text-white/70">
                  We've received your message and will get back to you within a few hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded border border-[#c9964a] px-6 py-3 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#0d1b2a] dark:text-white">Send Us a Message</h3>
                <p className="mt-1 text-sm text-[#6b7280] dark:text-white/60">We'll respond within a few hours.</p>
                <form onSubmit={handleSubmit} className="mt-7 grid gap-5 grid-cols-1 sm:grid-cols-2">
                  {[
                    { name: 'name',  label: 'Full Name',    type: 'text',  placeholder: 'Rahul Sharma',         col: '' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com',    col: '' },
                    { name: 'phone', label: 'Phone Number',  type: 'tel',   placeholder: BUSINESS.phone1,  col: '' },
                    { name: 'date',  label: 'Travel Date',   type: 'date',  placeholder: '',                     col: '' },
                  ].map(({ name, label, type, placeholder, col }) => (
                    <div key={name} className={`flex flex-col gap-1.5 ${col}`}>
                      <label className="text-xs font-bold uppercase tracking-wide text-[#6b7280] dark:text-white/60">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="rounded-lg border border-[#eadbc7] bg-[#fffaf3] px-4 py-3 text-sm text-[#0d1b2a] outline-none transition focus:border-[#c9964a] focus:ring-2 focus:ring-[#c9964a]/20 dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-[#6b7280] dark:text-white/60">Destination</label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-[#eadbc7] bg-[#fffaf3] px-4 py-3 text-sm text-[#0d1b2a] outline-none transition focus:border-[#c9964a] dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                    >
                      <option value="">Select destination</option>
                      <option>Vrindavan</option>
                      <option>Mathura</option>
                      <option>Govardhan</option>
                      <option>Barsana</option>
                      <option>Nandgaon</option>
                      <option>Full Braj Circuit</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-[#6b7280] dark:text-white/60">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your group size, special requirements or any questions..."
                      className="rounded-lg border border-[#eadbc7] bg-[#fffaf3] px-4 py-3 text-sm text-[#0d1b2a] outline-none transition focus:border-[#c9964a] focus:ring-2 focus:ring-[#c9964a]/20 dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                    />
                  </div>

                  <button type="submit" className="gold-gradient sm:col-span-2 flex w-full items-center justify-center gap-3 rounded py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/25 transition hover:opacity-90">
                    Send Message <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5ebdd] py-16 dark:bg-[#0a1829]">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Common Questions</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-[#0d1b2a] dark:text-white">Frequently Asked Questions</h2>
            <div className="mx-auto mt-3 h-px w-16 bg-[#c9964a]" />
          </div>
          <motion.div className="mx-auto max-w-3xl grid gap-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {faqs.map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp} className="rounded-xl border border-[#eadbc7] bg-white p-6 dark:border-[#c9964a]/20 dark:bg-[#060f1e]">
                <h3 className="text-sm font-bold text-[#0d1b2a] dark:text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-[#4b5563] dark:text-white/70">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
