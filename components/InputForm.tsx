'use client';

import React, { useState } from 'react';
import { UserProfile } from '@/lib/types';
import { User, Briefcase, IndianRupee, ChevronRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface InputFormProps {
  onSearch: (profile: UserProfile) => void;
  onBack?: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch, onBack }) => {
  const { t } = useTranslation();
  const [age, setAge] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [income, setIncome] = useState<string>('');

  const occupations = [
    'student', 'school_student', 'it_professional', 'farmer', 'unemployed',
    'business', 'women', 'artisan', 'vendor', 'worker', 'senior', 'pwd', 'widow', 'all'
  ];

  const incomeRanges = [
    { value: '80000', label: t('form.income_ranges.below_1') },
    { value: '200000', label: t('form.income_ranges.1_to_3') },
    { value: '400000', label: t('form.income_ranges.3_to_5') },
    { value: '1000000', label: t('form.income_ranges.above_5') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !occupation || !income) return;

    onSearch({
      age: parseInt(age),
      occupation,
      income: parseInt(income),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-24 animate-reveal">
      <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-white/5 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-premium-primary/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10">
          {onBack && (
            <button
              onClick={onBack}
              className="group flex items-center space-x-3 text-xs font-semibold text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8 py-2"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              <span>{t('common.back_to_home')}</span>
            </button>
          )}
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black dark:text-white mb-4 md:mb-6">{t('form.title')}</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-white/40 font-medium mb-10 md:mb-16 leading-relaxed">{t('form.description')}</p>

          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-xs font-semibold text-gray-500 dark:text-white/40 ml-2">
                <User className="w-4 h-4 mr-3 text-indigo-500" />
                {t('form.age_label')}
              </label>
              <input
                type="number"
                required
                min="0"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                className="premium-input text-base md:text-lg font-medium py-4 px-6"
              />
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-xs font-semibold text-gray-500 dark:text-white/40 ml-2">
                <Briefcase className="w-4 h-4 mr-3 text-pink-500" />
                {t('form.role_label')}
              </label>
              <select
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="premium-input text-sm md:text-base font-medium appearance-none cursor-pointer py-4 px-6"
              >
                <option value="" disabled>{t('form.role_placeholder')}</option>
                {occupations.map((occ) => (
                  <option key={occ} value={occ}>
                    {t(`form.occupations.${occ}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-xs font-semibold text-gray-500 dark:text-white/40 ml-2">
                <IndianRupee className="w-4 h-4 mr-3 text-emerald-500" />
                {t('form.income_label')}
              </label>
              <select
                required
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="premium-input text-sm md:text-base font-medium appearance-none cursor-pointer py-4 px-6"
              >
                <option value="" disabled>{t('form.income_placeholder')}</option>
                {incomeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center"
            >
              {t('form.submit')}
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
