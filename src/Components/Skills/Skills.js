import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNode, FaDatabase, FaReact } from 'react-icons/fa';

function Skills() {
  return (
    <div  className='about-container mt-8'>
      <h1 className='about-heading text-purple-700 text-center text-4xl font-bold'>Flex Box</h1>
      <div className="box-container flex flex-wrap justify-between items-center p-20">
        
        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaHtml5 className="text-2xl mb-1" style={{ color: "#091c49" }} />
          <span className="font-bold text-md md:text-lg">HTML5</span>
        </div>

        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaCss3 className="text-2xl mb-1" style={{ color: "#4d1485" }} />
          <span className="font-bold text-md md:text-lg">CSS3</span>
        </div>

        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaJs className="text-2xl mb-1" style={{ color: "#FFD43B" }} />
          <span className="font-bold text-md md:text-lg">JavaScript</span>
        </div>
        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaJs className="text-2xl mb-1" style={{ color: "#FFD43B" }} />
          <span className="font-bold text-md md:text-lg">Bootstrap & Tailwind</span>
        </div>

        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaNode className="text-2xl mb-1" style={{ color: "#38e907" }} />
          <span className="font-bold text-md md:text-lg">NodeJs</span>
        </div>

        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaDatabase className="text-2xl mb-1" style={{ color: "#74C0FC" }} />
          <span className="font-bold text-md md:text-lg">MongoDB & MySQL</span>
        </div>

        <div className="flex flex-col items-center justify-center h-28 rounded-md bg-yellow-200 my-3 mx-1 flex-grow">
          <FaReact className="text-2xl mb-1" style={{ color: "#085ae7" }} />
          <span className="font-bold text-md md:text-lg">ReactJs & React-native</span>
        </div>

      </div>
    </div>
  );
}

export default Skills;
