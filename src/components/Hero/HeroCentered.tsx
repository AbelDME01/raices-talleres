import Blob from '../Blob';

export default function HeroCentered() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '160px 40px 80px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Blob
        className="floaty-slow"
        color="var(--peach)"
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.5,
        }}
      />
      <Blob
        className="floaty"
        color="var(--mint)"
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          bottom: 120,
          left: 80,
          opacity: 0.6,
        }}
      />
      <Blob
        className="floaty-slow"
        color="var(--sky)"
        style={{
          position: 'absolute',
          width: 260,
          height: 260,
          top: 200,
          right: 40,
          opacity: 0.55,
        }}
      />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'var(--lavender)',
            padding: '8px 16px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          <span
            style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}
          />
          Talleres 2026 · Primavera
        </div>

        <h1
          className="serif"
          style={{
            fontSize: 'clamp(56px, 8vw, 120px)',
            lineHeight: 1,
            margin: '0 0 32px',
            fontWeight: 400,
            letterSpacing: '-0.04em',
          }}
        >
          Criar no es
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>un manual.</em>
          <br />
          Es un camino.
        </h1>

        <p
          style={{
            fontSize: 22,
            lineHeight: 1.55,
            maxWidth: 620,
            margin: '0 auto 48px',
            color: 'var(--ink-soft)',
          }}
        >
          Talleres formativos para familias con peques de 1 a 6 años. Información cuidada, sin
          juicios y con otras familias al lado.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <a
            href="#talleres"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '18px 32px',
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            Ver talleres →
          </a>
          <a
            href="#metodo"
            style={{
              padding: '18px 24px',
              fontWeight: 600,
              border: '1.5px solid var(--line)',
              borderRadius: 999,
            }}
          >
            Cómo trabajamos
          </a>
        </div>
      </div>
    </section>
  );
}
