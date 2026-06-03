import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CarFront, CheckCircle2, Clock3, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO.jsx';
import { fadeUp, stagger } from '../lib/motion.js';
import { BUSINESS } from '../config/business.js';

const vehicleRates = [
  { name: 'Dzire / Eco', label: 'Dzire / Eco', rate: 3700, seats: '4 seats', note: 'Best for short temple visits and local travel.' },
  { name: 'Ertiga', label: 'Ertiga', rate: 5000, seats: '6 seats', note: 'Comfortable for family travel and outstation plans.' },
  { name: 'Innova Xylo', label: 'Innova Xylo', rate: 5500, seats: '6 seats', note: 'Balanced comfort for pilgrimages and transfers.' },
  { name: 'Innova Crysta', label: 'Innova Crysta', rate: 6000, seats: '6 seats', note: 'Premium comfort for pilgrimages and transfers.' },
  { name: 'Cruiser 12 Seat', label: 'Cruiser 12 Seat', rate: 10000, seats: '12 seats', note: 'Ideal for medium group darshan and family trips.' },
  { name: 'Tempo Traveller 17 Seat', label: 'Tempo Traveller 17 Seat', rate: 11000, seats: '17 seats', note: 'Great for larger groups and longer journeys.' },
  { name: 'Tempo Traveller 20 Seat', label: 'Tempo Traveller 20 Seat', rate: 12000, seats: '20 seats', note: 'Best for large groups and special pilgrimage tours.' },
];

const routeOptions = [
  'Delhi Pickup / Drop',
  'Delhi Sightseeing',
  'Agra Sightseeing',
  'Agra Pickup / Drop',
  'Agra Fatehpur Sikri S.S.',
  'Tundla Pickup / Drop',
  'Aligarh Pickup / Drop',
  'Nandgaon, Barsana, Goverdhan S.S.',
  'Goverdhan Up / Down',
  'Gokul Sightseeing',
  'Bhandervan Sightseeing',
  'Barsana / Gokul Both Sightseeing',
  'Kam Van Sightseeing',
  'Mathura Sightseeing (6 Hr.)',
  'Mathura Pickup / Drop',
  'Jaipur Drop',
  'Jaipur Sightseeing',
  'Bharatpur Drop',
  'Haridwar Rishikesh S.S. (2 Days)',
  'Haridwar Rishikesh Drop',
];

