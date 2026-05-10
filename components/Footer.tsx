'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from '@/lib/i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 md:py-16 border-t border-gray-200 dark:border-white/5 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-gray-500 dark:text-gray-500">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center space-x-6">
            <button className="text-[11px] font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors">{t('footer.privacy')}</button>
            <button className="text-[11px] font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
