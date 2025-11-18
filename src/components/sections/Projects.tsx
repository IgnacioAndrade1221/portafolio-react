import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-[5%] bg-dark-bg">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-red">
          {t('projects.title')}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};