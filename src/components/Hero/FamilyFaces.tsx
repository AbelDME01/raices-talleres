
export default function FamilyFaces() {
  const palettes = ['var(--peach)', 'var(--mint)', 'var(--sky)', 'var(--cream)'];
  const symbols = ['◠', '✿', '◡', '△'];

  return (
    <div style={{ display: 'flex' }}>
      {palettes.map((c, i) => (
        <div
          key={i}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: c,
            border: '3px solid var(--bg)',
            marginLeft: i === 0 ? 0 : -12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
          }}
        >
          <span style={{ opacity: 0.7 }}>{symbols[i]}</span>
        </div>
      ))}
    </div>
  );
}
