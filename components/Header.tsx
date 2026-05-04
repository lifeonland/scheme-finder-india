import React from 'react';
import { LayoutGrid, Compass, Info } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'input' | 'results' | 'directory' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6 lg:px-8">
      <div className="w-full glass-card rounded-[2rem] px-6 md:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center animate-glow transition-transform group-hover:scale-110">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-premium-primary transition-colors">Scheme Finder</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">India</span>
          </div>
        </button>

        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
          <button
            onClick={() => onNavigate('directory')}
            className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            Browse All Schemes
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="flex items-center space-x-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
          >
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">About</span>
          </button>

          <button
            onClick={() => onNavigate('input')}
            className="bg-premium-gradient text-white px-4 md:px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-premium-primary hover:scale-105 transition-all active:scale-95 shadow-lg hover:shadow-premium-primary/20 flex items-center space-x-2"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Find My Schemes</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
