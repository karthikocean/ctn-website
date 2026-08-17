import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import MemberSharing from '../components/MemberSharing';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Download from '../components/Download';
import BusinessImpact from '../components/BusinessImpact';

const Home = () => {
  return (
    <main>
      <SEO />
      <Hero />
      <About />
      <MemberSharing />
      <Benefits />
      {/* <HowItWorks /> */}
      <BusinessImpact />
      <Download />
    </main>
  );
};

export default Home;
