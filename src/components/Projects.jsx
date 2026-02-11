import React, { useState } from 'react';

export default function Projects() {
    // State para sa Image Preview ng Localhost projects
    const [selectedImg, setSelectedImg] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "Large scale management system.",
            image: "/ecommerce.png", 
            liveLink: null, // Naka-null dahil localhost lang
            tech: ["#MySql", "#Css", "#PHP"]
        },
        {
            id: 2,
            title: "Registrar Electronic Logbook",
            description: "Real-time logging platform.",
            image: "/proj.png", 
            liveLink: null, // Naka-null dahil localhost lang
            tech: ["#MySQL", "#CSS", "#PHP"]
        },
        {
            id: 3,
            title: "To-Do List App",
            description: "Efficient task management system.",
            image: "/todolist.png", 
            liveLink: "https://to-do-list-rho-sable-68.vercel.app/", // Ito lang ang may link
            tech: ["#React", "#TailwindCSS"]
        }
    ];

    return (
        <section id='projects' className='py-32 bg-[#0b0410] px-6 relative'>
            <div className='max-w-7xl mx-auto'>
                <header className='mb-16' data-aos='fade-up'>
                    <h1 className='text-6xl font-black text-white'>
                        My <span className='text-cyan-400'>Projects</span>
                    </h1>
                    <p className='text-gray-400 mt-4'>Detailed view of my recent works.</p>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className='bg-[#1a1122] rounded-[30px] overflow-hidden group border border-white/5 hover:border-cyan-400/30 transition-all shadow-2xl flex flex-col'
                        >
                            {/* Image Container */}
                            <div 
                                className='relative h-64 overflow-hidden cursor-pointer'
                                onClick={() => project.liveLink ? window.open(project.liveLink, '_blank') : setSelectedImg(project.image)}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                <div className='absolute bottom-4 left-4'>
                                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${project.liveLink ? 'bg-orange-500' : 'bg-cyan-600'}`}>
                                        {project.liveLink ? 'Live Preview' : 'Click to Enlarge'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-8 flex-1 flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-white text-2xl font-bold'>{project.title}</h3>
                                    <p className='text-gray-400 mt-2 text-sm'>{project.description}</p>
                                    
                                    <div className='flex gap-3 mt-6'>
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className='text-cyan-400 text-xs font-medium'>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Link or Zoom Button */}
                                {project.liveLink ? (
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='inline-block mt-6 text-white font-bold hover:text-cyan-400 transition-colors'
                                    >
                                        Visit Site →
                                    </a>
                                ) : (
                                    <button 
                                        onClick={() => setSelectedImg(project.image)}
                                        className='inline-block mt-6 text-left text-gray-300 font-bold hover:text-cyan-400 transition-colors'
                                    >
                                        View Screenshot →
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- LIGHTBOX MODAL PARA SA ID 1 & 2 --- */}
            {selectedImg && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)} 
                >
                    <button className="absolute top-10 right-10 text-white text-5xl hover:text-cyan-400">&times;</button>
                    <img 
                        src={selectedImg} 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300" 
                        alt="Project Screenshot"
                    />
                </div>
            )}
        </section>
    );
}