import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ padding: '60px 40px 40px', borderTop: '1.5px solid var(--line)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
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
