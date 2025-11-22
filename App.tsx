import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden selection:bg-brand-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <AIConsultant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;