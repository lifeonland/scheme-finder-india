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
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto rounded-2xl px-6 h-14 md:h-16 flex items-center justify-between border border-white/10 backdrop-blur-md bg-white/70 shadow-lg pointer-events-auto">
        <button
          onClick={() => {
            console.log("Navigating to home");
            onNavigate('home');
          }}
          className="flex items-center group relative z-[50]"
        >
          <span className="text-lg font-bold tracking-tight leading-none text-black">
             Scheme <span className="text-[var(--brand-blue)]">Finder</span>
          </span>
        </button>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('directory')}
              className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--brand-blue)]"
            >
              {t('nav.browse_all')}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--brand-blue)]"
            >
              {t('nav.about')}
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
