import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  apiUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ apiUrl }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Set default topic whenever language / topics change
  useEffect(() => {
    if (t.contact.topics.length > 0) {
      setTopic(t.contact.topics[0].value);
    }
  }, [t]);

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
          text: data.message || t.contact.alertSuccessDefault,
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback({
          type: 'error',
          text: data.message || t.contact.alertErrorDefault,
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown network error';
      setFeedback({
        type: 'error',
        text: `${t.contact.alertNetworkError} ${apiUrl}: ${msg}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.contact.tag}</p>
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.desc}</p>
        </div>

        <div className="glass-panel contact-layout">
          <div className="contact-info">
            <h3>{t.contact.infoTitle}</h3>
            <p>{t.contact.infoLead}</p>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>👔</span>
              <div>
                <strong>{t.contact.metaProfileTitle}</strong>
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
                <strong>{t.contact.metaFocusTitle}</strong>
                <p>{t.contact.metaFocusDesc}</p>
              </div>
            </div>

            <div className="contact-meta-card">
              <span style={{ fontSize: '1.6rem' }}>📍</span>
              <div>
                <strong>{t.contact.metaLocationTitle}</strong>
                <p>{t.contact.metaLocationDesc}</p>
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
                {t.contact.labelName}
              </label>
              <input
                type="text"
                id="contact-name"
                className="form-input"
                placeholder={t.contact.placeholderName}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                {t.contact.labelEmail}
              </label>
              <input
                type="email"
                id="contact-email"
                className="form-input"
                placeholder={t.contact.placeholderEmail}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-topic" className="form-label">
                {t.contact.labelTopic}
              </label>
              <select
                id="contact-topic"
                className="form-input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                {t.contact.topics.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                {t.contact.labelMessage}
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder={t.contact.placeholderMessage}
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
              {loading ? t.contact.btnSubmitting : t.contact.btnSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
