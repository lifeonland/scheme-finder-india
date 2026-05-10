'use client';

import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/input');
  };

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'input':
        router.push('/input');
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
        // Stay on home
        break;
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-32 md:pb-48 px-4 md:px-8">
        <Hero onStart={handleStart} onViewDirectory={() => router.push('/directory')} />
      </div>
    </>
  );
}
