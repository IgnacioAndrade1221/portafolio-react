export type Job = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  video: string;
  techIcons: string[];
  githubUrl?: string;
};