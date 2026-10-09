import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    title: 'Geospatial Measurement API',
    tagline: 'FastAPI backend for geospatial file processing',
    description:
      'A production-ready FastAPI backend that accepts Shapefile (.zip) or KML (.kml) uploads and extracts geospatial features. It reprojects geographic coordinates to UTM zones for precise metric measurements, returns area (m²) for polygons and length (m) for linestrings, and persists all results in SQLite via SQLAlchemy. The service is deployed on Render with a live Swagger UI for interactive testing and exploration.',
    tags: ['FastAPI', 'Python', 'GeoPandas', 'Shapely', 'SQLAlchemy', 'SQLite', 'pyproj'],
    github: 'https://github.com/AditiMishra2003/geospatial-measurement-api',
    live: 'https://geospatial-measurement-api-bzxy.onrender.com/docs',
    liveLabel: 'Swagger UI',
    color: '#7c6af7',
    gradient: 'linear-gradient(135deg, rgba(124,106,247,0.15) 0%, rgba(124,106,247,0.03) 100%)',
    icon: '🌍',
  },
  {
    title: 'Feedback Portal',
    tagline: 'Modern web app for managing user feedback',
    description:
      'A full-featured feedback management web application built with React 19 and TypeScript. Supports email/password and Google Sign-In via Firebase Authentication. Users can submit feedback with form validation while admins access a dedicated panel to view and manage all submissions. Features real-time Firestore synchronization, a dark/light theme toggle, and a fully responsive layout optimized for both mobile and desktop.',
    tags: ['React.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite', 'Firestore'],
    github: 'https://github.com/AditiMishra2003/feedback',
    live: 'https://feedbackformfallon.netlify.app/',
    liveLabel: 'Live App',
    color: '#f97c6a',
    gradient: 'linear-gradient(135deg, rgba(249,124,106,0.15) 0%, rgba(249,124,106,0.03) 100%)',
    icon: '💬',
  },
  {
    title: 'Bookmark Portal',
    tagline: 'Book collection manager with real-time sync',
    description:
      "A responsive React app to save, tag, and manage bookmarks with real-time Firebase synchronization and full CRUD functionality. Users can track books they've read and books they want to read. Integrates Firebase Authentication for secure access and Firestore for persistent, cloud-synced data storage. The UI is built with React Hooks for dynamic rendering and deployed on Netlify for instant global access.",
    tags: ['React.js', 'Firebase', 'Firestore', 'Netlify', 'React Hooks', 'CSS'],
    github: 'https://github.com/AditiMishra2003/Bookmarkproject',
    live: 'https://bookmarkas.netlify.app/',
    liveLabel: 'Live App',
    color: '#4ade80',
    gradient: 'linear-gradient(135deg, rgba(74,222,128,0.15) 0%, rgba(74,222,128,0.03) 100%)',
    icon: '📖',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <p className="section-label">
            <FiCode style={{ marginLeft: '0.25rem' }} />
            Projects
          </p>
          <h2 className="section-title">Things I've <span>Built</span></h2>
          <p className="section-subtitle">
            A selection of projects spanning backend APIs, full-stack apps, and ML systems.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp 0.5s ${i * 0.12}s ease both`,
              }}
            >
              {/* Card top gradient */}
              <div
                style={{
                  padding: '1.75rem 1.75rem 1.25rem',
                  background: proj.gradient,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `${proj.color}22`,
                      border: `1px solid ${proj.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                    }}
                  >
                    {proj.icon}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = proj.color;
                        el.style.borderColor = proj.color;
                        el.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = 'var(--text-secondary)';
                        el.style.borderColor = 'var(--border)';
                        el.style.transform = 'translateY(0)';
                      }}
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={proj.liveLabel}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = proj.color;
                        el.style.borderColor = proj.color;
                        el.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = 'var(--text-secondary)';
                        el.style.borderColor = 'var(--border)';
                        el.style.transform = 'translateY(0)';
                      }}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: proj.color, fontWeight: 500 }}>{proj.tagline}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem 1.75rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{ background: `${proj.color}15`, color: proj.color, borderColor: `${proj.color}33` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: proj.color,
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '0.65rem'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '0.4rem'; }}
                >
                  <FiExternalLink /> {proj.liveLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/AditiMishra2003"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
