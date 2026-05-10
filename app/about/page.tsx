'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Landmark, Users, Briefcase, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';

const AboutPage: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleStart = () => {
    router.push('/input');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen animate-reveal overflow-hidden pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-[#030303] text-black dark:text-white transition-colors">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-premium-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto space-y-32">
        
        {/* Main Content */}
        <div className="w-full flex flex-col items-center text-center pt-20">
          <button
            onClick={handleBack}
            className="group flex items-center space-x-3 text-xs font-semibold text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span>{t('common.back_to_home')}</span>
          </button>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-12 text-black dark:text-white w-full max-w-5xl">
            <span className="block animate-reveal">Empowering India,</span>
            <span className="block mt-4 text-transparent bg-clip-text bg-premium-gradient">
              <span className="typewriter">One Scheme at a Time.</span>
            </span>
          </h1>

          <p className="max-w-6xl text-lg md:text-2xl text-gray-600 dark:text-white/60 font-medium leading-[1.6] mb-20 text-balance">
            Scheme Finder is dedicated to simplifying the discovery of central and state government schemes.
            We bridge the gap between citizens and the support they deserve, ensuring everyone can access
            opportunities tailored to their needs.
          </p>

          <button
            onClick={handleStart}
            className="bg-black dark:bg-white text-white dark:text-black px-14 py-5 rounded-2xl font-bold text-sm hover:bg-premium-primary transition-all"
          >
            {t('hero.start_search')}
          </button>
        </div>

        {/* Mission & Vision Section */}
        <div className="w-full max-w-6xl mx-auto rounded-[2.5rem] p-12 md:p-20 border border-gray-100 dark:border-white/5 text-center bg-gray-50 dark:bg-white/[0.02]">
          <h2 className="text-3xl font-black mb-8 text-black dark:text-white">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed max-w-4xl mx-auto">
            Our mission is to demystify the complex world of government schemes. We strive to be your trusted,
            transparent, and efficient guide, ensuring every Indian citizen can effortlessly identify and benefit
            from the programs designed to uplift them. We envision a future where access to government benefits
            is straightforward and equitable for all.
          </p>
        </div>

        {/* Features Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col items-center text-center bg-white dark:bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-white/[0.03] rounded-3xl flex items-center justify-center mb-8">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-black dark:text-white">Personalized Matching</h3>
            <p className="text-gray-600 dark:text-white/50 text-base leading-relaxed">
              Provide your basic details—age, occupation, and income—to get a tailored list of schemes.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col items-center text-center bg-white dark:bg-white/[0.02] hover:border-pink-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-pink-50 dark:bg-white/[0.03] rounded-3xl flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-black dark:text-white">Time-Saving</h3>
            <p className="text-gray-600 dark:text-white/50 text-base leading-relaxed">
              Skip hours of research. Our engine quickly filters through hundreds of schemes for you.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col items-center text-center bg-white dark:bg-white/[0.02] hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-white/[0.03] rounded-3xl flex items-center justify-center mb-8">
              <Landmark className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-black dark:text-white">Clear Information</h3>
            <p className="text-gray-600 dark:text-white/50 text-base leading-relaxed">
              Understand benefits, eligibility, and application links at a glance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
