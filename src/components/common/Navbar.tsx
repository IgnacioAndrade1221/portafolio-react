import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { 
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header 
      className={`
        fixed left-0 w-full z-50 flex justify-between items-center 
        py-6 px-[5%] bg-black/80 backdrop-blur-md 
        transition-all duration-300
        ${isVisible ? 'top-0' : '-top-24'} 
      `}
    >
      <a 
        href="#" 
        className="text-2xl font-extrabold text-primary-red transition-transform duration-500 hover:scale-110"
      >
        Ignacio Andrade
      </a>
      <nav className="hidden md:flex">
        <a 
          href="#"
          className="text-base font-medium text-white ml-12 border-b-2 border-primary-red transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.home')}
        </a>
        <a 
          href="#experiencia"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.experience')}
        </a>
        <a 
          href="#skills"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.skills')}
        </a>
        <a 
          href="#projects"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.projects')}
        </a>
        <a 
          href="#education"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.education')}
        </a>
        <a 
          href="#contact"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.contact')} 
        </a>
      </nav>
      
    </header>
  );
};