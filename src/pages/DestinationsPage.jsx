import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, stagger } from '../lib/motion.js';
import { BUSINESS, TEL1 } from '../config/business.js';
import SEO from '../components/ui/SEO.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const allDestinations = [
  { name: 'Banke Bihari Temple', image: '/assets/temples/bankebihari.webp', copy: 'Feel the divine blessings of Thakurji — one of the most beloved deities of Vrindavan.', tag: 'Vrindavan', highlight: 'Must Visit' },
  { name: 'Prem Mandir', image: '/assets/temples/premmandir.webp', copy: 'A breathtaking marble temple illuminated at night — a symbol of love, devotion and divinity.', tag: 'Vrindavan', highlight: 'Popular' },
  { name: 'Iskcon Temple', image: '/assets/temples/iskcon.webp', copy: 'A spiritual retreat offering peace, prasad and profound devotion to Lord Krishna.', tag: 'Vrindavan', highlight: null },
  { name: 'Nidhivan', image: '/assets/temples/nidhivan.webp', copy: 'The mystical grove where Lord Krishna is said to perform His divine Raas Lila every night.', tag: 'Vrindavan', highlight: 'Mystical' },
  { name: 'Radha Raman Temple', image: '/assets/temples/radharaman.webp', copy: 'One of the oldest and most revered temples in Vrindavan, dating back to the 16th century.', tag: 'Vrindavan', highlight: null },
  { name: 'Dwarkadhish Temple', image: '/assets/temples/dwarkadish.webp', copy: 'A grand temple celebrating Lord Krishna\'s rule as the King of Dwarka.', tag: 'Mathura', highlight: 'Popular' },
  { name: 'Govardhan Parvat', image: '/assets/temples/goverdhan.webp', copy: 'The sacred hill lifted by Lord Krishna on his little finger to shelter the people of Braj.', tag: 'Govardhan', highlight: 'Scenic' },
  { name: 'RadhaKund', image: '/assets/temples/radhakund.webp', copy: 'The holiest lake in the Braj region, revered by all Vaishnavas as the bathing place of Radha.', tag: 'Govardhan', highlight: null },
  { name: 'Nandgaon', image: '/assets/temples/nandgaon.webp', copy: 'The childhood home of Lord Krishna — visit the temple atop a hill with sweeping Braj views.', tag: 'Nandgaon', highlight: null },
  { name: 'Barsana', image: '/assets/temples/barsana.webp', copy: 'The birthplace of Radha Rani, famous across the world for the vibrant Lathmar Holi festival.', tag: 'Barsana', highlight: 'Festival' },
  { name: 'Shri Krishna Janmasthan', image: '/assets/temples/janamsthan.webp', copy: 'The sacred birthplace of Lord Krishna in Mathura — a core pilgrimage stop.', tag: 'Mathura', highlight: 'Must Visit' },
  { name: 'Shri Radha Vallabh Temple', image: '/assets/temples/radhavallab.webp', copy: 'A historic Vrindavan temple known for its deep devotional tradition.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Radha Shyam Sundar Temple', image: '/assets/temples/radhashyamsundar.webp', copy: 'A peaceful Vrindavan temple steeped in the sweetness of Braj bhakti.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Govind Dev Temple', image: '/assets/temples/radhagovinddev.webp', copy: 'One of Vrindavan\'s grandest temples and an important place of darshan.', tag: 'Vrindavan', highlight: 'Popular' },
  { name: 'Maa Vaishno Devi Temple', image: '/assets/temples/maavaisnodevi.webp', copy: 'A popular darshan stop offering a calm devotional experience.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Radha Damodar Temple', image: '/assets/temples/radhadamodar.webp', copy: 'An ancient Vrindavan temple connected with saintly traditions.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Radha MadanMohan Temple', image: '/assets/temples/madanmohan.webp', copy: 'A serene Vrindavan temple cherished for its simple and sacred atmosphere.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Radha Gokulanand Temple', image: '/assets/temples/radhagokulanand.webp', copy: 'A well-loved shrine in the heart of Vrindavan for devotees seeking quiet darshan.', tag: 'Vrindavan', highlight: null },
  { name: 'Shri Rang Ji Temple', image: '/assets/temples/rangji.webp', copy: 'A distinct and beautiful temple reflecting the spiritual richness of Vrindavan.', tag: 'Vrindavan', highlight: 'Popular' },
  { name: 'Gokul Raman Reti', image: '/assets/temples/ramanreti.webp', copy: 'A peaceful sandbank associated with the childhood pastimes of Lord Krishna.', tag: 'Gokul', highlight: 'Mystical' },
  { name: 'Brahmand Ghat', image: '/assets/temples/brahmandghat.webp', copy: 'A sacred Gokul ghat linked to Krishna\'s divine childhood episode.', tag: 'Gokul', highlight: null },
  { name: 'Chinta Haran Mahadev', image: '/assets/temples/chintaharanmahadev.webp', copy: 'A revered Shiva temple in Gokul visited for blessings and peace.', tag: 'Gokul', highlight: null },
  { name: 'Chaurasi Khamba Gokul', image: '/assets/temples/chaurasikhamba.webp', copy: 'A historic Gokul site associated with Krishna\'s childhood stories.', tag: 'Gokul', highlight: 'Scenic' },
  { name: 'Aaseshwar Mahadev', image: '/assets/temples/aseshwarmahadev.webp', copy: 'A sacred stop visited on the Barsana-Nandgaon route.', tag: 'Barsana', highlight: null },
  { name: 'Ted Kadam', image: '/assets/temples/tedkadam.webp', copy: 'A devotional stop on the Braj route, visited for darshan and blessings.', tag: 'Barsana', highlight: null },
  { name: 'Vrinda Kund', image: '/assets/temples/vrindakund.webp', copy: 'A serene and spiritually important spot in the Braj region.', tag: 'Braj', highlight: null },
  { name: 'Shyamkund', image: '/assets/temples/shyamkund.webp', copy: 'A sacred bathing place near Govardhan associated with Radha-Krishna leelas.', tag: 'Govardhan', highlight: null },
  { name: 'Kusum Sarovar', image: '/assets/temples/kusumsarovar.webp', copy: 'A beautiful and calm heritage waterbody near Govardhan, perfect for darshan and reflection.', tag: 'Govardhan', highlight: 'Scenic' },
  { name: 'Mansi Ganga', image: '/assets/temples/mansiganga.webp', copy: 'A holy waterbody and important Govardhan pilgrimage stop.', tag: 'Govardhan', highlight: null },
  { name: 'Jatipura Mahaprabhu Ji Ki Baithak', image: '/assets/temples/jatipura.webp', copy: 'A respected spiritual site along the Govardhan route.', tag: 'Govardhan', highlight: null },
  { name: 'Charan Pahadi', image: '/assets/temples/charanpahadi.webp', copy: 'A sacred hill stop visited during Govardhan and Braj yatra routes.', tag: 'Govardhan', highlight: null },
  { name: 'Kameshwar Mahadev', image: '/assets/temples/kameshwarmahadev.webp', copy: 'A beloved Shiva temple included in longer Braj itineraries.', tag: 'Braj', highlight: null },
  { name: 'Belvan', image: '/assets/temples/belvan.webp', copy: 'A quiet devotional grove visited for peaceful darshan.', tag: 'Braj', highlight: null },
  { name: 'Devra Baba', image: '/assets/temples/devrahababa.webp', copy: 'A sacred ashram stop visited by pilgrims seeking blessings.', tag: 'Braj', highlight: null },
  { name: 'Bhandirvan', image: '/assets/temples/bhandirvan.webp', copy: 'A serene grove associated with divine leelas and devotional walks.', tag: 'Braj', highlight: 'Mystical' },
  { name: 'Vanshivat', image: '/assets/temples/vanshivat.webp', copy: 'A revered tree and devotional site in the Braj-Vrindavan circuit.', tag: 'Vrindavan', highlight: null },
  { name: 'Mansoravar (Radharani)', image: '/assets/temples/mansarovarradharani.webp', copy: 'A sacred pond connected with Radha Rani and Braj devotion.', tag: 'Braj', highlight: null },
  { name: 'Aadi Badrinath', image: '/assets/temples/adhibadrinath.webp', copy: 'The opening shrine of a Himalayan pilgrimage route.', tag: 'Himalayan', highlight: 'Must Visit' },
  { name: 'Gangotri', image: '/assets/temples/gangotri.webp', copy: 'The revered source shrine of the Ganga in the Himalayas.', tag: 'Himalayan', highlight: null },
  { name: 'Yamunotri', image: '/assets/temples/yamonatri.webp', copy: 'A sacred mountain shrine dedicated to the Yamuna river goddess.', tag: 'Himalayan', highlight: null },
  { name: 'Alaknanda', image: '/assets/temples/gangotri.webp', copy: 'A scenic Himalayan river valley and important stop in the mountain route.', tag: 'Himalayan', highlight: 'Scenic' },
  { name: 'Laxman Jhula', image: '/assets/temples/rishikesh.webp', copy: 'An iconic suspension bridge and pilgrimage landmark in Rishikesh.', tag: 'Rishikesh', highlight: 'Popular' },
  { name: 'Kedarnath', image: '/assets/temples/adhibadrinath.webp', copy: 'A high-altitude sacred shrine and one of the most revered Himalayan temples.', tag: 'Himalayan', highlight: 'Must Visit' },
  { name: 'Bhojan Thali', image: '/assets/temples/bhojanthali.webp', copy: 'A traditional meal stop included in the pilgrimage itinerary.', tag: 'Braj', highlight: null },
  { name: 'Kamvan', image: '/assets/temples/kamvan.webp', copy: 'A spiritually significant place in the longer Braj pilgrimage route.', tag: 'Braj', highlight: null },
  { name: 'Haridwar', image: '/assets/temples/haridwar.webp', copy: 'A sacred Ganga city known for aarti, temples and pilgrim stays.', tag: 'Himalayan', highlight: 'Popular' },
  { name: 'Rishikesh', image: '/assets/temples/rishikesh.webp', copy: 'A spiritual town by the Ganga with ashrams, bridges and serene surroundings.', tag: 'Rishikesh', highlight: 'Popular' },
  { name: 'Taj Mahal', image: '/assets/temples/tajmahal.webp', copy: 'The world-famous marble monument of love and one of India’s greatest landmarks.', tag: 'Agra', highlight: 'Must Visit' },
  { name: 'Red Fort', image: '/assets/temples/redfort.webp', copy: 'A historic Agra monument and key stop on the sightseeing circuit.', tag: 'Agra', highlight: null },
  { name: 'Govind Dev Temple (Jaipur)', image: '/assets/temples/govinddev-jaipur.webp', copy: 'A famous temple stop in Jaipur included in the sightseeing program.', tag: 'Jaipur', highlight: null },
  { name: 'Madan Mohan Temple (Jaipur)', image: '/assets/temples/madanmohanjaipur.webp', copy: 'A devotional stop in Jaipur connected with the local temple circuit.', tag: 'Jaipur', highlight: null },
  { name: 'Bharatpur', image: '/assets/temples/bharatpur.webp', copy: 'A convenient drop point and regional travel stop.', tag: 'Bharatpur', highlight: null },
  { name: 'Vimal Kund', image: '/assets/temples/vimalkund.webp', copy: 'A sacred kund associated with the Gokul and Braj pilgrimage circuit.', tag: 'Gokul', highlight: null },
];

