import React from 'react';
import { PenTool, Camera, Share2, Layout } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Graphic Design",
    description: "Creative visual solutions for print and digital media that capture your brand's essence."
  },
  {
    icon: <Layout className="w-10 h-10" />,
    title: "Visual Identity",
    description: "Complete branding systems including logos, typography, and color palettes to define your market presence."
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Photography & Production",
    description: "High-end photography and video production to showcase your products and services professionally."
  },
  {
    icon: <Share2 className="w-10 h-10" />,
    title: "Digital Marketing",
    description: "Strategic social media management, SEO, and ad campaigns to grow your audience."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Comprehensive Design Solutions</h3>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-right md:text-left">
            We provide a full spectrum of creative services designed to elevate your business at every touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-10 border-r border-b border-white/10 hover:bg-white/5 transition-all duration-300 group cursor-default"
            >
              <div className="mb-8 text-white group-hover:text-brand-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;