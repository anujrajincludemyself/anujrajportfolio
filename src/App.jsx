import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import GlobeComponent from './components/Globe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Extras from './components/Extras';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text relative selection:bg-accent-blue/30 selection:text-white overflow-x-hidden">
      {/* Ambient particle canvas - behind everything */}
      <ParticleField />

      {/* Top scroll progress bar */}
      <ScrollProgress />

      {/* Floating nav */}
      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Animated divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent mx-8 md:mx-24" />

        {/* Animated counter stats */}
        <StatsBar />

        {/* Globe section */}
        <div className="relative py-4 bg-black/20 backdrop-blur-sm border-y border-white/5">
          <GlobeComponent />
        </div>

        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
        <Extras />
      </main>

      <Footer />
    </div>
  );
}

export default App;
