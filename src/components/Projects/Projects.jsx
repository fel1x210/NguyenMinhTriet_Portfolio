import { useState } from "react";
import { projects } from "../../content/projects";
import Section from "../Section/Section";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-card ${project.hasDetails ? "project-card--clickable" : ""}`}
              onClick={() => project.hasDetails && setSelected(project)}
              role={project.hasDetails ? "button" : undefined}
              tabIndex={project.hasDetails ? 0 : undefined}
              onKeyDown={(e) =>
                project.hasDetails &&
                e.key === "Enter" &&
                setSelected(project)
              }
            >
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                {project.hasDetails && (
                  <span className="project-card__hint">
                    Click for details &rarr;
                  </span>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__btn project-card__btn--secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
