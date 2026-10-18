
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : 750,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
      disable: prefersReducedMotion,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
