'use client';

import React from 'react';
import { Compass, Info, Menu } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/lib/i18n';

interface HeaderProps {
  onNavigate: (view: 'home' | 'input' | 'results' | 'directory' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 px-3 md:px-6 lg:px-8">
      <div className="w-full glass-card rounded-2xl md:rounded-[2rem] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 md:space-x-3 group"
        >
          <Logo className="w-8 h-8 md:w-10 md:h-10" iconSize={16} />
          <div className="flex flex-col items-start">
            <span className="text-base md:text-xl font-black tracking-tighter text-white group-hover:text-premium-primary transition-colors">Scheme Finder</span>
            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">{t('common.india')}</span>
          </div>
        </button>

        <div className="flex items-center space-x-3 md:space-x-6 lg:space-x-10">
          <button
            onClick={() => onNavigate('directory')}
            className="text-[10px] md:text-sm font-semibold text-white/60 hover:text-white transition-colors hidden sm:block"
          >
            {t('nav.browse_all')}
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="flex items-center space-x-2 text-[10px] md:text-sm font-bold text-white/50 hover:text-white transition-colors"
          >
            <Info className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden md:inline">{t('nav.about')}</span>
          </button>

          <LanguageSwitcher />

          <button
            onClick={() => onNavigate('input')}
            className="bg-premium-gradient text-white px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-premium-primary hover:scale-105 transition-all active:scale-95 shadow-lg hover:shadow-premium-primary/20 flex items-center space-x-1.5 md:space-x-2"
          >
            <Compass className="w-3 md:w-3.5 h-3 md:h-3.5" />
            <span className="whitespace-nowrap">{t('nav.find_schemes')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
