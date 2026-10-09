import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const contactLinks = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'aditimishra200315@gmail.com',
    href: 'mailto:aditimishra200315@gmail.com',
    color: '#f97c6a',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'AditiMishra2003',
    href: 'https://github.com/AditiMishra2003',
    color: '#7c6af7',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'aditi-mishra-796229253',
    href: 'https://www.linkedin.com/in/aditi-mishra-796229253/',
    color: '#0e76a8',
  },
  {
    icon: <SiLeetcode />,
    label: 'LeetCode',
    value: 'aditimishra15',
    href: 'https://leetcode.com/u/aditimishra15/',
    color: '#ffa500',
  },
  {
    icon: <SiGeeksforgeeks />,
    label: 'GeeksForGeeks',
    value: 'aditimishra15',
    href: 'https://www.geeksforgeeks.org/user/aditimishra15/',
    color: '#2f8d46',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">
            <FiSend style={{ marginLeft: '0.25rem' }} />
            Contact
          </p>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I'm open to full-time roles, freelance projects, and interesting collaborations.
            Feel free to reach out — I reply within 24 hours.
          </p>
        </div>

        {/* Email highlight card */}
        <div
          style={{
            maxWidth: 600,
            margin: '0 auto 3rem',
            padding: '2.5rem',
            borderRadius: 'var(--radius)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-glow)',
            animation: 'fadeInUp 0.5s ease both',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--gradient-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              margin: '0 auto 1.25rem',
              color: '#fff',
              boxShadow: '0 8px 24px var(--accent-glow)',
            }}
          >
            <FiMail />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Open to Opportunities
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Whether it's a full-time role, a freelance project, or just a great conversation about tech —
            my inbox is always open.
          </p>
          <a
            href="mailto:aditimishra200315@gmail.com"
            className="btn btn-primary"
            style={{ display: 'inline-flex' }}
          >
            <FiMail /> Say Hello
          </a>
        </div>

        {/* Contact links grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                animation: `fadeInUp 0.5s ${i * 0.08}s ease both`,
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${link.color}20`,
                  border: `1px solid ${link.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: link.color,
                  flexShrink: 0,
                  transition: 'var(--transition)',
                }}
              >
                {link.icon}
              </span>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{link.label}</p>
                <p
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
