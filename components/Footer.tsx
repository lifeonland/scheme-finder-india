'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from '@/lib/i18n';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Section 1: Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-4 group">
              <Logo className="w-8 h-8 md:w-9 md:h-9" iconSize={16} />
              <div>
                <h3 className="text-lg font-black tracking-tighter">Scheme Finder</h3>
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">{t('common.india')}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300">
                  {t('nav.browse_all')}
                </button>
              </li>
              <li>
                <button className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300">
                  {t('nav.find_schemes')}
                </button>
              </li>
              <li>
                <button className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300">
                  {t('nav.about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Section 3: Resources */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-5">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.india.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300 flex items-center group"
                >
                  <span>India.gov.in</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mygov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300 flex items-center group"
                >
                  <span>MyGov Portal</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dbtindia.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-gray-400 hover:text-premium-primary transition-colors duration-300 flex items-center group"
                >
                  <span>Direct Benefit Transfer</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-gray-500">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center space-x-6">
            <button className="text-[11px] font-medium text-gray-500 hover:text-white transition-colors">
              {t('footer.privacy')}
            </button>
            <button className="text-[11px] font-medium text-gray-500 hover:text-white transition-colors">
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
