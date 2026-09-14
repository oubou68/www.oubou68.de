import React from 'react';

export interface AffiliationItem {
  id: string;
  name: string;
  role: string;
  period: string;
  badge: string;
  description: string;
  link: string;
  highlights: string[];
}

export const ExperienceAffiliations: React.FC = () => {
  const experiences: AffiliationItem[] = [
    {
      id: 'hsag',
      name: 'hsag Heidelberger Services AG',
      role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
      period: 'Executive Leadership',
      badge: 'Software & BPO Execution',
      description:
        'Leading product strategy, software implementations, and Business Process Outsourcing (BPO) solutions tailored for the German energy and utilities market. Architecting modern cloud billing modules, high-volume market communication, and automated clearing engines for municipal utilities (Stadtwerke) and national energy suppliers.',
      link: 'https://www.hsag.info',
      highlights: [
        'NextGen Energy Billing Engine (EBE-DE) rollouts',
        'Dynamic tariff implementation (§ 41a EnWG)',
        'Straight-through processing for supplier switching and meter-to-cash',
        'Direct executive accountability for product & service delivery',
      ],
    },
    {
      id: 'bemd',
      name: 'BEMD e.V. (Bundesverband der Energiemarktdienstleister)',
      role: 'Arbeitskreisleiter & Industry Expert',
      period: 'Committee & Standards',
      badge: 'Industry Benchmark',
      description:
        'Guiding industry-wide harmonization as a working group leader. Defining standardized service catalogs (Standardleistungsverzeichnis) and process benchmarks for German energy market service providers.',
      link: 'https://www.bemd.de',
      highlights: [
        'Standardization of BPO service catalogs for utilities',
        'Regulatory alignment with BNetzA MaKo & AS4 guidelines',
        'Cross-industry expert panels and best-practice frameworks',
      ],
    },
    {
      id: 'kit',
      name: 'Karlsruhe Institute of Technology (KIT)',
      role: 'Scientific Researcher & Lecturer (IISM / WIN)',
      period: 'Academic Appointment',
      badge: 'Research & Human-AI',
      description:
        'Conducting pioneering research at the Institute of Information Systems and Marketing (IISM) and Human-Centered Systems Lab. Investigating the organizational impact of AI as a coworker, smart energy feedback systems, and IT Ambidexterity.',
      link: 'https://www.kit.edu',
      highlights: [
        'Knowledge Week Human x AI (AI as Colleague)',
        'Design of Conversational Agents for Energy Feedback',
        'Doctoral & Master-level coursework on IS research methods',
      ],
    },
    {
      id: 'mannheim',
      name: 'University of Mannheim',
      role: 'Dr. rer. pol. (Doctorate in Information Systems)',
      period: 'Doctoral Foundation',
      badge: 'Dr. rer. pol.',
      description:
        'Completed doctoral dissertation on "IT Ambidexterity in Business Processes", establishing quantitative and qualitative models that prove how balancing operational efficiency (exploitation) with rapid innovation (exploration) delivers market-leading resilience.',
      link: 'https://www.uni-mannheim.de',
      highlights: [
        'Doctorate (Dr. rer. pol.) with distinction',
        'Empirical studies on business process IT capabilities',
        'International conference publications (ICIS / ECIS)',
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Career & Leadership</p>
          <h2>Affiliations & Executive Trajectory</h2>
          <p>
            A cohesive trajectory uniting high-level industry leadership in software and BPO with rigorous academic research at Germany’s premier institutions.
          </p>
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
                    Official Site ↗
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
