import type { Skill } from '../../data/skills';

type Props = {
  title: string;
  skills: Skill[];
};

export const SkillCategory = ({ title, skills }: Props) => {
  return (
    <div className="bg-card-bg p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">

      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      <ul className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <li key={skill.name}>
            <img 
              src={skill.icon} 
              alt={skill.name}
              title={skill.name}
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-125"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};