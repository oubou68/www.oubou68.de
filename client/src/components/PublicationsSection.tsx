import React, { useState } from 'react';

export interface Publication {
  id: string;
  title: string;
  year: number;
  authors: string;
  venue: string;
  category: 'ambidexterity' | 'energy' | 'ai';
  categoryLabel: string;
  abstract: string;
  doiOrUrl?: string;
}

export const PublicationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ambidexterity' | 'energy' | 'ai'>('all');

  const publications: Publication[] = [
    {
      id: 'pub-balance',
      title: 'IT ambidexterity for business processes: the importance of balance',
      year: 2018,
      authors: 'Carl Heckmann et al.',
      venue: 'Business Process Management & Information Systems Research',
      category: 'ambidexterity',
      categoryLabel: 'IT Ambidexterity',
      abstract:
        'Demonstrates how organizations achieve superior operational performance by maintaining an architectural balance between IT capabilities that exploit existing process efficiencies and those that explore digital innovation.',
      doiOrUrl: 'https://www.researchgate.net/',
    },
    {
      id: 'pub-performance',
      title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
      year: 2015,
      authors: 'Carl Heckmann et al.',
      venue: 'International Conference on Information Systems (ICIS / ECIS)',
      category: 'ambidexterity',
      categoryLabel: 'IT Ambidexterity',
      abstract:
        'A landmark empirical study providing quantitative metrics to assess how ambidextrous IT alignments eliminate procedural bottlenecks in mission-critical corporate operations.',
      doiOrUrl: 'https://www.researchgate.net/',
    },
    {
      id: 'pub-conversational',
      title: 'Designing Conversational Agents for Energy Feedback',
      year: 2020,
      authors: 'Carl Heckmann et al.',
      venue: 'Human-Computer Interaction / Springer Studies',
      category: 'ai',
      categoryLabel: 'Conversational AI',
      abstract:
        'Examines the UX architecture, conversational heuristics, and user psychological receptivity of AI agents designed to deliver real-time consumption feedback to energy consumers.',
      doiOrUrl: 'https://www.researchgate.net/',
    },
    {
      id: 'pub-smarticity',
      title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
      year: 2017,
      authors: 'Carl Heckmann et al.',
      venue: 'Energy Informatics & Smart Metering Research',
      category: 'energy',
      categoryLabel: 'Energy & Smart Metering',
      abstract:
        'Introduces the SMARTICITY architecture: integrating smart meter gateway lastgänge with granular tariff rating algorithms to present actionable cost feedback to consumers.',
      doiOrUrl: 'https://www.researchgate.net/',
    },
    {
      id: 'pub-human-ai-2026',
      title: 'AI as a Colleague: Psychological & Organizational Dynamics of Human x AI Integration',
      year: 2026,
      authors: 'Carl Heckmann',
      venue: 'KIT Knowledge Week Human x AI (Karlsruhe Institute of Technology)',
      category: 'ai',
      categoryLabel: 'Human x AI Agents',
      abstract:
        'Explores the practical realities and organizational design requirements when autonomous multi-agent systems operate alongside human professionals in regulated enterprise domains.',
      doiOrUrl: 'https://www.kit.edu',
    },
  ];

  const filteredPubs =
    filter === 'all'
      ? publications
      : publications.filter((p) => p.category === filter);

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Scientific & Academic Impact</p>
          <h2>Selected Publications & Research</h2>
          <p>
            Peer-reviewed research and keynote contributions bridging information systems theory with pragmatic industrial utility applications. Over 130+ scientific citations.
          </p>

          <div className="pub-filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              id="pub-filter-all"
            >
              All Research ({publications.length})
            </button>
            <button
              className={`filter-btn ${filter === 'ambidexterity' ? 'active' : ''}`}
              onClick={() => setFilter('ambidexterity')}
              id="pub-filter-ambidexterity"
            >
              ⚖️ IT Ambidexterity
            </button>
            <button
              className={`filter-btn ${filter === 'energy' ? 'active' : ''}`}
              onClick={() => setFilter('energy')}
              id="pub-filter-energy"
            >
              ⚡ Energy & Smart Metering
            </button>
            <button
              className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
              id="pub-filter-ai"
            >
              🤖 AI & Conversational Agents
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

              <h3 className="pub-title">{pub.title}</h3>
              <div className="pub-authors">{pub.authors}</div>
              <div className="pub-venue">📍 {pub.venue}</div>

              <p className="pub-abstract">{pub.abstract}</p>

              <div className="pub-footer">
                <a
                  href="https://www.researchgate.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="pub-link"
                >
                  View on ResearchGate ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="research-callout">
          <div className="callout-icon">📚</div>
          <div className="callout-text">
            <strong>Academic Profile & Citations</strong>
            <p>
              For a full catalog of academic preprints, conference proceedings, and doctoral supervision materials, visit my profile on{' '}
              <a
                href="https://www.researchgate.net/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)' }}
              >
                ResearchGate
              </a>{' '}
              or the{' '}
              <a
                href="https://www.kit.edu"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)' }}
              >
                KIT Institute for Information Systems
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
