import React, { useState } from 'react';

export default function Certificates() {
    // State para sa Modal/Lightbox
    const [selectedImg, setSelectedImg] = useState(null);

    const myCertificates = [
        {
            id: 1,
            image: "/certificate1.png", 
            title: "Apply AI: Analyze Customer Reviews",
            description: "Cisco Networking Academy"
        },
        {
            id: 2,
            image: "/certificate2.png", 
            title: "Artificial Intelligence Fundamentals",
            description: "IBM SkillsBuild"
        },
        {
            id: 3,
            image: "/certificate3.png", 
            title: "AI Fundamentals with IBM SkillsBuild",
            description: "Cisco Networking Academy in collaboration with IBM"
        }
    ];

    return (
        <section id='certificates' className='py-32 bg-[#0b0410] px-6 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]'></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <header className='text-center mb-20' data-aos='fade-up'>
                    <h2 className='text-orange-500 text-2xl font-bold uppercase tracking-widest'>Validation</h2>
                    <h1 className='text-6xl md:text-8xl font-black text-white mt-4'>
                        My <span className='text-cyan-400'>Certificates</span>
                    </h1>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {myCertificates.map((cert) => (
                        <div 
                            key={cert.id} 
                            data-aos='zoom-in-up'
                            onClick={() => setSelectedImg(cert.image)} 
                            className='group relative bg-white/5 p-4 rounded-[35px] border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-xl cursor-pointer'
                        >
                            {/* Image Container - object-contain prevents cutting edges */}
                            <div className='overflow-hidden rounded-[25px] h-[300px] bg-[#1a1122] relative flex items-center justify-center p-2'>
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className='max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6'>
                                    <span className='text-white font-bold bg-cyan-500/80 backdrop-blur-md px-6 py-2 rounded-full text-sm mb-2 shadow-lg'>
                                        Click to Preview
                                    </span>
                                </div>
                            </div>
                            
                            <div className='mt-6 px-4 pb-4'>
                                <h3 className='text-white text-xl font-bold leading-tight h-14 overflow-hidden'>
                                    {cert.title}
                                </h3>
                                <p className='text-gray-400 mt-2 text-sm italic'>
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- LIGHTBOX MODAL --- */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)} 
                >
                    <button 
                        className="absolute top-10 right-10 text-white text-5xl hover:text-cyan-400 transition-colors z-[110]"
                        onClick={() => setSelectedImg(null)}
                    >
                        &times;
                    </button>
                    <img 
                        src={selectedImg} 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300" 
                        alt="Enlarged Certificate"
                    />
                </div>
            )}
        </section>
    );
}