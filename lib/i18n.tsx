'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'hi' | 'kn' | 'ta' | 'te';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, variables?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const locales: Locale[] = ['en', 'hi', 'kn', 'ta', 'te'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    const savedLocale = localStorage.getItem('scheme-finder-locale') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (locales.includes(browserLang)) {
        setLocaleState(browserLang);
      }
    }
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        console.log(`Attempting to load messages for locale: ${locale}`);
        const response = await fetch(`/messages/${locale}.json`);
        if (!response.ok) throw new Error(`Failed to fetch messages: ${response.statusText}`);
        const data = await response.json();
        console.log(`Successfully loaded messages for locale: ${locale}`, data);
        setMessages(data);
        localStorage.setItem('scheme-finder-locale', locale);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
      }
    };
    loadMessages();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: string, variables?: Record<string, any>): string => {
    const keys = key.split('.');
    let value: any = messages;

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }

    if (typeof value !== 'string') return key;

    let result: string = value;
    if (variables) {
      Object.entries(variables).forEach(([vKey, vValue]) => {
        result = result.replace(`{${vKey}}`, String(vValue));
      });
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
