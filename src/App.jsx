import React from 'react';
import MouseTracker from './components/MouseTracker';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Extras from './components/Extras';
import Footer from './components/Footer';
import GlobeComponent from './components/Globe';

function App() {
  return (
    <div className="bg-background min-h-screen text-text relative selection:bg-accent-blue/30 selection:text-white">
      <ScrollProgress />
      <MouseTracker />
      
      <main>
        <Hero />
        
        {/* Globe component from previous iteration - fits well in a dark theme */}
        <div className="relative z-10 py-12 bg-black/20 backdrop-blur-sm border-y border-white/5">
          <GlobeComponent />
        </div>

        <Experience />
        <Projects />
        <Skills />
        <Extras />
      </main>

      <Footer />
    </div>
  );
}

export default App;
