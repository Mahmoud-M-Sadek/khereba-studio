import React from 'react';
import { Target, Eye, Heart, Layers, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: "Mission", icon: <Target className="w-6 h-6" />, text: "To empower brands through innovative design and strategic storytelling." },
    { title: "Vision", icon: <Eye className="w-6 h-6" />, text: "To be the leading creative partner for forward-thinking businesses globally." },
    { title: "Values", icon: <Heart className="w-6 h-6" />, text: "Integrity, Creativity, Excellence, and Client-Centricity are our core." },
  ];

  const steps = [
    { number: "01", title: "Discovery", desc: "We listen to your needs and analyze your market." },
    { number: "02", title: "Strategy", desc: "We craft a roadmap tailored to your goals." },
    { number: "03", title: "Design", desc: "We bring ideas to life with pixel-perfect visuals." },
    { number: "04", title: "Launch", desc: "We deliver and optimize for maximum impact." },
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              We are a team of <br/>
              <span className="italic font-light text-gray-400">dreamers & doers.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              At Khereba Studio, we believe that design is not just about how things look, but how they work. 
              We partner with ambitious brands to create digital experiences that resonate, engage, and convert.
            </p>
            <a href="#contact" className="inline-flex items-center text-white border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
              Get in touch <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-brand-accent/10 transform translate-x-4 translate-y-4 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Team working" 
               className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item, idx) => (
            <div key={idx} className="bg-brand-black p-8 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div>
          <h2 className="text-center text-3xl font-bold text-white mb-16">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-6 border-l border-white/10 hover:border-brand-accent transition-colors group">
                <span className="text-4xl font-black text-white/10 absolute top-4 right-4 group-hover:text-brand-accent/20 transition-colors">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-white mb-2 mt-4">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;