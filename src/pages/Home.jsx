import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MemberSharing from '../components/MemberSharing';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import BusinessImpact from '../components/BusinessImpact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <MemberSharing />
      <Benefits />
      <HowItWorks />
      {/* <Pricing /> */}
      <BusinessImpact />
      <Download />
    </main>
  );
};

export default Home;
