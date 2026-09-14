import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <div className="footer-brand-summary">
          <div className="footer-title">
            <strong>{t.footer.title}</strong>
          </div>
          <p className="footer-desc">{t.footer.desc}</p>
          <p className="footer-credits">
            {t.footer.credits.replace('{year}', currentYear.toString())}
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h4>{t.footer.colPillarsTitle}</h4>
            <a href="#pillars" className="footer-link">
              {t.footer.linkUtilities}
            </a>
            <a href="#pillars" className="footer-link">
              {t.footer.linkProcess}
            </a>
            <a href="#pillars" className="footer-link">
              {t.footer.linkAi}
            </a>
          </div>

          <div className="footer-column">
            <h4>{t.footer.colPlatformTitle}</h4>
            <a href="http://localhost:3000/api/docs" target="_blank" rel="noreferrer" className="footer-link">
              {t.footer.linkSwagger}
            </a>
            <a href="http://localhost:3000/api/health" target="_blank" rel="noreferrer" className="footer-link">
              API Health ↗
            </a>
          </div>

          <div className="footer-column">
            <h4>{t.footer.colConnectTitle}</h4>
            <a
              href="https://www.linkedin.com/in/carl-heckmann-21273631/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {t.footer.linkLinkedin}
            </a>
            <a
              href="https://github.com/oubou68"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {t.footer.linkGithub}
            </a>
            <a href="#contact" className="footer-link">
              {t.footer.linkContact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
