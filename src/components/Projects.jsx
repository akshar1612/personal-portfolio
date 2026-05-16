import { projects } from "../data/index.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <span className="section-label">Selected Work</span>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { num, title, subtitle, description, tags, gradient, link } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`proj-card proj-card--${gradient}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="proj-card-glow" />

      <div className="proj-card-top">
        <span className="proj-card-num">{num}</span>
        <div className="proj-card-arrow">↗</div>
      </div>

      <div className="proj-card-body">
        <p className="proj-card-subtitle">{subtitle}</p>
        <h3 className="proj-card-title">{title}</h3>
        <p className="proj-card-desc">{description}</p>
      </div>

      <div className="proj-card-footer">
        {tags.map(t => (
          <span key={t} className="proj-card-tag">{t}</span>
        ))}
      </div>
    </a>
  );
}
