'use client';

import { useState, useMemo } from 'react';
import { Scheme } from '@/lib/types';
import { translations, Language } from '@/lib/translations';
import schemesData from '@/data/schemes.json';
import ResultsView from '@/components/ResultsView';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function DirectoryPage() {
  const router = useRouter();
  const [lang, setLang] = useState<Language>('en');
  const [filter, setFilter] = useState<'all' | 'highly-relevant' | 'might-apply' | 'explore'>('all');

  // Get user profile from localStorage
  const userProfile = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userProfile') || 'null') : null;

  const t = translations[lang] || translations.en;

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

  const localizeScheme = (scheme: any, targetLang: string) => {
    return {
      ...scheme,
      name: typeof scheme.name === 'string' ? scheme.name : scheme.name?.[targetLang] || scheme.name?.en || 'Unknown Scheme',
      description: typeof scheme.description === 'string' ? scheme.description : scheme.description?.[targetLang] || scheme.description?.en || 'No description',
      benefit: typeof scheme.benefit === 'string' ? scheme.benefit : scheme.benefit?.[targetLang] || scheme.benefit?.en || 'No benefit info',
    };
  };

  const allSchemesUnfiltered = useMemo(() => {
    return (schemesData as any[]).map(scheme => ({
      ...localizeScheme(scheme, lang as string),
      relevance: calculateRelevance(scheme, userProfile)
    }));
  }, [lang, userProfile]);

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
        <div className="max-w-6xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === 'all'
                    ? 'bg-premium-gradient text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                All Schemes ({allSchemesUnfiltered.length})
              </button>
              <button
                onClick={() => setFilter('highly-relevant')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === 'highly-relevant'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                ✅ Highly Relevant ({allSchemesUnfiltered.filter(s => s.relevance === 'highly-relevant').length})
              </button>
              <button
                onClick={() => setFilter('might-apply')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === 'might-apply'
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                👍 Might Apply ({allSchemesUnfiltered.filter(s => s.relevance === 'might-apply').length})
              </button>
              <button
                onClick={() => setFilter('explore')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                  filter === 'explore'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                ℹ️ Explore ({allSchemesUnfiltered.filter(s => s.relevance === 'explore').length})
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