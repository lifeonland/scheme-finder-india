import React from 'react';
import { Scheme } from '@/lib/types';
import SchemeCard from './SchemeCard';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ResultsViewProps {
  schemes: Scheme[];
  onBack: () => void;
  isDirectory?: boolean;
}

const ResultsView: React.FC<ResultsViewProps> = ({ schemes, onBack, isDirectory = false }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32 animate-reveal relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-premium-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-12">
        <div className="max-w-2xl">
          <button
            onClick={onBack}
            className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span>{isDirectory ? "Go Home" : "Refine Profile"}</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-premium-accent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              {isDirectory ? "Scheme" : "Potential"} <br/> 
              <span className="text-white/20">{isDirectory ? "Directory." : "Unlocked."}</span>
            </h2>
          </div>
        </div>
        
        <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 max-w-sm">
          <p className="text-white/40 font-bold text-sm leading-relaxed">
            {isDirectory ? "Displaying all" : "Our algorithm identified"} <span className="text-white">{schemes.length} programs</span> {isDirectory ? "available in our repository." : "specifically aligned with your profile."}
          </p>
        </div>
      </div>

      {schemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[4rem] py-32 text-center">
          <h3 className="text-4xl font-black text-white/20 mb-10 tracking-tighter">No Matches Found.</h3>
          <p className="text-white/40 max-w-md mx-auto mb-12 font-medium">
            No programs found matching your current parameters. Try broadening your criteria.
          </p>
          <button onClick={onBack} className="premium-button">
            Reset Parameters
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsView;
