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
    <div className="relative group cursor-pointer">
      <Languages className="w-4 h-4 text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors" />
      
      <div className="absolute right-0 mt-2 w-32 py-2 bg-white border border-slate-200 rounded-[var(--border-radius)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] transform origin-top-right scale-95 group-hover:scale-100">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors ${
              locale === lang.code 
                ? "text-[var(--brand-blue)] bg-slate-50" 
                : "text-[var(--text-muted)] hover:text-[var(--brand-blue)] hover:bg-slate-50"
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
