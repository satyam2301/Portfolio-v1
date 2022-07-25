import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gradient-to-b from-black via-black to-gray-800 sm:p-6 ">
        <div className="md:flex md:justify-between"></div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex items-center justify-center">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2022. Made By Satyam Kumar
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
