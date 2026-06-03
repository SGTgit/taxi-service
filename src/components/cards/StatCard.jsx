import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion.js';

function StatCard({ stat }) {
  const { value, label, icon: Icon } = stat;

  return (
    <motion.div variants={fadeUp} className="border-[#eadbc7] text-center dark:border-[#c9964a]/30 sm:border-l sm:first:border-l-0">
      <Icon className="mx-auto text-[#c9964a]" size={35} strokeWidth={1.6} />
      <strong className="mt-4 block text-3xl font-medium text-[#0d1b2a] dark:text-white">{value}</strong>
      <span className="mt-1 block text-sm leading-5 text-[#0d1b2a] dark:text-white/84">{label}</span>
    </motion.div>
  );
}

export default StatCard;
