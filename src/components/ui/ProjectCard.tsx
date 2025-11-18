import { useTranslation } from 'react-i18next';
import type { Project } from '../../types';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="bg-card-bg p-6 md:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-8 mb-12">

      <div className="project-info flex-1 text-center lg:text-left">

        <h2 className="text-2xl font-bold text-primary-red mb-4">
          {t(project.titleKey)}
        </h2>

        <p className="text-base text-gray-200 leading-relaxed mb-6">
          {t(project.descriptionKey)}
        </p>

        <ul className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
          {project.techIcons.map((icon, index) => (
            <li key={index}>
              <img 
                src={icon} 
                alt="tech icon" 
                className="w-10 h-10 object-contain"
              />
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary-red text-4xl transition-transform duration-300 hover:scale-125"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        )}
      </div>

      <div className="project-video flex-1 w-full">
        <video controls className="w-full rounded-lg shadow-md">
          <source src={project.video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
};