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
    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-black text-black leading-snug mb-4">
        {name}
      </h3>
      
      <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="space-y-6">
        <div className="flex items-center p-4 rounded-2xl bg-pink-50 border border-pink-100">
          <CheckCircle2 className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
          <p className="text-sm font-black text-pink-900 leading-snug">{benefit}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">
              <User className="w-3 h-3 mr-1" /> {t('common.age_group')}
            </div>
            <p className="text-xs font-black text-black">
              {scheme.minAge !== null ? `${scheme.minAge}-${scheme.maxAge}` : t('common.all')}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="flex items-center text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">
              <Wallet className="w-3 h-3 mr-1" /> {t('common.income_limit')}
            </div>
            <p className="text-xs font-black text-black">
              {scheme.incomeLimit ? `₹${(scheme.incomeLimit / 100000).toFixed(1)}L` : t('common.none')}
            </p>
          </div>
        </div>

        <a 
          href={scheme.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center bg-black text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-800 transition-all"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default SchemeCard;
