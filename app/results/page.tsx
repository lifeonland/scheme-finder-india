'use client';

import { useState, useEffect, useMemo } from 'react';
import { UserProfile, Scheme } from '@/lib/types';
import { filterSchemes } from '@/lib/eligibility';
import { useTranslation } from '@/lib/i18n';
import schemesData from '@/data/schemes.json';
import ResultsView from '@/components/ResultsView';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

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

  const eligibleSchemes = useMemo(() => {
    if (!userProfile) return [];
    return filterSchemes(schemesData as any[], userProfile);
  }, [userProfile]);

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
          <div className="mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <p className="text-black dark:text-white/60 dark:text-black dark:text-white/60 dark:text-white/60">{t('common.loading')}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8">
        <div className="animate-reveal">
          <ResultsView schemes={eligibleSchemes} onBack={handleBack} />
        </div>
      </div>
    </>
  );
}