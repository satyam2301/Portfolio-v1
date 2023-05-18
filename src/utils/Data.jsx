import html from '../assets/html.webp';
import css from '../assets/css.webp';
import javascript from '../assets/javascript.webp';
import reactImage from '../assets/react.webp';
import github from '../assets/github.webp';
import git from '../assets/git.webp';
import tailwind from '../assets/tailwind.webp';
import figma from '../assets/figma.webp';
import vscode from '../assets/vscode.webp';
import firebase from '../assets/firebase.webp';
import cpp from '../assets/cpp.webp';
import redux from '../assets/redux-icon.webp';
import node from '../assets/node.webp';
import cryptin from '../assets/portfolio/cryptin.webp';
import drowsiness from '../assets/portfolio/drowsiness.webp';
import WeatherApp from '../assets/portfolio/weather.webp';

export const techs = [
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
    src: cpp,
    title: 'CPP',
  },
  {
    id: 5,
    src: reactImage,
    title: 'React',
  },
  {
    id: 6,
    src: redux,
    title: 'Redux',
  },
  {
    id: 7,
    src: node,
    title: 'Node js',
  },
  {
    id: 8,
    src: tailwind,
    title: 'Tailwind',
  },
  {
    id: 9,
    src: vscode,
    title: 'VS Code',
  },
  {
    id: 10,
    src: figma,
    title: 'Figma',
  },
  {
    id: 11,
    src: github,
    title: 'GitHub',
  },
  {
    id: 12,
    src: git,
    title: 'Git',
  },
  {
    id: 13,
    src: firebase,
    title: 'Firebase',
  },
];

export const portfolios = [
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
