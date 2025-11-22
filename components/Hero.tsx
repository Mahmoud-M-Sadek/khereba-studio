import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-b from-brand-accent/30 to-transparent blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gray-800/30 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="animate-fade-in opacity-0 mb-6">
          <span className="px-4 py-1.5 border border-white/10 rounded-sm text-xs font-bold uppercase tracking-[0.2em] text-white bg-brand-accent/90 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            Creative Digital Studio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-8 animate-slide-up leading-[0.9] transform -skew-x-3">
          KHEREBA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-red-600">
            STUDIO
          </span>
        </h1>
        
        <p className="mt-2 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          We fuse strategy, design, and technology to build brands that matter. 
          Minimalist aesthetics meet maximalist impact.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-brand-accent text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-all hover:bg-red-600 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a 
            href="#work"
            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-all rounded-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="h-12 w-[1px] bg-gradient-to-b from-transparent via-brand-accent to-transparent"></span>
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;