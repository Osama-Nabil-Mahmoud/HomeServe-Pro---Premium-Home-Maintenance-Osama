
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../lib/i18n';

type Theme = 'light' | 'dark';

interface SettingsContextType {
  theme: Theme;
  lang: Language;
  t: typeof translations.en;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('hsp-theme');
    return (saved as Theme) || 'light';
  });
  
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('hsp-lang');
    return (saved as Language) || 'ar'; // Default Arabic
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('hsp-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', translations[lang].dir);
    localStorage.setItem('hsp-lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const setLanguage = (newLang: Language) => setLang(newLang);

  const value = {
    theme,
    lang,
    t: translations[lang],
    toggleTheme,
    setLanguage
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within SettingsProvider');
  return context;
};
