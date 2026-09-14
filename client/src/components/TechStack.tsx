import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const stackGroups = t.stack.groups;

  return (
    <section className="tech-section" id="stack">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.stack.tag}</p>
          <h2>{t.stack.heading}</h2>
          <p>{t.stack.desc}</p>
        </div>

        <div className="tech-grid">
          {stackGroups.map((group, idx) => (
            <div className="tech-group" key={idx} id={`tech-group-${idx}`}>
              <h3 className="tech-group-title">
                <span>{group.icon}</span> {group.title}
              </h3>
              <div className="tech-tags">
                {group.items.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
