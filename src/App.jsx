const focusAreas = [
  'Frontend Engineering',
  'UI/UX Design',
  'Performance Optimization',
];

const projects = [
  {
    title: 'PixelFlow Dashboard',
    description:
      'A clean analytics dashboard that combines actionable metrics with refined typography and subtle glassmorphism.',
    stack: 'React · TypeScript · Chart.js',
  },
  {
    title: 'ShopSprint Mobile UI',
    description:
      'A conversion-focused e-commerce interface designed with micro-interactions, smooth transitions, and quick checkout.',
    stack: 'React Native · Figma · Firebase',
  },
  {
    title: 'Aurora Notes',
    description:
      'A minimal note-taking app with focus mode, keyboard-first workflows, and iCloud-inspired visual polish.',
    stack: 'Next.js · Prisma · PostgreSQL',
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero card">
        <p className="eyebrow">Portfolio</p>
        <h1>Mohammad Hasan Mahmud</h1>
        <p className="subtitle">
          I craft modern digital experiences with a simple, premium feel inspired by Apple's design language.
        </p>
        <div className="chips">
          {focusAreas.map((area) => (
            <span key={area} className="chip">
              {area}
            </span>
          ))}
        </div>
      </header>

      <section className="card">
        <h2>Selected Work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="card contact-card">
        <h2>Let’s build something elegant.</h2>
        <p>
          Available for freelance and full-time opportunities. Reach out to discuss your next web product.
        </p>
        <a href="mailto:mohammad@example.com" className="cta-button">
          Contact Me
        </a>
      </section>
    </div>
  );
}
