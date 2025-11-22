import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <a href="#" className="group flex flex-col leading-none transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 origin-left">
                <span className="text-xl font-black tracking-tighter text-white uppercase bg-brand-black px-1">Khereba</span>
                <span className="text-xl font-black tracking-tighter text-brand-accent uppercase bg-white px-1 ml-4 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] w-max">Studio</span>
            </a>
            <p className="text-gray-500 text-sm mt-4">© {new Date().getFullYear()} Khereba Studio. All rights reserved.</p>
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