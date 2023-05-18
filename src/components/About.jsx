import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeInBottomVariant,
  fadeInRightVariant,
  fadeInLeftVariant,
} from '../utils/Variants';
import HeroImage from '../assets/profilepic.webp';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full sm:h-5/6 ">
        <motion.div
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
          className="pb-16 px-4 "
        >
          <p className="text-4xl font-bold text-gray-500 sm:text-7xl md:text-9xl">
            About
          </p>
        </motion.div>
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 sm:flex-row">
          <motion.div
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={HeroImage}
              alt="my profile"
              className="inline object-cover rounded-2xl mx-auto w-2/3 "
            />
          </motion.div>

          <motion.div
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col "
          >
            <p className="text-base font-bold text-white sm:text-3xl">
              Hi! I'm Satyam Kumar
            </p>

            <p className="text-gray-400 py-4 max-w-md">
              I am a student of Indian Institute of Information Technology,
              Dharwad persuing BTech in ECE, and i am passionate about coding,
              web development & UI/UX. I love to learn & explore new arenas.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={1000}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-purple-500 to-pink-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
