
import React from 'react';
import developerAvatar from '../../assets/profile.png';
import './Hero.css';

export default function Hero() {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
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

  return (
    <section id="hero">

      <div className="hero-container">
        
        <div className="hero-left">
          <h1 className="hero-name">Full-Stack<br/>Developer</h1>
          <p className="hero-role">Building elegant, high-performance web experiences<br/>with modern tooling and thoughtful architecture.</p>
          <p className="hero-bio">I craft reliable, responsive digital solutions using modern technologies like Spring Boot, React, and Node.js to deliver clean code and smooth user experiences.</p>
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleScrollToSection(e, 'projects')}
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf"
              download="Kajaluxmy_Kanesarasa_CV.pdf"
              className="btn btn-secondary"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => handleScrollToSection(e, 'contact')}
            >
              Get In Touch
            </a>
          </div>
          <div className="hero-socials">
            <a 
              href="https://www.linkedin.com/in/kajaluxmy09/" 
              className="hero-social-link"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Kajaluxmy" 
              className="hero-social-link"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a 
              href="https://medium.com/@KajaluxmyKanesarasa" 
              className="hero-social-link"
              title="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                <circle cx="224" cy="256" r="224" fill="currentColor" />
                <path d="M82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7z" fill="var(--bg-secondary)" />
              </svg>
            </a>
          </div>
        </div>

        
        <div className="hero-right">
          <div className="hero-image-container">
            <img 
              src={developerAvatar} 
              alt="Kajaluxmy Kanesarasa" 
              className="hero-image" 
            />
          </div>
        </div>
      </div>

    
    </section>
  );
}
