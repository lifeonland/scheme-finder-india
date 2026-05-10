'use client';

import { useState, useMemo } from 'react';
import { useTranslation } from '@/lib/i18n';
import schemesData from '@/data/schemes.json';
import ResultsView from '@/components/ResultsView';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function DirectoryPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'highly-relevant' | 'might-apply' | 'explore'>('all');

  const userProfile = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userProfile') || 'null') : null;

  const calculateRelevance = (scheme: any, profile: any) => {
    if (!profile) return 'explore';
    const eligibilityMatch = scheme.eligibility?.some((el: string) =>
      el === 'all' ||
      el === profile.occupation.toLowerCase() ||
      (el === 'farmer' && profile.occupation.toLowerCase().includes('farm')) ||
      (el === 'business' && profile.occupation.toLowerCase().includes('business')) ||
      (el === 'student' && profile.occupation.toLowerCase().includes('student')) ||
      (el === 'worker' && ['worker', 'laborer', 'employee'].includes(profile.occupation.toLowerCase()))
    );

    const ageMatch = (!scheme.minAge || profile.age >= scheme.minAge) &&
                     (!scheme.maxAge || profile.age <= scheme.maxAge);

    const incomeMatch = !scheme.incomeLimit || profile.income <= scheme.incomeLimit;

    if (eligibilityMatch && ageMatch && incomeMatch) return 'highly-relevant';
    if (eligibilityMatch || ageMatch || incomeMatch) return 'might-apply';
    return 'explore';
  };

  const allSchemesUnfiltered = useMemo(() => {
    return (schemesData as any[]).map(scheme => ({
      ...scheme,
      relevance: calculateRelevance(scheme, userProfile)
    }));
  }, [userProfile]);

  const allSchemes = useMemo(() => {
    if (filter === 'all') return allSchemesUnfiltered;
    return allSchemesUnfiltered.filter(scheme => scheme.relevance === filter);
  }, [allSchemesUnfiltered, filter]);

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home': window.location.assign('/'); break;
      case 'input': window.location.assign('/input'); break;
      case 'results': window.location.assign('/results'); break;
      case 'about': window.location.assign('/about'); break;
      case 'directory': break;
      default: window.location.assign('/');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <Header onNavigate={handleNavigate} />
      
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <button 
          onClick={() => window.location.assign('/')}
          className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors mb-4 block"
        >
          ← Back to home
        </button>

        <h1 className="text-3xl font-bold text-[var(--text-main)] mb-2">
          {t('nav.browse_all')}
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">
          {t('results.directory_msg', { count: allSchemes.length })}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: t('results.all_schemes') },
            { id: 'highly-relevant', label: t('results.highly_relevant') },
            { id: 'might-apply', label: t('results.might_apply') },
            { id: 'explore', label: t('results.explore') }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-4 py-1.5 rounded-[var(--border-radius)] font-medium text-sm transition-all ${
                filter === f.id 
                  ? 'bg-[var(--brand-blue)] text-white' 
                  : 'bg-white border border-slate-200 text-[var(--text-muted)] hover:border-slate-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="w-full">
          <ResultsView schemes={allSchemes} isDirectory />
        </div>
      </main>
    </div>
  );
}