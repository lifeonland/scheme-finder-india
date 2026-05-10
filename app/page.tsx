'use client';

import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import TrustLayer from '@/components/TrustLayer';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/input');
  };

  const handleNavigate = (view: 'home' | 'input' | 'results' | 'directory' | 'about') => {
    switch (view) {
      case 'home': window.location.assign('/'); break;
      case 'input': window.location.assign('/input'); break;
      case 'directory': window.location.assign('/directory'); break;
      case 'about': window.location.assign('/about'); break;
      case 'results': window.location.assign('/results'); break;
      default: window.location.assign('/'); break;
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <div className="pt-24 md:pt-32 pb-32 md:pb-48 px-4 md:px-8">
        <Hero onStart={handleStart} onViewDirectory={() => router.push('/directory')} />
      </div>
      <TrustLayer />
    </>
  );
}