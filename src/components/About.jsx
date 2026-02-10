import React from "react";

export default function About() {
    return (
        <section id='about' className='min-h-screen bg-[#0b0410] flex items-center justify-center text-white px-6 py-20'>
            <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
                
                {/* Visual Side */}
                <figure data-aos='fade-right' className='relative flex justify-center'>
                    <div className='absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[100px]'></div>
                    <div className="relative z-10">
                        <img src='/photo.jpg' alt='Work context' 
                        className='w-[300px] h-[400px] md:w-[450px] md:h-[550px] object-cover rounded-[40px] shadow-2xl border-2 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500'/>
                        
                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-orange-500 p-8 rounded-3xl shadow-xl hidden md:block">
                            <h3 className="text-4xl font-black text-white">2+</h3>
                            <p className="text-white font-bold">Years of Exp.</p>
                        </div>
                    </div>
                </figure>

                {/* Content Side */}
                <article data-aos='fade-left' className='space-y-8'>
                    <header>
                        <h2 className='text-cyan-400 text-2xl font-bold tracking-widest uppercase'>The Story</h2>
                        <h1 className='text-6xl md:text-8xl font-extrabold text-white mt-2'>
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
                        </h1>
                    </header>
                    
                    <p className='text-xl md:text-2xl text-gray-300 leading-relaxed'>
                        I am a Frontend Developer dedicated to building high-quality web experiences. 
                        I bridge the gap between complex backend logic and elegant, user-centric design.
                    </p>

                    <div className="grid grid-cols-2 gap-8 py-6">
                        <div>
                            <h4 className="text-orange-500 text-3xl font-bold">50+</h4>
                            <p className="text-gray-400 text-lg">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-cyan-400 text-3xl font-bold">30+</h4>
                            <p className="text-gray-400 text-lg">Happy Clients</p>
                        </div>
                    </div>

                    <footer>
                        <button className='bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-10 rounded-full text-xl transition-all'>
                            My Journey
                        </button>
                    </footer>
                </article>
            </div>
        </section>
    );
}