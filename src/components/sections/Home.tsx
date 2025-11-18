import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation'; // Importamos la animación

// Importamos tu foto de perfil (Vite lo maneja automáticamente)
import profilePic from '../../assets/images/fotomiajeje.PNG';

export const Home = () => {
  const { t } = useTranslation();

  // Obtenemos el array de roles desde el JSON de i18next
  // Esto es TypeScript: le decimos que esperamos un (string | number)[]
  const roles = t('home.typing_roles', { returnObjects: true }) as (string | number)[];

  return (
    // Reemplazo de 'section.home'
    // 'min-h-screen': asegura que ocupe toda la pantalla
    // 'flex-col md:flex-row': en móvil es columna, en desktop es fila
    // 'pt-32 pb-16 px-[5%]': padding para que no choque con el Navbar
    <section 
      id="home" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 pt-32 pb-16 px-[5%] bg-black"
    >
      
      {/* Reemplazo de 'home-img' */}
      <div className="home-img flex-1 flex justify-center">
        <img 
          src={profilePic} 
          alt="Ignacio Andrade" 
          // 'w-80': ancho fijo, 'rounded-full': border-radius 50%
          // 'shadow-lg shadow-primary-red/50': tu 'box-shadow' de CSS
          // 'transition-transform duration-300 hover:scale-105'
          className="w-full max-w-sm md:w-80 lg:w-96 rounded-full shadow-lg shadow-primary-red/50 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Reemplazo de 'home-content' */}
      <div className="home-content flex-1 text-center md:text-left">
        {/* Saludo */}
        <h1 className="text-4xl lg:text-5xl font-bold">
          {t('home.greeting')} <span className="text-primary-red">Ignacio</span>
        </h1>
        
        {/* Animación de Typing */}
        <h3 className="text-3xl lg:text-4xl font-bold my-4">
          {t('home.role')}{' '}
          <span className="text-primary-red">
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h3>
        
        {/* Descripción */}
        <p className="text-base lg:text-lg my-8">
          {t('home.description')}
        </p>

        {/* Reemplazo de 'social-icons' */}
        <div className="social-icons flex justify-center md:justify-start gap-4 my-8">
          <a 
            target="_blank" 
            href="https://www.linkedin.com/in/ignacioalexis"
            className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary-red text-primary-red text-2xl rounded-full transition-all duration-300 hover:text-black hover:bg-primary-red hover:shadow-lg hover:shadow-primary-red/50 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            target="_blank" 
            href="https://github.com/IgnacioAndrade1221"
            className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary-red text-primary-red text-2xl rounded-full transition-all duration-300 hover:text-black hover:bg-primary-red hover:shadow-lg hover:shadow-primary-red/50 hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Reemplazo de 'btn' */}
        <a 
          target="_blank" 
          href="https://www.linkedin.com/feed/update/urn:li:activity:7285829849175261185/" 
          className="inline-block py-3 px-8 bg-black border-2 border-primary-red rounded-full text-primary-red text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-primary-red hover:text-black hover:shadow-lg hover:shadow-primary-red/50 hover:scale-105"
        >
          {t('home.cv_button')}
        </a>
      </div>
    </section>
  );
};