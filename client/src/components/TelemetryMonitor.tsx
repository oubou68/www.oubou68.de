import React from 'react';

export interface HealthData {
  status: string;
  service: string;
  timestamp: string;
  uptimeSeconds: number;
  nodeVersion: string;
  platform: string;
  memory: {
    rssMb: number;
    heapTotalMb: number;
    heapUsedMb: number;
  };
}

interface TelemetryMonitorProps {
  healthData: HealthData | null;
  latency: number | null;
  apiStatus: 'online' | 'offline' | 'checking';
  onRefresh: () => void;
  apiUrl: string;
}

export const TelemetryMonitor: React.FC<TelemetryMonitorProps> = ({
  healthData,
  latency,
  apiStatus,
  onRefresh,
  apiUrl,
}) => {
  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  return (
    <section className="monitor-section" id="monitor">
      <div className="container">
        <div className="glass-panel">
          <div className="monitor-header">
            <div className="monitor-title-group">
              <span className="monitor-icon">⚡</span>
              <div>
                <h2>Live Backend Telemetry</h2>
                <p>Real-time metrics dispatched from the NestJS REST API</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                className="btn btn-outline btn-sm"
                onClick={onRefresh}
                id="btn-refresh-telemetry"
                title="Ping backend"
              >
                ↻ Refresh Ping
              </button>
              <a
                href={`${apiUrl}/health`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
                id="btn-view-raw-health"
              >
                Raw JSON ↗
              </a>
            </div>
          </div>

          <div className="monitor-grid">
            <div className="metric-card" id="metric-status">
              <span className="metric-label">Service Health</span>
              <span
                className="metric-value"
                style={{
                  color:
                    apiStatus === 'online'
                      ? 'var(--accent-emerald)'
                      : 'var(--accent-amber)',
                }}
              >
                {apiStatus === 'online' ? '● Healthy' : apiStatus === 'checking' ? 'Connecting...' : '○ Unreachable'}
              </span>
              <span className="metric-sub">
                {healthData?.service ?? 'NestJS Core Engine'}
              </span>
            </div>

            <div className="metric-card" id="metric-latency">
              <span className="metric-label">API Latency</span>
              <span className="metric-value">
                {latency !== null ? `${latency} ms` : '--'}
              </span>
              <span className="metric-sub">Round-trip benchmark</span>
            </div>

            <div className="metric-card" id="metric-uptime">
              <span className="metric-label">Process Uptime</span>
              <span className="metric-value">
                {healthData ? formatUptime(healthData.uptimeSeconds) : '--'}
              </span>
              <span className="metric-sub">Continuous execution</span>
            </div>

            <div className="metric-card" id="metric-memory">
              <span className="metric-label">Heap Memory</span>
              <span className="metric-value">
                {healthData?.memory?.heapUsedMb ? `${healthData.memory.heapUsedMb} MB` : '--'}
              </span>
              <span className="metric-sub">
                {healthData?.memory?.heapTotalMb
                  ? `Total: ${healthData.memory.heapTotalMb} MB`
                  : 'V8 Garbage Collected'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
