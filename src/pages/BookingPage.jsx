import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Phone, Calendar, MapPin, Users, Car,
  Package, MessageSquare, ArrowRight, CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import SEO from '../components/ui/SEO.jsx';
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx';

/* ─── Business WhatsApp number (no + or spaces) ─── */
import { BUSINESS, WA_BOOKING_LINK, TEL1 } from '../config/business.js';
const WA_NUMBER = BUSINESS.whatsapp;

const destinations = [
  'Banke Bihari Temple', 'Prem Mandir', 'Iskcon Temple', 'Nidhivan',
  'Radha Raman Temple', 'Dwarkadhish Temple (Mathura)', 'Govardhan Parvat',
  'Radha Kund', 'Nandgaon', 'Barsana', 'Full Vrindavan Circuit',
  'Mathura + Vrindavan', 'Braj 84 Kos Yatra', 'Custom / Multiple',
];

const vehicles = [
  'Sedan / Hatchback (1–4 pax)',
  'Innova / SUV (1–6 pax)',
  'Tempo Traveller (7–12 pax)',
  'Comfort Coach (13+ pax)',
];

const packages = [
  '1-Day Temple Circuit',
  '2 Days / 1 Night',
  '3 Days / 2 Nights',
  '4 Days / 3 Nights',
  'Custom Duration',
];

const EMPTY = {
  name: '', phone: '', date: '', returnDate: '',
  pickup: '', destination: '', persons: '', vehicle: '', pkg: '', note: '',
};

function Field({ label, icon: Icon, error, children }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0d1b2a] dark:text-white/80">
        <Icon size={13} className="text-[#c9964a]" /> {label}
      </label>
      {children}
      {error && <p className="text-[11px] text-rose-500">{error}</p>}
    </motion.div>
  );
}

const inputCls =
  'w-full rounded-lg border border-[#e5d5c0] bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none transition focus:border-[#c9964a] focus:ring-2 focus:ring-[#c9964a]/20 dark:border-[#c9964a]/30 dark:bg-[#0a1829] dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#c9964a]';

