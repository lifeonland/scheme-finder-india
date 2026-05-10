'use client';

import React from 'react';
import { Scheme } from '@/lib/types';
import { ExternalLink, CheckCircle2, User, Wallet } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface SchemeCardProps {
  scheme: Scheme;
  relevance?: 'highly-relevant' | 'might-apply' | 'explore';
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, relevance }) => {
  const { t, locale } = useTranslation();
  
  const schemeData = scheme as any;
  const getName = () => schemeData[`name_${locale}`] || schemeData.name || 'Unknown Scheme';
  const getDescription = () => schemeData[`description_${locale}`] || schemeData.description || 'No description available';
  const getBenefit = () => schemeData[`benefit_${locale}`] || schemeData.benefit || 'No benefit information';

  const name = getName();
  const description = getDescription();
  const benefit = getBenefit();

  return (
    <div className="section-card p-8 flex flex-col h-full hover:border-[var(--brand-blue)] transition-all">
      <h3 className="text-lg font-bold text-[var(--text-main)] mb-3">
        {name}
      </h3>
      
      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="space-y-4">
        <div className="flex items-center p-4 rounded-[var(--border-radius)] bg-indigo-50 border border-indigo-100">
          <CheckCircle2 className="w-5 h-5 text-[var(--brand-blue)] mr-3 flex-shrink-0" />
          <p className="text-sm font-semibold text-[var(--brand-blue)] leading-snug">{benefit}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-[var(--border-radius)] bg-slate-50 border border-slate-100">
            <div className="flex items-center text-xs font-semibold text-[var(--text-muted)] mb-1">
              <User className="w-3 h-3 mr-1" /> {t('common.age_group')}
            </div>
            <p className="text-sm font-bold text-[var(--text-main)]">
              {scheme.minAge !== null ? `${scheme.minAge}-${scheme.maxAge}` : t('common.all')}
            </p>
          </div>
          <div className="p-3 rounded-[var(--border-radius)] bg-slate-50 border border-slate-100">
            <div className="flex items-center text-xs font-semibold text-[var(--text-muted)] mb-1">
              <Wallet className="w-3 h-3 mr-1" /> {t('common.income_limit')}
            </div>
            <p className="text-sm font-bold text-[var(--text-main)]">
              {scheme.incomeLimit ? `₹${(scheme.incomeLimit / 100000).toFixed(1)}L` : t('common.none')}
            </p>
          </div>
        </div>

        <a 
          href={scheme.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center !py-3"
        >
          {t('common.apply_now')}
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;
