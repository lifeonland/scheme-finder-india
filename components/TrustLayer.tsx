'use client';

import React from 'react';
import { ShieldCheck, Lock, Database } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const TrustLayer = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start space-x-4">
          <Database className="w-8 h-8 text-[var(--brand-blue)] flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">{t('trust.official_sources')}</h3>
            <p className="text-xs text-[var(--text-muted)]">{t('trust.official_sources_desc')}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Lock className="w-8 h-8 text-[var(--brand-blue)] flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">{t('trust.privacy')}</h3>
            <p className="text-xs text-[var(--text-muted)]">{t('trust.privacy_desc')}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <ShieldCheck className="w-8 h-8 text-[var(--brand-blue)] flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">{t('trust.disclaimer')}</h3>
            <p className="text-xs text-[var(--text-muted)]">{t('trust.disclaimer_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLayer;
