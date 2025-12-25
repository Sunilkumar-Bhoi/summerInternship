import React, { forwardRef } from 'react';

const EducationSection = forwardRef((props, ref) => {
  const education = [
    {
      degree: 'B.Tech – Computer Engineering',
      institution: 'Madhuben And Bhanubhai Patel Institute of Technology',
      period: '2022 – 2026 | Mahemdavad, Gujarat',
      score: 'CGPA: 8.50'
    },
    {
      degree: 'Senior Secondary (XII)',
      institution: 'Jawahar Navodaya Vidyalaya, Kheda',
      period: 'Science Stream',
      score: '80.20%'
    },
    {
      degree: 'Secondary (X)',
      institution: 'Jawahar Navodaya Vidyalaya, Kheda',
      period: 'CBSE Board',
      score: '79.80%'
    }
  ];

  return (
    <section ref={ref} className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item glass">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.period}</p>
            <span className="education-score">{edu.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default EducationSection;