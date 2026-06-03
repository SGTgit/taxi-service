import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion.js';

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold text-[#0d1b2a] md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-sm leading-7 text-[#6b7280] md:text-base">{copy}</p> : null}
    </motion.div>
  );
}

export default SectionHeader;