const routeFareMatrix = {
  'Delhi Pickup / Drop': {
    'Dzire / Eco': 3700,
    Ertiga: 5000,
    'Innova Xylo': 5500,
    'Innova Crysta': 6000,
    'Cruiser 12 Seat': 10000,
    'Tempo Traveller 17 Seat': 11000,
    'Tempo Traveller 20 Seat': 12000,
  },
  'Delhi Sightseeing': {
    'Dzire / Eco': 4500,
    Ertiga: 6500,
    'Innova Xylo': 7000,
    'Innova Crysta': 8000,
    'Cruiser 12 Seat': 12000,
    'Tempo Traveller 17 Seat': 15000,
    'Tempo Traveller 20 Seat': 18000,
  },
  'Agra Sightseeing': {
    'Dzire / Eco': 3000,
    Ertiga: 3500,
    'Innova Xylo': 4000,
    'Innova Crysta': 4500,
    'Cruiser 12 Seat': 6000,
    'Tempo Traveller 17 Seat': 7000,
    'Tempo Traveller 20 Seat': 8000,
  },
  'Agra Pickup / Drop': {
    'Dzire / Eco': 2500,
    Ertiga: 3000,
    'Innova Xylo': 3500,
    'Innova Crysta': 4000,
    'Cruiser 12 Seat': 5000,
    'Tempo Traveller 17 Seat': 6000,
    'Tempo Traveller 20 Seat': 7000,
  },
  'Agra Fatehpur Sikri S.S.': {
    'Dzire / Eco': 4000,
    Ertiga: 5000,
    'Innova Xylo': 5500,
    'Innova Crysta': 6500,
    'Cruiser 12 Seat': 7500,
    'Tempo Traveller 17 Seat': 8500,
    'Tempo Traveller 20 Seat': 10000,
  },
  'Tundla Pickup / Drop': {
    'Dzire / Eco': 2700,
    Ertiga: 3200,
    'Innova Xylo': 3500,
    'Innova Crysta': 4000,
    'Cruiser 12 Seat': 6000,
    'Tempo Traveller 17 Seat': 7000,
    'Tempo Traveller 20 Seat': 9000,
  },
  'Aligarh Pickup / Drop': {
    'Dzire / Eco': 2200,
    Ertiga: 2700,
    'Innova Xylo': 3000,
    'Innova Crysta': 3500,
    'Cruiser 12 Seat': 6000,
    'Tempo Traveller 17 Seat': 7000,
    'Tempo Traveller 20 Seat': 9000,
  },
  'Nandgaon, Barsana, Goverdhan S.S.': {
    'Dzire / Eco': 2500,
    Ertiga: 3000,
    'Innova Xylo': 3500,
    'Innova Crysta': 4500,
    'Cruiser 12 Seat': 5500,
    'Tempo Traveller 17 Seat': 6000,
    'Tempo Traveller 20 Seat': 7000,
  },
  'Goverdhan Up / Down': {
    'Dzire / Eco': 1800,
    Ertiga: 2400,
    'Innova Xylo': 2500,
    'Innova Crysta': 3000,
    'Cruiser 12 Seat': 4500,
    'Tempo Traveller 17 Seat': 5000,
    'Tempo Traveller 20 Seat': 6000,
  },
  'Gokul Sightseeing': {
    'Dzire / Eco': 2500,
    Ertiga: 2700,
    'Innova Xylo': 3000,
    'Innova Crysta': 3500,
    'Cruiser 12 Seat': 5000,
    'Tempo Traveller 17 Seat': 5500,
    'Tempo Traveller 20 Seat': 6000,
  },
  'Bhandervan Sightseeing': {
    'Dzire / Eco': 2000,
    Ertiga: 2200,
    'Innova Xylo': 2500,
    'Innova Crysta': 2800,
    'Cruiser 12 Seat': 4500,
    'Tempo Traveller 17 Seat': 5000,
    'Tempo Traveller 20 Seat': 6000,
  },
  'Barsana / Gokul Both Sightseeing': {
    'Dzire / Eco': 3500,
    Ertiga: 4000,
    'Innova Xylo': 4500,
    'Innova Crysta': 5000,
    'Cruiser 12 Seat': 6500,
    'Tempo Traveller 17 Seat': 7500,
    'Tempo Traveller 20 Seat': 8500,
  },
  'Kam Van Sightseeing': {
    'Dzire / Eco': 3500,
    Ertiga: 4000,
    'Innova Xylo': 4500,
    'Innova Crysta': 5000,
    'Cruiser 12 Seat': 7500,
    'Tempo Traveller 17 Seat': 8500,
    'Tempo Traveller 20 Seat': 9500,
  },
  'Mathura Sightseeing (6 Hr.)': {
    'Dzire / Eco': 1500,
    Ertiga: 2000,
    'Innova Xylo': 2200,
    'Innova Crysta': 2500,
    'Cruiser 12 Seat': 3000,
    'Tempo Traveller 17 Seat': 3500,
    'Tempo Traveller 20 Seat': 4000,
  },
  'Mathura Pickup / Drop': {
    'Dzire / Eco': 700,
    Ertiga: 1000,
    'Innova Xylo': 1200,
    'Innova Crysta': 1200,
    'Cruiser 12 Seat': 2000,
    'Tempo Traveller 17 Seat': 2200,
    'Tempo Traveller 20 Seat': 2500,
  },
  'Jaipur Drop': {
    'Dzire / Eco': 6000,
    Ertiga: 7500,
    'Innova Xylo': 8500,
    'Innova Crysta': 9000,
    'Cruiser 12 Seat': 13000,
    'Tempo Traveller 17 Seat': 15000,
    'Tempo Traveller 20 Seat': 17500,
  },
  'Jaipur Sightseeing': {
    'Dzire / Eco': 7500,
    Ertiga: 8000,
    'Innova Xylo': 9000,
    'Innova Crysta': 10500,
    'Cruiser 12 Seat': 15000,
    'Tempo Traveller 17 Seat': 17000,
    'Tempo Traveller 20 Seat': 20000,
  },
  'Bharatpur Drop': {
    'Dzire / Eco': 2200,
    Ertiga: 2600,
    'Innova Xylo': 3000,
    'Innova Crysta': 3500,
    'Cruiser 12 Seat': 5500,
    'Tempo Traveller 17 Seat': 6000,
    'Tempo Traveller 20 Seat': 7000,
  },
  'Haridwar Rishikesh S.S. (2 Days)': {
    'Dzire / Eco': 10500,
    Ertiga: 14000,
    'Innova Xylo': 16500,
    'Innova Crysta': 18000,
    'Cruiser 12 Seat': 25000,
    'Tempo Traveller 17 Seat': 30000,
    'Tempo Traveller 20 Seat': 35000,
  },
  'Haridwar Rishikesh Drop': {
    'Dzire / Eco': 9000,
    Ertiga: 12000,
    'Innova Xylo': 14000,
    'Innova Crysta': 15000,
    'Cruiser 12 Seat': 20000,
    'Tempo Traveller 17 Seat': 24000,
    'Tempo Traveller 20 Seat': 27000,
  },
};

