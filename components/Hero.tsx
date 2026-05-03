import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 animate-reveal overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-10 px-6 py-2 rounded-full glass-card border-white/10 flex items-center space-x-2 animate-glow">
          <Sparkles className="w-4 h-4 text-premium-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
            Official Discovery Portal
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
          Discover your <br/>
          <span className="text-transparent bg-clip-text bg-premium-gradient">Potential.</span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-white/50 font-medium leading-relaxed mb-16 text-balance">
          Unlock access to hundreds of government schemes tailored specifically to your socioeconomic profile.
        </p>

        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          <button 
            onClick={onStart}
            className="premium-button group flex items-center px-12"
          >
            Start Exploration
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
