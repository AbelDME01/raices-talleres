import { useState } from 'react';
import Blob from './Blob';
import { WORKSHOPS } from '../data/workshops';
import type { Workshop } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

interface CalendarProps {
  onPick: (w: Workshop) => void;
}

interface HoveredInfo {
  day: number;
  ws: Workshop[];
}

const months = [
  { name: 'Mayo', year: 2026, idx: 4 },
  { name: 'Junio', year: 2026, idx: 5 },
];

export default function Calendar({ onPick }: CalendarProps) {
  const [monthIdx, setMonthIdx] = useState(0);
  const [hovered, setHovered] = useState<HoveredInfo | null>(null);
  const isMobile = useIsMobile();

  const m = months[monthIdx];
  const firstDay = new Date(m.year, m.idx, 1);
  const daysInMonth = new Date(m.year, m.idx + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7; // lun=0

  const dayWorkshops = (day: number): Workshop[] =>
    WORKSHOPS.filter((w) => {
      const d = new Date(w.date);
      return d.getFullYear() === m.year && d.getMonth() === m.idx && d.getDate() === day;
    });

  return (
    <section
      id="calendario"
      style={{
        padding: isMobile ? '80px 20px' : '120px 40px',
        background: 'var(--mint)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Blob
        color="var(--cream)"
        style={{ position: 'absolute', width: 280, height: 280, bottom: -80, right: -40, opacity: 0.5 }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: isMobile ? 16 : 24,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={{ maxWidth: 620 }}>
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
              Calendario
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
              Dos meses <em style={{ fontStyle: 'italic', fontWeight: 300 }}>por delante.</em>
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              background: 'var(--bg)',
              padding: '8px',
              borderRadius: 999,
            }}
          >
            <button
              onClick={() => setMonthIdx(Math.max(0, monthIdx - 1))}
              disabled={monthIdx === 0}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: monthIdx === 0 ? 'transparent' : 'var(--cream)',
                opacity: monthIdx === 0 ? 0.3 : 1,
                fontSize: 20,
              }}
            >
              ←
            </button>
            <div
              className="serif"
              style={{ fontSize: 22, fontWeight: 500, minWidth: 160, textAlign: 'center' }}
            >
              {m.name} {m.year}
            </div>
            <button
              onClick={() => setMonthIdx(Math.min(1, monthIdx + 1))}
              disabled={monthIdx === 1}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: monthIdx === 1 ? 'transparent' : 'var(--cream)',
                opacity: monthIdx === 1 ? 0.3 : 1,
                fontSize: 20,
              }}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            background: 'var(--bg)',
            borderRadius: 32,
            padding: isMobile ? '20px 16px' : '36px',
            position: 'relative',
          }}
        >
          {/* Day headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 8,
              marginBottom: 16,
            }}
          >
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (
              <div
                key={d}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                  textAlign: 'center',
                  padding: '8px 0',
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
            {Array(startOffset)
              .fill(0)
              .map((_, i) => (
                <div key={`e${i}`} />
              ))}
            {Array(daysInMonth)
              .fill(0)
              .map((_, i) => {
                const day = i + 1;
                const ws = dayWorkshops(day);
                const has = ws.length > 0;
                return (
                  <button
                    key={day}
                    onMouseEnter={() => has && setHovered({ day, ws })}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => has && onPick(ws[0])}
                    onMouseOver={(e) =>
                      has && ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')
                    }
                    onMouseOut={(e) =>
                      has && ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')
                    }
                    style={{
                      aspectRatio: '1/1',
                      borderRadius: isMobile ? 12 : 20,
                      position: 'relative',
                      background: has ? `var(--${ws[0].color})` : 'transparent',
                      border: has ? 'none' : '1px solid var(--line)',
                      cursor: has ? 'pointer' : 'default',
                      transition: 'transform .2s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: isMobile ? '6px 4px' : '10px 12px',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      className="serif"
                      style={{
                        fontSize: isMobile ? 15 : 20,
                        fontWeight: 500,
                        opacity: has ? 1 : 0.4,
                      }}
                    >
                      {day}
                    </span>
                    {has && !isMobile && (
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          lineHeight: 1.2,
                        }}
                      >
                        {ws[0].tag}
                      </div>
                    )}
                  </button>
                );
              })}
          </div>

          {hovered && (
            <div
              style={{
                position: 'absolute',
                ...(isMobile
                  ? { bottom: 'auto', top: -20, transform: 'translate(-50%, -100%)' }
                  : { bottom: -28, transform: 'translate(-50%, 100%)' }),
                left: '50%',
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '18px 24px',
                borderRadius: 20,
                minWidth: 280,
                pointerEvents: 'none',
                zIndex: 5,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                {hovered.ws[0].time} · {hovered.ws[0].duration}
              </div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 500 }}>
                {hovered.ws[0].title}
              </div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>
                {hovered.ws[0].age} · {hovered.ws[0].place}
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: isMobile ? 8 : 24,
            marginTop: 32,
            flexWrap: 'wrap',
            fontSize: 13,
            color: 'var(--ink-soft)',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {(
            [
              ['peach', 'Emociones/Crianza'],
              ['sky', 'Descanso/Cuerpo'],
              ['mint', 'Mesa/Vida diaria'],
              ['cream', 'Vínculo'],
              ['lavender', 'Juego'],
            ] as [string, string][]
          ).map(([c, l]) => (
            <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: `var(--${c})`,
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
