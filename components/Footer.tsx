import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tighter uppercase">Khereba<span className="text-brand-accent">.</span></h2>
            <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Khereba Studio. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;