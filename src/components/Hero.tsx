import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,124,106,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 700 }}>
          {/* Status pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem 0.4rem 0.6rem',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              animation: 'fadeInUp 0.5s ease',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 0 2px rgba(74,222,128,0.3)',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: -3,
                  borderRadius: '50%',
                  background: 'rgba(74,222,128,0.25)',
                  animation: 'pulse-ring 2s ease-out infinite',
                }}
              />
            </span>
            Available for opportunities
          </div>

          {/* Greeting */}
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--accent)',
              fontFamily: "'Fira Code', monospace",
              fontWeight: 500,
              marginBottom: '0.75rem',
              animation: 'fadeInUp 0.5s 0.1s ease both',
            }}
          >
            Hi there, I'm
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              animation: 'fadeInUp 0.5s 0.2s ease both',
            }}
          >
            Aditi{' '}
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mishra
            </span>
          </h1>

          {/* Role */}
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              animation: 'fadeInUp 0.5s 0.3s ease both',
            }}
          >
            BTSA @ ZS Associates · Full-Stack Dev · Data Engineer · NIT Raipur '26
          </h2>

          {/* Bio */}
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: 560,
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              animation: 'fadeInUp 0.5s 0.4s ease both',
            }}
          >
            I build scalable data pipelines, full-stack web applications, and ML-powered solutions.
            Passionate about clean code, thoughtful UX, and turning data into actionable insights.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
              animation: 'fadeInUp 0.5s 0.5s ease both',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: 'fadeInUp 0.5s 0.6s ease both',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.25rem' }}>Find me on</span>
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
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--accent)';
                  el.style.borderColor = 'var(--accent)';
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = '0 6px 20px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--text-secondary)';
                  el.style.borderColor = 'var(--border)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#education"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        <span>Scroll</span>
        <FiArrowDown />
      </a>
    </section>
  );
}
