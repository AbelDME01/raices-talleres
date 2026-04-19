import Blob from '../Blob';
import type { Workshop } from '../../types';

interface WorkshopCardProps {
  w: Workshop;
  i: number;
  onPick: (w: Workshop) => void;
}

export default function WorkshopCard({ w, i, onPick }: WorkshopCardProps) {
  const colorVar = `var(--${w.color})`;
  const pct = w.taken / w.spots;
  const full = w.taken >= w.spots;
  const date = new Date(w.date);
  const day = date.getDate();
  const month = date.toLocaleDateString('es-ES', { month: 'short' }).replace('.', '');

  return (
    <article className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
      <div
        style={{
          background: colorVar,
          borderRadius: 32,
          padding: '28px 28px 24px',
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '1.3/1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div
              className="serif"
              style={{ fontSize: 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.03em' }}
            >
              {day}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginTop: 4,
              }}
            >
              {month}
            </div>
          </div>
          <div
            style={{
              background: 'rgba(253,251,247,0.75)',
              padding: '6px 12px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {w.tag}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.75 }}>
            {w.time} · {w.duration}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.75 }}>{w.age}</div>
        </div>

        <Blob
          color="rgba(255,255,255,0.35)"
          style={{ position: 'absolute', width: 180, height: 180, bottom: -80, right: -60 }}
        />
      </div>

      <div style={{ padding: '24px 8px 8px' }}>
        <h3
          className="serif"
          style={{
            fontSize: 26,
            margin: '0 0 10px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          {w.title}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '0 0 18px' }}>
          {w.desc}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            marginBottom: 14,
            fontSize: 13,
            color: 'var(--ink-soft)',
          }}
        >
          <span>
            Con <strong style={{ color: 'var(--ink)' }}>{w.facilitadora}</strong>
          </span>
          <span>{w.place.split(' · ')[0]}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              flex: 1,
              height: 6,
              background: 'var(--line)',
              borderRadius: 999,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${pct * 100}%`,
                height: '100%',
                background: full ? 'var(--ink-soft)' : 'var(--accent)',
                borderRadius: 999,
                transition: 'width .6s',
              }}
            />
          </div>
          <span
            style={{ fontSize: 12, fontWeight: 600, color: full ? 'var(--ink-soft)' : 'var(--ink)' }}
          >
            {full ? 'Lista de espera' : `${w.spots - w.taken} plazas`}
          </span>
        </div>

        <button
          onClick={() => onPick(w)}
          style={{
            marginTop: 20,
            width: '100%',
            padding: '14px 20px',
            borderRadius: 999,
            background: full ? 'transparent' : 'var(--ink)',
            color: full ? 'var(--ink)' : 'var(--bg)',
            border: '1.5px solid var(--ink)',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {full ? 'Apuntarme a la espera' : 'Reservar plaza'} →
        </button>
      </div>
    </article>
  );
}
