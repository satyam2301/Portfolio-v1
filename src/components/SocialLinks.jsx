import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/satyam2301',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:satyamj.2301@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Satyam_Resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className=" flex flex-row top-[35%] left-0 fixed bg-gradient-to-b from-purple-500 to-pink-500">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
