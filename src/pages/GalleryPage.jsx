import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, stagger } from '../lib/motion.js';

const galleryItems = [
  { src: '/assets/banke-bihari.webp',   alt: 'Banke Bihari Temple',  category: 'Temples',    span: 'col-span-1 row-span-2' },
  { src: '/assets/gallery-2.webp',      alt: 'Prem Mandir',          category: 'Temples',    span: 'col-span-1' },
  { src: '/assets/gallery-3.webp',      alt: 'Iskcon Temple',        category: 'Temples',    span: 'col-span-1' },
  { src: '/assets/gallery-4.webp',      alt: 'Nidhivan',             category: 'Nature',     span: 'col-span-2' },
  { src: '/assets/gallery-5.webp',      alt: 'Radha Raman Temple',   category: 'Temples',    span: 'col-span-1' },
  { src: '/assets/whychooseus.webp',     alt: 'Temple Corridor',      category: 'Nature',     span: 'col-span-1' },
  { src: '/assets/package-temple.webp', alt: 'Dwarkadhish Temple',   category: 'Temples',    span: 'col-span-1' },
  { src: '/assets/vechiles/hero-car-temple.webp', alt: 'Vedic Cab at Temple', category: 'Vehicles', span: 'col-span-2' },
  { src: '/assets/gallery-2.webp',      alt: 'Vrindavan at Dusk',    category: 'Nature',     span: 'col-span-1' },
  { src: '/assets/gallery-3.webp',      alt: 'Pilgrims at ISKCON',   category: 'People',     span: 'col-span-1' },
];

const categories = ['All', 'Temples', 'Nature', 'Vehicles', 'People'];

function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-105 items-end overflow-hidden bg-[#0d1b2a] pb-16 pt-40">
        <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="/assets/gallery-2.webp" alt="Prem Mandir Vrindavan – spiritual gallery of Braj Mandal" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" />
        <motion.div className="section-shell relative z-10" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Visual Stories</motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl">Our Gallery</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-7 text-white/75">
            A glimpse into the spiritual beauty of Vrindavan and the experiences we create for our travellers.
          </motion.p>
        </motion.div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="section-shell">
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition ${active === cat ? 'gold-gradient text-white shadow-lg shadow-[#c9964a]/25' : 'border border-[#c9964a] text-[#c9964a] hover:bg-[#c9964a]/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <motion.div
            key={active}
            className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3"
            initial="hidden" animate="visible" variants={stagger}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.alt}-${i}`}
                variants={fadeUp}
                className={`group relative cursor-pointer overflow-hidden rounded-xl ${item.span}`}
                onClick={() => setLightbox(item)}
              >
                <img className="h-full w-full object-cover card-img" src={item.src} alt={item.alt} />
                <div className="absolute inset-0 bg-[#071421]/0 transition duration-300 group-hover:bg-[#071421]/45" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <ZoomIn size={32} className="text-white drop-shadow-lg" />
                </div>
                <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  {item.alt}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-80 flex items-center justify-center bg-[#060f1e]/92 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img className="max-h-[85vh] w-full object-contain" src={lightbox.src} alt={lightbox.alt} />
              <button
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[#c9964a]"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <p className="absolute bottom-4 left-4 rounded bg-black/55 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GalleryPage;
