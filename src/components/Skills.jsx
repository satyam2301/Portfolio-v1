import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import git from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import figma from '../assets/figma.png';
import vscode from '../assets/vscode.png';
import firebase from '../assets/firebase.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
    },
    {
      id: 6,
      src: vscode,
      title: 'VS Code',
    },
    {
      id: 7,
      src: figma,
      title: 'Figma',
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
    },
    {
      id: 9,
      src: git,
      title: 'Git',
    },
    {
      id: 10,
      src: firebase,
      title: 'Firebase',
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-max bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-16 px-4">
          <p className="text-4xl font-bold text-gray-700 sm:text-7xl md:text-9xl">
            Skills & Tools
          </p>
          <p className="text-base font-bold text-white sm:text-3xl">
            The skills, tools and technologies I use to bring product to life :
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
