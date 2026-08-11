import React, { useState, useEffect } from 'react';
import CommonHero from '../components/CommonHero';
import FranchiseOpportunity from '../components/FranchiseOpportunity';
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
      {/* 01. Common Hero */}
      <CommonHero title="Franchise" />

      {/* 02. Franchise Opportunity */}
      <FranchiseOpportunity onApplyClick={handleOpenModal} />

      {/* 03. Why Franchise / FAQ */}
      <FranchiseFAQ />

      {/* 04. Franchise Application Popup */}
      <FranchiseFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default Franchise;
