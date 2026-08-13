import React from 'react';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import CommonHero from "../components/CommonHero";
import Pricing from '../components/Pricing';
import MembershipFAQ from "../components/MembershipFAQ";

export default function MembershipPlans() {
  return (
    <main>
      <SEO
        title={seoData.membershipPlans.title}
        description={seoData.membershipPlans.description}
        keywords={seoData.membershipPlans.keywords}
      />
      <CommonHero />
      <Pricing />
      <MembershipFAQ />
    </main>
  );
}