const vehicleImages = {
  'Dzire / Eco': '/assets/vechiles/hatchback.webp',
  Ertiga: '/assets/vechiles/suv.webp',
  'Innova Xylo': '/assets/vechiles/creta.webp',
  'Innova Crysta': '/assets/vechiles/creta.webp',
  'Cruiser 12 Seat': '/assets/vechiles/traveller.webp',
  'Tempo Traveller 17 Seat': '/assets/vechiles/traveller.webp',
  'Tempo Traveller 20 Seat': '/assets/vechiles/traveller.webp',
};

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export default function PriceCalculatorPage() {
  const [vehicleName, setVehicleName] = useState(vehicleRates[0].name);
  const [routeName, setRouteName] = useState(routeOptions[0]);
  const [days, setDays] = useState(1);
  const [vehicles, setVehicles] = useState(1);

  const selected = vehicleRates.find((vehicle) => vehicle.name === vehicleName) || vehicleRates[0];
  const routeRate = routeFareMatrix[routeName]?.[selected.name] ?? selected.rate;
  const selectedImage = vehicleImages[selected.name] || '/assets/vechiles/hatchback.webp';

  const estimate = useMemo(() => {
    const tripDays = Math.max(1, Number(days) || 1);
    const fleetCount = Math.max(1, Number(vehicles) || 1);
    const subtotal = routeRate * tripDays * fleetCount;
    return {
      tripDays,
      fleetCount,
      subtotal,
      perVehicle: routeRate * tripDays,
    };
  }, [days, vehicles, routeRate]);

  const whatsappLink = `${BUSINESS.whatsapp}`;
  const message = encodeURIComponent(
    `Hello, I would like a price estimate for ${routeName} using ${selected.name} (${selected.label}) for ${estimate.tripDays} day(s) and ${estimate.fleetCount} vehicle(s). Route fare: ${formatINR(routeRate)}. Estimated amount: ${formatINR(estimate.subtotal)}.`
  );

  return (
    <>
      <SEO
        title="Fare Calculator | Fixed Vehicle Rates"
        description="Estimate your taxi or tempo traveller fare using fixed vehicle rates. Choose the vehicle type, trip days and vehicle count to get an instant price estimate."
        path="/calculator"
        image="/assets/og/home.svg"
      />

      <section className="relative overflow-hidden bg-[#0d1b2a] pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,150,74,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">
              Fixed Vehicle Rates
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Fare Calculator for Taxi and Group Travel
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-7 text-white/75">
              Choose the vehicle type, number of travel days and number of vehicles to get a quick estimate based on our fixed rates.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
                <div className="relative min-h-55 bg-[#071421]">
                  <img
                    src={selectedImage}
                    alt={selected.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#071421]/75 via-[#071421]/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9964a]">Selected Vehicle</p>
                  <h2 className="font-display text-2xl font-semibold text-white">{selected.name}</h2>
                  <p className="text-sm leading-7 text-white/75">{selected.note}</p>
                  <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">{selected.seats}</span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1">{formatINR(routeRate)} / route</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                <CarFront className="text-[#c9964a]" size={22} />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Vehicle types</p>
                <p className="mt-1 text-sm text-white/90">Dzire / Eco to Tempo Traveller 20 Seat</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                <Clock3 className="text-[#c9964a]" size={22} />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Flexible duration</p>
                <p className="mt-1 text-sm text-white/90">1 day or multi-day plans</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                <Sparkles className="text-[#c9964a]" size={22} />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Instant estimate</p>
                <p className="mt-1 text-sm text-white/90">Clear and transparent pricing</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-[#eadbc7] bg-[#fffaf3] p-6 text-[#0d1b2a] shadow-[0_20px_50px_rgba(0,0,0,0.22)] dark:border-[#c9964a]/20 dark:bg-[#0a1829] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3 border-b border-[#eadbc7] pb-5 dark:border-[#c9964a]/20">
              <div className="rounded-2xl bg-[#c9964a]/10 p-3 text-[#c9964a]">
                <Calculator size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9964a]">Estimate your fare</p>
                <h2 className="font-display text-2xl font-semibold">Price Summary</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold">
                Place / Route
                <select
                  value={routeName}
                  onChange={(e) => setRouteName(e.target.value)}
                  className="rounded-xl border border-[#e5d5c0] bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none focus:border-[#c9964a] dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                >
                  {routeOptions.map((route) => (
                    <option key={route} value={route}>{route}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Vehicle Type
                <select
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                  className="rounded-xl border border-[#e5d5c0] bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none focus:border-[#c9964a] dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                >
                  {vehicleRates.map((vehicle) => (
                    <option key={vehicle.name} value={vehicle.name}>{vehicle.label} · {vehicle.seats}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Number of Travel Days / Packages
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="rounded-xl border border-[#e5d5c0] bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none focus:border-[#c9964a] dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Number of Vehicles
                <input
                  type="number"
                  min="1"
                  value={vehicles}
                  onChange={(e) => setVehicles(e.target.value)}
                  className="rounded-xl border border-[#e5d5c0] bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none focus:border-[#c9964a] dark:border-[#c9964a]/25 dark:bg-[#060f1e] dark:text-white"
                />
              </label>
            </div>

            <div className="mt-6 rounded-2xl bg-[#0d1b2a] p-5 text-white dark:bg-[#060f1e]">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9964a]">Selected route</p>
                  <h3 className="mt-1 text-lg font-semibold">{routeName}</h3>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9964a]">Selected vehicle</p>
                  <h3 className="mt-1 text-lg font-semibold">{selected.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{selected.label} · {selected.seats}</p>
                </div>
                <div className="rounded-full bg-[#c9964a]/12 px-3 py-1 text-xs font-semibold text-[#c9964a]">
                  {formatINR(routeRate)} / route
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Per vehicle estimate</p>
                  <p className="mt-1 text-xl font-semibold text-[#c9964a]">{formatINR(estimate.perVehicle)}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Total estimate</p>
                  <p className="mt-1 text-xl font-semibold text-[#c9964a]">{formatINR(estimate.subtotal)}</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/60">
                Estimate = route fare × {estimate.tripDays} day(s) × {estimate.fleetCount} vehicle(s). Final fare may vary based on selected route, tolls, parking and special requests.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappLink}?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="gold-gradient inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#c9964a]/25"
              >
                <Phone size={16} /> Get This Quote on WhatsApp
              </a>
              <Link
                to="/packages"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#c9964a] px-5 py-3.5 text-sm font-bold text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
              >
                <MapPin size={16} /> View Packages
              </Link>
            </div>

            <div className="mt-5 flex items-start gap-2 rounded-2xl border border-dashed border-[#c9964a]/35 bg-[#f8efe1] p-4 text-sm text-[#4b5563] dark:border-[#c9964a]/20 dark:bg-white/5 dark:text-white/70">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
              <p>Vehicle rates are fixed for quick estimation. If you want a package quote for a specific route, we can tailor it separately.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}