import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Hook para traducir

export const Navbar = () => {
  const { t } = useTranslation(); // Inicializa el hook de traducción

  // --- Reemplazo de menu.js ---
  // Lógica para ocultar el Navbar al hacer scroll hacia abajo
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // Si la posición actual es mayor que la anterior (scrolling down)
    if (window.scrollY > lastScrollY && window.scrollY > 100) { 
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Actualiza la última posición
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    
    // Limpia el listener cuando el componente se "desmonta"
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  // --- Fin del reemplazo de menu.js ---


  // --- Reemplazo de header.html + style1.css ---
  // Usamos clases de Tailwind que equivalen a tu CSS
  // 'fixed top-0 w-full' = position: fixed, top: 0, width: 100%
  // 'flex justify-between items-center' = display: flex, justify-content: space-between, ...
  // 'bg-black/80 backdrop-blur-md' = background-color: rgba(0,0,0,0.8), backdrop-filter: blur(10px)
  // 'transition-all duration-300' = transition: all 0.3s ease
  
  return (
    <header 
      className={`
        fixed left-0 w-full z-50 flex justify-between items-center 
        py-6 px-[5%] bg-black/80 backdrop-blur-md 
        transition-all duration-300
        ${isVisible ? 'top-0' : '-top-24'} 
      `}
    >
      {/* Logo */}
      <a 
        href="#" 
        className="text-2xl font-extrabold text-primary-red transition-transform duration-500 hover:scale-110"
      >
        Ignacio Andrade
      </a>

      {/* Navegación */}
      {/* Ocultamos en móvil (hidden) y mostramos en pantallas grandes (md:flex) */}
      <nav className="hidden md:flex">
        <a 
          href="#"
          className="text-base font-medium text-white ml-12 border-b-2 border-primary-red transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.home')} {/* <-- Texto desde i18n */}
        </a>
        <a 
          href="#experiencia"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.experience')} {/* <-- Texto desde i18n */}
        </a>
        <a 
          href="#skills"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.skills')} {/* <-- Texto desde i18n */}
        </a>
        <a 
          href="#projects"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.projects')} {/* <-- Texto desde i18n */}
        </a>
        <a 
          href="#education"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.education')} {/* <-- Texto desde i18n */}
        </a>
        <a 
          href="#contact"
          className="text-base font-medium text-white ml-12 border-b-2 border-transparent transition-all duration-300 hover:text-primary-red hover:border-primary-red"
        >
          {t('nav.contact')} {/* <-- Texto desde i18n */}
        </a>
      </nav>
      
      {/* TODO: Aquí irá el botón de menú hamburguesa para móviles */}
    </header>
  );
};