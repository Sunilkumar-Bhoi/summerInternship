import React, { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="glass">
          <div className="about-content">
            <p>I am a Computer Engineering student with strong interests in Web Development, AI, and Large Language Models. I focus on practical learning, real-world problem solving, and building clean, scalable applications rather than rote memorization.</p>
          </div>
          <div className="focus-areas">
            <div className="focus-item">Web Development</div>
            <div className="focus-item">Artificial Intelligence</div>
            <div className="focus-item">Large Language Models</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;