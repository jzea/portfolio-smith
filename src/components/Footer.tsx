import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-700 mb-8">Get in touch if you have a new project or just to say hi! :)</p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://api.whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <MessageSquare size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;