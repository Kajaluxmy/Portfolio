
import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = ['about', 'skills', 'projects', 'contact'];
      let currentActive = '';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = sectionId;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 68; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  const getNavLinkClass = (section) => {
    return activeSection === section ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a 
          href="#hero" 
          className="logo" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('home');
            setMobileMenuOpen(false);
          }}
        >
          <span className="logo-full">Kajaluxmy Kanesarasa</span>
          <span className="logo-short">Kajaluxmy</span>
        </a>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#" 
              className={getNavLinkClass('home')} 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={getNavLinkClass('about')} 
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={getNavLinkClass('skills')} 
              onClick={(e) => handleLinkClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={getNavLinkClass('projects')} 
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={getNavLinkClass('contact')} 
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
