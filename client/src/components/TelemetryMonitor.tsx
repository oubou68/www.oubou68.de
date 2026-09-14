import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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
  const { t } = useLanguage();

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
                <h2>{t.telemetry.title}</h2>
                <p>{t.telemetry.desc}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                className="btn btn-outline btn-sm"
                onClick={onRefresh}
                id="btn-refresh-telemetry"
                title="Ping backend"
              >
                {t.telemetry.btnRefresh}
              </button>
              <a
                href={`${apiUrl}/health`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
                id="btn-view-raw-health"
              >
                {t.telemetry.btnRawJson}
              </a>
            </div>
          </div>

          <div className="monitor-grid">
            <div className="metric-card" id="metric-status">
              <span className="metric-label">{t.telemetry.statusLabel}</span>
              <span
                className="metric-value"
                style={{
                  color:
                    apiStatus === 'online'
                      ? 'var(--accent-emerald)'
                      : 'var(--accent-amber)',
                }}
              >
                {apiStatus === 'online'
                  ? t.telemetry.statusHealthy
                  : apiStatus === 'checking'
                  ? t.telemetry.statusConnecting
                  : t.telemetry.statusOffline}
              </span>
              <span className="metric-sub">
                {healthData?.service ?? t.telemetry.serviceFallback}
              </span>
            </div>

            <div className="metric-card" id="metric-latency">
              <span className="metric-label">{t.telemetry.latencyLabel}</span>
              <span className="metric-value">
                {latency !== null ? `${latency} ms` : '--'}
              </span>
              <span className="metric-sub">{t.telemetry.latencySub}</span>
            </div>

            <div className="metric-card" id="metric-uptime">
              <span className="metric-label">{t.telemetry.uptimeLabel}</span>
              <span className="metric-value">
                {healthData ? formatUptime(healthData.uptimeSeconds) : '--'}
              </span>
              <span className="metric-sub">{t.telemetry.uptimeSub}</span>
            </div>

            <div className="metric-card" id="metric-memory">
              <span className="metric-label">{t.telemetry.memoryLabel}</span>
              <span className="metric-value">
                {healthData?.memory?.heapUsedMb ? `${healthData.memory.heapUsedMb} MB` : '--'}
              </span>
              <span className="metric-sub">
                {healthData?.memory?.heapTotalMb
                  ? `${t.telemetry.memorySubTotal}: ${healthData.memory.heapTotalMb} MB`
                  : t.telemetry.memorySubFallback}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
