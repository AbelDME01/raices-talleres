import { useState, type FormEvent } from 'react';
import Blob from './Blob';
import Field from './Field';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  topic: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    topic: 'Información general',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: ContactErrors = {};
    if (!form.name || form.name.length < 2) er.name = 'Tu nombre';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Revisa el email';
    if (!form.message || form.message.length < 10)
      er.message = 'Cuéntanos algo más, con 10 caracteres basta';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <section
      id="contacto"
      style={{
        padding: '120px 40px',
        background: 'var(--peach)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Blob
        color="var(--cream)"
        style={{ position: 'absolute', width: 320, height: 320, top: -60, left: -80, opacity: 0.6 }}
      />
      <Blob
        color="var(--sky)"
        style={{ position: 'absolute', width: 220, height: 220, bottom: 40, right: -40, opacity: 0.5 }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 60,
          alignItems: 'center',
        }}
      >
        {/* Left column */}
        <div className="reveal">
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              marginBottom: 20,
              opacity: 0.6,
            }}
          >
            Contacto
          </div>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              lineHeight: 1.05,
              margin: '0 0 24px',
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            ¿Tienes una <em style={{ fontStyle: 'italic', fontWeight: 300 }}>duda</em>?<br />
            Estamos aquí.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--ink-soft)',
              margin: '0 0 32px',
            }}
          >
            Escríbenos con lo que sea: una duda sobre un taller, una necesidad específica, o solo
            para saludar. Respondemos en menos de 48 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✉
              </div>
              hola@raices-crianza.es
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ☎
              </div>
              +34 612 34 56 78
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ◉
              </div>
              Calle del Olmo 14, Madrid
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <form
          onSubmit={submit}
          className="reveal soft-shadow"
          style={{ background: 'var(--bg)', padding: '36px', borderRadius: 32 }}
        >
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'var(--mint)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 20L17 27L30 13"
                    stroke="var(--ink)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="serif" style={{ fontSize: 26, margin: '0 0 10px', fontWeight: 500 }}>
                Mensaje recibido ✿
              </h4>
              <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>
                Te respondemos pronto a {form.email}
              </p>
            </div>
          ) : (
            <>
              <h4 className="serif" style={{ fontSize: 24, margin: '0 0 20px', fontWeight: 500 }}>
                Hablemos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label
                    style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8 }}
                  >
                    Sobre qué escribes
                  </label>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['Información general', 'Un taller concreto', 'Bono social', 'Otro'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, topic: t })}
                        style={{
                          padding: '8px 14px',
                          borderRadius: 999,
                          fontSize: 13,
                          fontWeight: 600,
                          background: form.topic === t ? 'var(--ink)' : 'transparent',
                          color: form.topic === t ? 'var(--bg)' : 'var(--ink-soft)',
                          border:
                            '1.5px solid ' + (form.topic === t ? 'var(--ink)' : 'var(--line)'),
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <Field
                  label="Tu nombre"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                />
                <div>
                  <label
                    style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8 }}
                  >
                    Tu mensaje
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Cuéntanos…"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: `1.5px solid ${errors.message ? 'var(--accent)' : 'var(--line)'}`,
                      borderRadius: 20,
                      background: 'var(--bg)',
                      resize: 'vertical',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                  {errors.message && (
                    <div
                      style={{ fontSize: 12, color: 'var(--accent)', marginTop: 6, marginLeft: 16 }}
                    >
                      {errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '16px',
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 15,
                    marginTop: 6,
                  }}
                >
                  Enviar mensaje →
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
