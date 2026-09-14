import React, { useState, useEffect, useRef } from 'react';

interface AgentStep {
  id: string;
  name: string;
  role: string;
  icon: string;
  status: 'idle' | 'running' | 'completed';
  actionSummary: string;
}

interface LogEntry {
  timestamp: string;
  agent: string;
  type: 'info' | 'reasoning' | 'alert' | 'success';
  message: string;
}

export const AgentSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [scenario, setScenario] = useState<'standard' | 'spike'>('spike');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: '00:00.000',
      agent: 'System',
      type: 'info',
      message: 'Agentic Pipeline initialized. Ready to orchestrate autonomous utility workflows.',
    },
  ]);

  const [metrics, setMetrics] = useState({
    recordsProcessed: 0,
    anomaliesResolved: 0,
    latencyMs: 0,
    stpRate: '100%',
  });

  const logContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const steps: AgentStep[] = [
    {
      id: 'agent-alpha',
      name: 'Agent Alpha',
      role: 'Telemetry & iMSys Ingest',
      icon: '📡',
      status:
        activeStepIndex === 0
          ? 'running'
          : activeStepIndex > 0
          ? 'completed'
          : 'idle',
      actionSummary: 'Ingests 15-min smart meter lastgang (TAF-1) and validates cryptographic checksums.',
    },
    {
      id: 'agent-beta',
      name: 'Agent Beta',
      role: 'EPEX Spot & Anomaly Sentinel',
      icon: '🧠',
      status:
        activeStepIndex === 1
          ? 'running'
          : activeStepIndex > 1
          ? 'completed'
          : 'idle',
      actionSummary: 'Correlates hourly consumption with EPEX Spot price volatility and flags tariff spikes.',
    },
    {
      id: 'agent-gamma',
      name: 'Agent Gamma',
      role: 'Autonomous Process Orchestrator',
      icon: '⚡',
      status:
        activeStepIndex === 2
          ? 'running'
          : activeStepIndex > 2
          ? 'completed'
          : 'idle',
      actionSummary: 'Auto-reconciles clearing discrepancies and generates GoBD-compliant billing payload.',
    },
  ];

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const addLog = (agent: string, type: LogEntry['type'], message: string) => {
    const time = new Date().toISOString().substring(14, 23);
    setLogs((prev) => [...prev, { timestamp: time, agent, type, message }]);
  };

  const handleRunPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStepIndex(0);
    setLogs([]);

    addLog('System', 'info', `🚀 Initializing Autonomous Multi-Agent Pipeline [Scenario: ${scenario.toUpperCase()}]`);

    // Step 1: Agent Alpha
    await sleep(600);
    addLog('Agent Alpha', 'info', 'Connecting to Smart Meter Gateway (iMSys SMGW) stream...');
    await sleep(700);
    addLog('Agent Alpha', 'reasoning', 'Extracted 96 quarter-hour intervals for MaLo: DE0001234567890000000000000123456.');
    addLog('Agent Alpha', 'success', 'Validated BSI TR-03109 signature & TAF-1 meter readings. 0 frame drops.');
    setMetrics((m) => ({ ...m, recordsProcessed: 96, latencyMs: 38 }));

    // Step 2: Agent Beta
    await sleep(800);
    setActiveStepIndex(1);
    addLog('Agent Beta', 'info', 'Fetching EPEX Spot Day-Ahead clearing prices from energy exchange API...');
    await sleep(900);
    if (scenario === 'spike') {
      addLog('Agent Beta', 'alert', '⚠️ Volatility Detected at 18:00–19:00: Peak spread spike at 482.50 €/MWh.');
      addLog('Agent Beta', 'reasoning', 'Evaluating dynamic tariff § 41a EnWG thresholds against consumer price cap buffer.');
      await sleep(600);
      addLog('Agent Beta', 'success', 'Anomaly classified. Optimal load shift bonus applied; 1 discrepancy isolated for resolution.');
      setMetrics((m) => ({ ...m, anomaliesResolved: 1, latencyMs: 74 }));
    } else {
      addLog('Agent Beta', 'reasoning', 'Consumption curves within standard deviation. Dynamic price indexing verified.');
      addLog('Agent Beta', 'success', 'All 96 intervals rated against baseline index.');
      setMetrics((m) => ({ ...m, anomaliesResolved: 0, latencyMs: 52 }));
    }

    // Step 3: Agent Gamma
    await sleep(850);
    setActiveStepIndex(2);
    addLog('Agent Gamma', 'info', 'Orchestrating autonomous clearing & billing payload generation...');
    await sleep(800);
    addLog('Agent Gamma', 'reasoning', 'Generating GoBD-compliant accounting lines and XRechnung / ZUGFeRD XML schema.');
    await sleep(700);
    addLog('Agent Gamma', 'success', 'Straight-Through Processing (STP) achieved. Ledger reconciled without manual intervention.');
    setMetrics((m) => ({ ...m, latencyMs: 118, stpRate: '100%' }));

    await sleep(400);
    setActiveStepIndex(3);
    setIsRunning(false);
    addLog('System', 'success', '✨ Pipeline execution successfully concluded in 118ms. Human-in-the-loop review bypassed.');
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStepIndex(-1);
    setLogs([
      {
        timestamp: '00:00.000',
        agent: 'System',
        type: 'info',
        message: 'Pipeline reset. Select a scenario and launch autonomous orchestration.',
      },
    ]);
    setMetrics({
      recordsProcessed: 0,
      anomaliesResolved: 0,
      latencyMs: 0,
      stpRate: '100%',
    });
  };

  return (
    <section className="agent-simulator-section" id="agent-simulator">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Interactive Proof of Concept</p>
          <h2>Autonomous Multi-Agent Utility Pipeline</h2>
          <p>
            Experience how autonomous AI agents eliminate manual clearing bottlenecks in energy billing, dynamic § 41a EnWG pricing, and high-frequency smart meter ingestion.
          </p>
        </div>

        <div className="glass-panel simulator-card">
          <div className="simulator-controls-bar">
            <div className="simulator-meta">
              <span className="live-tag">
                <span className="pulse-dot"></span> LIVE SIMULATOR
              </span>
              <span className="sim-title">
                Multi-Agent Swarm Orchestration Engine
              </span>
            </div>

            <div className="simulator-actions">
              <div className="scenario-selector">
                <label htmlFor="scenario-select" className="scenario-label">
                  Scenario:
                </label>
                <select
                  id="scenario-select"
                  value={scenario}
                  disabled={isRunning}
                  onChange={(e) => setScenario(e.target.value as 'standard' | 'spike')}
                  className="scenario-dropdown"
                >
                  <option value="spike">EPEX Spot Volatility Spike (§ 41a EnWG)</option>
                  <option value="standard">Standard 15-Min Smart Meter Batch</option>
                </select>
              </div>

              <button
                className="btn btn-primary btn-sm"
                onClick={handleRunPipeline}
                disabled={isRunning}
                id="btn-run-agent-pipeline"
              >
                {isRunning ? 'Orchestrating...' : '▶ Launch Autonomous Pipeline'}
              </button>

              <button
                className="btn btn-outline btn-sm"
                onClick={handleReset}
                disabled={isRunning}
                id="btn-reset-agent-pipeline"
              >
                ↺ Reset
              </button>
            </div>
          </div>

          {/* Agent Step Nodes */}
          <div className="agent-steps-grid">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`agent-node-card ${
                  step.status === 'running'
                    ? 'active-running'
                    : step.status === 'completed'
                    ? 'completed'
                    : 'idle'
                }`}
                id={`step-card-${idx}`}
              >
                <div className="agent-node-top">
                  <div className="agent-icon-badge">{step.icon}</div>
                  <span className={`agent-status-tag ${step.status}`}>
                    {step.status === 'running'
                      ? 'EXEC'
                      : step.status === 'completed'
                      ? 'RESOLVED'
                      : 'STANDBY'}
                  </span>
                </div>
                <h4>{step.name}</h4>
                <div className="agent-role-title">{step.role}</div>
                <p className="agent-action-desc">{step.actionSummary}</p>
              </div>
            ))}
          </div>

          {/* Live Streaming Terminal Logs */}
          <div className="terminal-window">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">agent-orchestrator.log ~ zsh</span>
              <span className="terminal-status">
                {isRunning ? '● ACTIVE STREAM' : '○ IDLE'}
              </span>
            </div>

            <div className="terminal-body" ref={logContainerRef} id="agent-terminal-logs">
              {logs.map((log, index) => (
                <div key={index} className={`log-line log-${log.type}`}>
                  <span className="log-time">{log.timestamp}</span>
                  <span className="log-agent">[{log.agent}]</span>
                  <span className="log-msg">{log.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Execution Metrics */}
          <div className="simulator-metrics-bar">
            <div className="sim-metric-item">
              <span className="sim-metric-label">Processed Intervals</span>
              <span className="sim-metric-val">{metrics.recordsProcessed} / 96</span>
            </div>
            <div className="sim-metric-item">
              <span className="sim-metric-label">Anomalies Auto-Resolved</span>
              <span className="sim-metric-val text-cyan">
                {metrics.anomaliesResolved}
              </span>
            </div>
            <div className="sim-metric-item">
              <span className="sim-metric-label">Pipeline Latency</span>
              <span className="sim-metric-val">
                {metrics.latencyMs > 0 ? `${metrics.latencyMs} ms` : '--'}
              </span>
            </div>
            <div className="sim-metric-item">
              <span className="sim-metric-label">Straight-Through Rate</span>
              <span className="sim-metric-val text-emerald">{metrics.stpRate}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
