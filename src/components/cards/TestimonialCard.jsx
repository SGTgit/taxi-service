import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp } from '../../lib/motion.js';

function TestimonialCard({ testimonial }) {
  return (
    <motion.article variants={fadeUp} className="rounded-lg border border-white/35 bg-[#071421]/40 p-7 dark:border-[#c9964a]/75 dark:bg-[#0a1829]/80">
      <div className="text-4xl font-bold leading-none text-[#c9964a]">"</div>
      <p className="mt-1 min-h-20 text-sm leading-7 text-white/88">{testimonial.quote}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <strong className="text-sm">{testimonial.name}</strong>
        <div className="flex gap-1 text-[#d99a2b]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={17} fill="currentColor" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
