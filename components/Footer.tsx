'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from '@/lib/i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-[var(--text-muted)]">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center space-x-6">
            <button className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors">{t('footer.privacy')}</button>
            <button className="text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--brand-blue)] transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
