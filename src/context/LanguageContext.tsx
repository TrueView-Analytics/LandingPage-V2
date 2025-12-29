import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language | null;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Detect location based on timezone or IP
      detectLanguage();
    }
    
    setMounted(true);
  }, []);

  const detectLanguage = async () => {
    try {
      // Try to detect country from IP using a free geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.country_code === 'ES') {
        setLanguage('es');
        localStorage.setItem('language', 'es');
      } else {
        setLanguage('en');
        localStorage.setItem('language', 'en');
      }
    } catch (error) {
      // Fallback: check navigator language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        setLanguage('es');
      } else {
        setLanguage('en');
      }
    }
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Don't render content until language is detected
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
