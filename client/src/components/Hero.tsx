import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-badge">
          <span>✨</span> Full-Stack Digital Platform Architecture
        </div>
        
        <h1 id="main-heading">
          Engineering the Next Generation on <br />
          <span className="gradient-text">www.oubou68.de</span>
        </h1>

        <p className="hero-description">
          A high-performance web platform marrying the responsiveness of <strong>React 19</strong> with the enterprise robustness of <strong>NestJS 12</strong>. Scalable, type-safe, and designed for elegance.
        </p>

        <div className="hero-actions">
          <a href="#monitor" className="btn btn-primary" id="btn-explore-telemetry">
            Live Telemetry
          </a>
          <a
            href="http://localhost:3000/api/docs"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            id="btn-swagger-docs"
          >
            OpenAPI Docs ↗
          </a>
          <a href="#contact" className="btn btn-outline" id="btn-hero-contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
