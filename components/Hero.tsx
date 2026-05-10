'use client';

import React from 'react';
import { Users, Landmark, ShieldCheck } from 'lucide-react';
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
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-24">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Trust Badge */}
        <div className="mb-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-[var(--border-radius)] border border-slate-200 bg-white text-[var(--text-muted)] font-semibold text-xs tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[var(--brand-blue)]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          {t('hero.line1')}<br/>
          <span className="text-[var(--text-main)]">{t('hero.line2_a')}</span>{' '}
          <span className="text-[var(--brand-blue)]">{t('hero.line2_b')}</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-10">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center mb-16">
          <button onClick={onStart} className="btn-primary">
            {t('hero.start_search')}
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { icon: Users, title: t('hero.feature_1_title'), desc: t('hero.feature_1_desc'), action: onStart },
            { icon: Landmark, title: t('hero.feature_2_title'), desc: t('hero.feature_2_desc'), action: onViewDirectory },
            { icon: ShieldCheck, title: t('hero.feature_3_title'), desc: t('hero.feature_3_desc'), action: onViewDirectory },
          ].map((item, idx) => (
            <div 
              key={idx} 
              onClick={item.action}
              className="section-card p-8 flex flex-col items-center text-center hover:border-[var(--brand-blue)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-[var(--brand-blue)]">
                <item.icon className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;
