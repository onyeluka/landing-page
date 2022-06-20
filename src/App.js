
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Support } from './components/Support';
import One from './components/One';

import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
   
      <Navbar/>
    <Hero/>
    <About/>
    <Support/>
    <One/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;
