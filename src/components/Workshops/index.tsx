import { useState } from 'react';
import { WORKSHOPS, AGES, TAGS_FILTER } from '../../data/workshops';
import type { Workshop } from '../../types';
import FilterGroup from './FilterGroup';
import WorkshopCard from './WorkshopCard';
import { useIsMobile } from '../../hooks/useIsMobile';
import MobileFilters from './MobileFilters';

interface WorkshopsProps {
  onPick: (w: Workshop) => void;
}

export default function Workshops({ onPick }: WorkshopsProps) {
  const [age, setAge] = useState('Todas');
  const [tag, setTag] = useState('Todos');
  const [place, setPlace] = useState('Todos');
  const isMobile = useIsMobile();

  const filtered = WORKSHOPS.filter((w) => {
    if (age !== 'Todas') {
      const [a, b] = age.split('-').map(Number);
      const [wa, wb] = w.age.replace(' años', '').split('-').map(Number);
      if (wb < a || wa > b) return false;
    }
    if (tag !== 'Todos' && w.tag !== tag) return false;
    if (place !== 'Todos') {
      if (place === 'Presencial' && !w.place.startsWith('Presencial')) return false;
      if (place === 'Online' && !w.place.startsWith('Online')) return false;
    }
    return true;
  });

  return (
    <section id="talleres" style={{ padding: isMobile ? '80px 20px' : '120px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 24,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={{ maxWidth: 640 }}>
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
              Próximos talleres
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
              Filtra por lo que{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>vives ahora.</em>
            </h2>
          </div>
          {!isMobile && (
            <div style={{ fontSize: 15, color: 'var(--ink-soft)' }}>
              {filtered.length} {filtered.length === 1 ? 'taller' : 'talleres'} disponibles
            </div>
          )}
        </div>

        {/* Filters */}
        {isMobile ? (
          <div className="reveal" style={{ marginBottom: 32 }}>
            <MobileFilters
              age={age} setAge={setAge}
              tag={tag} setTag={setTag}
              place={place} setPlace={setPlace}
              count={filtered.length}
            />
          </div>
        ) : (
          <div
            className="reveal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 32,
              marginBottom: 48,
              padding: '24px 28px',
              background: 'var(--bg)',
              border: '1.5px solid var(--line)',
              borderRadius: 28,
            }}
          >
            <FilterGroup label="Edad" options={AGES} value={age} onChange={setAge} />
            <FilterGroup label="Tema" options={TAGS_FILTER} value={tag} onChange={setTag} />
            <FilterGroup
              label="Formato"
              options={['Todos', 'Presencial', 'Online']}
              value={place}
              onChange={setPlace}
            />
          </div>
        )}

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 28,
          }}
        >
          {filtered.map((w, i) => (
            <WorkshopCard key={w.id} w={w} i={i} onPick={onPick} />
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: '1/-1',
                padding: '80px 20px',
                textAlign: 'center',
                color: 'var(--ink-soft)',
              }}
            >
              <div className="serif" style={{ fontSize: 28, marginBottom: 8 }}>
                No hay talleres con esos filtros
              </div>
              <div style={{ fontSize: 15 }}>Prueba a cambiar edad o formato ✿</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
