import React from 'react';
import CommonHero from '../components/CommonHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AboutPurpose from '../components/AboutPurpose';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutDifference from '../components/AboutDifference';
import AboutGrowthFlow from '../components/AboutGrowthFlow';
import AboutNetworkStats from '../components/AboutNetworkStats';

const About = () => {
  return (
    <main>
      <CommonHero />
      <AboutWhoWeAre />
      <AboutPurpose />
      <AboutMissionVision />
      <AboutDifference />
      {/* <AboutGrowthFlow />
      <AboutNetworkStats /> */}
    </main>
  );
};

export default About;
