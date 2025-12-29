// Example of how to use the language context in your components

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export function ExampleComponent() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h1>{t.heroTitle1} {t.heroTitle2} {t.heroTitle3}</h1>
      
      {/* Language Switcher */}
      <div className="flex gap-2">
        <button 
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('es')}
          className={`px-4 py-2 rounded ${language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Español
        </button>
      </div>
    </div>
  );
}
