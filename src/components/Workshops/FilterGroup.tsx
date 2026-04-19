
interface FilterGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export default function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--ink-soft)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            style={{
              padding: '8px 14px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: value === o ? 'var(--ink)' : 'transparent',
              color: value === o ? 'var(--bg)' : 'var(--ink-soft)',
              border: value === o ? '1.5px solid var(--ink)' : '1.5px solid var(--line)',
              transition: 'all .2s',
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
