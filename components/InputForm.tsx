'use client';

import React, { useState } from 'react';
import { UserProfile } from '@/lib/types';
import { User, Briefcase, IndianRupee, ChevronRight } from 'lucide-react';

interface InputFormProps {
  onSearch: (profile: UserProfile) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch }) => {
  const [age, setAge] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [income, setIncome] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !occupation || !income) return;

    onSearch({
      age: parseInt(age),
      occupation,
      income: parseInt(income),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-24 animate-reveal">
      <div className="glass-card rounded-[3rem] p-10 md:p-16 border-white/5 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-premium-primary/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-black tracking-tighter text-white mb-4">Profile Analysis</h2>
          <p className="text-white/40 font-medium mb-12">Configure your identity to filter the scheme repository.</p>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4">
              <label className="flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">
                <User className="w-3.5 h-3.5 mr-2 text-premium-primary" />
                Your Age
              </label>
              <input
                type="number"
                required
                min="0"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="00"
                className="premium-input text-2xl font-black"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">
                <Briefcase className="w-3.5 h-3.5 mr-2 text-premium-secondary" />
                Current Role
              </label>
              <select
                required
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="premium-input text-xl font-black appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-black">Select Occupation</option>
                <option value="student" className="bg-black">Student</option>
                <option value="farmer" className="bg-black">Farmer</option>
                <option value="unemployed" className="bg-black">Unemployed</option>
                <option value="business" className="bg-black">Business Owner</option>
                <option value="women" className="bg-black">Working Woman</option>
                <option value="artisan" className="bg-black">Artisan / Craftsperson</option>
                <option value="vendor" className="bg-black">Street Vendor</option>
                <option value="worker" className="bg-black">Unorganized Worker</option>
                <option value="senior" className="bg-black">Senior Citizen</option>
                <option value="pwd" className="bg-black">Person with Disability</option>
                <option value="widow" className="bg-black">Widow</option>
                <option value="all" className="bg-black">Other</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">
                <IndianRupee className="w-3.5 h-3.5 mr-2 text-premium-accent" />
                Annual Income
              </label>
              <select
                required
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="premium-input text-xl font-black appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-black">Select Range</option>
                <option value="80000" className="bg-black">Below ₹1,00,000</option>
                <option value="200000" className="bg-black">₹1,00,000 - ₹3,00,000</option>
                <option value="400000" className="bg-black">₹3,00,000 - ₹5,00,000</option>
                <option value="1000000" className="bg-black">Above ₹5,00,000</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-premium-gradient text-white font-black uppercase tracking-[0.2em] text-xs py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-premium-primary/30 flex items-center justify-center group"
            >
              Analyze Eligibility
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
