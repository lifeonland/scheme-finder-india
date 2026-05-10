'use client';

import React from 'react';
import { Scheme } from '@/lib/types';
import SchemeCard from './SchemeCard';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface ResultsViewProps {
  schemes: Scheme[];
  onBack: () => void;
  isDirectory?: boolean;
}

const ResultsView: React.FC<ResultsViewProps> = ({ schemes, onBack, isDirectory = false }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-24 animate-reveal relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] md:h-[600px] bg-premium-primary/5 rounded-full blur-[100px] md:blur-[150px] -z-10"></div>

      <div className="max-w-5xl mx-auto mb-10 md:mb-12">
        <button
          onClick={onBack}
          className="group flex items-center space-x-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-black dark:text-white/30 hover:text-black dark:hover:text-white transition-colors mb-6 md:mb-8 py-2"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>{isDirectory ? t('common.go_home') : t('results.refine_profile')}</span>
        </button>

        <div className="flex items-center gap-4 md:gap-6 mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-premium-accent" />
          </div>
          <h2 className={`${isDirectory ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl'} font-black text-black dark:text-white tracking-tighter leading-[1.5] md:leading-relaxed`}>
            {isDirectory ? t('results.directory_title') : t('results.title')}
          </h2>
        </div>

        <p className="max-w-4xl text-sm md:text-lg text-black dark:text-white/60 leading-loose font-medium mb-12">
          {isDirectory
            ? t('results.directory_msg', { count: schemes.length })
            : t('results.count_msg', { count: schemes.length })}
        </p>
      </div>

      {schemes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} relevance={scheme.relevance} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[2rem] md:rounded-[4rem] py-16 md:py-24 px-6 md:px-10 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-black dark:text-white/20 mb-6 md:mb-8 tracking-tighter">{t('results.no_matches')}</h3>
          <p className="text-sm md:text-base text-black dark:text-white/40 max-w-md mx-auto mb-8 md:mb-10 font-medium leading-relaxed px-4">
            {t('results.no_matches_desc')}
          </p>
          <button onClick={onBack} className="premium-button py-4 px-8">
            {t('results.reset')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsView;
