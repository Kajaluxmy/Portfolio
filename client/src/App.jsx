
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function Home() {
  useEffect(() => {
    
    document.body.classList.add('js-active');

    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight * 0.86) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    
    const timer = setTimeout(handleScroll, 100);

    
    const mutationObserver = new MutationObserver(() => {
      handleScroll();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      mutationObserver.disconnect();
      document.body.classList.remove('js-active');
    };
  }, []);

  return (
    <>
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 68px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
