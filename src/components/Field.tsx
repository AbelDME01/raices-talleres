
interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}

export default function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: FieldProps) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '14px 16px',
          border: `1.5px solid ${error ? 'var(--accent)' : 'var(--line)'}`,
          borderRadius: 999,
          background: 'var(--bg)',
          fontSize: 14,
          outline: 'none',
          transition: 'border-color .2s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
        onBlur={(e) =>
          (e.target.style.borderColor = error ? 'var(--accent)' : 'var(--line)')
        }
      />
      {error && (
        <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 6, marginLeft: 16 }}>
          {error}
        </div>
      )}
    </div>
  );
}
