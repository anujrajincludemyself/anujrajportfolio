import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#0D0D0F', color: '#E5E7EB' }}>
      {/* Ambient particle canvas */}
      <ParticleField />

      {/* Cyan scroll progress bar */}
      <ScrollProgress />

      {/* Floating nav */}
      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Subtle horizontal divider */}
        <div
          className="h-px mx-8 md:mx-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(0,255,255,0.15), transparent)' }}
        />

        {/* Stats */}
        <StatsBar />

        {/* Section separator */}
        <div
          className="h-px mx-8 md:mx-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }}
        />

        <Experience />

        <div
          className="h-px mx-8 md:mx-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }}
        />

        <Projects />

        <div
          className="h-px mx-8 md:mx-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }}
        />

        <Skills />

        <div
          className="h-px mx-8 md:mx-24"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }}
        />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
