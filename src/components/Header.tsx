import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm">
      <div className="text-2xl font-bold mb-4 md:mb-0">
        <Link to="/" className="text-black no-underline">Smith Zea</Link>
      </div>
      
      <nav className="flex items-center space-x-8">
        <Link to="/about" className="text-gray-700 hover:text-black no-underline">About me</Link>
        <Link to="/portfolio" className="text-gray-700 hover:text-black no-underline">Portfolio</Link>
        <Link to="/contact" className="text-gray-700 hover:text-black no-underline">Contact me</Link>
        <Link to="/blog" className="text-gray-700 hover:text-black no-underline">Blog</Link>
      </nav>
      
      <div className="hidden md:flex items-center space-x-3 ml-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-80">
          <Facebook size={20} />
        </a>
        <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:opacity-80">
          <MessageSquare size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80">
          <Twitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:opacity-80">
          <Instagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:opacity-80">
          <Linkedin size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;