import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-[5%] bg-dark-bg">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-red">
          {t('contact.title')}
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">

        <div className="bg-card-bg p-8 md:p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-primary-red mb-2">
            {t('contact.email')}
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            ignacio.andrade1221@gmail.com
          </p>

          <h2 className="text-2xl font-bold text-primary-red mb-2">
            {t('contact.phone')}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            +569 65257957
          </p>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/IgnacioAndrade1221" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-red text-4xl transition-transform duration-300 hover:scale-125 hover:text-white"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/ignacioalexis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-red text-4xl transition-transform duration-300 hover:scale-125 hover:text-white"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};