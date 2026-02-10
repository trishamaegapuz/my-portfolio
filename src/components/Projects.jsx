import React from 'react';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "Large scale management system.",
            image: "/project3.jpg", // Gamitin ang tamang path ng image mo
            liveLink: "#",
            tech: ["#React", "#Tailwind"]
        },
        {
            id: 2,
            title: "Social Media App",
            description: "Real-time communication platform.",
            image: "/project2.jpg", // Gamitin ang tamang path ng image mo
            liveLink: "#",
            tech: ["#Vue", "#Laravel"]
        },
        {
            id: 3,
            title: "To-Do List App", // Updated Title
            description: "Efficient task management system.", // Updated Description
            image: "/todolist.png", // Palitan mo ito ng screenshot ng To-Do list mo
            liveLink: "https://to-do-list-rho-sable-68.vercel.app/", // Ang Vercel link mo
            tech: ["#React", "#JavaScript"]
        }
    ];

    return (
        <section id='projects' className='py-32 bg-[#0b0410] px-6'>
            <div className='max-w-7xl mx-auto'>
                <header className='mb-16'>
                    <h1 className='text-6xl font-black text-white'>
                        My <span className='text-cyan-400'>Projects</span>
                    </h1>
                    <p className='text-gray-400 mt-4'>Detailed view of my recent works.</p>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <div key={project.id} className='bg-[#1a1122] rounded-[30px] overflow-hidden group border border-white/5 hover:border-cyan-400/30 transition-all shadow-2xl'>
                            {/* Image Container with Link */}
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='block relative h-64 overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                <div className='absolute bottom-4 left-4'>
                                    <span className='bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                                        Live Preview
                                    </span>
                                </div>
                            </a>

                            {/* Content */}
                            <div className='p-8'>
                                <h3 className='text-white text-2xl font-bold'>{project.title}</h3>
                                <p className='text-gray-400 mt-2 text-sm'>{project.description}</p>
                                
                                <div className='flex gap-3 mt-6'>
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className='text-cyan-400 text-xs font-medium'>{tag}</span>
                                    ))}
                                </div>

                                {/* Link for Title/Button */}
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='inline-block mt-6 text-white font-bold hover:text-cyan-400 transition-colors'
                                >
                                    Visit Site →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}