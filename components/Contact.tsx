import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-brand-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Let's Start a Conversation</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-brand-black p-8 border border-white/5 rounded-sm">
                <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group cursor-pointer">
                        <div className="p-3 bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors">
                        <Phone size={24} />
                        </div>
                        <div>
                        <h5 className="font-bold text-gray-300">Phone</h5>
                        <p className="text-gray-500">01010624732</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer">
                        <div className="p-3 bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors">
                        <Mail size={24} />
                        </div>
                        <div>
                        <h5 className="font-bold text-gray-300">Email</h5>
                        <p className="text-gray-500">hello@kherebastudio.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer">
                        <div className="p-3 bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors">
                        <MapPin size={24} />
                        </div>
                        <div>
                        <h5 className="font-bold text-gray-300">Location</h5>
                        <p className="text-gray-500">Cairo, Egypt</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <a 
                        href="https://wa.me/201010624732" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-sm transition-colors"
                    >
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 w-full bg-gray-800 border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6038952125!2d31.18842285889737!3d30.059618470485295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79df8294e87b1b6b!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1697534256789!5m2!1sen!2seg" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    loading="lazy"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-black p-8 border border-white/5 rounded-sm">
            <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input 
                    type="text" 
                    className="w-full bg-brand-dark border border-white/10 focus:border-brand-accent px-4 py-3 text-white outline-none transition-colors"
                    placeholder="Full Name"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                    <input 
                    type="tel" 
                    className="w-full bg-brand-dark border border-white/10 focus:border-brand-accent px-4 py-3 text-white outline-none transition-colors"
                    placeholder="01xxxxxxxxx"
                    />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-brand-dark border border-white/10 focus:border-brand-accent px-4 py-3 text-white outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-brand-dark border border-white/10 focus:border-brand-accent px-4 py-3 text-white outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="button"
                className="w-full bg-white text-brand-black font-bold py-4 px-6 uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;