import type { Job } from '../../types';

type Props = {
  job: Job;
};

export const ExperienceItem = ({ job }: Props) => {
  return (
    <div className="bg-card-bg p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto mb-6">

      <h2 className="text-2xl font-bold text-primary-red mb-2">
        {job.title} - <span className="font-semibold text-white">{job.company}</span>
      </h2>
      <p className="text-lg text-gray-400 mb-4">{job.date}</p>

      <p className="text-base text-gray-200 leading-relaxed">
        {job.description}
      </p>
    </div>
  );
};