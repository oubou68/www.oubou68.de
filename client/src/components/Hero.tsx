import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-personal-intro">
          <div className="hero-avatar-box">
            <span className="avatar-initials">CH</span>
            <span className="avatar-beacon" title="Available for advisory & exchange"></span>
          </div>
          <div className="hero-greeting">
            <span className="greeting-badge">Dr. rer. pol. Carl Heckmann</span>
            <span className="greeting-subtitle">Executive • Researcher • Software & BPO Leader</span>
          </div>
        </div>

        <h1 id="main-heading">
          Engineering the Next Generation of <br />
          <span className="gradient-text">Utilities, Process Ambidexterity & AI</span>
        </h1>

        <p className="hero-subhead">
          I bridge academic research with industrial software and BPO execution. Serving as Prokurist and Head of Product & Implementation at <strong>hsag Heidelberger Services AG</strong>, Working Group Leader at <strong>BEMD e.V.</strong>, and Researcher/Lecturer at the <strong>Karlsruhe Institute of Technology (KIT)</strong>.
        </p>

        {/* Affiliation Mini Badges */}
        <div className="hero-affiliations-row">
          <span className="affil-tag">🏛️ hsag Heidelberger Services AG</span>
          <span className="affil-tag">⚖️ BEMD e.V.</span>
          <span className="affil-tag">🎓 KIT (Karlsruhe)</span>
          <span className="affil-tag">📜 Univ. Mannheim (Dr. rer. pol.)</span>
        </div>

        <div className="hero-actions">
          <a href="#experience" className="btn btn-primary" id="btn-hero-cv">
            📜 CV & Affiliations
          </a>
          <a href="#publications" className="btn btn-outline" id="btn-hero-publications">
            📚 Publications (130+ Citations)
          </a>
          <a href="#agent-simulator" className="btn btn-primary-glow" id="btn-hero-agent-sim">
            ▶ Test AI Simulator
          </a>
          <a
            href="https://www.linkedin.com/in/carl-heckmann-21273631/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            id="btn-hero-linkedin"
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
};
