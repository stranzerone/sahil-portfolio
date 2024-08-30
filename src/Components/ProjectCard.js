import React from 'react';
import { FiPlay, FiCode } from 'react-icons/fi'; // Importing Feather icons
import { Projects } from '../Pages/Project';

export default function ProjectCard() {
  const generateStarRating = (rating) => {
    const filledStars = '★'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '★' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
    return `${filledStars}${halfStar}${emptyStars}`;
  };

  return (
    <div id='projects' className='projects'>
     <div className='flex items-center justify-center   '>
        <h1 className='p-5  font-extrabold text-4xl text-purple-600'>Projects</h1>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 my-4">
     
      {Projects.map((project, index) => (
        <div key={index} className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <div className="h-40 overflow-hidden">
            <img
              src={project.images[0]} // Displaying only the first image
              alt={`Project ${index + 1} Image 1`}
              className="w-cointain h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:underline mr-4"
                >
                  <FiPlay className="mr-2" /> Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:underline"
                >
                  <FiCode className="mr-2" /> Code
                </a>
              </div>
              <p className="text-sm mx-1 text-yellow-500"> {generateStarRating(project.rating)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
