import React, { forwardRef } from 'react';

const HeroSection = forwardRef(({ scrollToSection }, ref) => {
  return (
    <section ref={ref} className="section" id="hero">
      <div className="container hero">
        <h1>Hi, I'm Sunil</h1>
        <h2>Computer Engineering Student | Web & AI Enthusiast</h2>
        <p>Turning ideas into practical, real-world solutions.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;