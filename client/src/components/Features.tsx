import React from 'react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: '🛡️',
      title: 'Enterprise NestJS Architecture',
      description:
        'Dependency injection, strict module isolation, and clean controller/service layers built on TypeScript and Express.',
    },
    {
      icon: '⚡',
      title: 'React 19 & Vite Power',
      description:
        'Sub-millisecond HMR, lightning-fast bundler, concurrent rendering, and zero CSS runtime overhead with pure modern CSS.',
    },
    {
      icon: '📖',
      title: 'Live OpenAPI / Swagger Docs',
      description:
        'Self-documenting interactive REST API documentation generated automatically from TypeScript decorators at /api/docs.',
    },
    {
      icon: '🔒',
      title: 'Built-in Security & CORS',
      description:
        'Strict CORS protection, request payload validation, and defensive API design tailored for modern microservices.',
    },
    {
      icon: '🌐',
      title: 'Domain Ready (oubou68.de)',
      description:
        'Structured and pre-configured for deployment to custom domain www.oubou68.de across Vercel, Railway, AWS, or VPS.',
    },
    {
      icon: '🧪',
      title: 'High Test Coverage',
      description:
        'Vitest test suite preconfigured for rapid unit and end-to-end integration testing with instantaneous execution.',
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Core Capabilities</p>
          <h2>Architected for Speed & Reliability</h2>
          <p>
            Combining modern JavaScript runtimes with rock-solid server patterns to deliver an exceptional digital experience.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((item, index) => (
            <article className="feature-card" key={index} id={`feature-card-${index}`}>
              <div className="feature-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
