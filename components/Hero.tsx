'use client';

import React from 'react';
import { ArrowRight, Users, Landmark, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';

interface HeroProps {
  onStart: () => void;
  onViewDirectory?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewDirectory }) => {
  const router = useRouter();
  const { t, locale } = useTranslation();

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-12 animate-reveal overflow-hidden pt-12 md:pt-20">
      
      {/* Refined Background - More subtle */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-premium-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        
        {/* Trust Badge */}
        <div className="mb-10 md:mb-14 px-6 md:px-8 py-2.5 rounded-full glass-card border border-black/10 dark:border-white/10 hover:border-premium-accent/50 transition-all duration-300 flex items-center space-x-3 cursor-default inline-block hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] group">
          <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-premium-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[11px] md:text-[13px] font-semibold text-black/90 dark:text-white/90 group-hover:text-premium-accent transition-colors duration-300 whitespace-nowrap">
            {t('hero.badge')}
          </span>
        </div>

        {/* Headline */}
        <h1 key={locale} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 md:mb-12 text-black dark:text-white px-2 text-center">
          {t('hero.title_1')} <br/> 
          <span className="text-transparent bg-clip-text bg-premium-gradient">{t('hero.title_2')}</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl text-sm md:text-lg lg:text-xl text-black/50 dark:text-white/50 font-medium leading-[1.6] mb-10 md:mb-16 text-balance px-4 text-center">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-4 mb-8 md:mb-10">
          <button
            onClick={onStart}
            className="premium-button group flex items-center justify-center w-full sm:w-auto px-10 md:px-12 py-4 md:py-4 text-sm font-bold tracking-widest uppercase"
          >
            {t('hero.start_search')}
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>

          <button
            onClick={onViewDirectory}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-2xl font-semibold text-sm md:text-base text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all hover:bg-black/5 dark:hover:bg-white/5 backdrop-blur-sm"
          >
            {t('hero.browse_schemes')}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 md:mb-24 px-4 text-black/40 dark:text-white/40">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-premium-accent/40" />
            <span>{t('hero.trust_no_signup')}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-premium-accent/40" />
            <span>{t('hero.trust_free')}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs md:text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-premium-accent/40" />
            <span>{t('hero.trust_official')}</span>
          </div>
        </div>

        {/* Integrated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-4">
          <div 
            onClick={onStart}
            className="flex flex-col items-center p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 cursor-pointer transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-sm"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-premium-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-premium-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-black mb-3 text-black dark:text-white tracking-tight leading-snug">{t('hero.feature_1_title')}</h3>
            <p className="text-black/50 dark:text-white/40 text-xs md:text-sm font-medium leading-relaxed">{t('hero.feature_1_desc')}</p>
          </div>

          <div 
            onClick={onViewDirectory}
            className="flex flex-col items-center p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 cursor-pointer transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-sm"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-premium-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Landmark className="w-6 h-6 md:w-8 md:h-8 text-premium-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-black mb-3 text-black dark:text-white tracking-tight leading-snug">{t('hero.feature_2_title')}</h3>
            <p className="text-black/50 dark:text-white/40 text-xs md:text-sm font-medium leading-relaxed">{t('hero.feature_2_desc')}</p>
          </div>

          <div 
            onClick={() => router.push('/directory')}
            className="flex flex-col items-center p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 cursor-pointer transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-sm"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-premium-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-premium-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-black mb-3 text-black dark:text-white tracking-tight leading-snug">{t('hero.feature_3_title')}</h3>
            <p className="text-black/50 dark:text-white/40 text-xs md:text-sm font-medium leading-relaxed">{t('hero.feature_3_desc')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
