'use client';

import { useState, useMemo } from 'react';
import { Scheme } from '@/lib/types';
import { useTranslation } from '@/lib/i18n';
import schemesData from '@/data/schemes.json';
import ResultsView from '@/components/ResultsView';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function DirectoryPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'highly-relevant' | 'might-apply' | 'explore'>('all');

  // Get user profile from localStorage
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

    if (eligibilityMatch && ageMatch && incomeMatch) {
      return 'highly-relevant';
    } else if (eligibilityMatch || ageMatch || incomeMatch) {
      return 'might-apply';
    } else {
      return 'explore';
    }
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

  const handleBack = () => {
    router.push('/');
  };

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home':
        router.push('/');
        break;
      case 'input':
        router.push('/input');
        break;
      case 'results':
        router.push('/results');
        break;
      case 'about':
        router.push('/about');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="mx-auto px-4 md:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 md:mb-16 mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2.5 rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-widest transition-all ${
                  filter === 'all'
                    ? 'bg-white text-black dark:text-white shadow-2xl'
                    : 'bg-white/5 border border-white/10 text-black/40 dark:text-white/40 hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                {t('results.all_schemes')} ({allSchemesUnfiltered.length})
              </button>
              <button
                onClick={() => setFilter('highly-relevant')}
                className={`px-5 py-2.5 rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-widest transition-all ${
                  filter === 'highly-relevant'
                    ? 'bg-green-500 text-black dark:text-white dark:text-white shadow-2xl'
                    : 'bg-white/5 border border-white/10 text-black/40 dark:text-white/40 hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                ✅ {t('results.highly_relevant')} ({allSchemesUnfiltered.filter(s => s.relevance === 'highly-relevant').length})
              </button>
              <button
                onClick={() => setFilter('might-apply')}
                className={`px-5 py-2.5 rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-widest transition-all ${
                  filter === 'might-apply'
                    ? 'bg-yellow-500 text-black dark:text-white shadow-2xl'
                    : 'bg-white/5 border border-white/10 text-black/40 dark:text-white/40 hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                👍 {t('results.might_apply')} ({allSchemesUnfiltered.filter(s => s.relevance === 'might-apply').length})
              </button>
              <button
                onClick={() => setFilter('explore')}
                className={`px-5 py-2.5 rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-widest transition-all ${
                  filter === 'explore'
                    ? 'bg-blue-500 text-black dark:text-white dark:text-white shadow-2xl'
                    : 'bg-white/5 border border-white/10 text-black/40 dark:text-white/40 hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                ℹ️ {t('results.explore')} ({allSchemesUnfiltered.filter(s => s.relevance === 'explore').length})
              </button>
            </div>
          </div>
          
          <div className="animate-reveal">
            <ResultsView
              schemes={allSchemes}
              onBack={handleBack}
              isDirectory
            />
          </div>
        </div>
      </div>
    </>
  );
}