'use client';

import React from 'react';
import { Compass } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/lib/i18n';

interface HeaderProps {
  onNavigate: (view: 'home' | 'input' | 'results' | 'directory' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto glass-card rounded-2xl md:rounded-[2rem] px-4 md:px-10 h-16 md:h-20 flex items-center justify-between border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 md:space-x-4 group"
        >
          <Logo className="w-9 h-9 md:w-11 md:h-11" iconSize={18} />
          <div className="flex flex-col items-start text-left">
            <span className="text-lg md:text-2xl font-black tracking-tight text-black dark:text-white group-hover:text-premium-primary transition-colors leading-none font-serif">Scheme Finder</span>
          </div>
        </button>

        <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12">
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button
              onClick={() => onNavigate('directory')}
              className="text-xs font-semibold text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all"
            >
              {t('nav.browse_all')}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-semibold text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white transition-all"
            >
              {t('nav.about')}
            </button>
          </div>

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-white/10 hidden sm:block"></div>

          <div className="flex items-center space-x-3 md:space-x-6">
            <LanguageSwitcher />

            <button
              onClick={() => onNavigate('input')}
              className="bg-black dark:bg-white text-white dark:text-black px-4 md:px-8 py-2 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-xs hover:bg-premium-primary dark:hover:bg-premium-primary transition-all shadow-xl flex items-center space-x-2 group/btn"
            >
              <Compass className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="whitespace-nowrap">{t('nav.find_schemes')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
