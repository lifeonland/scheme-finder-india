import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 md:px-6 animate-reveal overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 px-4 py-1.5 rounded-full glass-card border-white/10 flex items-center space-x-2 animate-glow">
          <Sparkles className="w-3.5 h-3.5 text-premium-accent" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
            Official Discovery Portal
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
          Discover your <br/>
          <span className="text-transparent bg-clip-text bg-premium-gradient">Potential.</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-10 text-balance">
          Unlock access to hundreds of government schemes tailored specifically to your profile.
        </p>

        <div className="flex flex-col w-full sm:w-auto px-4 sm:px-0">
          <button 
            onClick={onStart}
            className="premium-button group flex items-center justify-center w-full sm:w-auto px-8 py-4"
          >
            Start Exploration
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
