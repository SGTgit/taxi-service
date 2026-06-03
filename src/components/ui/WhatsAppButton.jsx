import { AnimatePresence, motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS, WA_BOOKING_LINK, TEL1 } from '../../config/business.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-1 w-72 overflow-hidden rounded-2xl border border-[#eadbc7] bg-white shadow-2xl dark:border-[#c9964a]/25 dark:bg-[#0a1829]"
          >
            {/* Panel header */}
            <div className="bg-[#075E54] px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <WhatsAppIcon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{BUSINESS.name}</p>
                    <p className="text-xs text-white/80">Typically replies within minutes</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1 text-white/80 transition hover:text-white"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Panel body */}
            <div className="px-5 py-4">
              <div className="rounded-xl bg-[#f5ebdd] p-4 dark:bg-[#060f1e]">
                <p className="text-sm leading-6 text-[#0d1b2a] dark:text-white">
                  👋 <strong>Hello!</strong> Ready to plan your spiritual journey to Vrindavan?
                </p>
                <p className="mt-2 text-xs leading-5 text-[#6b7280] dark:text-white/65">
                  Tap below to chat with us directly on WhatsApp or give us a call.
                </p>
              </div>

              <div className="mt-4 grid gap-2">
                <a
                  href={WA_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md shadow-[#25D366]/30 transition hover:bg-[#1ebe5c]"
                >
                  <WhatsAppIcon size={20} className="text-white" /> Chat on WhatsApp
                </a>
                <a
                  href={TEL1}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#c9964a] py-3 text-sm font-bold text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
                >
                  <Phone size={16} /> Call Us Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      {!open && (
        <span className="absolute bottom-0 right-0 h-14 w-14 animate-ping rounded-full bg-[#25D366]/40" />
      )}

      {/* Main FAB */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full transition duration-300 ${
          open
            ? 'bg-[#075E54] text-white shadow-xl shadow-[#075E54]/30'
            : 'bg-transparent'
        }`}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X size={24} className="text-white" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex h-full w-full items-center justify-center">
              <WhatsAppIcon size={56} full={true} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default WhatsAppButton;
