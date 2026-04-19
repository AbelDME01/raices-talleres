import { useState, useEffect } from 'react';
import type { Workshop } from '../types';
import Field from './Field';
import InfoBit from './InfoBit';
import { useIsMobile } from '../hooks/useIsMobile';

interface ModalProps {
  w: Workshop | null;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function Modal({ w, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    if (w) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setForm({ name: '', email: '', phone: '', childAge: '', notes: '' });
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [w]);

  if (!w) return null;

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name || form.name.length < 2) e.name = 'Cuéntanos cómo te llamas';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Revisa el email';
    if (form.phone && form.phone.length < 6) e.phone = 'Revisa el teléfono';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (validate()) setStep(3);
  };

  const date = new Date(w.date);
  const dateStr = date.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(61,53,48,0.45)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '12px' : 20,
        animation: 'fadeIn .25s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg)',
          borderRadius: isMobile ? 24 : 32,
          maxWidth: 560,
          width: '100%',
          overflow: 'hidden',
          animation: 'slideUp .35s cubic-bezier(.2,.7,.2,1)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal header */}
        <div
          style={{
            background: `var(--${w.color})`,
            padding: isMobile ? '20px 20px' : '28px 32px',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(253,251,247,0.75)',
              fontSize: 18,
            }}
          >
            ×
          </button>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            {w.tag} · {w.age}
          </div>
          <h3
            className="serif"
            style={{
              fontSize: 32,
              fontWeight: 500,
              margin: '0 0 8px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {w.title}
          </h3>
          <div style={{ fontSize: 14 }}>
            {dateStr} · {w.time} · {w.place}
          </div>
        </div>

        {/* Modal body */}
        <div style={{ padding: isMobile ? '24px 20px' : '32px', overflow: 'auto', flex: 1 }}>
          {step === 1 && (
            <div>
              <h4 className="serif" style={{ fontSize: 22, margin: '0 0 16px', fontWeight: 500 }}>
                ¿Qué vamos a vivir juntas?
              </h4>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 24px' }}>
                {w.desc}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <InfoBit label="Duración" value={w.duration} />
                <InfoBit label="Facilitadora" value={w.facilitadora} />
                <InfoBit label="Precio" value="35 € · bono social" />
                <InfoBit label="Plazas libres" value={`${w.spots - w.taken} de ${w.spots}`} />
              </div>
              <button
                onClick={() => setStep(2)}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                Continuar con la inscripción →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="serif" style={{ fontSize: 22, margin: '0 0 20px', fontWeight: 500 }}>
                Tus datos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Field
                  label="¿Cómo te llamas?"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  placeholder="Tu nombre"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  placeholder="para@enviarte-detalles.com"
                />
                <Field
                  label="Teléfono (opcional)"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                  placeholder="Por si algo cambia"
                />
                <Field
                  label="Edad de tu peque"
                  value={form.childAge}
                  onChange={(v) => setForm({ ...form, childAge: v })}
                  placeholder={`Entre ${w.age}`}
                />
                <div>
                  <label
                    style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8 }}
                  >
                    ¿Hay algo que te gustaría contarnos antes?
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    placeholder="Una inquietud concreta, algo que vives estos días…"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1.5px solid var(--line)',
                      borderRadius: 20,
                      background: 'var(--bg)',
                      resize: 'vertical',
                      fontSize: 14,
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: '14px 20px',
                    border: '1.5px solid var(--line)',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  ← Atrás
                </button>
                <button
                  onClick={submit}
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Confirmar inscripción
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'var(--mint)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 20L17 27L30 13"
                    stroke="var(--ink)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4
                className="serif"
                style={{ fontSize: 28, margin: '0 0 12px', fontWeight: 500, letterSpacing: '-0.02em' }}
              >
                Gracias, {form.name.split(' ')[0] || 'familia'} ✿
              </h4>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: 'var(--ink-soft)',
                  margin: '0 0 24px',
                }}
              >
                Te hemos reservado una plaza en{' '}
                <strong style={{ color: 'var(--ink)' }}>{w.title}</strong>.
                <br />
                En unos minutos te llega un correo a{' '}
                <strong style={{ color: 'var(--ink)' }}>{form.email}</strong> con los detalles.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '14px 32px',
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
