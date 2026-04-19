import Blob from './Blob';

const items = [
  { n: '01', t: 'Sin recetas', d: 'No hay una sola forma de criar. Te ayudamos a encontrar la tuya.' },
  { n: '02', t: 'Con ciencia', d: 'Lo que te contamos está basado en evidencia y experiencia real.' },
  { n: '03', t: 'Sin juicios', d: 'Un lugar seguro para preguntar lo que no te atreves a preguntar.' },
  { n: '04', t: 'En comunidad', d: 'Te vas con información. Y con otras familias a las que escribir.' },
];

export default function ValuesBand() {
  return (
    <section
      id="metodo"
      style={{ padding: '120px 40px', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}
    >
      <Blob
        color="var(--peach)"
        style={{ position: 'absolute', width: 300, height: 300, top: -60, left: -60, opacity: 0.4 }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 80 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 20,
            }}
          >
            Cómo trabajamos
          </div>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.1,
              margin: 0,
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            Cuatro ideas que sostienen{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>todo lo que hacemos.</em>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 80}ms`,
                padding: '32px 8px 0',
                borderTop: '1.5px solid rgba(61,53,48,.15)',
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  color: 'var(--accent)',
                  marginBottom: 16,
                  fontStyle: 'italic',
                }}
              >
                {it.n}
              </div>
              <h3
                className="serif"
                style={{ fontSize: 28, margin: '0 0 12px', fontWeight: 500, letterSpacing: '-0.02em' }}
              >
                {it.t}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
