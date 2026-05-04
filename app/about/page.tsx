'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Landmark, Users, Briefcase, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/input');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 animate-reveal overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-primary/20 rounded-full blur-[120px] animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premium-accent/20 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: '-3s' }}
      ></div>

      <div className="relative z-10 flex flex-col items-center">
        
        <button
          onClick={handleBack}
          className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-8 self-start"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>Back to Home</span>
        </button>
        
        <div className="mb-10 px-6 py-2 rounded-full glass-card border-white/10 flex items-center space-x-2 animate-glow inline-block">
          <Sparkles className="w-4 h-4 text-premium-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
            About Scheme Finder
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-premium-gradient">
          Empowering India, One Scheme at a Time.
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-16 text-balance">
          Scheme Finder is dedicated to simplifying the discovery of central and state government schemes.
          We bridge the gap between citizens and the support they deserve, ensuring everyone can access
          opportunities tailored to their needs.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center">
          <button
            onClick={handleStart}
            className="premium-button group flex items-center justify-center w-full sm:w-auto px-12 py-5"
          >
            Start Your Discovery
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Our Mission & Vision Section */}
      <section className="mt-24 py-16 border-t border-white/5">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-white text-center">
          Our Mission & Vision
        </h2>
        <p className="max-w-4xl mx-auto text-white/40 text-base leading-relaxed text-center mb-12">
          Our mission is to demystify the complex world of government schemes. We strive to be your trusted,
          transparent, and efficient guide, ensuring every Indian citizen can effortlessly identify and benefit
          from the programs designed to uplift them. We envision a future where access to government benefits
          is straightforward and equitable for all.
        </p>
      </section>

      {/* How it Helps Section */}
      <section className="mt-24 pt-16 border-t border-white/5">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-white text-center">
          How Scheme Finder Helps You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="flex flex-col justify-between p-6 rounded-3xl glass-card border-white/5">
            <div>
              <div className="w-12 h-12 bg-premium-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-premium-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personalized Matching</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Provide your basic details—age, occupation, and income—to get a tailored list of schemes.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 rounded-3xl glass-card border-white/5">
            <div>
              <div className="w-12 h-12 bg-premium-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-premium-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Time-Saving</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Skip hours of research. Our engine quickly filters through hundreds of schemes for you.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 rounded-3xl glass-card border-white/5">
            <div>
              <div className="w-12 h-12 bg-premium-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-premium-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Clear Information</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Understand benefits, eligibility, and application links at a glance.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
