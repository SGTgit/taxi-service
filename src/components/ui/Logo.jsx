import { useTheme } from '../../context/ThemeContext.jsx';

/**
 * Logo component — renders the brand mark from the icons folder.
 * If the image fails to load or isn't wide enough to read,
 * the onError handler switches to the SVG text fallback.
 */
function Logo() {
  const { isDark } = useTheme();

  return (
    <span className="flex items-center gap-2.5">
      {/* Brand mark image */}
      <img
        src={isDark ? '/assets/icons/notextlogo-dark.webp' : '/assets/icons/notextlogo.webp'}
        alt="Gautam Taxi and Bus logo"
        aria-hidden="true"
        className="h-20 w-20 shrink-0 object-contain md:h-24 md:w-24"
      />

      {/* Text stack */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-bold tracking-wide md:text-lg ${
            isDark ? 'text-white' : 'text-[#0d1b2a]'
          }`}
        >
          Gautam Taxi
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9964a]">
          &amp; Buses · Vrindavan
        </span>
      </span>
    </span>
  );
}

export default Logo;
