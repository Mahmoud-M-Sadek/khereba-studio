import React, { useState } from 'react';
import { analyzeProjectIdea } from '../services/geminiService';
import { AIAnalysisResult, LoadingState } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

const COLORS = ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899'];

const AIConsultant: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setStatus(LoadingState.LOADING);
    setError(null);
    try {
      const data = await analyzeProjectIdea(idea);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze project. Please check your API Key or try again later.");
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="consultant" className="py-24 bg-gradient-to-b from-brand-dark to-brand-black border-y border-brand-gray/30 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-1 rounded-full text-sm font-bold mb-4 border border-brand-accent/20">
            <Sparkles size={16} />
            <span>AI Powered</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Project <span className="text-brand-accent">Architect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Not sure where to start? Tell our AI Architect about your idea, and we'll generate a tailored project roadmap, branding concepts, and budget estimate instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="bg-brand-gray/20 backdrop-blur-sm p-8 rounded-2xl border border-brand-gray">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
                  Describe your vision
                </label>
                <textarea
                  id="idea"
                  rows={6}
                  className="w-full bg-brand-black border border-brand-gray rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="e.g., I want to build a premium coffee subscription service for remote workers in Dubai..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={status === LoadingState.LOADING || !idea.trim()}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <Loader2 className="animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    Generate Roadmap <Sparkles size={18} />
                  </>
                )}
              </button>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </form>
          </div>

          {/* Results Section */}
          <div className="bg-brand-black rounded-2xl border border-brand-gray min-h-[400px] flex items-center justify-center overflow-hidden relative">
             {status === LoadingState.IDLE && (
                <div className="text-center p-8 text-gray-500">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Your project blueprint will appear here.</p>
                </div>
             )}

             {status === LoadingState.LOADING && (
                 <div className="text-center p-8">
                    <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-brand-accent animate-pulse">Consulting AI Knowledge Base...</p>
                 </div>
             )}

             {status === LoadingState.SUCCESS && result && (
                <div className="w-full h-full p-8 animate-fade-in overflow-y-auto max-h-[600px] custom-scrollbar">
                    <div className="mb-8">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Concept</span>
                        <h3 className="text-3xl font-bold text-white mt-1">{result.projectName}</h3>
                        <p className="text-brand-accent text-lg italic mt-2">"{result.slogan}"</p>
                    </div>

                    <div className="mb-8 p-4 bg-brand-gray/20 rounded-xl border border-brand-gray/50">
                        <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase">Executive Summary</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{result.summary}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h4 className="text-sm font-bold text-gray-300 mb-4 uppercase">Recommended Services</h4>
                            <ul className="space-y-2">
                                {result.recommendedServices.map((service, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-48">
                             <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase text-center">Budget Allocation</h4>
                             <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={result.estimatedBudgetSplit}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {result.estimatedBudgetSplit.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                </PieChart>
                             </ResponsiveContainer>
                        </div>
                    </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
