import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PillarsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const pillars = t.pillars.items;
  const totalSlides = pillars.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevPillar = pillars[(currentSlide - 1 + totalSlides) % totalSlides];
  const nextPillar = pillars[(currentSlide + 1) % totalSlides];

  return (
    <section
      className="pillars-section"
      id="pillars"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={t.pillars.heading}
    >
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{t.pillars.tag}</p>
          <h2>{t.pillars.heading}</h2>
          <p>{t.pillars.desc}</p>

          {/* Interactive Slider Controller / Segmented Scrubber */}
          <div className="pillar-slider-controls">
            <div className="slider-segmented-nav" role="tablist" aria-label="Pillar slide tabs">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  role="tab"
                  aria-selected={currentSlide === idx}
                  className={`slider-tab-btn ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  id={`pillar-tab-${pillar.id}`}
                >
                  <span className="tab-icon">{pillar.icon}</span>
                  <span className="tab-title">{pillar.title.split('&')[0].trim()}</span>
                  <span className="tab-step-badge">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrows & Step Counter */}
            <div className="slider-action-row">
              <button
                type="button"
                className="slider-nav-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
                id="btn-pillar-prev"
                title={language === 'de' ? 'Vorheriger Schwerpunkt' : 'Previous pillar'}
              >
                ←
              </button>

              <div className="slider-progress-track" title={`Slide ${currentSlide + 1} of ${totalSlides}`}>
                <div
                  className="slider-progress-bar"
                  style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                />
              </div>

              <div className="slider-counter">
                <strong>0{currentSlide + 1}</strong>
                <span>/</span>
                <span>0{totalSlides}</span>
              </div>

              <button
                type="button"
                className="slider-nav-btn"
                onClick={nextSlide}
                aria-label="Next slide"
                id="btn-pillar-next"
                title={language === 'de' ? 'Nächster Schwerpunkt' : 'Next pillar'}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Slider Carousel Viewport */}
        <div
          className="pillar-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="pillar-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {pillars.map((pillar, index) => (
              <div
                className="pillar-slide"
                key={pillar.id}
                aria-hidden={currentSlide !== index}
              >
                <article
                  className="bento-card bento-feature-card pillar-slide-card"
                  id={`pillar-card-${pillar.id}`}
                  style={{ '--pillar-accent': pillar.accent } as React.CSSProperties}
                >
                  {/* Visual Banner Image */}
                  <div className="pillar-banner-wrapper">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="pillar-banner-img"
                      loading="lazy"
                    />
                    <div className="pillar-banner-overlay">
                      <span className="pillar-banner-tag">{pillar.badge}</span>
                      <span className="slide-badge-counter">
                        {language === 'de'
                          ? `Schwerpunkt 0${index + 1} von 0${totalSlides}`
                          : `Pillar 0${index + 1} of 0${totalSlides}`}
                      </span>
                    </div>
                  </div>

                  <div className="bento-top">
                    <div className="pillar-header-group">
                      <span className="pillar-icon">{pillar.icon}</span>
                      <div>
                        <span className="bento-pill">{pillar.badge}</span>
                        <h3 className="pillar-title">{pillar.title}</h3>
                        <p className="pillar-subtitle">{pillar.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="pillar-description">{pillar.description}</p>

                  {/* Sub-items grid */}
                  <div className="pillar-items-grid">
                    {pillar.subItems.map((item, idx) => (
                      <div className="pillar-sub-item" key={idx}>
                        <div className="sub-item-header">
                          <span className="sub-item-bullet">✦</span>
                          <h4>{item.title}</h4>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="pillar-stats-row">
                    {pillar.stats.map((st, i) => (
                      <div className="pillar-stat-box" key={i}>
                        <span className="stat-label">{st.label}</span>
                        <span className="stat-value">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Navigation Bar */}
        <div className="pillar-bottom-nav">
          <button
            type="button"
            className="pillar-arrow-cta prev"
            onClick={prevSlide}
            id="btn-pillar-bottom-prev"
          >
            <span className="arrow-sym">←</span>
            <div className="arrow-text">
              <span className="arrow-sub">
                {language === 'de' ? 'Vorheriger Schwerpunkt' : 'Previous Pillar'}
              </span>
              <strong>{prevPillar.title.split('&')[0].trim()}</strong>
            </div>
          </button>

          {/* Slide Dots */}
          <div className="slider-dots-group" role="tablist">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot-btn ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide 0${idx + 1}`}
                id={`slider-dot-${idx}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="pillar-arrow-cta next"
            onClick={nextSlide}
            id="btn-pillar-bottom-next"
          >
            <div className="arrow-text" style={{ textAlign: 'right' }}>
              <span className="arrow-sub">
                {language === 'de' ? 'Nächster Schwerpunkt' : 'Next Pillar'}
              </span>
              <strong>{nextPillar.title.split('&')[0].trim()}</strong>
            </div>
            <span className="arrow-sym">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
