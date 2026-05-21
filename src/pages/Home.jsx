import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Download />
      <Contact />
    </main>
  );
};

export default Home;
