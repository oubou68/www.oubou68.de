import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="glass-panel about-panel">
          <div className="about-header">
            <p className="section-tag">Executive Profile</p>
            <h2>Bridging Rigorous Science with Industrial Execution</h2>
          </div>

          <div className="about-content-grid">
            <div className="about-text-column">
              <p className="about-lead">
                I operate at the intersection of enterprise software, regulatory energy market dynamics, and advanced autonomous systems.
              </p>
              <p>
                Throughout my career—from earning my doctorate (Dr. rer. pol.) in Information Systems at the University of Mannheim to executive leadership as Prokurist at <strong>hsag Heidelberger Services AG</strong>—my central mission has been answering one critical question:
              </p>
              
              <blockquote className="about-quote">
                "How can complex, highly regulated organizations maintain rock-solid operational stability while simultaneously executing radical digital innovation?"
              </blockquote>

              <p>
                The answer lies in <strong>IT Ambidexterity</strong>. In the utility industry, this means scaling mission-critical billing and market communications today, while proactively engineering native 15-minute time-series processing (§ 41a EnWG), smart meter gateway rollouts (iMSys), and autonomous AI agent workflows for tomorrow.
              </p>
            </div>

            <div className="about-pillars-mini">
              <div className="about-stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years in Energy IT & BPO</span>
                <p className="stat-detail">Transforming billing, clearing, and market processes for German utilities.</p>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">130+</span>
                <span className="stat-label">Academic Citations</span>
                <p className="stat-detail">Research on IT Ambidexterity and Conversational Energy Feedback Systems.</p>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">3</span>
                <span className="stat-label">Core Institutional Pillars</span>
                <p className="stat-detail">Executive (hsag) • Standards (BEMD) • Science & Teaching (KIT).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
