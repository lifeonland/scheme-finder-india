import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LoadingStateProps {
  onBack?: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-reveal">
      {onBack && (
        <div className="w-full max-w-2xl mx-auto mb-8">
          <button
            onClick={onBack}
            className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
      )}
      
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-premium-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 border-[3px] border-white/5 rounded-full"></div>
        <div className="absolute inset-0 border-t-[3px] border-premium-accent rounded-full animate-spin"></div>
        <div className="absolute inset-4 border border-white/5 rounded-full"></div>
      </div>
      
      <div className="mt-16 space-y-4 text-center">
        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-premium-primary animate-glow inline-block px-4 py-1 rounded-full border border-premium-primary/20">
          Decrypting Repository
        </h3>
        <p className="text-white/30 font-bold text-xl tracking-tighter">Syncing with National Database...</p>
      </div>
    </div>
  );
};

export default LoadingState;
