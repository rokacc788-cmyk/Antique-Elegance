// Gold Tree of Life SVG logo for Charming Antiques
// Adjust size via the `size` prop (default: 40px)

interface TreeOfLifeLogoProps {
  size?: number;
  className?: string;
}

export default function TreeOfLifeLogo({ size = 40, className = '' }: TreeOfLifeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Trunk */}
      <rect x="47" y="60" width="6" height="28" rx="3" fill="currentColor" />

      {/* Roots */}
      <path d="M50 88 Q38 92 30 98" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 88 Q62 92 70 98" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 88 Q44 95 40 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M50 88 Q56 95 60 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Main branches */}
      <path d="M50 62 Q30 52 18 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 62 Q70 52 82 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 62 Q42 44 38 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 62 Q58 44 62 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 62 Q50 42 50 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Secondary branches left */}
      <path d="M30 50 Q22 44 16 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M30 50 Q26 42 24 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Secondary branches right */}
      <path d="M70 50 Q78 44 84 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M70 50 Q74 42 76 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Leaves / circle clusters at tips */}
      {/* Left canopy */}
      <circle cx="18" cy="36" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="42" r="4" fill="currentColor" opacity="0.75" />
      <circle cx="14" cy="30" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="24" cy="32" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="24" r="3.5" fill="currentColor" opacity="0.7" />

      {/* Right canopy */}
      <circle cx="82" cy="36" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="88" cy="42" r="4" fill="currentColor" opacity="0.75" />
      <circle cx="86" cy="30" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="76" cy="32" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="78" cy="24" r="3.5" fill="currentColor" opacity="0.7" />

      {/* Centre-left */}
      <circle cx="38" cy="26" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="32" cy="20" r="3.5" fill="currentColor" opacity="0.75" />
      <circle cx="44" cy="18" r="4" fill="currentColor" opacity="0.85" />

      {/* Centre-right */}
      <circle cx="62" cy="26" r="5" fill="currentColor" opacity="0.9" />
      <circle cx="68" cy="20" r="3.5" fill="currentColor" opacity="0.75" />
      <circle cx="56" cy="18" r="4" fill="currentColor" opacity="0.85" />

      {/* Top centre crown */}
      <circle cx="50" cy="14" r="6.5" fill="currentColor" opacity="0.95" />
      <circle cx="42" cy="10" r="4.5" fill="currentColor" opacity="0.8" />
      <circle cx="58" cy="10" r="4.5" fill="currentColor" opacity="0.8" />
      <circle cx="50" cy="5"  r="4" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
