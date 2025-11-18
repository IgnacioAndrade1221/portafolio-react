import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-[5%] bg-card-bg text-center text-gray-400">
      <p className="text-base">
        {t('footer.created_by')} © {currentYear}
      </p>
    </footer>
  );
};