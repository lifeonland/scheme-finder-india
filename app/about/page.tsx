'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Landmark, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';
import Header from '@/components/Header';

const AboutPage: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleStart = () => router.push('/input');
  
  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home': window.location.assign('/'); break;
      case 'input': window.location.assign('/input'); break;
      case 'results': window.location.assign('/results'); break;
      case 'directory': window.location.assign('/directory'); break;
      case 'about': break;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-neutral)]">
      <Header onNavigate={handleNavigate} />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--brand-blue)] mb-8 tracking-tight">
            {t('about.title_1')} <br />
            <span className="text-[var(--brand-accent)]">{t('about.title_2')}</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            {t('about.description')}
          </p>

          <button
            onClick={handleStart}
            className="btn-primary mt-12"
          >
            {t('hero.start_search')}
          </button>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 border border-gray-100 p-12 md:p-16 text-center mb-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-[var(--brand-blue)] mb-6">
            {t('about.mission_title')}
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-3xl mx-auto">
            {t('about.mission_desc')}
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: t('hero.feature_1_title'), desc: t('hero.feature_1_desc') },
            { icon: Sparkles, title: t('hero.feature_2_title'), desc: t('hero.feature_2_desc') },
            { icon: Landmark, title: t('hero.feature_3_title'), desc: t('hero.feature_3_desc') },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 flex flex-col items-center text-center rounded-3xl border border-gray-100">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-[var(--brand-accent)]">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[var(--brand-blue)] mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
