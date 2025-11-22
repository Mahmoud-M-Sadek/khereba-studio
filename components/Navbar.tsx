import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Consultant', href: '#consultant' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center z-50">
          <a href="#" className="text-2xl font-black tracking-tighter text-white uppercase">
            Khereba<span className="text-brand-accent">.</span>
          </a>
        </div>
        
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors px-2 py-2 text-xs font-bold uppercase tracking-widest group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu Overlay */}
      <div className={`fixed inset-0 bg-brand-black z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center`}>
        <div className="space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-3xl font-bold text-white hover:text-brand-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;