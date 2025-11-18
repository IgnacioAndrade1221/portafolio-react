import type { Project } from '../types';

import videoMeca from '../assets/videos/Mecanografia-video.mp4';
import videoBalotario from '../assets/videos/BalotarioDemo.mp4';
import videoConversor from '../assets/videos/Conversor-video.mp4';

import html from '../assets/images/html.png';
import css from '../assets/images/css-3.png';
import js from '../assets/images/js.png';
import python from '../assets/images/python.png';

export const projectsData: Project[] = [
  {
    id: "mecanografia",
    titleKey: "projects.mecanografia.title",
    descriptionKey: "projects.mecanografia.description",
    video: videoMeca,
    techIcons: [html, css, js],
    githubUrl: "https://github.com/IgnacioAndrade1221/Mecanografia"
  },
  {
    id: "balotario",
    titleKey: "projects.balotario.title",
    descriptionKey: "projects.balotario.description",
    video: videoBalotario,
    techIcons: [html, css, js, python],
  },
  {
    id: "conversor",
    titleKey: "projects.conversor.title",
    descriptionKey: "projects.conversor.description",
    video: videoConversor,
    techIcons: [html, css, js],
  }
];