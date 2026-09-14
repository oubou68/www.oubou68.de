import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PillarsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'utilities' | 'process' | 'ai'>('all');

  const pillars = t.pillars.items;

  const filteredPillars =
    activeFilter === 'all'
      ? pillars
      : pillars.filter((p) => p.category === activeFilter);

  return (
    <section className="pillars-section" id="pillars">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.pillars.tag}</p>
          <h2>{t.pillars.heading}</h2>
          <p>{t.pillars.desc}</p>

          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              id="filter-btn-all"
            >
              {t.pillars.filterAll}
            </button>
            <button
              className={`filter-btn ${activeFilter === 'utilities' ? 'active' : ''}`}
              onClick={() => setActiveFilter('utilities')}
              id="filter-btn-utilities"
            >
              {t.pillars.filterUtilities}
            </button>
            <button
              className={`filter-btn ${activeFilter === 'process' ? 'active' : ''}`}
              onClick={() => setActiveFilter('process')}
              id="filter-btn-process"
            >
              {t.pillars.filterProcess}
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ai')}
              id="filter-btn-ai"
            >
              {t.pillars.filterAi}
            </button>
          </div>
        </div>

        <div className="bento-grid">
          {filteredPillars.map((pillar) => (
            <article
              key={pillar.id}
              className="bento-card bento-feature-card"
              id={`pillar-card-${pillar.id}`}
              style={{ '--pillar-accent': pillar.accent } as React.CSSProperties}
            >
              {/* Visual Banner Image */}
              <div className="pillar-banner-wrapper">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  className="pillar-banner-img"
                  loading="lazy"
                />
                <div className="pillar-banner-overlay">
                  <span className="pillar-banner-tag">{pillar.badge}</span>
                </div>
              </div>

              <div className="bento-top">
                <div className="pillar-header-group">
                  <span className="pillar-icon">{pillar.icon}</span>
                  <div>
                    <span className="bento-pill">{pillar.badge}</span>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-subtitle">{pillar.subtitle}</p>
                  </div>
                </div>
              </div>

              <p className="pillar-description">{pillar.description}</p>

              {/* Sub-items grid */}
              <div className="pillar-items-grid">
                {pillar.subItems.map((item, idx) => (
                  <div className="pillar-sub-item" key={idx}>
                    <div className="sub-item-header">
                      <span className="sub-item-bullet">✦</span>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="pillar-stats-row">
                {pillar.stats.map((st, i) => (
                  <div className="pillar-stat-box" key={i}>
                    <span className="stat-label">{st.label}</span>
                    <span className="stat-value">{st.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
