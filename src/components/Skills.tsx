import { FiCpu } from 'react-icons/fi';

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Web Technologies',
    icon: '🌐',
    skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Flask'],
  },
  {
    category: 'Databases & Cloud',
    icon: '☁️',
    skills: ['MongoDB', 'Firebase', 'Snowflake', 'PostgreSQL', 'AWS', 'Azure', 'Databricks'],
  },
  {
    category: 'Data & ML',
    icon: '🤖',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'XGBoost', 'Random Forest', 'LLMs', 'RAG', 'AI Agents', 'Power BI'],
  },
  {
    category: 'Data Engineering',
    icon: '🔧',
    skills: ['PySpark', 'ETL Pipelines', 'Dataiku DSS', 'Airflow', 'Data Modeling', 'EDA', 'SQL Optimization'],
  },
  {
    category: 'Developer Tools & CS',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Figma', 'GitHub Copilot', 'Prisma ORM', 'DBMS', 'OS', 'Computer Networks', 'REST APIs'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">
            <FiCpu style={{ marginLeft: '0.25rem' }} />
            Skills
          </p>
          <h2 className="section-title">Technical <span>Arsenal</span></h2>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable software and data systems.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '1.75rem',
                animation: `fadeInUp 0.5s ${i * 0.08}s ease both`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'var(--accent-glow)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  {group.icon}
                </span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'var(--transition)',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'var(--accent)';
                      el.style.borderColor = 'var(--border)';
                      el.style.background = 'var(--accent-glow)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'var(--text-secondary)';
                      el.style.borderColor = 'var(--border-subtle)';
                      el.style.background = 'var(--bg-secondary)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              🏆 Achievements
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                Completed <strong style={{ color: 'var(--text-primary)' }}>Big Data &amp; Machine Learning Fundamentals</strong> — Google Cloud Certified
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                Solved <strong style={{ color: 'var(--text-primary)' }}>500+ coding problems</strong> across LeetCode, GeeksForGeeks, and other competitive platforms
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { value: '500+', label: 'Problems Solved' },
              { value: '20+', label: 'APIs Built' },
              { value: '2+', label: 'Years Coding' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'var(--gradient-1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  {value}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
