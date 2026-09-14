import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  apiStatus: 'online' | 'offline' | 'checking';
  apiLatency: number | null;
}

export const Navbar: React.FC<NavbarProps> = ({ apiStatus, apiLatency }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header" id="top-nav">
      <div className="container nav">
        <a href="#hero" className="brand" id="brand-link">
          <div className="brand-badge">CH</div>
          <div className="brand-domain">
            Dr. Carl <span>{t.nav.brandSubtitle}</span>
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link" id="nav-link-about">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link" id="nav-link-experience">
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a href="#publications" className="nav-link" id="nav-link-publications">
              {t.nav.publications}
            </a>
          </li>
          <li>
            <a href="#pillars" className="nav-link" id="nav-link-pillars">
              {t.nav.pillars}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" id="nav-link-contact">
              {t.nav.contact}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Language Switcher */}
          <div className="lang-switcher" role="group" aria-label="Language selection" id="language-switcher">
            <button
              type="button"
              className={`lang-btn ${language === 'de' ? 'active' : ''}`}
              onClick={() => setLanguage('de')}
              title="Deutsche Version"
              id="lang-btn-de"
            >
              🇩🇪 DE
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              title="English version"
              id="lang-btn-en"
            >
              🇬🇧 EN
            </button>
          </div>

          {/* Backend API Status Indicator */}
          <div
            className={`status-pill ${apiStatus === 'offline' ? 'offline' : ''}`}
            title={`Backend API is ${apiStatus}${apiLatency !== null ? ` (${apiLatency}ms)` : ''}`}
            id="api-status-badge"
          >
            <span className="pulse-dot"></span>
            <span>
              {apiStatus === 'online'
                ? `${t.nav.apiLive} ${apiLatency ? `(${apiLatency}ms)` : ''}`
                : apiStatus === 'checking'
                ? t.nav.apiConnecting
                : t.nav.apiOffline}
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/carl-heckmann-21273631/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
            id="linkedin-nav-btn"
          >
            {t.nav.linkedin}
          </a>
        </div>
      </div>
    </header>
  );
};
