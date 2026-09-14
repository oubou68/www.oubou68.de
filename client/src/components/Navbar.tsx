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
          <div className="brand-badge">68</div>
          <div className="brand-domain">
            oubou<span>68</span>.de
          </div>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#monitor" className="nav-link" id="nav-link-monitor">
              Telemetry
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link" id="nav-link-features">
              Features
            </a>
          </li>
          <li>
            <a href="#stack" className="nav-link" id="nav-link-stack">
              Tech Stack
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
                ? `API Online ${apiLatency ? `(${apiLatency}ms)` : ''}`
                : apiStatus === 'checking'
                ? 'Connecting...'
                : 'API Offline'}
            </span>
          </div>

          <a
            href="https://github.com/oubou68/www.oubou68.de"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm"
            id="github-repo-btn"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
};
