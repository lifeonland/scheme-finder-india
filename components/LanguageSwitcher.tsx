'use client';

import React from 'react';
import { useTranslation, Locale } from '@/lib/i18n';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-black dark:text-white/60 dark:text-black dark:text-white/60 dark:text-white/60 hover:text-black dark:text-white dark:text-white hover:bg-white/10 transition-all">
        <Languages className="w-4 h-4" />
        <span className="text-[10px] font-black uppercase tracking-widest hidden lg:inline">
          {languages.find(l => l.code === locale)?.label}
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest lg:hidden">
          {locale.toUpperCase()}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] transform origin-top-right scale-95 group-hover:scale-100">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors ${
              locale === lang.code 
                ? "text-premium-primary bg-gray-100 dark:bg-white/5" 
                : "text-gray-600 dark:text-white/40 hover:text-black dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

    </div>
  );
};

export default LanguageSwitcher;
