import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <div className="footer-brand-summary">
          <div className="footer-title">
            <strong>Dr. Carl Heckmann</strong>
          </div>
          <p className="footer-desc">
            Executive Leadership in Energy IT, Process Optimization & Autonomous AI Agents.
          </p>
          <p className="footer-credits">
            © {currentYear} Dr. Carl Heckmann (oubou68.de). Built with React 19 & NestJS 12.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h4>Pillars</h4>
            <a href="#pillars" className="footer-link">
              Utilities & Energy
            </a>
            <a href="#pillars" className="footer-link">
              Process Optimization
            </a>
            <a href="#pillars" className="footer-link">
              Autonomous AI Agents
            </a>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#monitor" className="footer-link">
              Live Telemetry
            </a>
            <a href="http://localhost:3000/api/docs" target="_blank" rel="noreferrer" className="footer-link">
              OpenAPI Swagger
            </a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a
              href="https://www.linkedin.com/in/carl-heckmann-21273631/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn Profile ↗
            </a>
            <a
              href="https://github.com/oubou68"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub (@oubou68) ↗
            </a>
            <a href="#contact" className="footer-link">
              Inquiry Form
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
