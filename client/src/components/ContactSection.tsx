import React, { useState } from 'react';

interface ContactSectionProps {
  apiUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ apiUrl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Utilities & Dynamic Tariffs (§ 41a EnWG)');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message: `[Topic: ${topic}] ${message}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFeedback({
          type: 'success',
          text: data.message || 'Thank you! Your message has been received.',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback({
          type: 'error',
          text: data.message || 'Failed to transmit message. Please try again.',
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown network error';
      setFeedback({
        type: 'error',
        text: `Unable to reach the backend at ${apiUrl}: ${msg}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Direct Collaboration</p>
          <h2>Connect with Dr. Carl Heckmann</h2>
          <p>
            Initiate a conversation regarding executive advisory, energy transition IT, business process ambidexterity, or autonomous multi-agent engineering.
          </p>
        </div>

        <div className="glass-panel contact-layout">
          <div className="contact-info">
            <h3>Executive Communication</h3>
            <p>
              Submit an inquiry directly through this encrypted full-stack pipeline connecting to the NestJS enterprise backend.
            </p>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>👔</span>
              <div>
                <strong>Professional Profile</strong>
                <p>
                  <a
                    href="https://www.linkedin.com/in/carl-heckmann-21273631/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
                  >
                    linkedin.com/in/carl-heckmann-21273631/ ↗
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>⚡</span>
              <div>
                <strong>Core Focus Areas</strong>
                <p>Utilities • IT Ambidexterity • AI Agent Swarms</p>
              </div>
            </div>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>📍</span>
              <div>
                <strong>Location & Affiliation</strong>
                <p>Heidelberg / Germany • hsag Heidelberger Services AG • BEMD</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} id="contact-carl-form">
            {feedback && (
              <div
                className={`alert-box ${
                  feedback.type === 'success' ? 'alert-success' : 'alert-error'
                }`}
                id="contact-feedback-alert"
              >
                <span>{feedback.type === 'success' ? '✓' : '⚠️'}</span>
                <span>{feedback.text}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Full Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="form-input"
                placeholder="e.g. Dr. Jane Miller"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Business Email
              </label>
              <input
                type="email"
                id="contact-email"
                className="form-input"
                placeholder="e.g. j.miller@enterprise.de"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-topic" className="form-label">
                Inquiry Topic
              </label>
              <select
                id="contact-topic"
                className="form-input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="Utilities & Dynamic Tariffs (§ 41a EnWG)">
                  ⚡ Utilities & Dynamic Tariffs (§ 41a EnWG)
                </option>
                <option value="Business Process Optimization & BPO">
                  ⚙️ Business Process Optimization & BPO
                </option>
                <option value="Autonomous AI Agent Architectures">
                  🤖 Autonomous AI Agent Architectures
                </option>
                <option value="Executive Advisory & Speaking">
                  🎤 Executive Advisory & Speaking
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Project Details or Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Describe your initiative, timeline, or consultation objectives..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              id="btn-submit-inquiry"
            >
              {loading ? 'Transmitting...' : 'Send Inquiry to Dr. Heckmann ➔'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
