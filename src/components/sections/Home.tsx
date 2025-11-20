import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../assets/images/fotomiajeje.png';

export const Home = () => {
  const { t } = useTranslation();
  const roles = t('home.typing_roles', { returnObjects: true }) as (string | number)[];

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 pt-32 pb-16 px-[5%] bg-black"
    >
      
      <div className="home-img flex-1 flex justify-center">
        <img 
          src={profilePic} 
          alt="Ignacio Andrade" 
          className="w-full max-w-sm md:w-80 lg:w-96 rounded-full shadow-lg shadow-primary-red/50 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="home-content flex-1 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">
          {t('home.greeting')} <span className="text-primary-red">Ignacio</span>
        </h1>
        
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
        
        <p className="text-base lg:text-lg my-8">
          {t('home.description')}
        </p>

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