import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-3xl font-extrabold tracking-tight">
            Sahil...
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl focus:outline-none"
          >
            &#8801; {/* Hamburger Menu Icon */}
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:flex-row space-x-4  hidden md-block`}
          >
            <Link
              to="/"
              onClick={() => scrollToSection('home')}
              className="text-lg font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 hover:border-b-yellow-700"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-lg hover:border-b-2 hover:border-b-yellow-700 font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </button>
            <Link
              to="/"
              onClick={() => scrollToSection('projects')}
              className="text-lg hover:border-b-2 hover:border-b-yellow-700 font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Projects
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection('contact')}
              className="text-lg hover:border-b-2 hover:border-b-yellow-700 font-semibold hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Connect
            </Link>
          </div>
        </div>
        {/* Responsive Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              scrollToSection('home');
            }}
            className="block text-lg font-semibold mb-2 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          <button
            onClick={() => {
              toggleMenu();
              scrollToSection('skills');
            }}
            className="block text-lg font-semibold mb-2 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </button>
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              scrollToSection('projects');
            }}
            className="block text-lg font-semibold mb-2 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Projects
          </Link>
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              scrollToSection('contact');
            }}
            className="block text-lg font-semibold mb-2 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}
