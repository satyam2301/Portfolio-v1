import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;
