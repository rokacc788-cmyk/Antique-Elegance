import logoImage from '@assets/Change_Font_Settings_20260819_102035_0000_1787131251807.svg';

interface BrandLogoProps {
  height?: number;
  className?: string;
}

export default function BrandLogo({ height = 40, className = '' }: BrandLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ width: `${height * 3.6}px`, height: `${height}px` }}
      aria-hidden="true"
    >
      <img
        src={logoImage}
        alt=""
        className="absolute max-w-none"
        style={{
          width: '155.8%',
          height: '1211.8%',
          left: '-28%',
          top: '-398.2%',
        }}
      />
    </span>
  );
}