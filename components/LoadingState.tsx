import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface LoadingStateProps {
  onBack?: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-reveal">
      {onBack && (
        <div className="w-full max-w-2xl mx-auto mb-8">
          <button
            onClick={onBack}
            className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white/30 dark:text-black dark:text-white/30 dark:text-white/30 hover:text-black dark:text-white dark:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span>{t('common.back_to_home')}</span>
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
          {t('loading.decrypting')}
        </h3>
        <p className="text-black dark:text-white/30 dark:text-black dark:text-white/30 dark:text-white/30 font-bold text-xl tracking-tighter">{t('loading.syncing')}</p>
      </div>
    </div>
  );
};

export default LoadingState;
