import React from 'react';
import SEO from '../components/SEO';
import CommonHero from "../components/CommonHero";
import Pricing from '../components/Pricing';
import MembershipFAQ from "../components/MembershipFAQ";

export default function MembershipPlans() {
  return (
    <main>
      <SEO />
      <CommonHero />
      <Pricing />
      <MembershipFAQ />
    </main>
  );
}