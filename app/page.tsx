'use client';

import { useState, useMemo } from 'react';
import { UserProfile, Scheme } from '@/lib/types';
import { filterSchemes } from '@/lib/eligibility';
import { translations, Language } from '@/lib/translations'; // Assuming translations and lang state are still relevant for other parts of the app
import schemesData from '@/data/schemes.json';
import InputForm from '@/components/InputForm';
import ResultsView from '@/components/ResultsView';
import LoadingState from '@/components/LoadingState';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import AboutPage from '@/app/about/page'; // Import the AboutPage component

export default function Home() {
  // Ensure the view state type correctly includes 'about'
  const [view, setView] = useState<'home' | 'input' | 'loading' | 'results' | 'directory' | 'about'>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [lang, setLang] = useState<Language>('en'); // Assuming lang state is still needed

  const t = translations[lang] || translations.en; // Assuming 't' is correctly defined elsewhere for translations

  const localizeScheme = (scheme: any, targetLang: string) => {
    return {
      ...scheme,
      name: scheme.name[targetLang] || scheme.name.en,
      description: scheme.description[targetLang] || scheme.description.en,
      benefit: scheme.benefit[targetLang] || scheme.benefit.en,
    };
  };

  const eligibleSchemes = useMemo(() => {
    if (!userProfile) return [];
    const filtered = filterSchemes(schemesData as any[], userProfile);
    return filtered.map(scheme => localizeScheme(scheme, lang));
  }, [userProfile, lang]);

  const allSchemes = useMemo(() => {
    return (schemesData as any[]).map(scheme => localizeScheme(scheme, lang));
  }, [lang]);

  const handleStart = () => {
    setView('input');
  };

  const handleSearch = (profile: UserProfile) => {
    setUserProfile(profile);
    setView('loading');
    setTimeout(() => {
      setView('results');
    }, 1000);
  };

  const handleBack = () => {
    setView('input');
  };

  // Correct the type for handleNavigate to include 'about'
  const handleNavigate = (newView: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    setView(newView);
  };

  return (
    <>
      <Header
        onNavigate={handleNavigate}
        currentLang={lang}
        onLangChange={setLang}
        t={t}
      />
      <div className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {view === 'home' && <Hero onStart={handleStart} t={t} />}

          {view === 'input' && (
            <div className="flex flex-col items-center animate-reveal">
              <InputForm onSearch={handleSearch} t={t} />
            </div>
          )}

          {view === 'loading' && <LoadingState t={t} />}

          {view === 'results' && (
            <div className="animate-reveal">
              <ResultsView schemes={eligibleSchemes} onBack={handleBack} t={t} />
            </div>
          )}

          {view === 'directory' && (
            <div className="animate-reveal">
              <ResultsView
                schemes={allSchemes}
                onBack={() => setView('home')}
                isDirectory
                t={{ ...t, potentialUnlocked: t.directory, identified: t.displayingAll, programs: t.availablePrograms }}
              />
            </div>
          )}
          
          {/* Render AboutPage component when view is 'about' */}
          {view === 'about' && (
            <div className="animate-reveal">
              <AboutPage />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
