import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion.js';

function FeatureCard({ feature }) {
  const { icon: Icon, title, body } = feature;

  return (
    <motion.div
      variants={fadeUp}
      className="flex min-w-[120px] flex-1 flex-col items-center justify-center px-3 py-2.5 text-center md:min-w-0 md:px-6 md:py-4"
    >
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#c9964a]/15 md:mb-3 md:h-11 md:w-11">
        <Icon className="text-[#c9964a]" size={18} strokeWidth={1.8} style={{}} />
      </div>
      <h3 className="text-[11px] font-bold leading-snug md:text-sm">{title}</h3>
      <p className="mt-1.5 hidden text-[11px] leading-4 text-white/75 md:mt-2 md:block md:text-xs md:leading-5">{body}</p>
    </motion.div>
  );
}

export default FeatureCard;


