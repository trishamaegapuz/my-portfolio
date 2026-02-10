import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Nagbabago ang hitsura ng navbar pag nag-scroll pababa
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavbarLinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Skills', link: '#skills' },
        { id: 4, name: 'Projects', link: '#projects' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0f0715]/80 backdrop-blur-xl shadow-2xl' : 'py-8 bg-transparent'}`}>
            <div className='container mx-auto flex items-center justify-between px-6 md:px-12'>
                
                {/* LOGO */}
                <a href="#home" className='text-3xl md:text-4xl font-black italic text-white tracking-tighter'>
                    TRISHA<span className='text-orange-500'>.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-12'>
                    {NavbarLinks.map((link) => (
                        <a key={link.id} href={link.link} className='text-white hover:text-cyan-400 text-xl font-bold transition-colors'>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact">
                        <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-orange-500/20 transition-all'>
                            Let's Talk
                        </button>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={35} /> : <FiMenu size={35} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-[#0f0715] flex flex-col items-center justify-center space-y-10 transition-transform duration-500 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <button className='absolute top-8 right-8 text-white' onClick={() => setIsOpen(false)}>
                    <FiX size={40} />
                </button>
                {NavbarLinks.map((link) => (
                    <a key={link.id} href={link.link} onClick={() => setIsOpen(false)} className='text-white text-4xl font-black hover:text-cyan-400'>
                        {link.name}
                    </a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)}>
                    <button className='bg-orange-500 text-white font-bold py-4 px-12 rounded-full text-2xl'>
                        Contact Me
                    </button>
                </a>
            </div>
        </header>
    );
}