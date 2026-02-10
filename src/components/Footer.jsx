import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0b0410] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
                    
                    <div className="text-center md:text-left space-y-4">
                        <h1 className='text-4xl font-black italic text-white'>
                            PORTFOLIO<span className='text-cyan-400'>.</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-sm">
                            Building the future of the web, one pixel at a time.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-bold text-xl mb-4">Navigation</h4>
                            <ul className="text-gray-400 space-y-2 text-lg">
                                <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                                <li><a href="#about" className="hover:text-orange-500">About</a></li>
                                <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-bold text-xl mb-4">Socials</h4>
                            <div className="flex gap-4 text-3xl">
                                <a href="https://www.facebook.com/trishamae.gapuz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/gapuztrishamae/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/trisha-mae-gapuz-614649357/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/trishamaegapuz/trishamaegapuz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className='text-gray-500 text-lg'>
                        © 2026 <span className="text-white font-bold">Trisha Mae Gapuz</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}