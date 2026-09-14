import React, { useState } from 'react';

export const PillarsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'utilities' | 'process' | 'ai'>('all');

  const pillars = [
    {
      id: 'utilities',
      category: 'utilities',
      badge: 'Energy IT & Transition',
      title: 'Utilities & NextGen Energy Markets',
      subtitle: 'Dynamic Pricing, Smart Metering (iMSys) & Scalable Billing Engines',
      image: '/images/smart-energy-grid.jpg',
      imageAlt: 'Smart Energy Grid and Dynamic Electricity Tariff Architecture',
      description:
        'The German and European energy market is transitioning to hyper-granular 15-minute settlement. Dr. Carl Heckmann specializes in engineering cloud-native billing architectures compliant with § 41a EnWG, direct spot-market price coupling (EPEX Spot), and smart meter gateway communication.',
      icon: '⚡',
      accent: 'var(--accent-cyan)',
      items: [
        {
          title: 'NextGen Energy Billing Engine',
          desc: 'Modular time-series rating and invoicing engine replacing legacy monolithic billing platforms.',
        },
        {
          title: 'Dynamic Tariffs (§ 41a EnWG)',
          desc: 'Algorithmic 15-minute interval tariff calculation connected directly to Day-Ahead and Intraday spot prices.',
        },
        {
          title: 'Smart Meter Gateway Ingestion',
          desc: 'High-throughput parsing of BSI TR-03109 compliant iMSys meters (TAF 1 to TAF 14).',
        },
        {
          title: 'Regulatory & Market Communication',
          desc: 'Full compliance with BNetzA MaKo 2024/2026, AS4 security, EDIFACT, XRechnung, and GoBD standards.',
        },
      ],
      stats: [
        { label: 'Settlement Resolution', value: '15 Min' },
        { label: 'Regulatory Scope', value: 'EnWG / MsbG' },
        { label: 'Data Ingestion', value: 'TAF 1–14' },
      ],
    },
    {
      id: 'process',
      category: 'process',
      badge: 'Operational Excellence',
      title: 'Business Process Optimization',
      subtitle: 'IT Ambidexterity, BPO Modernization & Lean Scaling',
      image: '/images/process-optimization.jpg',
      imageAlt: 'IT Ambidexterity: Balancing Optimization and Innovation',
      description:
        'Rooted in doctoral research at the Karlsruhe Institute of Technology (KIT) and University of Mannheim, Dr. Heckmann pioneers IT Ambidexterity—the strategic discipline of simultaneously maximizing legacy operational efficiency (exploitation) while executing high-velocity digital innovation (exploration).',
      icon: '⚙️',
      accent: 'var(--accent-primary)',
      items: [
        {
          title: 'IT Ambidexterity Leadership',
          desc: 'Resolving organizational friction between rigid legacy ERPs and agile cloud-native microservices.',
        },
        {
          title: 'Business Process Outsourcing (BPO)',
          desc: 'Architecting end-to-end automated workflows for supplier switching, clearing, and customer onboarding.',
        },
        {
          title: 'Straight-Through Processing (STP)',
          desc: 'Eliminating manual reconciliation backlogs with deterministic rule engines and automated plausibility checks.',
        },
        {
          title: 'Industry Association & BEMD',
          desc: 'Active leadership in industry workgroups shaping standardized service catalogs for German energy suppliers.',
        },
      ],
      stats: [
        { label: 'Academic Root', value: 'KIT / Mannheim' },
        { label: 'Focus Doctrine', value: 'Ambidexterity' },
        { label: 'Process Goal', value: 'Zero-Friction STP' },
      ],
    },
    {
      id: 'ai',
      category: 'ai',
      badge: 'Agentic AI Architecture',
      title: 'Autonomous AI Agents',
      subtitle: 'Multi-Agent Orchestration & Enterprise Reasoning Swarms',
      image: '/images/autonomous-ai-agents.jpg',
      imageAlt: 'Autonomous Multi-Agent AI System and Workflow Ingestion',
      description:
        'Moving beyond static predictive models into deterministic agentic workflows. Designing multi-agent swarms equipped with specialized tools to autonomously investigate billing variances, reconcile energy market telemetry, and provide real-time conversational feedback to consumers.',
      icon: '🤖',
      accent: 'var(--accent-fuchsia)',
      items: [
        {
          title: 'Multi-Agent Collaborative Swarms',
          desc: 'Coordinated specialized agents (Ingest, Sentinel, Reconciler) executing asynchronous validation tasks.',
        },
        {
          title: 'Autonomous Exception Resolution',
          desc: 'Self-healing anomaly handling in high-volume utility pipelines with auditable verification logs.',
        },
        {
          title: 'Conversational Utility Agents',
          desc: 'Natural language interfaces guiding consumers through consumption feedback, tariff choices, and energy conservation.',
        },
        {
          title: 'Deterministic Guardrails',
          desc: 'Hybrid architectures pairing LLM reasoning with strict financial GoBD compliance and human-in-the-loop fallback.',
        },
      ],
      stats: [
        { label: 'Paradigm', value: 'Multi-Agent' },
        { label: 'Execution', value: 'Autonomous' },
        { label: 'Safety Guardrails', value: 'Deterministic' },
      ],
    },
  ];

  const filteredPillars =
    activeFilter === 'all'
      ? pillars
      : pillars.filter((p) => p.category === activeFilter);

  return (
    <section className="pillars-section" id="pillars">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Core Areas of Impact</p>
          <h2>Strategic Focus & Domain Leadership</h2>
          <p>
            Bridging senior executive leadership with deep technical mastery to solve the most demanding challenges in modern infrastructure.
          </p>

          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              id="filter-btn-all"
            >
              All Expertise
            </button>
            <button
              className={`filter-btn ${activeFilter === 'utilities' ? 'active' : ''}`}
              onClick={() => setActiveFilter('utilities')}
              id="filter-btn-utilities"
            >
              ⚡ Utilities & Energy
            </button>
            <button
              className={`filter-btn ${activeFilter === 'process' ? 'active' : ''}`}
              onClick={() => setActiveFilter('process')}
              id="filter-btn-process"
            >
              ⚙️ Process Optimization
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ai')}
              id="filter-btn-ai"
            >
              🤖 AI Agents
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
                {pillar.items.map((item, idx) => (
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
