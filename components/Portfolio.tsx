import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Noir Essence",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Urban Pulse",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Lumina Tech",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Velvet Interiors",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white">Our Case Studies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/20 transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white text-black p-3 rounded-full">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-brand-accent transition-colors">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">{project.category}</p>
                </div>
                <span className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold">View Case</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all rounded-sm">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;