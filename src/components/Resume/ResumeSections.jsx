import { resume } from "../../content/resume";
import Section from "../Section/Section";

function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <p className="about__text">{resume.summary}</p>
      <div className="about__education">
        {resume.education.map((edu, i) => (
          <div key={i} className="edu-card">
            <h3 className="edu-card__degree">{edu.degree}</h3>
            <p className="edu-card__school">
              {edu.school} &middot; {edu.location}
            </p>
            <p className="edu-card__meta">
              {edu.end} &middot; GPA: {edu.gpa}
            </p>
            <p className="edu-card__honors">{edu.honors}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-list">
        {resume.experience.map((job, i) => (
          <div key={i} className="job-card">
            <div className="job-card__header">
              <h3 className="job-card__role">{job.role}</h3>
              <span className="job-card__date">
                {job.start} &ndash; {job.end}
              </span>
            </div>
            <p className="job-card__company">
              {job.company} &middot; {job.location}
            </p>
            <ul className="job-card__bullets">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillsSection() {
  const categories = [
    { label: "Languages", items: resume.skills.languages },
    { label: "Frameworks & Libraries", items: resume.skills.frameworks },
    { label: "Tools & Platforms", items: resume.skills.tools },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.label} className="skill-group">
            <h3 className="skill-group__label">{cat.label}</h3>
            <div className="skill-group__tags">
              {cat.items.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export { AboutSection, ExperienceSection, SkillsSection };
