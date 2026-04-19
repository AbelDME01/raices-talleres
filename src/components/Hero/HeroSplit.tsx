import Blob from '../Blob';
import HeroArtwork from './HeroArtwork';
import FamilyFaces from './FamilyFaces';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function HeroSplit() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: isMobile ? '120px 20px 60px' : '140px 40px 80px',
        overflow: 'hidden',
      }}
    >
      <Blob
        className="floaty-slow"
        color="var(--peach)"
        style={{
          position: 'absolute',
          width: 360,
          height: 360,
          top: -60,
          right: -80,
          ['--r' as string]: '15deg',
          opacity: 0.9,
        }}
      />
      <Blob
        className="floaty"
        color="var(--mint)"
        style={{
          position: 'absolute',
          width: 220,
          height: 220,
          bottom: 80,
          left: -40,
          ['--r' as string]: '-20deg',
          opacity: 0.8,
        }}
      />
      <Blob
        className="floaty-slow"
        color="var(--cream)"
        style={{
          position: 'absolute',
          width: 180,
          height: 180,
          top: 220,
          right: 320,
          ['--r' as string]: '30deg',
          opacity: 0.7,
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
          gap: 60,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
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
              color: 'var(--ink)',
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
              fontSize: 'clamp(48px, 6.2vw, 92px)',
              lineHeight: 1.02,
              margin: '0 0 28px',
              fontWeight: 400,
              letterSpacing: '-0.035em',
            }}
          >
            Criar <em style={{ fontStyle: 'italic', fontWeight: 300 }}>acompañadas</em>,
            <br />
            no en soledad.
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              maxWidth: 520,
              margin: '0 0 40px',
              color: 'var(--ink-soft)',
            }}
          >
            Espacios formativos para familias con peques de{' '}
            <strong style={{ color: 'var(--ink)' }}>1 a 6 años</strong>. Sin recetas mágicas, sin
            juicios. Información fiable y una red de otras familias que también están aprendiendo.
          </p>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a
              href="#talleres"
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '18px 32px',
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 16,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              Ver talleres <span style={{ fontSize: 20 }}>→</span>
            </a>
            <a
              href="#metodo"
              style={{
                padding: '18px 10px',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--ink)',
                borderBottom: '2px solid var(--ink)',
              }}
            >
              Cómo trabajamos
            </a>
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 40, alignItems: 'center' }}>
            <FamilyFaces />
            <div>
              <div style={{ fontSize: 15, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>+420 familias</strong> han pasado por aquí
              </div>
              <div className="script" style={{ fontSize: 22, color: 'var(--accent)' }}>
                y siguen viniendo ✿
              </div>
            </div>
          </div>
        </div>

        {/* Second column: artwork — hidden on mobile */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '1/1.05',
            display: isMobile ? 'none' : 'block',
          }}
        >
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}
