import React from 'react';
import { Scheme } from '@/lib/types';
import { ExternalLink, CheckCircle2, User, Wallet } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme }) => {
  return (
    <div className="group relative glass-card rounded-[2.5rem] p-8 flex flex-col h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-reveal">
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-premium-primary/20 rounded-full blur-3xl group-hover:bg-premium-accent/40 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-10">
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
              {scheme.category}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-premium-primary transition-colors">
          {typeof scheme.name === 'string' ? scheme.name : scheme.name.en}
        </h3>
        
        <p className="text-white/40 font-medium text-sm leading-relaxed mb-8 flex-1">
          {typeof scheme.description === 'string' ? scheme.description : scheme.description.en}
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-premium-accent mr-3" />
            <p className="text-sm font-bold text-white/80">{scheme.benefit}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">
                <User className="w-3 h-3 mr-1" /> Age Group
              </div>
              <p className="text-xs font-black text-white">
                {scheme.minAge !== null && scheme.maxAge !== null ? `${scheme.minAge}-${scheme.maxAge}` : scheme.minAge !== null ? `${scheme.minAge}+` : 'All'}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">
                <Wallet className="w-3 h-3 mr-1" /> Income Limit
              </div>
              <p className="text-xs font-black text-white">
                {scheme.incomeLimit ? `₹${(scheme.incomeLimit / 100000).toFixed(1)}L` : 'None'}
              </p>
            </div>
          </div>
        </div>

        <a 
          href={scheme.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 bg-white text-black font-black uppercase tracking-widest text-[10px] py-4 rounded-2xl hover:bg-premium-primary hover:text-white transition-all shadow-xl shadow-black group/btn"
        >
          <span>Official Application</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;
