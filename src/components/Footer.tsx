import Logo from './Logo';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        padding: isMobile ? '40px 20px 32px' : '60px 40px 40px',
        borderTop: '1.5px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: isMobile ? 20 : 24,
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Logo size={32} />
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'var(--ink-soft)' }}>
          <a href="#">Aviso legal</a>
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
          <a href="#">Instagram</a>
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
          © 2026 Raíces · hecho con cuidado ✿
        </div>
      </div>
    </footer>
  );
}
