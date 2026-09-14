import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="glass-panel about-panel">
          <div className="about-header">
            <p className="section-tag">{t.about.tag}</p>
            <h2>{t.about.heading}</h2>
          </div>

          <div className="about-content-grid">
            <div className="about-text-column">
              <p className="about-lead">{t.about.lead}</p>
              <p>{t.about.paragraph1}</p>
              
              <blockquote className="about-quote">
                {t.about.quote}
              </blockquote>

              <p>{t.about.paragraph2}</p>
            </div>

            <div className="about-pillars-mini">
              <div className="about-stat-card">
                <span className="stat-number">{t.about.stat1Number}</span>
                <span className="stat-label">{t.about.stat1Label}</span>
                <p className="stat-detail">{t.about.stat1Detail}</p>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">{t.about.stat2Number}</span>
                <span className="stat-label">{t.about.stat2Label}</span>
                <p className="stat-detail">{t.about.stat2Detail}</p>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">{t.about.stat3Number}</span>
                <span className="stat-label">{t.about.stat3Label}</span>
                <p className="stat-detail">{t.about.stat3Detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
