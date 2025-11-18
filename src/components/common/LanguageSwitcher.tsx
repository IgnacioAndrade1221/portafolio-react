import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button 
        onClick={() => changeLanguage('es')}
        className={`
          font-bold py-2 px-4 rounded border-2 border-primary-red
          ${currentLang === 'es' ? 'bg-primary-red text-black' : 'bg-black text-primary-red'}
        `}
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`
          font-bold py-2 px-4 rounded border-2 border-primary-red
          ${currentLang === 'en' ? 'bg-primary-red text-black' : 'bg-black text-primary-red'}
        `}
      >
        EN
      </button>
    </div>
  );
};