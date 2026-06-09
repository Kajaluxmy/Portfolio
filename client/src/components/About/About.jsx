

import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-label">Biography</div>
        <h2 className="section-heading reveal">About Me</h2>

        <div className="about-content">

          
          <div className="about-text reveal">
            <p>
              I'm a <strong>third-year Software Engineering undergraduate</strong> at the University of Kelaniya, Sri Lanka, with a deep passion for building digital products that make a real difference. My journey into software engineering started with curiosity — a desire to understand how things work under the hood — and has since evolved into a full commitment to crafting elegant, scalable, and user-centred solutions.
            </p>

            <p>
              Over the past three years, I've sharpened my skills across the full spectrum of modern web development. On the front end, I work with React to build responsive, intuitive interfaces that users actually enjoy. On the back end, I architect APIs and services using Node.js, and I'm comfortable working with both relational and non-relational databases. I have a particular interest in automation — finding smart ways to eliminate repetitive work and let systems do the heavy lifting.
            </p>

            <p>
              Beyond the technical, I believe great software is built by great teams. I thrive in collaborative environments where feedback flows freely, ideas are challenged constructively, and every team member feels ownership over what they ship. I've worked in agile settings, contributed to group projects under tight deadlines, and learned that communication is just as important as clean code.
            </p>

            <p>
              Right now I'm actively seeking internship opportunities where I can contribute meaningfully, grow fast, and work alongside people who care deeply about what they build. If you're looking for someone who is curious, driven, and always ready to learn — let's connect.
            </p>
          </div>

          {/* Info Cards */}
          <div className="about-cards reveal reveal-delay-2">
            {/* Location */}
            <div className="about-info-card">
              <div className="about-info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div className="about-info-content">
                <div className="about-info-label">Location</div>
                <div className="about-info-value">Colombo, Sri Lanka</div>
              </div>
            </div>

            {/* Education */}
            <div className="about-info-card">
              <div className="about-info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342"
                  />
                </svg>
              </div>

              <div className="about-info-content">
                <div className="about-info-label">Education</div>
                <div className="about-info-value">
                  B.Sc(Hons) in Software Engineering<br/>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: '400' }}>
                    University of Kelaniya (GPA: 3.67/4.0)
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="about-info-card">
              <div className="about-info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 1 8.835-2.535m0 0A23.74 23.74 0 0 1 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>
              </div>

              <div className="about-info-content">
                <div className="about-info-label">Languages</div>
                <div className="about-info-value">English, Tamil</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}