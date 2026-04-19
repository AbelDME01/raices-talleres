import { useState, useEffect } from 'react';
import Logo from './Logo';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer when switching to desktop
  useEffect(() => {
    if (!isMobile) setDrawerOpen(false);
  }, [isMobile]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isMobile
            ? '14px 20px'
            : scrolled
            ? '14px 40px'
            : '24px 40px',
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

        {/* Desktop links */}
        {!isMobile && (
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
        )}

        {/* Mobile hamburger button */}
        {isMobile && (
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
            style={{
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--ink)',
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile drawer overlay */}
      {isMobile && drawerOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(61,53,48,0.6)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {/* Drawer panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 280,
              height: '100%',
              background: 'var(--bg)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <button
              onClick={closeDrawer}
              aria-label="Cerrar menú"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'var(--cream)',
                fontSize: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
                color: 'var(--ink)',
              }}
            >
              ×
            </button>

            {/* Drawer links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 72 }}>
              <a
                href="#talleres"
                onClick={closeDrawer}
                style={{ fontSize: 20, fontWeight: 500, color: 'var(--ink-soft)' }}
              >
                Talleres
              </a>
              <a
                href="#calendario"
                onClick={closeDrawer}
                style={{ fontSize: 20, fontWeight: 500, color: 'var(--ink-soft)' }}
              >
                Calendario
              </a>
              <a
                href="#faq"
                onClick={closeDrawer}
                style={{ fontSize: 20, fontWeight: 500, color: 'var(--ink-soft)' }}
              >
                Preguntas
              </a>
              <a
                href="#talleres"
                onClick={closeDrawer}
                style={{
                  background: 'var(--ink)',
                  color: 'var(--bg)',
                  padding: '14px 24px',
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  textAlign: 'center',
                }}
              >
                Inscribirme
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
