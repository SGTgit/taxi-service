import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { WA_LINK } from '../config/business.js';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#fffaf3] px-4 dark:bg-[#060f1e]">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9964a]/8 blur-[120px] dark:bg-[#c9964a]/6" />

      {/* Dot-grid watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#c9964a 1px,transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Large 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-display select-none text-[120px] font-bold leading-none text-[#c9964a]/15 dark:text-[#c9964a]/10 sm:text-[180px]">
            404
          </p>
        </motion.div>

        {/* Content — overlaps the 404 */}
        <motion.div
          className="-mt-10 sm:-mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Lotus / Om icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#c9964a]/40 bg-[#c9964a]/8">
            <span className="font-display text-2xl text-[#c9964a]">🪷</span>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Page Not Found</p>
          <h1 className="font-display mt-3 text-2xl font-semibold text-[#0d1b2a] dark:text-white sm:text-3xl">
            This path leads to stillness
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#6b7280] dark:text-white/55">
            The page you're looking for doesn't exist or may have been moved. Let's guide you back to your journey.
          </p>

          {/* Divider */}
          <div className="mx-auto my-7 h-px w-16 bg-[#c9964a]/40" />

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="gold-gradient inline-flex items-center gap-2 rounded px-6 py-3 text-xs font-bold uppercase text-white shadow-lg shadow-[#c9964a]/20"
            >
              <Home size={14} /> Go Home
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded border border-[#c9964a] px-6 py-3 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
            >
              <ArrowLeft size={14} /> Go Back
            </button>
            <a
              href={WA_LINK}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#25D366] px-6 py-3 text-xs font-bold uppercase text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon size={16} className="text-current" /> WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[#9ca3af] dark:text-white/35">
            {[
              { label: 'Destinations', to: '/destinations' },
              { label: 'Packages', to: '/packages' },
              { label: 'Book Now', to: '/book' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className="transition hover:text-[#c9964a]">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
