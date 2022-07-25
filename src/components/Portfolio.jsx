import React from 'react';
import cryptin from '../assets/portfolio/cryptin.png';
import drowsiness from '../assets/portfolio/drowsiness.png';
import WeatherApp from '../assets/portfolio/weather.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cryptin,
      href: 'https://github.com/satyam2301/Cryptin',
      href1: 'https://cryptin-cryptotracker.netlify.app/',
      text: 'It is a Cryptocurrency price tracking app with the feature of saving coin to your watchlist so that it will become easy for you to track your faviourite coin from the next time. ',
    },
    {
      id: 2,
      src: WeatherApp,
      href: 'https://github.com/satyam2301/weatherapp-reactjs',
      href1: '#',
      text: 'It is a kind of weather widget with features like wind speed, humidity, hourly weather condition and weekly weather condition as well with both the scales. ',
    },
    {
      id: 3,
      src: drowsiness,
      href: '#',
      href1: '#',
      text: 'It is a drowsiness detection project using eye blink sensor & adruino as microcontroller which is programmed in a way if driver blink his eye for more than 1 second then it will beep.',
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-max bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-16 px-4">
          <p className="text-4xl font-bold text-gray-500 sm:text-7xl md:text-9xl">
            Portfolio
          </p>
          <p className="text-base font-bold text-white sm:text-3xl">
            Checkout a few of my works
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 px-4 sm:grid-cols-2 gap-x-6">
          {portfolios.map(({ id, src, href, href1, text }) => (
            <div key={id} className="mb-12 lg:mb-0">
              <div
                className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                style={{ backgroundPosition: '50%' }}
              >
                <img src={src} alt="" className="w-full" />
                <a href={href1}>
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </div>

              <p class="text-gray-500">{text}</p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href={href}
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r  from-purple-500 to-pink-500 hover:bg-indigo-700  md:text-base md:px-8"
                  >
                    Code
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-6">
                  <a
                    href={href1}
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r  from-purple-500 to-pink-500 hover:bg-indigo-700  md:px-8"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
