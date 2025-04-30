import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import AOS from 'aos';

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-300 z-50">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-t-4 border-accent-purple rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-6 border-t-4 border-accent-green rounded-full animate-spin animation-delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <Layout>
        <main className="relative">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </Layout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;