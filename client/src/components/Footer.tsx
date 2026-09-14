import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <div className="footer-credits">
          © {currentYear} <strong>www.oubou68.de</strong> — Engineered with React 19 & NestJS 12.
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/oubou68/www.oubou68.de"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub Repository
          </a>
          <a
            href="http://localhost:3000/api/docs"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            OpenAPI Docs
          </a>
          <a href="#top-nav" className="footer-link">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
