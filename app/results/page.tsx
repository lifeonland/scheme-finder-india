'use client';

import { useState, useEffect, useMemo } from 'react';
import { UserProfile, Scheme } from '@/lib/types';
import { filterSchemes } from '@/lib/eligibility';
import { translations, Language } from '@/lib/translations';
import schemesData from '@/data/schemes.json';
import ResultsView from '@/components/ResultsView';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Get profile from localStorage
    const profile = localStorage.getItem('userProfile');
    if (profile) {
      setUserProfile(JSON.parse(profile));
    } else {
      // If no profile, redirect to input
      router.push('/input');
    }
  }, [router]);

  const t = translations[lang] || translations.en;

  const localizeScheme = (scheme: any, targetLang: string) => {
    return {
      ...scheme,
      name: typeof scheme.name === 'string' ? scheme.name : scheme.name?.[targetLang] || scheme.name?.en || 'Unknown Scheme',
      description: typeof scheme.description === 'string' ? scheme.description : scheme.description?.[targetLang] || scheme.description?.en || 'No description',
      benefit: typeof scheme.benefit === 'string' ? scheme.benefit : scheme.benefit?.[targetLang] || scheme.benefit?.en || 'No benefit info',
    };
  };

  const eligibleSchemes = useMemo(() => {
    if (!userProfile) return [];
    const filtered = filterSchemes(schemesData as any[], userProfile);
    return filtered.map(scheme => localizeScheme(scheme, lang as string));
  }, [userProfile, lang]);

  const handleBack = () => {
    router.push('/input');
  };

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home':
        router.push('/');
        break;
      case 'input':
        router.push('/input');
        break;
      case 'directory':
        router.push('/directory');
        break;
      case 'about':
        router.push('/about');
        break;
      default:
        router.push('/');
    }
  };

  if (!userProfile) {
    return (
      <>
        <Header onNavigate={handleNavigate} />
        <div className="pt-24 md:pt-32 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <p className="text-white/60">Loading your results...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-reveal">
            <ResultsView schemes={eligibleSchemes} onBack={handleBack} />
          </div>
        </div>
      </div>
    </>
  );
}