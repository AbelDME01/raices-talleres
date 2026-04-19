
export default function HeroArtwork() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Main card — photo placeholder */}
      <div
        className="soft-shadow"
        style={{
          position: 'absolute',
          inset: '8% 10% 12% 8%',
          background: `repeating-linear-gradient(135deg, var(--cream) 0 14px, #F5DEB3 14px 16px)`,
          borderRadius: '40% 60% 55% 45% / 50% 40% 60% 50%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 12,
              background: 'rgba(253,251,247,0.9)',
              padding: '6px 12px',
              borderRadius: 999,
              color: 'var(--ink-soft)',
            }}
          >
            familia_jugando.jpg
          </span>
        </div>
      </div>

      {/* Decorative shapes */}
      <div
        className="floaty"
        style={{
          position: 'absolute',
          top: '6%',
          right: '2%',
          width: 120,
          height: 120,
          background: 'var(--mint)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56">
          <path d="M28 10 Q38 22 28 34 Q18 22 28 10 Z" fill="var(--ink)" opacity=".6" />
          <circle cx="28" cy="42" r="3" fill="var(--ink)" opacity=".6" />
        </svg>
      </div>

      <div
        className="floaty-slow"
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '0%',
          width: 140,
          height: 90,
          background: 'var(--sky)',
          borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="script" style={{ fontSize: 28, color: 'var(--ink)' }}>
          hola ✿
        </span>
      </div>

      <div
        className="floaty"
        style={{
          position: 'absolute',
          top: '40%',
          right: '-4%',
          width: 70,
          height: 70,
          background: 'var(--accent)',
          borderRadius: '50%',
        }}
      />

      <div
        className="floaty-slow"
        style={{
          position: 'absolute',
          top: '12%',
          left: '-2%',
          width: 50,
          height: 50,
          background: 'var(--lavender)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
