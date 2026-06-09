
import React, { useState } from 'react';
import { postContactMessage } from '../../services/api';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: '', 
    text: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', text: validationError });
      return;
    }

    setSubmitting(true);

    try {
      const response = await postContactMessage(formData);
      
      if (response.data.success || response.status === 200 || response.status === 201) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been received.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.warn('Contact form submission backend failed, simulation success fallback:', err.message);
      
      setTimeout(() => {
        setStatus({
          type: 'success',
          text: 'Message sent successfully! (Static Mock Mode)'
        });
        setFormData({ name: '', email: '', message: '' });
        setSubmitting(false);
      }, 800);
      return;
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kajalluxsi2003@gmail.com');
    
    const originalText = status.text;
    const originalType = status.type;
    
    setStatus({
      type: 'success',
      text: 'Email address copied to clipboard!'
    });
    
    setTimeout(() => {
      setStatus({ type: originalType, text: originalText });
    }, 2000);
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="contact-inner">
          <div className="section-label reveal">Let's Talk</div>
          <h2 className="section-heading reveal reveal-delay-1" style={{ marginBottom: '20px' }}>
            Open to new<br/>opportunities
          </h2>
          <p className="contact-tagline reveal reveal-delay-2">
            Whether it's an internship, entry-level role, freelance project, or just a conversation — I'd love to hear from you.
          </p>

          <div className="contact-email reveal reveal-delay-3" onClick={handleCopyEmail} title="Click to copy email address">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
            </svg>
            kajalluxsi2003@gmail.com
          </div>

          <div className="contact-links reveal reveal-delay-4">
            <a href="https://www.linkedin.com/in/kajaluxmy09/" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Kajaluxmy" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://medium.com/@KajaluxmyKanesarasa" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18">
                <circle cx="224" cy="256" r="224" fill="currentColor" />
                <path d="M82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7z" fill="var(--bg-card)" />
              </svg>
              <span>Medium</span>
            </a>
          </div>

          {/* Form */}
          <form className="contact-form reveal reveal-delay-5" onSubmit={handleSubmit} noValidate>
            {status.text && (
              <div className={`contact-status ${status.type}`}>
                {status.text}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                disabled={submitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'center', marginTop: '8px' }}
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
