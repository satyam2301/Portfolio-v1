import React, { lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './components/Home';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const SocialLinks = lazy(() => import('./components/SocialLinks'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <NavBar />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Skills />
        <Portfolio />
        <Footer />
        <SocialLinks />
      </Suspense>
    </div>
  );
};

export default App;
