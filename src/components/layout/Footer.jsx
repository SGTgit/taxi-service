import {
  ChevronUp,
  Mail, MapPin, Phone, PlayCircle, Share2,
} from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx';
import { Link } from 'react-router-dom';
import { contactItems } from '../../data/siteData.jsx';
import Logo from '../ui/Logo.jsx';
import { BUSINESS, WA_LINK, TEL1 } from '../../config/business.js';

/* ─── Data ─────────────────────────────────────────────────────── */
const socials = [
  { icon: WhatsAppIcon, label: 'WhatsApp',  href: WA_LINK,  color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
  { icon: Share2,        label: 'Instagram', href: BUSINESS.instagram,  color: 'hover:bg-[#E1306C] hover:border-[#E1306C]' },
  { icon: PlayCircle,    label: 'YouTube',   href: BUSINESS.youtube,   color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' },
  { icon: Phone,         label: 'Call',      href: TEL1,  color: 'hover:bg-[#c9964a] hover:border-[#c9964a]' },
];


const navCols = [
  {
    title: 'Explore',
    links: [
      { label: 'Home',         to: '/' },
      { label: 'About Us',     to: '/about' },
      { label: 'Services',     to: '/services' },
      { label: 'Destinations', to: '/destinations' },
      { label: 'Packages',     to: '/packages' },
      { label: 'Contact Us',   to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Vedic Cabs',         to: '/services' },
      { label: 'Airport Transfers',    to: '/services' },
      { label: 'Hourly Taxi',         to: '/services' },
      { label: 'Coach Hire',          to: '/services' },
      { label: 'Outstation Trips',     to: '/services' },
      { label: '24/7 Support',         to: '/contact' },
    ],
  },
  {
    title: 'Popular Routes',
    links: [
      { label: 'Banke Bihari Temple', to: '/destinations' },
      { label: 'Prem Mandir',         to: '/destinations' },
      { label: 'Iskcon Temple',       to: '/destinations' },
      { label: 'Govardhan Parvat',    to: '/destinations' },
      { label: 'Barsana & Nandgaon', to: '/destinations' },
      { label: 'Radha Kund',         to: '/destinations' },
    ],
  },
];

/* ─── Reusable link column ─────────────────────────────────────── */
function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9964a]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#c9964a]"
            >
              <span className="h-px w-0 shrink-0 bg-[#c9964a] transition-all duration-300 group-hover:w-3" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main Footer ──────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer id="contact-us" className="relative overflow-hidden bg-[#060f1e] text-white">

      {/* Glow accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#c9964a]/6 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#c9964a]/5 blur-[100px]" />



      {/* ── Main columns ── */}
      <div className="section-shell py-10 md:py-14">

        {/* Brand — always full width on mobile, 1 col on desktop */}
        <div className="mb-8 md:hidden">
          <Link to="/" aria-label="Home"><Logo /></Link>
            <p className="mt-3 text-sm leading-7 text-white/55">
              Vedic taxi and coach services in Vrindavan. Trusted by thousands of pilgrims.
            </p>
          <div className="mt-4 flex gap-2.5">
            {socials.map(({ icon: Icon, label, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:text-white ${color}`}
                aria-label={label}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: 2-column link grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {navCols.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}

          {/* Contact — 4th item spans full width on mobile */}
          <div className="col-span-2 border-t border-white/8 pt-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9964a]">Contact Us</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const resolvedHref = href || (label.startsWith('+') ? `tel:${label.replace(/\s/g, '')}` : label.includes('@') ? `mailto:${label}` : label.startsWith('http') ? label : undefined);
                return (
                  <div key={label} className="flex items-start gap-2">
                    <Icon size={13} className="mt-0.5 shrink-0 text-[#c9964a]" />
                    {resolvedHref ? (
                      <a href={resolvedHref} target={resolvedHref.startsWith('http') ? '_blank' : undefined} rel={resolvedHref.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-xs leading-5 text-white/60 break-all transition hover:text-[#c9964a]">{label}</a>
                    ) : (
                      <span className="text-xs leading-5 text-white/60 break-words">{label}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: 5-column grid */}
          <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] md:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Home"><Logo /></Link>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Vedic taxi and coach services in Vrindavan, Mathura. Trusted by thousands of pilgrims since 2014.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:text-white ${color}`}
                  aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {navCols.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9964a]">Contact Us</h3>
            <div className="mt-5 space-y-4">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const resolvedHref = href || (label.startsWith('+') ? `tel:${label.replace(/\s/g, '')}` : label.includes('@') ? `mailto:${label}` : label.startsWith('http') ? label : undefined);
                return (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c9964a]/12">
                      <Icon size={13} className="text-[#c9964a]" />
                    </span>
                    {resolvedHref ? (
                      <a href={resolvedHref} target={resolvedHref.startsWith('http') ? '_blank' : undefined} rel={resolvedHref.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm leading-5 text-white/60 break-all transition hover:text-[#c9964a]">{label}</a>
                    ) : (
                      <span className="text-sm leading-5 text-white/60 break-words">{label}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="section-shell flex flex-col items-center gap-3 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {BUSINESS.name} · All Rights Reserved
          </p>
          <p className="text-xs text-white/25">Made with 🙏 in Vrindavan, Braj</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/40 transition hover:border-[#c9964a] hover:text-[#c9964a]"
            aria-label="Back to top"
          >
            <ChevronUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
