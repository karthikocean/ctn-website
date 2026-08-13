import React from 'react';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import CommonHero from '../components/CommonHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AboutPurpose from '../components/AboutPurpose';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutDifference from '../components/AboutDifference';

const About = () => {
  return (
    <main>
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
      />
      <CommonHero />
      <AboutWhoWeAre />
      <AboutPurpose />
      <AboutMissionVision />
      <AboutDifference />
    </main>
  );
};

export default About;
