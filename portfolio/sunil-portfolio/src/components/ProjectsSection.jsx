import React, { forwardRef } from 'react';

const ProjectsSection = forwardRef((props, ref) => {
  const projects = [
    {
      title: 'News Article Summarizer',
      tech: 'Streamlit • GROQ • Meta LLaMA',
      description: 'AI-powered app that summarizes news articles from URLs using LLaMA via LangChain, providing quick and accurate summaries for efficient information consumption.'
    },
    {
      title: 'Farm Mentor',
      tech: 'Django • TailwindCSS • Meta LLaMA',
      description: 'Multilingual AI platform for farmers providing crop suggestions, expense tracking, and chatbot support in 5+ languages, empowering agricultural communities with technology.'
    }
  ];

  return (
    <section ref={ref} className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;