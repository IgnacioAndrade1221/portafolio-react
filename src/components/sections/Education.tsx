import { useTranslation } from 'react-i18next';

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 px-[5%] bg-black">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-red">
          {t('education.title')}
        </h1>
      </div>

      <div className="bg-card-bg p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary-red mb-2">
          {t('education.institution')} 
          <span className="font-semibold text-white"> ({t('education.date')})</span>
        </h2>
        <p className="text-base text-gray-200 leading-relaxed">
          {t('education.description')}
        </p>
      </div>

    </section>
  );
};