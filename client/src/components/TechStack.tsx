import React from 'react';

export const TechStack: React.FC = () => {
  const stackGroups = [
    {
      title: 'Frontend Ecosystem',
      icon: '🎨',
      items: [
        'React 19',
        'TypeScript 5.x',
        'Vite 6',
        'Vanilla CSS3',
        'Google Fonts (Plus Jakarta Sans)',
        'JetBrains Mono',
      ],
    },
    {
      title: 'Backend Ecosystem',
      icon: '⚙️',
      items: [
        'NestJS 12',
        'Node.js 24 LTS',
        'Swagger / OpenAPI',
        'Express Platform',
        'Vitest Test Runner',
        'Oxlint / Prettier',
      ],
    },
    {
      title: 'DevOps & Tooling',
      icon: '🚀',
      items: [
        'Git Version Control',
        'GitHub CLI (gh)',
        'Concurrently Monorepo',
        'RESTful Standards',
        'Clean Architecture',
        'oubou68 Production DNS',
      ],
    },
  ];

  return (
    <section className="tech-section" id="stack">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Engineering Stack</p>
          <h2>Modern, Modular & Scalable</h2>
          <p>
            Curated selection of industry-standard tools and frameworks ensuring long-term maintainability.
          </p>
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
