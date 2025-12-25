import React, { forwardRef } from 'react';

const ExperienceSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="glass">
          <div className="experience-header">
            <h3>AI Intern</h3>
            <h4>1M1B Foundation</h4>
            <p className="experience-date">September 2024 – November 2024</p>
          </div>
          <ul className="experience-list">
            <li>Worked on Generative AI projects focusing on practical applications</li>
            <li>Built AI-powered summarizers and intelligent chatbot systems</li>
            <li>Developed Farm Mentor, a multilingual AI platform for agricultural support</li>
            <li>Gained hands-on experience with LLM fine-tuning and model optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;