'use client';

import React from 'react';
import { Scheme } from '@/lib/types';
import { ExternalLink, CheckCircle2, User, Wallet, FileText, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface SchemeCardProps {
  scheme: Scheme;
  relevance?: 'highly-relevant' | 'might-apply' | 'explore';
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, relevance }) => {
  const { t, locale } = useTranslation();
  
  // Handle localized fields if they exist, otherwise fallback to default
  const schemeData = scheme as any;
  const getName = () => {
    const localizedName = schemeData[`name_${locale}`];
    if (localizedName) return localizedName;
    return typeof schemeData.name === 'string' ? schemeData.name : schemeData.name?.en || 'Unknown Scheme';
  };

  const getDescription = () => {
    const localizedDesc = schemeData[`description_${locale}`];
    if (localizedDesc) return localizedDesc;
    return typeof schemeData.description === 'string' ? schemeData.description : schemeData.description?.en || 'No description available';
  };

  const getBenefit = () => {
    const localizedBenefit = schemeData[`benefit_${locale}`];
    if (localizedBenefit) return localizedBenefit;
    return typeof schemeData.benefit === 'string' ? schemeData.benefit : schemeData.benefit?.en || 'No benefit information';
  };

  const name = getName();
  const description = getDescription();
  const benefit = getBenefit();

  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch (e) {
      return t('common.official_website').toLowerCase();
    }
  };

  const hostname = getHostname(scheme.link);

  return (
    <div className="group relative glass-card rounded-3xl md:rounded-[2.5rem] p-5 md:p-8 flex flex-col h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-reveal">
      <div className="absolute -bottom-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-premium-primary/20 rounded-full blur-3xl group-hover:bg-premium-accent/40 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6 md:mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/5">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                {scheme.category}
              </span>
            </div>
            {relevance && (
              <div className={`px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest ${
                relevance === 'highly-relevant' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                relevance === 'might-apply' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {relevance === 'highly-relevant' ? `✅ ${t('results.highly_relevant')}` :
                 relevance === 'might-apply' ? `👍 ${t('results.might_apply')}` : `ℹ️ ${t('results.explore')}`}
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3 md:mb-4 group-hover:text-premium-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-white/40 font-medium text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-1">
          {description}
        </p>

        <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
          <div className="flex items-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 shadow-lg">
            <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-premium-accent mr-2 md:mr-3 flex-shrink-0" />
            <p className="text-sm md:text-lg font-black text-premium-accent leading-tight">{benefit}</p>
          </div>

          {/* Application Requirements */}
          {schemeData.applicationRequirements && schemeData.applicationRequirements.length > 0 && (
            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/20 mb-2 md:mb-3">
                <FileText className="w-3 h-3 mr-1" /> {t('common.required_documents')}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {schemeData.applicationRequirements.map((req: string, index: number) => (
                  <span key={index} className="px-2 py-0.5 md:py-1 text-[7px] md:text-[8px] font-bold bg-premium-primary/20 text-premium-primary rounded-md md:rounded-lg border border-premium-primary/30">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">
                <User className="w-2.5 md:w-3 h-2.5 md:h-3 mr-1" /> {t('common.age_group')}
              </div>
              <p className="text-[10px] md:text-xs font-black text-white">
                {scheme.minAge !== null && scheme.maxAge !== null ? `${scheme.minAge}-${scheme.maxAge}` : scheme.minAge !== null ? `${scheme.minAge}+` : t('common.all')}
              </p>
            </div>
            <div className="p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">
                <Wallet className="w-2.5 md:w-3 h-2.5 md:h-3 mr-1" /> {t('common.income_limit')}
              </div>
              <p className="text-[10px] md:text-xs font-black text-white">
                {scheme.incomeLimit ? `₹${(scheme.incomeLimit / 100000).toFixed(1)}L` : t('common.none')}
              </p>
            </div>
          </div>
        </div>

        <a 
          href={scheme.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-center justify-center bg-premium-gradient text-white py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-premium-primary hover:scale-105 transition-all shadow-xl shadow-black group/btn"
        >
          <div className="flex items-center space-x-2 font-black uppercase tracking-widest text-[9px] md:text-[10px]">
            <span>{t('common.apply_now')}</span>
            <ExternalLink className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </div>
          <div className="flex items-center mt-1 text-[6px] md:text-[7px] font-bold text-white/50 uppercase tracking-[0.1em]">
            <Globe className="w-2 h-2 mr-1 opacity-50" />
            {t('common.official_website')} • {hostname}
          </div>
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;
