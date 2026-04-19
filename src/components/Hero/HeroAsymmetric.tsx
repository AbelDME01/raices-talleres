import HeroArtwork from './HeroArtwork';

export default function HeroAsymmetric() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '140px 0 40px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 180px)',
        }}
      >
        <div
          style={{
            padding: '40px 60px 40px 10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              width: 'fit-content',
              alignItems: 'center',
              gap: 10,
              background: 'var(--cream)',
              padding: '8px 16px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            Talleres 2026
          </div>

          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: 1.02,
              margin: '0 0 28px',
              fontWeight: 400,
              letterSpacing: '-0.035em',
            }}
          >
            Un lugar
            <br />
            donde
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>
              respirar
            </em>{' '}
            la crianza.
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              maxWidth: 460,
              margin: '0 0 36px',
              color: 'var(--ink-soft)',
            }}
          >
            Formación y acompañamiento para familias con peques de 1 a 6 años.
          </p>

          <a
            href="#talleres"
            style={{
              background: 'var(--ink)',
              color: 'var(--bg)',
              padding: '18px 28px',
              borderRadius: 999,
              fontWeight: 600,
              width: 'fit-content',
            }}
          >
            Explorar talleres →
          </a>
        </div>

        <div
          style={{
            position: 'relative',
            background: 'var(--peach)',
            borderTopLeftRadius: '180px 140px',
            borderBottomLeftRadius: '120px 180px',
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
            <HeroArtwork />
          </div>
        </div>
      </div>
    </section>
  );
}
