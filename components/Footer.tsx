import React from 'react';
import { Mail, ShieldCheck, Landmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-canvas border-t border-brand-forest/10 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-brand-forest rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-brand-forest">Scheme Finder</span>
            </div>
            <p className="text-brand-slate/60 text-sm leading-relaxed max-w-sm mb-6">
              Empowering citizens by simplifying access to government-provided social security, grants, and welfare programs across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-slate/40 hover:text-brand-clay"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-brand-slate/40 hover:text-brand-clay"><Landmark className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-forest mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-sm text-brand-slate/70">
              <li><a href="#" className="hover:text-brand-clay">Browse All Schemes</a></li>
              <li><a href="#" className="hover:text-brand-clay">How it works</a></li>
              <li><a href="#" className="hover:text-brand-clay">Data Sources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-forest mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-slate/70">
              <li><a href="#" className="hover:text-brand-clay">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-clay">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-forest/10 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-slate/40 text-xs font-medium">
          <p>© {new Date().getFullYear()} Scheme Finder. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Government Data Integration</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
