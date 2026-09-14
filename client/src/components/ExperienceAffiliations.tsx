import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceAffiliations: React.FC = () => {
  const { t } = useLanguage();
  const experiences = t.experience.affiliations;

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.experience.tag}</p>
          <h2>{t.experience.heading}</h2>
          <p>{t.experience.desc}</p>
        </div>

        {/* Affiliations Highlights Bar */}
        <div className="affiliations-badges-bar">
          <a
            href="https://www.hsag.info"
            target="_blank"
            rel="noreferrer"
            className="affiliation-chip"
            id="chip-hsag"
          >
            <span className="chip-logo">🏛️</span>
            <div>
              <strong>hsag Heidelberger Services</strong>
              <span className="chip-role">Prokurist & Bereichsleiter</span>
            </div>
          </a>

          <a
            href="https://www.bemd.de"
            target="_blank"
            rel="noreferrer"
            className="affiliation-chip"
            id="chip-bemd"
          >
            <span className="chip-logo">⚖️</span>
            <div>
              <strong>BEMD e.V.</strong>
              <span className="chip-role">Arbeitskreisleiter</span>
            </div>
          </a>

          <a
            href="https://www.kit.edu"
            target="_blank"
            rel="noreferrer"
            className="affiliation-chip"
            id="chip-kit"
          >
            <span className="chip-logo">🎓</span>
            <div>
              <strong>KIT (Karlsruhe)</strong>
              <span className="chip-role">Researcher & Lecturer</span>
            </div>
          </a>

          <a
            href="https://www.uni-mannheim.de"
            target="_blank"
            rel="noreferrer"
            className="affiliation-chip"
            id="chip-mannheim"
          >
            <span className="chip-logo">📜</span>
            <div>
              <strong>Univ. Mannheim</strong>
              <span className="chip-role">Dr. rer. pol.</span>
            </div>
          </a>
        </div>

        {/* Chronological CV Timeline */}
        <div className="cv-timeline">
          {experiences.map((item, index) => (
            <div className="timeline-card-wrapper" key={item.id} id={`exp-${item.id}`}>
              <div className="timeline-marker">
                <span className="marker-dot"></span>
                {index !== experiences.length - 1 && <span className="marker-line"></span>}
              </div>

              <div className="timeline-content-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-badge">{item.badge}</span>
                    <h3 className="timeline-company">{item.name}</h3>
                    <div className="timeline-role">{item.role}</div>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm"
                    title={`Visit ${item.name}`}
                  >
                    {t.experience.officialSiteBtn}
                  </a>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-highlights">
                  {item.highlights.map((h, i) => (
                    <span className="highlight-pill" key={i}>
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
