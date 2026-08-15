import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import CommonHero from '../components/CommonHero';
import FranchiseOpportunity from '../components/FranchiseOpportunity';
import FranchiseBenefits from '../components/FranchiseBenefits';
import FranchiseHowItWorks from '../components/FranchiseHowItWorks';
import FranchiseFAQ from '../components/FranchiseFAQ';
import FranchiseFormModal from '../components/FranchiseFormModal';

const Franchise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main>
      <SEO
        title={seoData.franchise.title}
        description={seoData.franchise.description}
        keywords={seoData.franchise.keywords}
      />
      <CommonHero title="Franchise" />
      <FranchiseOpportunity onApplyClick={handleOpenModal} />
      <FranchiseBenefits />
      <FranchiseHowItWorks />
      <FranchiseFAQ />
      <FranchiseFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default Franchise;
