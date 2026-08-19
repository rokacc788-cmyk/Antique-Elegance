import logoImage from '@assets/1000000753_1787130854051.jpg';

interface TreeOfLifeLogoProps {
  size?: number;
  className?: string;
}

export default function TreeOfLifeLogo({ size = 40, className = '' }: TreeOfLifeLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-sm ${className}`}
      style={{ width: `${size * 1.55}px`, height: `${size}px` }}
    >
      <img
        src={logoImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 60%' }}
      />
    </span>
  );
}
