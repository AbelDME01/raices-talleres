import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '14px 40px' : '24px 40px',
        background: scrolled ? 'rgba(253,251,247,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all .35s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo size={36} />
      <div style={{ display: 'flex', gap: 36, alignItems: 'center', fontSize: 15, fontWeight: 500 }}>
        <a href="#talleres" style={{ color: 'var(--ink-soft)' }}>Talleres</a>
        <a href="#calendario" style={{ color: 'var(--ink-soft)' }}>Calendario</a>
        <a href="#faq" style={{ color: 'var(--ink-soft)' }}>Preguntas</a>
        <a
          href="#talleres"
          style={{
            background: 'var(--ink)',
            color: 'var(--bg)',
            padding: '12px 22px',
            borderRadius: 999,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Inscribirme
        </a>
      </div>
    </nav>
  );
}
