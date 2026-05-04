import React from 'react';
import { ArrowRight, Sparkles, Users, Landmark, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeroProps {
  onStart: () => void;
  onViewDirectory?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewDirectory }) => {
  const router = useRouter();
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 animate-reveal overflow-hidden pt-24 md:pt-32">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-primary/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premium-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
          Unlock Your Government Benefits <br/>
          <span className="text-transparent bg-clip-text bg-premium-gradient">Made Just for You</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-8 text-balance">
          Stop missing out on benefits you're entitled to. Get personalized scheme recommendations
          that match your profile and unlock financial support for education, farming, and more.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <div 
            onClick={onStart}
            className="flex flex-col items-center p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <Users className="w-8 h-8 text-premium-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2 group-hover:text-premium-primary transition-colors">Personalized Matching</h3>
            <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">Answer a few questions about your age, income, and occupation</p>
          </div>

          <div 
            onClick={onViewDirectory}
            className="flex flex-col items-center p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <Landmark className="w-8 h-8 text-premium-secondary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2 group-hover:text-premium-secondary transition-colors">Official Schemes</h3>
            <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">Access verified government programs from trusted sources</p>
          </div>

          <div 
            onClick={() => router.push('/directory')}
            className="flex flex-col items-center p-6 rounded-2xl glass-card border-white/5 hover:border-white/20 cursor-pointer transition-all hover:scale-105 hover:bg-white/[0.02] group"
          >
            <ShieldCheck className="w-8 h-8 text-premium-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2 group-hover:text-premium-accent transition-colors">Easy Application</h3>
            <p className="text-white/50 text-sm text-center group-hover:text-white/70 transition-colors">Get direct links and guidance for scheme applications</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <button
            onClick={onStart}
            className="premium-button group flex items-center justify-center w-full sm:w-auto px-8 py-4"
          >
            Start Your Search
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="glass-card border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-white/5"
          >
            Learn More
          </button>
        </div>

        <p className="text-white/40 text-sm mt-8 max-w-2xl">
          Trusted by thousands of Indians. Free to use. No personal data stored.
        </p>
      </div>
    </div>
  );
};

export default Hero;
