


import React from 'react';

export default function About() {
  return (
    <div id='skills' className='mt-16 px-4 py-8 bg-white rounded-lg shadow-md'>
      <div className='text-center mb-8'>
        <h1 className='text-purple-700 text-4xl font-bold'>About Me</h1>
      </div>

        <div className='flex flex-col space-y-4 text-center'>
          <h3 className='border-b-4 border-purple-500 text-xl font-semibold mb-4'>About Me</h3>
          <p className='text-lg text-gray-700'>
            Hello! I'm Sahil, a web developer with a focus on the MERN stack. With two months of internship experience, I've honed my skills in building responsive web applications. I'm passionate about leveraging technology to solve problems and create meaningful user experiences.
          </p>
        </div>

      <div className='mt-12 text-center'>
        <h1 className='text-purple-700 text-4xl font-bold'>Experience</h1>
        <h2 className='text-lg font-semibold mt-4 text-gray-600'>Full stack Developer | 2 months | HashedBit Innovation</h2>
      </div>

      <div className='mt-12 text-center'>
        <h3 className='text-2xl font-semibold'>Skills</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
          {/* Buttons remain the same */}
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>HTML</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>CSS</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>JavaScript</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>React JS</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Bootstrap</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Redux Toolkit</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Responsive Designs</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Node JS</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>MongoDB</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Mongoose</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Express JS</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>REST API</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>MYSQL</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>REACT NATIVE</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>AUTHENTICATION</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Payment Gateways</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Bootstrap</button>
          <button className='btn btn-danger py-2 px-4 rounded-full hover:bg-red-600 hover:text-white transition duration-300'>Tailwind</button>

        </div>
      </div>
    </div>
  );
}
