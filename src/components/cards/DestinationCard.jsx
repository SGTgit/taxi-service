import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp } from '../../lib/motion.js';

function DestinationCard({ destination, isDark }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative h-[300px] w-full cursor-pointer overflow-hidden rounded-2xl lg:h-[340px]"
    >
      {/* Image with scale on hover */}
      <img
        className="absolute inset-0 h-full w-full object-cover card-img"
        src={destination.image}
        alt={destination.name}
        loading="lazy"
      />

      {/* Base dark gradient always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071421]/90 via-[#071421]/30 to-transparent" />

      {/* Richer overlay that fades in on hover */}
      <div className="absolute inset-0 bg-[#071421]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Location badge — top left */}
      <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
        <MapPin size={10} className="text-[#c9964a]" />
        {destination.tag || 'Vrindavan'}
      </span>

      {/* Content — bottom, slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Title always visible */}
        <h3 className="text-base font-bold text-white drop-shadow-md">{destination.name}</h3>

        {/* Description + CTA — hidden by default, slide up on hover */}
        <div className="overflow-hidden">
          <div className="translate-y-8 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mt-2 text-xs leading-5 text-white/85">{destination.copy}</p>
            <Link
              to="/destinations"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#c9964a] px-4 py-1.5 text-[11px] font-bold uppercase text-white transition hover:bg-[#d4a255]"
            >
              Plan Visit <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[#c9964a] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100" />
    </motion.article>
  );
}

export default DestinationCard;

