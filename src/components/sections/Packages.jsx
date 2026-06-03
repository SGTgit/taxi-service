import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../../data/siteData.jsx';
import PackageCard from '../cards/PackageCard.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import { stagger } from '../../lib/motion.js';

function Packages() {
  return (
    <section id="packages" className="bg-white py-16 transition-colors duration-500 dark:border-y dark:border-[#c9964a]/15 dark:bg-[#060f1e]">
      <div className="section-shell">
        <SectionTitle className="mb-8" eyebrow="Our Packages" title="Handpicked Packages for You" />

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {packages.slice(0, 4).map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </motion.div>

        <div className="mt-7 flex justify-center">
          <Link to="/packages" className="gold-gradient inline-flex items-center gap-4 rounded px-9 py-3 text-xs font-bold uppercase text-white shadow-lg shadow-[#c9964a]/20">
            View All Packages <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Packages;

