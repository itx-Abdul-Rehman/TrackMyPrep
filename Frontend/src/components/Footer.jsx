import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left: Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white"> TrackMyPrep</h2>
          <p className="text-gray-300 mt-2 text-sm">
            Empowering users through clean design and real-time features.
          </p>
        </div>

        {/* Center: Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="text-gray-300 space-y-1">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-400"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm border-t border-blue-800 pt-4">
        &copy; {new Date().getFullYear()} TrackMyPrep. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
