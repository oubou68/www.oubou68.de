import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-text-col">
            <div className="hero-personal-intro">
              <span className="greeting-badge">Dr. rer. pol. Carl Heckmann</span>
              <span className="greeting-subtitle">Executive • Researcher • Software & BPO Leader</span>
            </div>

            <h1 id="main-heading">
              Engineering the Future of <br />
              <span className="gradient-text">Utilities, Process Ambidexterity & AI</span>
            </h1>

            <p className="hero-subhead">
              I bridge academic research with industrial software and BPO execution. Serving as Prokurist and Head of Product & Implementation at <strong>hsag Heidelberger Services AG</strong>, Working Group Leader at <strong>BEMD e.V.</strong>, and Researcher/Lecturer at the <strong>Karlsruhe Institute of Technology (KIT)</strong>.
            </p>

            {/* Affiliation Badges */}
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
                  <span>Active Leadership & Advisory</span>
                </div>
              </div>
              <div className="portrait-caption">
                <strong>Dr. Carl Heckmann</strong>
                <span>Energy IT Executive & Research Fellow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
