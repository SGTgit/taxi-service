/**
 * Official WhatsApp logo SVG — matches the real app icon exactly.
 * Supports:
 * - full={true} (default for FAB): renders the complete badge with official green gradient & shadow
 * - full={false} (for text/buttons): renders a clean, cropped icon symbol that inherits currentColor
 */
function WhatsAppIcon({ size = 24, className = '', full = false }) {
  if (full) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className={className}
        fill="none"
      >
        <defs>
          <linearGradient id="waGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5BFF8A" />
            <stop offset="100%" stopColor="#25D366" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Outer Glow & Background */}
        <circle
          cx="256"
          cy="256"
          r="230"
          fill="url(#waGradient)"
          filter="url(#shadow)"
        />

        {/* Smaller WhatsApp Bubble */}
        <g transform="translate(32, 32) scale(0.87)">
          {/* WhatsApp Chat Bubble */}
          <path
            fill="#FFFFFF"
            d="M256 96c-88.4 0-160 71.6-160 160 0 28.3 7.4 55.8 21.4 80L96 416l82.7-21.7c23.3 12.7 49.5 19.4 77.3 19.4 88.4 0 160-71.6 160-160S344.4 96 256 96zm0 286.7c-23.3 0-46.2-6.2-66.2-17.9l-4.7-2.8-49.1 12.9 13.1-47.8-3.1-4.9c-13-20.7-19.9-44.6-19.9-69 0-71.7 58.3-130 130-130 34.7 0 67.3 13.5 91.9 38.1 24.6 24.6 38.1 57.2 38.1 91.9 0 71.7-58.3 130-130 130z"
          />

          {/* Phone Symbol */}
          <path
            fill="#FFFFFF"
            d="M338.6 300.5c-4.6-2.3-27.2-13.4-31.4-14.9-4.2-1.5-7.2-2.3-10.3 2.3-3.1 4.6-11.8 14.9-14.5 17.9-2.7 3.1-5.4 3.5-10 .8-27.4-13.7-45.4-24.5-63.5-55.4-4.8-8.3.8-7.7 13.7-25 1.5-1.9 2.3-4.2 3.5-6.9 1.2-2.7.6-5-0.4-7.3-1.1-2.3-10.3-24.8-14.1-34-3.7-8.9-7.5-7.7-10.3-7.9-2.7-.2-5.8-.2-8.9-.2-3.1 0-8.1 1.2-12.3 5.8-4.2 4.6-16 15.6-16 38 0 22.4 16.4 44 18.7 47.1 2.3 3.1 32.2 49.2 78 69 10.9 4.6 19.4 7.3 26 9.3 10.9 3.5 20.8 3.1 28.7 1.9 8.7-1.2 27.2-11.1 31-21.8 3.9-10.7 3.9-19.9 2.7-21.8-1.1-1.9-4.2-3.1-8.9-5.4z"
          />
        </g>
      </svg>
    );
  }

  // Symbol mode (for inside green buttons or inline text) - cropped to fits standard icon layouts
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="86 86 340 340"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      {/* WhatsApp Chat Bubble */}
      <path
        d="M256 96c-88.4 0-160 71.6-160 160 0 28.3 7.4 55.8 21.4 80L96 416l82.7-21.7c23.3 12.7 49.5 19.4 77.3 19.4 88.4 0 160-71.6 160-160S344.4 96 256 96zm0 286.7c-23.3 0-46.2-6.2-66.2-17.9l-4.7-2.8-49.1 12.9 13.1-47.8-3.1-4.9c-13-20.7-19.9-44.6-19.9-69 0-71.7 58.3-130 130-130 34.7 0 67.3 13.5 91.9 38.1 24.6 24.6 38.1 57.2 38.1 91.9 0 71.7-58.3 130-130 130z"
      />

      {/* Phone Symbol */}
      <path
        d="M338.6 300.5c-4.6-2.3-27.2-13.4-31.4-14.9-4.2-1.5-7.2-2.3-10.3 2.3-3.1 4.6-11.8 14.9-14.5 17.9-2.7 3.1-5.4 3.5-10 .8-27.4-13.7-45.4-24.5-63.5-55.4-4.8-8.3.8-7.7 13.7-25 1.5-1.9 2.3-4.2 3.5-6.9 1.2-2.7.6-5-0.4-7.3-1.1-2.3-10.3-24.8-14.1-34-3.7-8.9-7.5-7.7-10.3-7.9-2.7-.2-5.8-.2-8.9-.2-3.1 0-8.1 1.2-12.3 5.8-4.2 4.6-16 15.6-16 38 0 22.4 16.4 44 18.7 47.1 2.3 3.1 32.2 49.2 78 69 10.9 4.6 19.4 7.3 26 9.3 10.9 3.5 20.8 3.1 28.7 1.9 8.7-1.2 27.2-11.1 31-21.8 3.9-10.7 3.9-19.9 2.7-21.8-1.1-1.9-4.2-3.1-8.9-5.4z"
      />
    </svg>
  );
}

export default WhatsAppIcon;
