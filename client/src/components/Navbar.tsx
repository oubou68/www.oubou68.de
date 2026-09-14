import React from 'react';

interface NavbarProps {
  apiStatus: 'online' | 'offline' | 'checking';
  apiLatency: number | null;
}

export const Navbar: React.FC<NavbarProps> = ({ apiStatus, apiLatency }) => {
  return (
    <header className="header" id="top-nav">
      <div className="container nav">
        <a href="#hero" className="brand" id="brand-link">
          <div className="brand-badge">CH</div>
          <div className="brand-domain">
            Dr. Carl <span>Heckmann</span>
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#pillars" className="nav-link" id="nav-link-pillars">
              Pillars
            </a>
          </li>
          <li>
            <a href="#agent-simulator" className="nav-link" id="nav-link-simulator">
              AI Simulator
            </a>
          </li>
          <li>
            <a href="#monitor" className="nav-link" id="nav-link-monitor">
              Telemetry
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" id="nav-link-contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <div
            className={`status-pill ${apiStatus === 'offline' ? 'offline' : ''}`}
            title={`Backend API is ${apiStatus}${apiLatency !== null ? ` (${apiLatency}ms)` : ''}`}
            id="api-status-badge"
          >
            <span className="pulse-dot"></span>
            <span>
              {apiStatus === 'online'
                ? `API Live ${apiLatency ? `(${apiLatency}ms)` : ''}`
                : apiStatus === 'checking'
                ? 'Connecting...'
                : 'API Offline'}
            </span>
          </div>

          <a
            href="https://www.linkedin.com/in/carl-heckmann-21273631/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
            id="linkedin-nav-btn"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </header>
  );
};
