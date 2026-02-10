import React, { useState } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ILAGAY DITO ANG IYONG ACCESS KEY MULA SA WEB3FORMS
        formData.append("access_key", "d2dcd0b2-1e67-4ff0-8101-726d6320279e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully! ✅");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id='contact' className='py-32 bg-[#0b0410] px-6 relative overflow-hidden'>
            <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]'></div>

            <div className='max-w-6xl mx-auto relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    
                    <div data-aos='fade-right'>
                        <h2 className='text-cyan-400 text-2xl font-bold mb-4 uppercase'>Contact</h2>
                        <h1 className='text-6xl md:text-8xl font-extrabold text-white mb-8'>Let's <br /> <span className='text-orange-500'>Connect.</span></h1>
                        <p className='text-gray-400 text-xl mb-10'>
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
                        </p>
                        
                        <div className='space-y-6'>
                            <div className='flex items-center gap-6'>
                                <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 text-2xl'>📍</div>
                                <p className='text-white text-xl'>Omli Street, Poblacion, Lagangialang, Abra, Philippines</p>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div className='w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-orange-400 text-2xl'>📧</div>
                                <p className='text-white text-xl'>trishamaebobiles@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Updated Form with onSubmit */}
                    <form onSubmit={onSubmit} data-aos='fade-left' className='bg-white/5 p-10 md:p-16 rounded-[50px] border border-white/10 backdrop-blur-xl space-y-8'>
                        <div>
                            <label className='block text-gray-400 text-lg font-medium mb-3'>Your Full Name</label>
                            <input name="name" type='text' required className='w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors' placeholder='Juan Dela Cruz' />
                        </div>
                        <div>
                            <label className='block text-gray-400 text-lg font-medium mb-3'>Email Address</label>
                            <input name="email" type='email' required className='w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors' placeholder='juan@example.com' />
                        </div>
                        <div>
                            <label className='block text-gray-400 text-lg font-medium mb-3'>Message</label>
                            <textarea name="message" rows='4' required className='w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white text-lg focus:outline-none focus:border-cyan-500 transition-colors' placeholder='Tell me about your project...'></textarea>
                        </div>
                        
                        <button type="submit" className='w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-2xl shadow-xl hover:scale-[1.02] transition-all'>
                            Send Message
                        </button>

                        {/* Status Message */}
                        {result && (
                            <p className={`text-center text-xl font-bold ${result.includes("Successfully") ? "text-green-400" : "text-orange-400"}`}>
                                {result}
                            </p>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
}