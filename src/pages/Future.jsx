import React from 'react';
import SEO from '../components/SEO';
import CommonHero from '../components/CommonHero';
import FutureDirection from '../components/FutureDirection';
import FutureSmartConnections from '../components/FutureSmartConnections';
import FutureBusinessOpportunities from '../components/FutureBusinessOpportunities';
import FutureNetworkingExperience from '../components/FutureNetworkingExperience';
import FutureGrowthIntelligence from '../components/FutureGrowthIntelligence';

const Future = () => {
  return (
    <main>
      <SEO />
      <CommonHero title="A Smarter Journey for Business Growth" />
      <FutureDirection />
      <FutureSmartConnections />
      <FutureBusinessOpportunities />
      <FutureNetworkingExperience />
      <FutureGrowthIntelligence />
    </main>
  );
};

export default Future;
