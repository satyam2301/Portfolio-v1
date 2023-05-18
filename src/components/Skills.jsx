import React from 'react';
import { motion } from 'framer-motion';
import { fadeInTopVariant, fadeInBottomVariant } from '../utils/Variants';
import { techs } from '../utils/Data';

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-max bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <motion.div
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          className="pb-16 px-4"
        >
          <p className="text-4xl font-bold text-gray-700 sm:text-7xl md:text-9xl">
            Skills & Tools
          </p>
          <p className="text-base font-bold text-white sm:text-3xl">
            The skills, tools and technologies I use to bring product to life :
          </p>
        </motion.div>

        <motion.div
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg `}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
