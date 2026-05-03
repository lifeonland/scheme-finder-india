'use client';

import { useState, useMemo } from 'react';
import { UserProfile, Scheme } from '@/lib/types';
import { filterSchemes } from '@/lib/eligibility';
import schemesData from '@/data/schemes.json';
import InputForm from '@/components/InputForm';
import ResultsView from '@/components/ResultsView';
import LoadingState from '@/components/LoadingState';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

export default function Home() {
  const [view, setView] = useState<'home' | 'input' | 'loading' | 'results' | 'directory'>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const eligibleSchemes = useMemo(() => {
    if (!userProfile) return [];
    return filterSchemes(schemesData as Scheme[], userProfile);
  }, [userProfile]);

  const allSchemes = useMemo(() => {
    return schemesData as Scheme[];
  }, []);

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

  const handleNavigate = (newView: 'home' | 'input' | 'results' | 'directory') => {
    setView(newView);
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {view === 'home' && <Hero onStart={handleStart} />}

          {view === 'input' && (
            <div className="flex flex-col items-center animate-reveal">
              <InputForm onSearch={handleSearch} />
            </div>
          )}

          {view === 'loading' && <LoadingState />}

          {view === 'results' && (
            <div className="animate-reveal">
              <ResultsView schemes={eligibleSchemes} onBack={handleBack} />
            </div>
          )}

          {view === 'directory' && (
            <div className="animate-reveal">
              <ResultsView 
                schemes={allSchemes} 
                onBack={() => setView('home')} 
                isDirectory
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
