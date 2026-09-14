import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-text-col">
            <div className="hero-personal-intro">
              <span className="greeting-badge">{t.hero.badge}</span>
              <span className="greeting-subtitle">{t.hero.subtitle}</span>
            </div>

            <h1 id="main-heading">
              {t.hero.titleLine1} <br />
              <span className="gradient-text">{t.hero.titleGradient}</span>
            </h1>

            <p className="hero-subhead">{t.hero.subhead}</p>

            {/* Affiliation Badges */}
            <div className="hero-affiliations-row">
              <span className="affil-tag">{t.hero.affilHsag}</span>
              <span className="affil-tag">{t.hero.affilBemd}</span>
              <span className="affil-tag">{t.hero.affilKit}</span>
              <span className="affil-tag">{t.hero.affilMannheim}</span>
            </div>

            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary" id="btn-hero-cv">
                {t.hero.btnCv}
              </a>
              <a href="#publications" className="btn btn-outline" id="btn-hero-publications">
                {t.hero.btnPublications}
              </a>
              <a href="#pillars" className="btn btn-primary-glow" id="btn-hero-pillars">
                {t.hero.btnPillars}
              </a>
              <a
                href="https://www.linkedin.com/in/carl-heckmann-21273631/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                id="btn-hero-linkedin"
              >
                {t.hero.btnLinkedin}
              </a>
            </div>
          </div>

          <div className="hero-image-col">
            <div className="hero-portrait-card">
              <div className="portrait-image-wrapper">
                <img
                  src="/images/carl-heckmann.jpg"
                  alt="Dr. Carl Heckmann executive portrait"
                  className="hero-portrait-img"
                  loading="eager"
                />
                <div className="portrait-overlay-badge">
                  <span className="pulse-dot"></span>
                  <span>{t.hero.portraitBadge}</span>
                </div>
              </div>
              <div className="portrait-caption">
                <strong>{t.hero.portraitName}</strong>
                <span>{t.hero.portraitRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
