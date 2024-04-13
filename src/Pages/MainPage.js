import React from 'react';
import luffy from '../Images/PHOTO.jpg'; // Update the image path
import resumeUrl from '../Resume/resume.pdf'; // Update the resume path

export default function Home() {
    const handleDownload = () => {
        window.open(resumeUrl, '_blank');
    };

    return (
        <div id='home' className='bg-gray-900 text-white min-h-screen flex flex-col lg:flex-row'>
            <div className='lg:w-2/3 flex flex-col justify-center items-center p-10 order-2 lg:order-1'>
                <h1 className='lg:text-4xl text-lg md:text-2xl font-bold'>Hi, I'm</h1>
                <h1 className='lg:text-3xl text-2xl md:text-3xl  font-bold'>Sahil Mulani</h1>
                <h2 className='lg:text-4xl text-lg md:text-2xl  relative'>
                    <span className="text-aquamarine font-extrabold">MERN STACK DEVELOPER</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 animate-gradient"></span>
                </h2>
                <p className='font-bold mt-3 lg:text-2xl text-lg md:text-2xl '>
                    This is my official portfolio site to showcase the skills I have gained and the work I have
                    created.
                </p>
                <button className='bg-blue-500 text-white px-8 py-2 mt-3 rounded-full font-bold text-lg' onClick={handleDownload}>
                    Download CV
                </button>
            </div>
            <div className='relative lg:w-1/4 lg:h-1/4 mt-20  flex justify-center  items-center  order-1 lg:order-2'>
                <img src={luffy} alt='Profile' className='rounded-full shadow-lg transform transition-transform hover:rotate-y-10 hover:scale-105 w-2/3 md:w-full' />
            </div>
        </div>
    );
}
