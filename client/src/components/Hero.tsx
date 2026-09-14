import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-badge">
          <span>⚡</span> Thought Leadership & Executive Engineering
        </div>

        <h1 id="main-heading">
          Shaping the Future of <br />
          <span className="gradient-text">Energy, Processes & AI Agents</span>
        </h1>

        <p className="hero-subhead">
          Official platform of <strong>Dr. Carl Heckmann</strong> — Driving the convergence of the <strong>Energy Transition (Energiewende)</strong>, <strong>IT Ambidexterity & Lean Optimization</strong>, and <strong>Autonomous Multi-Agent Systems</strong>.
        </p>

        <div className="hero-tags-row">
          <span className="hero-tag">§ 41a EnWG Dynamic Tariffs</span>
          <span className="hero-tag">Smart Metering (iMSys)</span>
          <span className="hero-tag">IT Ambidexterity</span>
          <span className="hero-tag">NextGen Energy Billing</span>
          <span className="hero-tag">Multi-Agent Swarms</span>
        </div>

        <div className="hero-actions">
          <a href="#pillars" className="btn btn-primary" id="btn-explore-pillars">
            ⚡ Explore Core Pillars
          </a>
          <a
            href="#agent-simulator"
            className="btn btn-primary-glow"
            id="btn-hero-launch-simulator"
          >
            ▶ Launch Agent Simulator
          </a>
          <a
            href="https://www.linkedin.com/in/carl-heckmann-21273631/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            id="btn-linkedin-profile"
          >
            LinkedIn Profile ↗
          </a>
          <a
            href="https://github.com/oubou68"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            id="btn-github-profile"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};
