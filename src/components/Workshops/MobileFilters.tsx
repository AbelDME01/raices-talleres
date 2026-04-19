import { useState, useEffect } from 'react';
import { AGES, TAGS_FILTER } from '../../data/workshops';

interface MobileFiltersProps {
  age: string;
  setAge: (v: string) => void;
  tag: string;
  setTag: (v: string) => void;
  place: string;
  setPlace: (v: string) => void;
  count: number;
}

const PLACES = ['Todos', 'Presencial', 'Online'];

export default function MobileFilters({
  age, setAge, tag, setTag, place, setPlace, count,
}: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const activeCount = (age !== 'Todas' ? 1 : 0) + (tag !== 'Todos' ? 1 : 0) + (place !== 'Todos' ? 1 : 0);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const reset = () => { setAge('Todas'); setTag('Todos'); setPlace('Todos'); };

  return (
    <>
      {/* Trigger row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 20px', borderRadius: 999,
            background: activeCount > 0 ? 'var(--ink)' : 'var(--bg)',
            color: activeCount > 0 ? 'var(--bg)' : 'var(--ink)',
            border: '1.5px solid ' + (activeCount > 0 ? 'var(--ink)' : 'var(--line)'),
            fontWeight: 600, fontSize: 14,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Filtrar
          {activeCount > 0 && (
            <span style={{
              width: 20, height: 20, borderRadius: '50%',
              background: 'var(--accent)', color: 'var(--bg)',
              fontSize: 11, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {activeCount}
            </span>
          )}
        </button>

        <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
          {count} {count === 1 ? 'taller' : 'talleres'}
        </span>

        {activeCount > 0 && (
          <button
            onClick={reset}
            style={{
              marginLeft: 'auto', fontSize: 13, fontWeight: 600,
              color: 'var(--ink-soft)', padding: '8px 12px',
              border: '1.5px solid var(--line)', borderRadius: 999,
            }}
          >
            Borrar
          </button>
        )}
      </div>

      {/* Active filter chips summary */}
      {activeCount > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          {age !== 'Todas' && (
            <Chip label={`Edad: ${age}`} onRemove={() => setAge('Todas')} />
          )}
          {tag !== 'Todos' && (
            <Chip label={tag} onRemove={() => setTag('Todos')} />
          )}
          {place !== 'Todos' && (
            <Chip label={place} onRemove={() => setPlace('Todos')} />
          )}
        </div>
      )}

      {/* Bottom sheet overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(61,53,48,0.45)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeIn .2s ease',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'var(--bg)',
              borderRadius: '28px 28px 0 0',
              padding: '0 0 32px',
              animation: 'slideUpSheet .3s cubic-bezier(.2,.7,.2,1)',
            }}
          >
            {/* Handle */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '14px 0 0' }}>
              <div style={{ width: 40, height: 4, borderRadius: 999, background: 'var(--line)' }} />
            </div>

            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 24px 20px',
              borderBottom: '1.5px solid var(--line)',
            }}>
              <span className="serif" style={{ fontSize: 22, fontWeight: 500 }}>Filtrar talleres</span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--cream)', fontSize: 18,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
            </div>

            {/* Filter sections */}
            <div style={{ padding: '8px 24px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <FilterSection
                label="Edad"
                options={AGES}
                value={age}
                onChange={setAge}
                color="peach"
              />
              <FilterSection
                label="Tema"
                options={TAGS_FILTER}
                value={tag}
                onChange={setTag}
                color="lavender"
              />
              <FilterSection
                label="Formato"
                options={PLACES}
                value={place}
                onChange={setPlace}
                color="mint"
              />
            </div>

            {/* Footer actions */}
            <div style={{ padding: '0 24px', display: 'flex', gap: 12 }}>
              <button
                onClick={reset}
                style={{
                  flex: 1, padding: '14px', borderRadius: 999, fontWeight: 600, fontSize: 14,
                  border: '1.5px solid var(--line)', color: 'var(--ink-soft)',
                }}
              >
                Borrar filtros
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{
                  flex: 2, padding: '14px', borderRadius: 999, fontWeight: 600, fontSize: 15,
                  background: 'var(--ink)', color: 'var(--bg)', border: 'none',
                }}
              >
                Ver {count} {count === 1 ? 'taller' : 'talleres'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUpSheet {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

function FilterSection({
  label, options, value, onChange, color,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  color: string;
}) {
  return (
    <div style={{ padding: '20px 0', borderBottom: '1px solid var(--line)' }}>
      <div style={{
        fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 14,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: `var(--${color})`, display: 'inline-block',
        }} />
        {label}
      </div>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            style={{
              padding: '10px 18px', borderRadius: 999, fontSize: 14, fontWeight: 600,
              whiteSpace: 'nowrap', flexShrink: 0,
              background: value === o ? 'var(--ink)' : `var(--${color})`,
              color: value === o ? 'var(--bg)' : 'var(--ink)',
              border: value === o ? '1.5px solid var(--ink)' : '1.5px solid transparent',
              transition: 'all .15s',
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 10px 6px 14px', borderRadius: 999,
      background: 'var(--ink)', color: 'var(--bg)',
      fontSize: 13, fontWeight: 600,
    }}>
      {label}
      <button
        onClick={onRemove}
        style={{
          width: 18, height: 18, borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)', color: 'var(--bg)',
          fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >×</button>
    </div>
  );
}
