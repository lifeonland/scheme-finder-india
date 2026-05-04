'use client';

import { useState } from 'react';
import { UserProfile } from '@/lib/types';
import { useRouter } from 'next/navigation';
import InputForm from '@/components/InputForm';
import Header from '@/components/Header';

export default function InputPage() {
  const router = useRouter();

  const handleSearch = (profile: UserProfile) => {
    // Store profile in localStorage or context for the results page
    localStorage.setItem('userProfile', JSON.stringify(profile));
    router.push('/loading');
  };

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home':
        router.push('/');
        break;
      case 'directory':
        router.push('/directory');
        break;
      case 'about':
        router.push('/about');
        break;
      case 'results':
        router.push('/results');
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
          <div className="flex flex-col items-center animate-reveal">
            <InputForm onSearch={handleSearch} onBack={() => router.push('/')} />
          </div>
        </div>
      </div>
    </>
  );
}