const tags = ['All', 'Vrindavan', 'Mathura', 'Gokul', 'Govardhan', 'Barsana', 'Nandgaon', 'Braj', 'Agra', 'Jaipur', 'Delhi', 'Himalayan', 'Rishikesh', 'Bharatpur', 'Uttar Pradesh'];

const badgeColor = {
  'Must Visit': 'bg-rose-500',
  'Popular':    'bg-blue-500',
  'Mystical':   'bg-purple-500',
  'Scenic':     'bg-emerald-500',
  'Festival':   'bg-amber-500',
};

function DestinationsPage() {
  const { isDark } = useTheme();
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');
  const [debounced, setDebounced] = useState('');
  const sacredSiteCount = allDestinations.length;
  const regionCount = new Set(allDestinations.map((d) => d.tag)).size;

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 250);
    return () => clearTimeout(t);
  }, [search]);

  let filtered = active === 'All' ? allDestinations : allDestinations.filter((d) => d.tag === active);
  if (debounced && debounced.length > 0) {
    const q = debounced.toLowerCase();
    filtered = filtered.filter((d) => (
      d.name.toLowerCase().includes(q)
      || (d.copy || '').toLowerCase().includes(q)
      || (d.tag || '').toLowerCase().includes(q)
    ));
  }

  return (
    <>
      <SEO
        title="Sacred Destinations | Vrindavan, Mathura, Govardhan & Braj Mandal"
        description="Explore sacred pilgrimage destinations across Vrindavan, Mathura, Govardhan, Barsana, and Nandgaon with Gautam Taxi and Bus. Temple darshans, ghats, and the full Braj Mandal circuit."
        path="/destinations"
      />
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative flex min-h-80 md:min-h-115 items-end overflow-hidden bg-[#0d1b2a] pb-16 md:pb-20 pt-24 md:pt-36">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105"
          src="/assets/banke-bihari.webp" alt="Banke Bihari"
        />
        {/* Two-tone gradient: bottom-up dark + left-to-right tint */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a]/80 to-transparent" />

        <motion.div
          className="section-shell relative z-10"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#c9964a]">
            <MapPin size={12} /> Braj Mandal, Uttar Pradesh
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display mt-3 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Our Destinations
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-4 h-px w-16 bg-[#c9964a]" />
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            Discover the sacred sites of the Braj Mandal — each one a living chapter in the eternal story of Lord Krishna and Radha Rani.
          </motion.p>

          {/* Stat pills */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {[ [String(sacredSiteCount), 'Sacred Sites'], [String(regionCount), 'Regions'], ['1 Day', 'Min Duration'] ].map(([val, label]) => (
              <span key={label} className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs text-white font-semibold backdrop-blur-sm">
                <span className="text-[#c9964a]">{val}</span> {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Filter + Grid ────────────────────────────── */}
      <section className="bg-[#fffaf3] py-20 transition-colors dark:bg-[#060f1e]">
        <div className="section-shell">

          {/* Filter dropdown + search */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <label htmlFor="dest-filter" className="text-xs font-bold uppercase tracking-widest text-[#c9964a]">Filter by</label>
            <select
              id="dest-filter"
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="w-full sm:w-auto rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide border border-[#c9964a]/50 text-[#0d1b2a] bg-white/90 dark:bg-[#0a1829] dark:text-white transition"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag} className="text-sm">{tag}</option>
              ))}
            </select>

            <div className="ml-0 sm:ml-2 relative w-full sm:flex-1 min-w-40">
              <input
                type="search"
                aria-label="Search destinations"
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full px-4 py-2 pr-10 text-sm border border-[#e5d5c0] bg-white/90 dark:bg-[#0a1829] dark:text-white placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#c9964a]/30"
              />
              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1 text-[#6b7280] hover:bg-white dark:bg-[#0a1829] dark:text-white/80"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <span className="mt-2 sm:mt-0 sm:ml-auto text-xs text-[#6b7280] dark:text-white/50">
              {filtered.length} destination{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Card grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden" animate="visible" variants={stagger}
            >
              {filtered.map((dest, i) => (
                <motion.article
                  key={dest.name}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(13,27,42,0.12)] dark:ring-1 dark:ring-[#c9964a]/50 dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                >
                  {/* Image */}
                  <div className="relative h-44 sm:h-65 overflow-hidden">
                    <img
                      className="h-full w-full object-cover card-img"
                      src={dest.image} alt={dest.name}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#071421]/70 to-transparent" />

                    {/* Badges */}
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="rounded-full bg-[#c9964a] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                        {dest.tag}
                      </span>
                      {dest.highlight && (
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-white ${badgeColor[dest.highlight]}`}>
                          {dest.highlight}
                        </span>
                      )}
                    </div>

                    {/* Index number */}
                    <span className="absolute bottom-4 right-4 font-display text-4xl sm:text-5xl font-bold text-white/10 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-4 sm:p-6 transition-colors dark:bg-[#0a1829]">
                    <h3 className="text-base font-bold text-[#0d1b2a] dark:text-white">{dest.name}</h3>
                    <p className="mt-2 text-xs leading-6 text-[#6b7280] dark:text-white/65">{dest.copy}</p>

                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#c9964a]/10 px-4 py-2 text-[11px] font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
                      >
                        Book Visit <ArrowRight size={12} />
                      </Link>
                      <span className="flex items-center gap-1 text-[11px] text-[#9ca3af] dark:text-white/40">
                        <MapPin size={11} /> {dest.tag}
                      </span>
                    </div>
                  </div>

                  {/* Gold bottom accent */}
                  <div className="h-0.75 origin-left scale-x-0 bg-[#c9964a] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </motion.div>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-sm text-[#6b7280] dark:text-white/60">
                No destinations match your search. Try a different keyword or clear the search.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1b2a] py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#c9964a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="section-shell relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Ready to Visit?</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              Let Us Craft Your Perfect Pilgrimage
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Our experts cover all sacred sites of Braj — Vrindavan, Mathura, Govardhan, Barsana and Nandgaon — in a single seamless journey tailored to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end justify-center">
            <Link
              to="/contact"
              className="gold-gradient inline-flex w-full md:w-auto justify-center items-center gap-3 rounded px-7 py-4 text-xs font-bold uppercase text-white shadow-xl shadow-[#c9964a]/30"
            >
              Plan My Journey <ArrowRight size={15} />
            </Link>
            <a
              href={TEL1}
              className="inline-flex w-full md:w-auto justify-center items-center gap-3 rounded border border-white/25 px-7 py-4 text-xs font-bold uppercase text-white transition hover:bg-white/10"
            >
              <Phone size={16} /> {BUSINESS.phone1}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationsPage;
