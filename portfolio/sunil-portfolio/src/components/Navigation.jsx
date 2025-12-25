import React from 'react';

export default function Navigation({ activeSection, scrolled, scrollToSection }) {
  const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        {sections.map(section => (
          <li key={section}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}