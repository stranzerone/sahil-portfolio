import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Contact Me</h2>
            <p className="mt-2">Feel free to reach out!</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="mailto:sahilmulanioneplus@gmail.com"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail className="text-xl" />
            </a>
            <a
              href="tel:+918432165190"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillPhone className="text-xl" />
            </a>
            <a
              href="https://github.com/stranzerone"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/sahil-mulani-9a4361239"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-xl" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p>&copy; 2024 Sahil Mulani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
