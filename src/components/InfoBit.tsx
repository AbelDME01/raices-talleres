
interface InfoBitProps {
  label: string;
  value: string;
}

export default function InfoBit({ label, value }: InfoBitProps) {
  return (
    <div style={{ padding: '14px 16px', background: 'var(--cream)', borderRadius: 16 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{value}</div>
    </div>
  );
}
