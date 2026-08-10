import React from 'react';
import CommonHero from '../components/CommonHero';
import FutureDirection from '../components/FutureDirection';
import FutureSmartConnections from '../components/FutureSmartConnections';
import FutureBusinessOpportunities from '../components/FutureBusinessOpportunities';
import FutureNetworkingExperience from '../components/FutureNetworkingExperience';
import FutureGrowthIntelligence from '../components/FutureGrowthIntelligence';

const Future = () => {
  return (
    <main>
      <CommonHero title="The Future of Business Networking" />
      <FutureDirection />
      <FutureSmartConnections />
      <FutureBusinessOpportunities />
      <FutureNetworkingExperience />
      <FutureGrowthIntelligence />
    </main>
  );
};

export default Future;
