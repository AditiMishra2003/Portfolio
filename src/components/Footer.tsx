import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '2.5rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Logo */}
        <div>
          <a href="#about" style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AM
            </span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>.dev</span>
          </a>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
            Built with{' '}
            <FiHeart style={{ display: 'inline', color: '#f97c6a', verticalAlign: 'middle', fontSize: '0.8rem' }} />
            {' '}using React + Vite
          </p>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          © {year} Aditi Mishra · All rights reserved
        </p>

        {/* Social */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[
            { href: 'https://github.com/AditiMishra2003', icon: <FiGithub />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/aditi-mishra-796229253/', icon: <FiLinkedin />, label: 'LinkedIn' },
            { href: 'mailto:aditimishra200315@gmail.com', icon: <FiMail />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={label}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--accent)';
                el.style.borderColor = 'var(--border)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'var(--border-subtle)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
