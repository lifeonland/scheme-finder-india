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
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 animate-reveal overflow-hidden pt-20 md:pt-32">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-premium-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-premium-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl">
        
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-4 md:mb-6 px-2">
          {t('hero.title_1')} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-premium-gradient">{t('hero.title_2')}</span>
        </h1>

        <p className="max-w-3xl text-sm md:text-xl text-white/60 font-medium leading-relaxed mb-8 md:mb-12 text-balance px-4">
          {t('hero.description')}
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 w-full max-w-4xl px-2">
          <div 
            onClick={onStart}
            className="flex flex-row sm:flex-col items-center p-4 md:p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <Users className="w-6 h-6 md:w-8 md:h-8 text-premium-primary mb-0 sm:mb-4 mr-4 sm:mr-0 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div className="text-left sm:text-center">
              <h3 className="text-sm md:text-lg font-bold mb-1 group-hover:text-premium-primary transition-colors">{t('hero.feature_1_title')}</h3>
              <p className="text-white/50 text-[10px] md:text-sm group-hover:text-white/70 transition-colors">{t('hero.feature_1_desc')}</p>
            </div>
          </div>

          <div 
            onClick={onViewDirectory}
            className="flex flex-row sm:flex-col items-center p-4 md:p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <Landmark className="w-6 h-6 md:w-8 md:h-8 text-premium-secondary mb-0 sm:mb-4 mr-4 sm:mr-0 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div className="text-left sm:text-center">
              <h3 className="text-sm md:text-lg font-bold mb-1 group-hover:text-premium-secondary transition-colors">{t('hero.feature_2_title')}</h3>
              <p className="text-white/50 text-[10px] md:text-sm group-hover:text-white/70 transition-colors">{t('hero.feature_2_desc')}</p>
            </div>
          </div>

          <div 
            onClick={() => router.push('/directory')}
            className="flex flex-row sm:flex-col items-center p-4 md:p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-premium-accent mb-0 sm:mb-4 mr-4 sm:mr-0 group-hover:scale-110 transition-transform flex-shrink-0" />
            <div className="text-left sm:text-center">
              <h3 className="text-sm md:text-lg font-bold mb-1 group-hover:text-premium-accent transition-colors">{t('hero.feature_3_title')}</h3>
              <p className="text-white/50 text-[10px] md:text-sm group-hover:text-white/70 transition-colors">{t('hero.feature_3_desc')}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full sm:w-auto px-4">
          <button
            onClick={onStart}
            className="premium-button group flex items-center justify-center w-full sm:w-auto px-10 py-4 md:py-5"
          >
            {t('hero.start_search')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewDirectory}
            className="glass-card border-white/10 hover:border-white/20 text-white px-10 py-4 md:py-5 rounded-2xl font-bold transition-all hover:bg-white/5 w-full sm:w-auto text-sm md:text-base"
          >
            {t('hero.browse_schemes')}
          </button>
        </div>

        <p className="text-white/40 text-[10px] md:text-sm mt-8 max-w-2xl px-6">
          {t('hero.trust_text')}
        </p>
      </div>
    </div>
  );
};

export default Hero;
