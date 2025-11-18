import { useTranslation } from 'react-i18next';
import { SkillCategory } from '../ui/SkillCategory';

import { languages, frameworks, tools } from '../../data/skills';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-[5%] bg-black">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-red">
          {t('skills.title')}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

        <SkillCategory 
          title={t('skills.languages')} 
          skills={languages} 
        />

        <SkillCategory 
          title={t('skills.frameworks')} 
          skills={frameworks} 
        />

        <SkillCategory 
          title={t('skills.tools')} 
          skills={tools} 
        />

      </div>
    </section>
  );
};