import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PublicationsSection: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'ambidexterity' | 'energy' | 'ai'>('all');

  const publications = t.publications.items;

  const filteredPubs =
    filter === 'all'
      ? publications
      : publications.filter((p) => p.category === filter);

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.publications.tag}</p>
          <h2>{t.publications.heading}</h2>
          <p>{t.publications.desc}</p>

          <div className="pub-filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              id="pub-filter-all"
            >
              {t.publications.filterAll} ({publications.length})
            </button>
            <button
              className={`filter-btn ${filter === 'ambidexterity' ? 'active' : ''}`}
              onClick={() => setFilter('ambidexterity')}
              id="pub-filter-ambidexterity"
            >
              {t.publications.filterAmbidexterity}
            </button>
            <button
              className={`filter-btn ${filter === 'energy' ? 'active' : ''}`}
              onClick={() => setFilter('energy')}
              id="pub-filter-energy"
            >
              {t.publications.filterEnergy}
            </button>
            <button
              className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
              id="pub-filter-ai"
            >
              {t.publications.filterAi}
            </button>
          </div>
        </div>

        <div className="publications-grid">
          {filteredPubs.map((pub) => (
            <article className="publication-card" key={pub.id} id={`pub-${pub.id}`}>
              <div className="pub-top-row">
                <span className="pub-category-badge">{pub.categoryLabel}</span>
                <span className="pub-year-badge">{pub.year}</span>
              </div>

              <h3 className="pub-title">
                <a
                  href={pub.primaryLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pub-title-link"
                  title={`Open direct publication: ${pub.title}`}
                >
                  {pub.title} ↗
                </a>
              </h3>
              
              <div className="pub-authors">{pub.authors}</div>
              <div className="pub-venue">📍 {pub.venue}</div>

              <p className="pub-abstract">{pub.abstract}</p>

              <div className="pub-footer">
                <div className="pub-direct-links">
                  <a
                    href={pub.primaryLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-direct-btn primary"
                  >
                    {pub.primaryLink.label}
                  </a>

                  {pub.secondaryLink && (
                    <a
                      href={pub.secondaryLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="pub-direct-btn secondary"
                    >
                      {pub.secondaryLink.label}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="research-callout">
          <div className="callout-icon">📚</div>
          <div className="callout-text">
            <strong>{t.publications.calloutTitle}</strong>
            <p>
              {t.publications.calloutText1}
              <a
                href="https://www.researchgate.net/profile/Carl-Heckmann"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                {t.publications.calloutLinkRg}
              </a>
              {t.publications.calloutText2}
              <a
                href="https://www.kit.edu"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                {t.publications.calloutLinkKit}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
