import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'skills',
    },
    {
      id: 4,
      link: 'portfolio',
    },
  ];

  const handleClick = (event, targetId) => {
    event.preventDefault();
    animateScroll.scrollTo(targetId, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed">
      <div>
        <h1 className="text-6xl font-signature ml-2">SK</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 rounded-lg hover:text-slate-700 hover:bg-slate-100 text-2xl cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth
              duration={1000}
              onClick={(event) => handleClick(event, link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-500 z-40 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen z-30 bg-black text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                to={link}
                smooth
                duration={1000}
                onClick={(event) => handleClick(event, link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
