import React, { useState } from 'react';

interface ContactSectionProps {
  apiUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ apiUrl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ name, email, message }),
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
          text: data.message || 'Failed to submit inquiry. Please try again.',
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown network error';
      setFeedback({
        type: 'error',
        text: `Unable to reach the backend at ${apiUrl}: ${msg}. Ensure the NestJS server is running.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Get In Touch</p>
          <h2>Connect with www.oubou68.de</h2>
          <p>
            Have a project, partnership, or technical question? Submit a message directly to our NestJS API backend.
          </p>
        </div>

        <div className="glass-panel contact-layout">
          <div className="contact-info">
            <h3>Direct Communication</h3>
            <p>
              This form tests the end-to-end integration between the React frontend client and the NestJS validation and controller pipeline.
            </p>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>📍</span>
              <div>
                <strong>Domain</strong>
                <p>www.oubou68.de</p>
              </div>
            </div>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>⚡</span>
              <div>
                <strong>API Endpoint</strong>
                <p>POST /api/contact</p>
              </div>
            </div>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>👤</span>
              <div>
                <strong>GitHub Maintainer</strong>
                <p>@oubou68</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} id="inquiry-form">
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
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="form-input"
                placeholder="e.g. Alex Smith"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                className="form-input"
                placeholder="e.g. alex@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Write your message or inquiry here..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              id="btn-submit-contact"
            >
              {loading ? 'Transmitting...' : 'Send Message ➔'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
