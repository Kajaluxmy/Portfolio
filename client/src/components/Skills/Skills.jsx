
import React, { useState } from 'react';
import { fallbackSkills } from '../../data/fallbackData';
import './Skills.css';


const categoryIcons = {
  'Programming Languages': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  'Frameworks & Libraries': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>`,
  'Database': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
  'Core Concepts': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
};

function SkillCategoryCard({ title, skillsList, className = '' }) {
  const iconSvg = categoryIcons[title] || categoryIcons['Programming Languages'];

  return (
    <div className={`skill-category-card reveal ${className}`}>
      <div className="card-header-row">
        <div 
          className="card-icon-wrapper" 
          dangerouslySetInnerHTML={{ __html: iconSvg }} 
        />
        <h3 className="card-category-title">{title}</h3>
      </div>
      <ul className="skills-bullet-list">
        {skillsList.map((skill) => (
          <li key={skill._id || skill.name} className="skill-bullet-item">
            <span className="bullet-dot"></span>
            <span className="skill-name-text">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SoftSkillCard({ skill, className = '' }) {
  return (
    <div className={`soft-skill-card reveal ${className}`}>
      <div 
        className="soft-card-icon-wrapper" 
        dangerouslySetInnerHTML={{ __html: skill.icon }} 
      />
      <h4 className="soft-card-title">{skill.name}</h4>
      <p className="soft-card-description">{skill.description}</p>
    </div>
  );
}

export default function Skills() {
  const [skills] = useState(fallbackSkills);

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const technicalCategories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Database',
    'Core Concepts'
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-label">Expertise</div>
        <h2 className="section-heading reveal">Technical Skills</h2>

        <div className="flex flex-col">
          
          <div className="skills-categories-grid">
            {technicalCategories.map((category, index) => (
              <SkillCategoryCard 
                key={category}
                title={category} 
                skillsList={getSkillsByCategory(category)} 
                className={`reveal-delay-${(index % 4) + 1}`}
              />
            ))}
          </div>

          
          {getSkillsByCategory('Soft Skills').length > 0 && (
            <div className="soft-skills-section">
              <h3 className="skills-subheading reveal">Beyond the Stack</h3>
              <div className="soft-skills-grid">
                {getSkillsByCategory('Soft Skills').map((skill, index) => (
                  <SoftSkillCard 
                    key={skill._id || skill.name} 
                    skill={skill} 
                    className={`reveal-delay-${(index % 3) + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
