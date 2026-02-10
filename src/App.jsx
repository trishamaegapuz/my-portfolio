import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates'; // DINAGDAG ITO
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-[#0f0715] min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates /> {/* DINAGDAG ITO PARA LUMABAS SA SCREEN */}
      <Contact />
      <Footer />
    </div>
  );
}