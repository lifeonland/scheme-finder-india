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
    <div className="max-w-7xl mx-auto px-6 py-24 animate-reveal relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-premium-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-4xl mx-auto mb-12">
        <button
          onClick={onBack}
          className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>{isDirectory ? 'Go Home' : 'Refine Profile'}</span>
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-premium-accent" />
          </div>
          <h2 className={`${isDirectory ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'} font-black text-white tracking-tighter leading-tight`}>
            {isDirectory ? 'Scheme Directory' : 'Potential Unlocked.'}
          </h2>
        </div>

        <p className="max-w-3xl text-base md:text-lg text-white/60 leading-relaxed">
          {isDirectory
            ? `Displaying all ${schemes.length} programs available in our repository.`
            : `Our algorithm identified ${schemes.length} programs specifically aligned with your profile.`}
        </p>
      </div>

      {schemes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} relevance={scheme.relevance} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[4rem] py-24 px-10 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white/20 mb-8 tracking-tighter">No Matches Found.</h3>
          <p className="text-white/40 max-w-md mx-auto mb-10 font-medium leading-relaxed">
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
