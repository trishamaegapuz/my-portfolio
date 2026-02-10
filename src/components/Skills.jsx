import React from 'react';
import vue from '/vue.png';
import laravel from '/laravel.png';
import tailwind from '/tailwind.jpg';
import react from '/react.jpg';
import flask from '/flask.png'; // Siguraduhing tama ang file extension (.png o .jpg)

const skillsData = [
    {id:1, image:vue, title:'Vue.js', level: '90%', color: 'border-green-500/50'},
    {id:2, image:laravel, title:'Laravel', level: '85%', color: 'border-red-500/50'},
    {id:3, image:tailwind, title:'Tailwind', level: '95%', color: 'border-cyan-500/50'},
    {id:4, image:react, title:'React', level: '88%', color: 'border-blue-500/50'},
    {id:5, image:flask, title:'Flask', level: '80%', color: 'border-slate-400/50'} // Bagong dagdag na Flask
];

export default function Skills() {
    return (
        <section id='skills' className='py-32 bg-[#0f0715] px-6 text-white'>
            <div className='max-w-7xl mx-auto'>
                <header className='text-center mb-20' data-aos='fade-up'>
                    <h1 className='text-6xl md:text-8xl font-black mb-6'>
                        Expertise <span className='text-orange-500'>&</span> <span className='text-cyan-400'>Skills</span>
                    </h1>
                    <p className='text-gray-400 text-2xl max-w-3xl mx-auto'>
                        Mastering the tools that power the modern web.
                    </p>
                </header>

                {/* In-update ko ang grid cols para maging 5-columns sa malalaking screen o mag-wrap nang maayos */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
                    {skillsData.map((skill) => (
                        <div key={skill.id} data-aos='zoom-in'
                        className={`bg-white/5 p-10 rounded-[40px] border-b-4 ${skill.color} hover:bg-white/10 transition-all group flex flex-col justify-between`}>
                            <div>
                                <img src={skill.image} alt={skill.title} className='w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform object-contain' />
                                <h3 className='text-2xl font-bold text-center mb-4'>{skill.title}</h3>
                            </div>
                            <div>
                                <div className='w-full bg-gray-700 h-2 rounded-full'>
                                    <div className='bg-orange-500 h-2 rounded-full transition-all duration-1000' style={{width: skill.level}}></div>
                                </div>
                                <p className='text-right mt-2 text-orange-500 font-bold'>{skill.level}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}