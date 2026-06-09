
import React, { useState } from 'react';
import { fallbackProjects } from '../../data/fallbackData';
import bookFairImg from '../../assets/crowded-bookstore-diverse-people-browsing-bookshelves-stalls-357624114.webp';
import taskManagementImg from '../../assets/top-task-management-software-for-teams-banner-image-696x464.jpg';
import weatherAppImg from '../../assets/unnamed.webp';
import './Projects.css';

const projectImages = {
  'Book Fair Stall Reservation System': bookFairImg,
  'Task Management System': taskManagementImg,
  'Weather App': weatherAppImg
};

export default function Projects() {
  const [projects] = useState(() => 
    [...fallbackProjects].sort((a, b) => (a.order || 0) - (b.order || 0))
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNext = () => {
    if (projects.length === 0) return;
    setDirection('next');
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    if (projects.length === 0) return;
    setDirection('prev');
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  const formatNumber = (num) => {
    return String(num).padStart(2, '0');
  };

  const activeProject = projects[activeIndex];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading reveal">Projects</h2>

        {projects.length > 0 && (
            <div className="projects-carousel-container">
              <div className="projects-carousel">
                <button 
                  className="carousel-arrow prev-arrow" 
                  onClick={handlePrev} 
                  aria-label="Previous Project"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <div className="carousel-track">
                  <div className="project-card">
                    <div 
                      key={activeIndex} 
                      className={`project-card-inner slide-${direction}`}
                    >
                      <div className="project-image-wrapper">
                        <img 
                          src={projectImages[activeProject.title] || weatherAppImg} 
                          alt={activeProject.title} 
                          className="project-card-image" 
                        />
                      </div>
                      <div className="project-card-content">
                        <span className="project-number">{formatNumber(activeProject.order || activeIndex + 1)}</span>
                        <h3 className="project-title">{activeProject.title}</h3>
                        <p className="project-description">{activeProject.description}</p>
                        
                        <div className="project-tags">
                          {activeProject.tags.map((tag, idx) => (
                            <span key={idx} className="project-tag">{tag}</span>
                          ))}
                        </div>

                        <div className="project-actions">
                          {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                            <a href={activeProject.liveUrl} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                              </svg>
                              Live Demo
                            </a>
                          )}
                          {activeProject.githubUrl && activeProject.githubUrl !== '#' && (
                            <a href={activeProject.githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                              </svg>
                              GitHub Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  className="carousel-arrow next-arrow" 
                  onClick={handleNext} 
                  aria-label="Next Project"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
                  </svg>
                </button>
              </div>

              
              <div className="carousel-dots">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(idx)}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
        )}
      </div>
    </section>
  );
}
