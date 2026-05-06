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
              className="group flex items-center space-x-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-6 md:mb-8 py-2"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
              <span>{t('common.back_to_home')}</span>
            </button>
          )}
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2 md:mb-4">{t('form.title')}</h2>
          <p className="text-sm md:text-base text-white/40 font-medium mb-8 md:mb-12">{t('form.description')}</p>

          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 ml-2">
                <User className="w-3.5 h-3.5 mr-2 text-premium-primary" />
                {t('form.age_label')}
              </label>
              <input
                type="number"
                required
                min="0"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="00"
                className="premium-input text-base md:text-lg font-semibold py-4 px-6"
              />
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 ml-2">
                <Briefcase className="w-3.5 h-3.5 mr-2 text-premium-secondary" />
                {t('form.role_label')}
              </label>
              <select
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="premium-input text-sm md:text-base font-medium appearance-none cursor-pointer py-4 px-6"
              >
                <option value="" disabled className="bg-black">{t('form.role_placeholder')}</option>
                {occupations.map((occ) => (
                  <option key={occ} value={occ} className="bg-black">
                    {t(`form.occupations.${occ}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 ml-2">
                <IndianRupee className="w-3.5 h-3.5 mr-2 text-premium-accent" />
                {t('form.income_label')}
              </label>
              <select
                required
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="premium-input text-sm md:text-base font-medium appearance-none cursor-pointer py-4 px-6"
              >
                <option value="" disabled className="bg-black">{t('form.income_placeholder')}</option>
                {incomeRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-black">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-premium-gradient text-white font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-xs py-5 md:py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-premium-primary/30 flex items-center justify-center group"
            >
              {t('form.submit')}
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
