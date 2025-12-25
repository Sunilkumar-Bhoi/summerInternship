import React, { useState, useEffect, useRef } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = Object.keys(sectionsRef.current);
      for (let section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <ThreeBackground />
      <Navigation 
        activeSection={activeSection}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />
      <HeroSection ref={el => sectionsRef.current['hero'] = el} scrollToSection={scrollToSection} />
      <AboutSection ref={el => sectionsRef.current['about'] = el} />
      <EducationSection ref={el => sectionsRef.current['education'] = el} />
      <SkillsSection ref={el => sectionsRef.current['skills'] = el} />
      <ProjectsSection ref={el => sectionsRef.current['projects'] = el} />
      <ExperienceSection ref={el => sectionsRef.current['experience'] = el} />
      <ContactSection ref={el => sectionsRef.current['contact'] = el} />
    </div>
  );
}