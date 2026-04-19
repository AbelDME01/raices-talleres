import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const items = [
  {
    q: '¿Puedo ir con mi peque al taller?',
    a: 'Los talleres son para personas adultas. Así podemos hablar sin interrupciones de temas que a veces son delicados. Si te resulta imposible, escríbenos y buscamos una solución (algunos son compatibles con bebés menores de 6 meses en porteo).',
  },
  {
    q: '¿Qué pasa si no puedo asistir finalmente?',
    a: 'Puedes cancelar hasta 48 horas antes y te devolvemos el importe completo. Si avisas más tarde, te ofrecemos cambio a otro taller sin coste adicional.',
  },
  {
    q: '¿Hay material para llevarse?',
    a: 'Sí. Cada familia recibe un dossier con un resumen del taller, referencias y lecturas recomendadas para seguir profundizando en casa.',
  },
  {
    q: '¿Los talleres online son en directo o grabados?',
    a: 'Son en directo vía Zoom. Creemos que lo importante es la conversación y las preguntas. Si no puedes conectarte, te mandamos la grabación durante los 15 días siguientes.',
  },
  {
    q: 'Tenemos ingresos ajustados, ¿hay alguna ayuda?',
    a: 'Sí. Reservamos cada mes dos plazas con precio reducido (bono social) para familias que lo necesiten. Nos escribes y te las ofrecemos sin más preguntas.',
  },
  {
    q: '¿Quién da los talleres?',
    a: 'Educadoras, psicólogas y enfermeras especializadas en primera infancia, con experiencia clínica y con peques propios. En cada taller verás quién lo acompaña.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section
      id="faq"
      style={{ padding: isMobile ? '80px 20px' : '120px 40px', position: 'relative' }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 60, textAlign: 'center' }}>
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
            Preguntas frecuentes
          </div>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.08,
              margin: 0,
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            Lo que otras familias
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>nos preguntan antes.</em>
          </h2>
        </div>

        <div className="reveal">
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: '1.5px solid var(--line)' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%',
                  padding: isMobile ? '20px 0' : '28px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  gap: 20,
                }}
              >
                <span
                  className="serif"
                  style={{
                    fontSize: isMobile ? 19 : 22,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  {it.q}
                </span>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: open === i ? 'var(--ink)' : 'var(--cream)',
                    color: open === i ? 'var(--bg)' : 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                    transition: 'all .3s',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height .4s ease, padding .4s ease',
                  paddingBottom: open === i ? 28 : 0,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: 'var(--ink-soft)',
                    maxWidth: 720,
                  }}
                >
                  {it.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
