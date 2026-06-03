import { motion } from 'framer-motion';
import { stats } from '../../data/siteData.jsx';
import StatCard from '../cards/StatCard.jsx';
import { fadeUp, stagger } from '../../lib/motion.js';

function WhyChoose() {
  return (
    <section id="about-us" className="bg-[#fffaf3] transition-colors duration-500 dark:bg-[#060f1e]">
      <div className="grid items-stretch dark:border-y dark:border-[#c9964a]/25 lg:grid-cols-[42%_58%]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp} className="min-h-60 lg:min-h-85">
          <img className="h-full min-h-60 w-full object-cover lg:min-h-85" src="/assets/whychooseus.webp" alt="Temple corridor in Vrindavan" loading="lazy" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={stagger} className="flex items-center px-6 py-10 transition-colors duration-500 dark:bg-[#0a1829] md:px-14 md:py-14">
          <div className="w-full max-w-3xl">
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">
            Why choose us
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display mt-3 text-2xl font-semibold text-[#0d1b2a] dark:text-white sm:text-3xl md:text-[42px]">
            Your Journey, Our Responsibility
          </motion.h2>
          <div className="mt-4 h-px w-20 bg-[#c9964a]" />
          <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;
