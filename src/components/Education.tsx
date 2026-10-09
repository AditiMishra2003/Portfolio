import { FiBookOpen, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'National Institute of Technology, Raipur',
    year: '2022 – 2026',
    score: 'CGPA: 7.37 / 10.0',
    icon: '🎓',
    highlight: true,
    description: 'Specializing in Information Technology with coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, and Software Engineering.',
  },
  {
    degree: 'CBSE – Class XII (PCM)',
    institution: 'Mont Fort School, Ambikapur',
    year: '2021',
    score: '92%',
    icon: '📚',
    highlight: false,
    description: 'Completed Senior Secondary with Physics, Chemistry, and Mathematics as core subjects. Developed strong analytical and problem-solving fundamentals.',
  },
  {
    degree: 'CBSE – Class X',
    institution: 'Mont Fort School, Ambikapur',
    year: '2019',
    score: '93.6%',
    icon: '🏫',
    highlight: false,
    description: 'Completed Secondary School with distinction. Built a solid academic foundation across core Science and Mathematics subjects.',
  },
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">
            <FiBookOpen style={{ marginLeft: '0.25rem' }} />
            Education
          </p>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
            A strong academic foundation in engineering, technology, and computer science.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: 24,
              bottom: 24,
              width: 2,
              background: 'var(--border)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationData.map((edu, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  animation: `fadeInUp 0.5s ${i * 0.1}s ease both`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: edu.highlight ? 'var(--gradient-1)' : 'var(--bg-card)',
                    border: edu.highlight ? 'none' : '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: edu.highlight ? '0 0 20px var(--accent-glow)' : 'none',
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div
                  className="card"
                  style={{
                    flex: 1,
                    padding: '1.75rem',
                    border: edu.highlight ? '1px solid var(--border)' : '1px solid var(--border-subtle)',
                    boxShadow: edu.highlight ? 'var(--shadow-glow)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>{edu.institution}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          fontFamily: "'Fira Code', monospace",
                          marginBottom: '0.25rem',
                        }}
                      >
                        {edu.year}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.2rem 0.7rem',
                          borderRadius: '100px',
                          background: 'var(--accent-glow)',
                          color: 'var(--accent-light)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          border: '1px solid var(--border)',
                        }}
                      >
                        <FiAward style={{ fontSize: '0.7rem' }} /> {edu.score}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
