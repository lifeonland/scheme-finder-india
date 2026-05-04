import React from 'react';
import { LayoutGrid, Compass } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'input' | 'results' | 'directory') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-6xl mx-auto glass-card rounded-[2rem] px-8 py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center animate-glow transition-transform group-hover:scale-110">
            <span className="text-white font-black text-lg">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white group-hover:text-premium-primary transition-colors">Scheme Finder</span>
        </button>
        
        <div className="flex items-center space-x-6 md:space-x-10">
          <button 
            onClick={() => onNavigate('directory')} 
            className="flex items-center space-x-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Directory</span>
          </button>

          {/* About link */}
          <button 
            onClick={() => onNavigate('about')}
            className="text-sm font-bold text-white/50 hover:text-white transition-colors"
          >
            About
          </button>

          <button 
            onClick={() => onNavigate('input')}
            className="bg-white text-black px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-premium-primary hover:text-white transition-all active:scale-95 shadow-lg hover:shadow-premium-primary/20 flex items-center space-x-2"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Discover</span>
          </button>
          </div>
          </div>
          </nav>
          );
          };


export default Header;
