import React, { useState } from 'react';
import Navbar from './Navbar';
import Photo2 from '/photo2.jpg';
import facebookIcon from '/facebook.jpg';
import igIcon from '/ig.jpg';
import linkedinIcon from '/linkedin.png';
import githubIcon from '/github.jpg'; 
import Trisha from '/Trisha.pdf';

export default function Hero() {
  // State for the photo lightbox
  const [showPhoto, setShowPhoto] = useState(false);

  const socialLinks = [
    { icon: facebookIcon, link: "https://www.facebook.com/trishamae.gapuz/" },
    { icon: igIcon, link: "https://www.instagram.com/gapuztrishamae/" },
    { icon: linkedinIcon, link: "https://www.linkedin.com/in/trisha-mae-gapuz-614649357/" },
    { icon: githubIcon, link: "https://github.com/trishamaegapuz/trishamaegapuz" }
  ];

  return (
    <div className="relative bg-[#0f0715] overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Accent Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]"></div>
      
      <Navbar />
      
      <main id='home' className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-32 pb-20 z-10'>
        <section className='flex-1 text-center lg:text-left' data-aos='fade-right'>
          <h2 className='text-cyan-400 text-2xl md:text-3xl font-bold mb-2 uppercase tracking-[0.2em]'>Frontend Developer</h2>
          <h1 className='text-6xl md:text-8xl font-extrabold text-white mb-6 leading-tight'>
            Trisha Mae <br /> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500'>
                B. Gapuz
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0'>
            Cheerful, enthusiastic, and meticulous. I am a resilient developer who remains calm under pressure and ensures work is delivered in an orderly, high-quality manner.
          </p>

          <div className='flex flex-wrap justify-center lg:justify-start gap-5 items-center'>
            {/* Download Button */}
            <a href={Trisha} download>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:scale-105 transition-transform active:scale-95">
                Download CV
              </button>
            </a>

            {/* View Certificates Button */}
            <a href="#certificates">
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0f0715] font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 active:scale-95">
                View Certificates
              </button>
            </a>
            
            {/* Social Icons Overlay */}
            <div className='flex gap-4 bg-white/5 p-3 rounded-2xl backdrop-blur-md border border-white/10'>
              {socialLinks.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-125 transition-transform duration-300"
                >
                  <img src={item.icon} alt='social' className='w-8 h-8 rounded-lg object-cover bg-white/10' />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Photo Section */}
        <figure 
          className='flex-1 flex justify-center lg:justify-end mt-16 lg:mt-0 cursor-pointer' 
          data-aos='zoom-in'
          onClick={() => setShowPhoto(true)} // Click to zoom
        >
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-cyan-500/30 rounded-[40px] rotate-6 animate-pulse group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src={Photo2} 
              alt='Trisha Mae Gapuz' 
              className='relative z-10 h-[450px] md:h-[600px] w-[350px] md:w-[450px] object-cover rounded-[40px] shadow-2xl border-4 border-white/10 transition-all duration-700 group-hover:scale-105' 
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="bg-cyan-500/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">Click to Zoom</span>
            </div>
          </div>
        </figure>
      </main>

      {/* --- PHOTO LIGHTBOX MODAL --- */}
      {showPhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setShowPhoto(false)}
        >
          <button className="absolute top-10 right-10 text-white text-5xl hover:text-cyan-400 transition-colors">&times;</button>
          <img 
            src={Photo2} 
            className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300" 
            alt="Trisha Full View"
          />
        </div>
      )}
    </div>
  )
}