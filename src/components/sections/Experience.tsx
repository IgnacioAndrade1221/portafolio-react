import { useTranslation } from 'react-i18next';
import { ExperienceItem } from '../ui/ExperienceItem'; 
import type { Job } from '../../types';

export const Experience = () => {
  const { t } = useTranslation();

  const title = t('experience.title');
  const jobs = t('experience.jobs', { returnObjects: true }) as Job[];

  return (
    <section id="experiencia" className="py-20 px-[5%] bg-dark-bg">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-red">
          {title}
        </h1>
      </div>

      <div className="education-list">
        {jobs.map((job, index) => (
          <ExperienceItem key={index} job={job} />
        ))}
      </div>
      
    </section>
  );
};