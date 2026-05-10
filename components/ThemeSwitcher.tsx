'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-black dark:text-white/60 dark:text-black dark:text-white/60 dark:text-white/60 hover:text-black dark:text-white dark:hover:text-black dark:text-white dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitcher;
