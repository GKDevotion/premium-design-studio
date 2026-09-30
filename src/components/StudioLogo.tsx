import React from 'react';

interface StudioLogoProps {
  variant?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 34;
  const titleClass =
    size === 'sm'
      ? 'text-sm font-semibold tracking-[0.08em]'
      : size === 'lg'
      ? 'text-xl font-bold tracking-[0.08em]'
      : 'text-base font-semibold tracking-[0.09em]';
  const subClass =
    size === 'sm'
      ? 'text-[8.5px] tracking-[0.28em]'
      : size === 'lg'
      ? 'text-[11px] tracking-[0.32em]'
      : 'text-[9.5px] tracking-[0.3em]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Bespoke Architectural Emblem: Interlocking Spatial Planes & Monogram */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer Architectural Perspective Frame */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="6"
          stroke={isLight ? '#FFFFFF' : '#141413'}
          strokeWidth="2.5"
          className="transition-colors"
        />

        {/* Spatial Depth Lines (Architectural Floorplan & Isometric Elevation) */}
        <path
          d="M3 24H45"
          stroke={isLight ? 'rgba(255,255,255,0.22)' : 'rgba(20,20,19,0.18)'}
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path
          d="M24 3V45"
          stroke={isLight ? 'rgba(255,255,255,0.22)' : 'rgba(20,20,19,0.18)'}
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />

        {/* Interlocking Monogram / Architectural Portal P & D */}
        {/* 'P' Architectural Pillar & Arc */}
        <path
          d="M14 14V34"
          stroke={isLight ? '#FFFFFF' : '#141413'}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 14H24C27.3137 14 30 16.6863 30 20C30 23.3137 27.3137 26 24 26H14"
          stroke={isLight ? '#FFFFFF' : '#141413'}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Precision Spatial Corner / Gold Accent Marker */}
        <circle
          cx="33"
          cy="33"
          r="3"
          fill="#C5A059"
          className="transition-colors"
        />
        <path
          d="M24 34H33"
          stroke="#C5A059"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M33 25V34"
          stroke="#C5A059"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Typographic Identity in Poppins */}
      <div className="flex flex-col leading-none">
        <span
          className={`uppercase font-sans ${titleClass} ${
            isLight ? 'text-white' : 'text-[#141413]'
          }`}
        >
          PREMIUM
        </span>
        {showTagline && (
          <span
            className={`uppercase font-sans font-medium mt-1 ${subClass} ${
              isLight ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            DESIGN STUDIO
          </span>
        )}
      </div>
    </div>
  );
};
