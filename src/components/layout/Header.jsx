import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';
import Logo from '../ui/Logo.jsx';

const navLinks = [
  { label: 'Home',         path: '/' },
  { label: 'About Us',     path: '/about' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Packages',     path: '/packages' },
  { label: 'Fare Calculator', path: '/calculator' },
  { label: 'Contact Us',   path: '/contact' },
];

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          !isHome || scrolled
            ? 'bg-[#fffaf3]/95 shadow-md backdrop-blur-md dark:bg-[#060f1e]/95'
            : ''
        }`}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="section-shell flex h-20 items-center justify-between gap-6 md:h-24">
          <Link to="/" className="flex items-center" aria-label="Gautam Taxi and Bus – Home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `relative py-3 text-xs font-semibold transition hover:text-[#c9964a] dark:hover:text-[#d99a2b] ${
                    isActive
                      ? 'text-[#c9964a] dark:text-[#d99a2b]'
                      : 'text-[#0d1b2a] dark:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && <span className="absolute bottom-1 left-0 h-px w-full bg-[#c9964a]" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Book Now CTA — desktop */}
          <Link
            to="/book"
            className="hidden whitespace-nowrap rounded border border-[#c9964a] px-4 py-3 text-xs font-bold uppercase text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white sm:inline-flex xl:px-5"
          >
            Book Now
          </Link>

          <div className="flex items-center gap-4">

            <button
              className="rounded-full border border-[#c9964a] p-3 text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="rounded-full border border-[#c9964a] p-3 text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-60 bg-[#0d1b2a]/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed right-0 top-0 z-70 flex h-full w-[80vw] max-w-xs flex-col bg-[#fffaf3] shadow-2xl dark:bg-[#060f1e]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#eadbc7] px-6 py-5 dark:border-[#c9964a]/20">
                <Logo />
                <button
                  className="rounded-full border border-[#c9964a] p-2 text-[#c9964a] transition hover:bg-[#c9964a] hover:text-white"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
                {navLinks.map(({ label, path }, index) => (
                  <motion.div key={label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.055, duration: 0.3 }}>
                    <NavLink
                      to={path}
                      end={path === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors hover:bg-[#c9964a]/10 hover:text-[#c9964a] dark:hover:bg-[#c9964a]/12 dark:hover:text-[#d99a2b] ${
                          isActive ? 'text-[#c9964a] bg-[#c9964a]/8 dark:text-[#d99a2b]' : 'text-[#0d1b2a] dark:text-white'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div className="border-t border-[#eadbc7] px-6 py-6 dark:border-[#c9964a]/20">
                <Link
                  to="/book"
                  onClick={closeMenu}
                  className="gold-gradient flex w-full items-center justify-center rounded py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#c9964a]/25"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

