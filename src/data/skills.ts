import python from '../assets/images/python.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css-3.png';
import js from '../assets/images/js.png';
import java from '../assets/images/java.png';
import sql from '../assets/images/sql.png';
import php from '../assets/images/php.png';
import csharp from '../assets/images/Csharp_Logo.png';

import react from '../assets/images/react.png';
import angular from '../assets/images/angular.png';
import ionic from '../assets/images/ionic.png';
import jquery from '../assets/images/jquery.png';
import bootstrap from '../assets/images/bootstrap.png';
import laravel from '../assets/images/laravel.png';
import tailwind from '../assets/images/tailwindcss.png';
import vue from '../assets/images/vue-js.png';
import net from '../assets/images/netframework.png';

import git from '../assets/images/git.png';
import docker from '../assets/images/docker.png';
import aws from '../assets/images/aws.png';

export type Skill = {
  name: string;
  icon: string;
};


export const languages: Skill[] = [
  { name: "Python", icon: python },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Java", icon: java },
  { name: "SQL", icon: sql },
  { name: "PHP", icon: php },
  { name: "C#", icon: csharp },
];

export const frameworks: Skill[] = [
  { name: "React", icon: react },
  { name: "Angular", icon: angular },
  { name: "Ionic", icon: ionic },
  { name: "JQuery", icon: jquery },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Laravel", icon: laravel },
  { name: "TailwindCSS", icon: tailwind },
  { name: "Vue.js", icon: vue },
  { name: ".NET", icon: net },
];

export const tools: Skill[] = [
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
];