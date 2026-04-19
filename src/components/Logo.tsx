
interface LogoProps {
  size?: number;
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="20" r="12" fill="var(--peach)" />
        <circle cx="16" cy="30" r="8" fill="var(--mint)" />
        <circle cx="32" cy="32" r="9" fill="var(--sky)" />
        <circle cx="24" cy="24" r="3" fill="var(--ink)" />
      </svg>
      <span
        className="serif"
        style={{ fontWeight: 500, fontSize: size * 0.7, letterSpacing: '-0.03em' }}
      >
        Raíces
      </span>
    </div>
  );
}
