import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechStart",
    content: "Khereba Studio transformed our brand completely. Their minimalist approach gave us the premium look we needed to compete globally.",
    rating: 5
  },
  {
    name: "Sarah Miller",
    role: "Director, ArtFlow",
    content: "Professional, timely, and incredibly creative. The team understood our vision immediately and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Mohamed Ali",
    role: "Founder, CoffeeCo",
    content: "The best digital agency we've worked with. The attention to detail in both design and strategy is unmatched.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
                <h3 className="text-4xl font-bold text-white mb-6">Client Success Stories</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    We pride ourselves on building lasting partnerships. Here is what our clients have to say about their experience working with Khereba Studio.
                </p>
                <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Client <br/>Satisfaction</div>
                </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {testimonials.map((t, idx) => (
                    <div key={idx} className={`bg-brand-dark p-8 border border-white/5 ${idx === 2 ? 'md:col-span-2' : ''}`}>
                        <div className="flex gap-1 text-brand-accent mb-4">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-300 mb-6 italic">"{t.content}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                            <Quote className="ml-auto text-white/10 w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;