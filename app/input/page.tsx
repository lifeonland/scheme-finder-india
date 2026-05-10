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
      case 'home': window.location.assign('/'); break;
      case 'input': break;
      case 'directory': window.location.assign('/directory'); break;
      case 'about': window.location.assign('/about'); break;
      case 'results': window.location.assign('/results'); break;
      default: window.location.assign('/');
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex flex-col items-center animate-reveal">
          <InputForm onSearch={handleSearch} onBack={() => router.push('/')} />
        </div>
      </div>
    </>
  );
}