function BookingPage() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name        = 'Full name is required.';
    if (!form.phone.trim())       e.phone       = 'Mobile number is required.';
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number.';
    if (!form.date)               e.date        = 'Travel date is required.';
    if (!form.destination)        e.destination = 'Please select a destination.';
    if (!form.persons)            e.persons     = 'Number of persons is required.';
    if (!form.vehicle)            e.vehicle     = 'Please choose a vehicle type.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `🙏 *New Booking Request — ${BUSINESS.name}*`,
      '',
      `👤 *Name:* ${form.name}`,
      `📞 *Mobile:* ${form.phone}`,
      `📅 *Travel Date:* ${form.date}`,
      form.returnDate ? `🔙 *Return Date:* ${form.returnDate}` : null,
      form.pickup ? `🚏 *Pickup Location:* ${form.pickup}` : null,
      `🏛️ *Destination:* ${form.destination}`,
      `👥 *No. of Persons:* ${form.persons}`,
      `🚗 *Vehicle:* ${form.vehicle}`,
      form.pkg ? `📦 *Package:* ${form.pkg}` : null,
      form.note ? `📝 *Special Requests:* ${form.note}` : null,
      '',
      `_Sent via ${BUSINESS.domain} booking form_`,
    ]
      .filter((l) => l !== null)
      .join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener');
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <>
      <SEO
        title="Book Now | Instant WhatsApp Booking"
        description="Book your taxi, transfer or coach hire with Gautam Tours & Travels. Fill the quick form and receive confirmation on WhatsApp within minutes."
        path="/book"
      />
      {/* ── Hero ── */}
      <section className="relative flex min-h-[340px] items-end overflow-hidden bg-[#0d1b2a] pb-16 pt-36">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          src="/assets/vechiles/hero-car-temple.webp" alt="Book a taxi or cab in Vrindavan – Gautam Taxi and Bus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/70 to-transparent" />
        <motion.div
          className="section-shell relative z-10"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9964a]">
            Hassle-Free Booking
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">
            Book Your Journey
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Fill in your travel details and we'll confirm your booking on WhatsApp within minutes.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Form Section ── */}
      <section className="bg-[#fffaf3] py-20 transition-colors dark:bg-[#060f1e]">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_340px]">

          {/* ── Main Form ── */}
          <motion.div
            className="rounded-2xl border border-[#e5d5c0] bg-white p-8 shadow-[0_20px_50px_rgba(13,27,42,0.09)] dark:border-[#c9964a]/25 dark:bg-[#0a1829] md:p-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-display text-xl font-bold text-[#0d1b2a] dark:text-white">
              Travel Details
            </h2>
            <p className="mt-1 text-xs text-[#6b7280] dark:text-white/50">
              All fields marked with <span className="text-rose-500">*</span> are required.
            </p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-emerald-50 py-12 text-center dark:bg-emerald-900/20"
                >
                  <CheckCircle size={44} className="text-emerald-500" />
                  <div>
                    <p className="text-base font-bold text-emerald-700 dark:text-emerald-400">
                      Booking Sent to WhatsApp!
                    </p>
                    <p className="mt-1 text-xs text-emerald-600/80 dark:text-emerald-400/70">
                      We've opened WhatsApp with your details. We'll confirm your booking shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs font-bold uppercase text-[#c9964a] underline underline-offset-2"
                  >
                    Make another booking
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  variants={stagger}
                >
                  {/* Name */}
                  <Field label="Full Name *" icon={User} error={errors.name}>
                    <input className={inputCls} placeholder="e.g. Ramesh Sharma" value={form.name} onChange={set('name')} />
                  </Field>

                  {/* Phone */}
                  <Field label="Mobile Number *" icon={Phone} error={errors.phone}>
                    <input className={inputCls} type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set('phone')} maxLength={10} />
                  </Field>

                  {/* Travel Date */}
                  <Field label="Travel Date *" icon={Calendar} error={errors.date}>
                    <input className={inputCls} type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().split('T')[0]} />
                  </Field>

                  {/* Return Date */}
                  <Field label="Return Date (optional)" icon={Calendar} error={null}>
                    <input className={inputCls} type="date" value={form.returnDate} onChange={set('returnDate')} min={form.date || new Date().toISOString().split('T')[0]} />
                  </Field>

                  {/* Pickup */}
                  <Field label="Pickup Location" icon={MapPin} error={null}>
                    <input className={inputCls} placeholder="City, railway station, hotel…" value={form.pickup} onChange={set('pickup')} />
                  </Field>

                  {/* Destination */}
                  <Field label="Destination *" icon={MapPin} error={errors.destination}>
                    <select className={inputCls} value={form.destination} onChange={set('destination')}>
                      <option value="">Select destination</option>
                      {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </Field>

                  {/* Persons */}
                  <Field label="No. of Persons *" icon={Users} error={errors.persons}>
                    <input className={inputCls} type="number" min={1} max={200} placeholder="e.g. 4" value={form.persons} onChange={set('persons')} />
                  </Field>

                  {/* Vehicle */}
                  <Field label="Vehicle Type *" icon={Car} error={errors.vehicle}>
                    <select className={inputCls} value={form.vehicle} onChange={set('vehicle')}>
                      <option value="">Select vehicle</option>
                      {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </Field>

                  {/* Package */}
                  <Field label="Package Duration" icon={Package} error={null}>
                    <select className={inputCls} value={form.pkg} onChange={set('pkg')}>
                      <option value="">Select package (optional)</option>
                      {packages.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </Field>

                  {/* Note — full width */}
                  <div className="sm:col-span-2">
                    <Field label="Special Requests" icon={MessageSquare} error={null}>
                      <textarea
                        className={`${inputCls} resize-none`}
                        rows={3}
                        placeholder="Any special requirements, dietary needs, accessibility needs…"
                        value={form.note}
                        onChange={set('note')}
                      />
                    </Field>
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] py-4 text-sm font-bold uppercase text-white shadow-xl shadow-[#25D366]/30 transition hover:bg-[#1ebe5c] active:scale-[0.98]"
                    >
                      <WhatsAppIcon size={22} className="text-white" />
                      Send Booking via WhatsApp
                    </button>
                    <p className="mt-3 text-center text-[11px] text-[#9ca3af] dark:text-white/35">
                      This opens WhatsApp with your booking details pre-filled. We'll confirm within minutes.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            {/* Why Book With Us */}
            <div className="rounded-2xl border border-[#e5d5c0] bg-white p-6 dark:border-[#c9964a]/25 dark:bg-[#0a1829]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9964a]">Why Book With Us</p>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  ['✅', 'Instant WhatsApp confirmation'],
                  ['🚗', 'Well-maintained AC fleet'],
                  ['🙏', '10+ years in transport services'],
                  ['💯', '100% satisfaction guarantee'],
                  ['🕐', '24/7 customer support'],
                  ['💰', 'No hidden charges'],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-[#4b5563] dark:text-white/70">
                    <span>{icon}</span> {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="rounded-2xl border border-[#e5d5c0] bg-white p-6 dark:border-[#c9964a]/25 dark:bg-[#0a1829]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9964a]">Prefer to Call?</p>
              <p className="mt-2 text-xs leading-5 text-[#6b7280] dark:text-white/55">
                Our team is available 24/7. Call or WhatsApp directly.
              </p>
              <a
                href={TEL1}
                className="mt-4 flex items-center gap-3 rounded-lg border border-[#c9964a]/40 px-4 py-3 text-sm font-bold text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white hover:border-transparent"
              >
                <Phone size={16} /> {BUSINESS.phone1}
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20taxi%20or%20coach%20services.`}
                target="_blank" rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5c]"
              >
                <WhatsAppIcon size={18} className="text-white" /> Chat on WhatsApp
              </a>
            </div>

            {/* Browse Packages CTA */}
            <Link
              to="/packages"
              className="gold-gradient flex items-center justify-center gap-3 rounded-2xl py-4 text-xs font-bold uppercase text-white shadow-lg shadow-[#c9964a]/20"
            >
              Browse Packages <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default BookingPage;
