import { useState, useEffect, useCallback } from 'react';
import { ParticleMesh } from './components/ParticleMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceAffiliations } from './components/ExperienceAffiliations';
import { PublicationsSection } from './components/PublicationsSection';
import { PillarsSection } from './components/PillarsSection';
import { TelemetryMonitor, type HealthData } from './components/TelemetryMonitor';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [apiStatus, setApiStatus] = useState<'online' | 'offline' | 'checking'>('checking');

  // Backend API URL (configurable via Vite env, defaults to local NestJS port 3000)
  const apiUrl = (import.meta.env.VITE_API_URL as string) || 'http://localhost:3000/api';

  const checkHealth = useCallback(async () => {
    const start = performance.now();
    try {
      const response = await fetch(`${apiUrl}/health`, {
        cache: 'no-store',
      });
      const end = performance.now();

      if (response.ok) {
        const data: HealthData = await response.json();
        setHealthData(data);
        setLatency(Math.round(end - start));
        setApiStatus('online');
      } else {
        setApiStatus('offline');
        setLatency(null);
      }
    } catch {
      setApiStatus('offline');
      setLatency(null);
    }
  }, [apiUrl]);

  useEffect(() => {
    checkHealth();
    // Refresh telemetry every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, [checkHealth]);

  return (
    <div className="app-container">
      {/* 60fps Interactive HTML5 Canvas Constellation Mesh */}
      <ParticleMesh />

      <Navbar apiStatus={apiStatus} apiLatency={latency} />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceAffiliations />
        <PublicationsSection />
        <PillarsSection />
        <TelemetryMonitor
          healthData={healthData}
          latency={latency}
          apiStatus={apiStatus}
          onRefresh={checkHealth}
          apiUrl={apiUrl}
        />
        <ContactSection apiUrl={apiUrl} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
