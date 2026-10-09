import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -60% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(15,15,19,0.92)'
            : 'rgba(244,244,251,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#about" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            AM
          </span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: active === href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                  background: active === href.slice(1) ? 'var(--accent-glow)' : 'transparent',
                  transition: 'var(--transition)',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  if (active !== href.slice(1)) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (active !== href.slice(1)) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              transition: 'var(--transition)',
            }}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'var(--transition)',
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: theme === 'dark' ? 'rgba(15,15,19,0.98)' : 'rgba(244,244,251,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem 2rem',
            animation: 'fadeInUp 0.2s ease',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: active === href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                    background: active === href.slice(1) ? 'var(--accent-glow)' : 'transparent',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-toggle { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
