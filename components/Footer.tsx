import React from 'react';
import { Mail, Landmark, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <h3 className="text-xl font-black tracking-tighter mb-4">Scheme Finder</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Simplifying access to Indian government schemes. Official, transparent, and direct pathways to welfare programs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-white/30 hover:text-white transition-colors"><Landmark className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-premium-primary transition-colors">Government Portal</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Direct Benefit Transfer</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Ministry Contacts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-premium-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
          <p>© {new Date().getFullYear()} Scheme Finder. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <ShieldCheck className="w-3 h-3" />
            <span>Official Government Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
