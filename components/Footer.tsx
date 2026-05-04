import React from 'react';
import { Mail, Landmark, ShieldCheck, ExternalLink, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tighter">Scheme Finder</h3>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">India</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your trusted companion for discovering Indian government schemes. We help citizens access welfare programs, scholarships, and benefits they're eligible for.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@schemefinder.in" className="text-white/30 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Government Resources</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-premium-primary transition-colors flex items-center space-x-1">
                    <span>India.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.mygov.in" target="_blank" rel="noopener noreferrer" className="hover:text-premium-primary transition-colors flex items-center space-x-1">
                    <span>MyGov Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://dbtindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-premium-primary transition-colors flex items-center space-x-1">
                    <span>Direct Benefit Transfer</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Popular Schemes</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-premium-primary transition-colors">PM Kisan</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Ayushman Bharat</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Education Scholarships</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">MGNREGA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-premium-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-premium-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
          <p>© {new Date().getFullYear()} Scheme Finder India. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3 h-3" />
              <span>Official Government Data</span>
            </div>
            <div className="flex items-center space-x-2">
              <Landmark className="w-3 h-3" />
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
