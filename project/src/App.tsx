import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = 'TechNova - Innovation Beyond Boundaries';
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Events />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;