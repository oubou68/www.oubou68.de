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
  primaryLink: {
    label: string;
    url: string;
  };
  secondaryLink?: {
    label: string;
    url: string;
  };
}

export const PublicationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ambidexterity' | 'energy' | 'ai'>('all');

  const publications: Publication[] = [
    {
      id: 'pub-balance',
      title: 'IT ambidexterity for business processes: the importance of balance',
      year: 2018,
      authors: 'Carl Simon Heckmann, Alexander Maedche',
      venue: 'Business Process Management Journal, Vol. 24 No. 4, pp. 977-998',
      category: 'ambidexterity',
      categoryLabel: 'IT Ambidexterity',
      abstract:
        'Introduces the Business Process IT (BPIT) Capability Framework and proves empirically that maintaining a conscious balance between exploitative and explorative IT investments drives market-leading performance.',
      primaryLink: {
        label: 'Emerald Insight (DOI: 10.1108/BPMJ-04-2016-0078) ↗',
        url: 'https://doi.org/10.1108/BPMJ-04-2016-0078',
      },
      secondaryLink: {
        label: 'ResearchGate Full-Text ↗',
        url: 'https://www.researchgate.net/publication/325785025_IT_ambidexterity_for_business_processes_the_importance_of_balance',
      },
    },
    {
      id: 'pub-performance',
      title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
      year: 2015,
      authors: 'Carl Heckmann',
      venue: '23rd European Conference on Information Systems (ECIS 2015), Münster',
      category: 'ambidexterity',
      categoryLabel: 'IT Ambidexterity',
      abstract:
        'A comprehensive quantitative empirical study in the German utilities sector testing how combinations of explorative and exploitative IT capabilities impact process agility and cost performance.',
      primaryLink: {
        label: 'AIS eLibrary (Direct Access) ↗',
        url: 'https://aisel.aisnet.org/ecis2015_cr/84/',
      },
      secondaryLink: {
        label: 'ResearchGate ↗',
        url: 'https://www.researchgate.net/publication/282772591_The_Impact_of_Business_Process_IT_Ambidexterity_on_Business_Process_Performance',
      },
    },
    {
      id: 'pub-conversational',
      title: 'Designing Conversational Agents for Energy Feedback',
      year: 2018,
      authors: 'Ulrich Gnewuch, Stefan Morana, Carl Heckmann, Alexander Maedche',
      venue: 'Designing for a Digital and Globalized World (LNCS, Vol. 10844), Springer, pp. 18-33',
      category: 'ai',
      categoryLabel: 'Conversational AI',
      abstract:
        'Derives design principles for conversational agents providing interactive household energy feedback, demonstrating high user receptivity and actionable consumption nudging compared to static dashboards.',
      primaryLink: {
        label: 'SpringerLink (DOI: 10.1007/978-3-319-91800-6_2) ↗',
        url: 'https://doi.org/10.1007/978-3-319-91800-6_2',
      },
      secondaryLink: {
        label: 'ResearchGate Full-Text ↗',
        url: 'https://www.researchgate.net/publication/325437810_Designing_Conversational_Agents_for_Energy_Feedback',
      },
    },
    {
      id: 'pub-smarticity',
      title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
      year: 2015,
      authors: 'Carl Heckmann, Alexander Mädche',
      venue: 'Energy, Science, Technology 2015, Karlsruhe, Germany',
      category: 'energy',
      categoryLabel: 'Energy & Smart Metering',
      abstract:
        'Presents the SMARTICITY architecture: integrating smart meter gateway lastgänge with granular tariff rating algorithms to provide real-time cost visibility and demand-side energy optimization.',
      primaryLink: {
        label: 'ResearchGate (Direct Publication) ↗',
        url: 'https://www.researchgate.net/publication/282772583_SMARTICITY_-_A_Feedback_System_for_Energy_Consumption_and_Costs',
      },
    },
    {
      id: 'pub-gamified-feedback',
      title: 'The Energy Revolution towards Smart Meters and the Neglected User',
      year: 2016,
      authors: 'Diaa Abdelaziz, Carl Heckmann, Alexander Mädche',
      venue: 'Multikonferenz Wirtschaftsinformatik (MKWI 2016), Ilmenau',
      category: 'energy',
      categoryLabel: 'Smart Metering UX',
      abstract:
        'Evaluates consumer engagement challenges during smart meter rollouts and presents a gamified feedback system prototype tailored to increase household energy awareness and tariff responsiveness.',
      primaryLink: {
        label: 'ResearchGate (Direct Publication) ↗',
        url: 'https://www.researchgate.net/publication/301648079_The_energy_revolution_towards_smart_meters_and_the_neglected_user_a_gamified_energy_feedback_system_prototype',
      },
    },
    {
      id: 'pub-human-ai-2026',
      title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
      year: 2026,
      authors: 'Carl Heckmann',
      venue: 'KIT Knowledge Week Human x AI (Karlsruhe Institute of Technology)',
      category: 'ai',
      categoryLabel: 'Human x AI Swarms',
      abstract:
        'Analyzes the integration of autonomous agent swarms into knowledge-intensive enterprise workflows, examining trust boundaries, human-in-the-loop oversight, and organizational ambidexterity.',
      primaryLink: {
        label: 'Karlsruhe.digital Event Session ↗',
        url: 'https://karlsruhe.digital/event/woche-des-wissens-mensch-x-ki/',
      },
      secondaryLink: {
        label: 'KIT Human-Centered Systems Lab ↗',
        url: 'https://h-cs.iism.kit.edu/',
      },
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
            Direct links to peer-reviewed journal papers, conference proceedings, and book chapters. Over 130+ scientific citations across IT Ambidexterity and Energy Informatics.
          </p>

          <div className="pub-filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              id="pub-filter-all"
            >
              All Direct Links ({publications.length})
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
            <strong>Direct Research Profiles & Citations</strong>
            <p>
              Inspect citation metrics, full texts, and co-author networks directly on my{' '}
              <a
                href="https://www.researchgate.net/profile/Carl-Heckmann"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                ResearchGate Profile (Dr. Carl Heckmann) ↗
              </a>{' '}
              or via the{' '}
              <a
                href="https://www.kit.edu"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                KIT Institute of Information Systems and Marketing (IISM) ↗
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
