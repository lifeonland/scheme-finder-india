'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingState from '@/components/LoadingState';
import Header from '@/components/Header';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time and then redirect to results
    const timer = setTimeout(() => {
      router.push('/results');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

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

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <LoadingState onBack={() => router.push('/')} />
        </div>
      </div>
    </>
  );
}