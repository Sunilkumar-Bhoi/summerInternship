import React, { forwardRef } from 'react';

const SkillsSection = forwardRef((props, ref) => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'Java', 'Python']
    },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'Express.js']
    },
    {
      category: 'Databases',
      items: ['SQL', 'MySQL', 'DBMS']
    },
    {
      category: 'Libraries & Frameworks',
      items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Streamlit', 'Django', 'TailwindCSS']
    },
    {
      category: 'Core Concepts',
      items: ['MERN Stack', 'OOP', 'Data Structures', 'AI', 'LLMs']
    }
  ];

  return (
    <section ref={ref} className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card glass">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;