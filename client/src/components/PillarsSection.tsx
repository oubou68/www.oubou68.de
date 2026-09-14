import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PillarsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const pillars = t.pillars.items;
  const total = pillars.length;

  const goToSlide = (idx: number) => {
    setCurrentIndex((idx + total) % total);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
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
    if (diff > 45) nextSlide();
    if (diff < -45) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
        </div>

        {/* Interactive Physical Range Slider Track */}
        <div className="tactile-slider-header">
          <div className="slider-track-container">
            <div className="slider-step-labels">
              {pillars.map((p, idx) => (
                <div
                  key={p.id}
                  className={`slider-step-mark ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <span className="step-dot"></span>
                  <span className="step-number">0{idx + 1}</span>
                  <span className="step-text">
                    {p.icon} {p.title.split('&')[0].trim()}
                  </span>
                </div>
              ))}
            </div>

            <div className="range-slider-rail">
              <input
                type="range"
                min={0}
                max={total - 1}
                step={1}
                value={currentIndex}
                onChange={(e) => goToSlide(Number(e.target.value))}
                className="custom-range-slider"
                aria-label="Pillar slider track"
              />
              <div
                className="range-fill-bar"
                style={{ width: `${(currentIndex / (total - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Slider Carousel Stage with Floating Paddles */}
        <div
          className="peeking-carousel-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating Left Arrow */}
          <button
            type="button"
            className="carousel-arrow prev"
            onClick={prevSlide}
            aria-label="Previous slide"
            id="carousel-btn-prev"
            title={language === 'de' ? 'Vorheriger Schwerpunkt' : 'Previous pillar'}
          >
            ‹
          </button>

          {/* Cards Track with smooth sliding */}
          <div className="peeking-cards-viewport">
            <div
              className="peeking-cards-track"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 28}px))`,
              }}
            >
              {pillars.map((pillar, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <div
                    key={pillar.id}
                    className={`peeking-slide-item ${isActive ? 'is-active' : 'is-inactive'}`}
                    onClick={() => !isActive && goToSlide(idx)}
                  >
                    <article
                      className="bento-card bento-feature-card peeking-card"
                      id={`pillar-card-${pillar.id}`}
                      style={{ '--pillar-accent': pillar.accent } as React.CSSProperties}
                    >
                      {/* Banner Image */}
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
                            0{idx + 1} / 0{total}
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
                        {pillar.subItems.map((item, i) => (
                          <div className="pillar-sub-item" key={i}>
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
                );
              })}
            </div>
          </div>

          {/* Floating Right Arrow */}
          <button
            type="button"
            className="carousel-arrow next"
            onClick={nextSlide}
            aria-label="Next slide"
            id="carousel-btn-next"
            title={language === 'de' ? 'Nächster Schwerpunkt' : 'Next pillar'}
          >
            ›
          </button>
        </div>

        {/* Bottom Interactive Scrubber Pills */}
        <div className="slider-bottom-scrubber">
          <div className="scrubber-indicator">
            <span className="scrubber-current">0{currentIndex + 1}</span>
            <span className="scrubber-sep">/</span>
            <span className="scrubber-total">0{total}</span>
          </div>

          <div className="scrubber-pills" role="tablist">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`scrubber-pill ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide 0${idx + 1}`}
                title={p.title}
                id={`scrubber-pill-${idx}`}
              >
                <span className="pill-dot"></span>
                <span className="pill-name">
                  {p.icon} {p.title.split('&')[0].trim()}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
