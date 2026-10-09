import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'BTSA – Business Technology Analyst',
    company: 'ZS Associates',
    client: 'Client: Pfizer',
    location: 'Gurugram, India',
    period: 'February 2026 – Present',
    type: 'Full-Time',
    color: '#7c6af7',
    logo: '🏢',
    bullets: [
      'Designed, developed, and maintained scalable ETL data pipelines using PySpark, SQL, Python, and Dataiku DSS to process large-scale pharmaceutical/healthcare datasets, enabling automated global reporting and data-driven decision-making.',
      'Leveraged PySpark, Pandas, and NumPy for large-volume data transformation, cleansing, validation, and analytical dataset creation loaded into Snowflake; implemented automated data quality checks and optimized complex SQL queries.',
      'Collaborated with cross-functional business, analytics, and technology teams to translate requirements into scalable data solutions, performing EDA, KPI-driven reporting, and advanced data modeling for commercial analytics.',
    ],
    tags: ['PySpark', 'Python', 'SQL', 'Snowflake', 'Dataiku DSS', 'Pandas', 'NumPy', 'ETL'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'CloudDFN',
    client: null,
    location: 'Remote',
    period: 'April 2025 – July 2025',
    type: 'Internship',
    color: '#f97c6a',
    logo: '☁️',
    bullets: [
      'Worked in a team of three developers to successfully deliver a full-stack production website, demonstrating strong technical expertise and cross-functional collaboration.',
      'Created 5+ responsive UI components using React.js and MUI; developed 20+ CRUD-based backend APIs using Express.js and Prisma ORM.',
      'Integrated role-based access control (RBAC) with fine-grained permissions and built a complete file upload system with validation, storage, and retrieval.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Prisma ORM', 'MongoDB', 'MUI'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">
            <FiBriefcase style={{ marginLeft: '0.25rem' }} />
            Experience
          </p>
          <h2 className="section-title">Where I've <span>Worked</span></h2>
          <p className="section-subtitle">
            Building scalable systems and delivering impactful solutions across data engineering and full-stack development.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '2rem',
                borderLeft: `3px solid ${exp.color}`,
                animation: `fadeInUp 0.5s ${i * 0.15}s ease both`,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '10px',
                      background: `${exp.color}22`,
                      border: `1px solid ${exp.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: exp.color, marginBottom: '0.2rem' }}>
                      {exp.company}
                      {exp.client && (
                        <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                          · {exp.client}
                        </span>
                      )}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{exp.location}</p>
                  </div>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      fontFamily: "'Fira Code', monospace",
                      marginBottom: '0.4rem',
                    }}
                  >
                    {exp.period}
                  </span>
                  <span
                    className="tag"
                    style={{
                      background: `${exp.color}22`,
                      color: exp.color,
                      borderColor: `${exp.color}44`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
              {/* Bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: exp.color,
                        marginTop: '0.6rem',
                      }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


