import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from '../styles/FranchiseFAQ.module.css';

const franchiseFaqs = [
  {
    question: 'Why should I choose a Trusted Network franchise?',
    answer:
      'Trusted Network provides a proven networking framework, brand reputation, technology platform, and continuous operational support to help you build a thriving local business ecosystem.'
  },
  {
    question: 'Who can become a franchise partner?',
    answer:
      'Entrepreneurs, business leaders, corporate executives, and community builders with a strong local network and a passion for empowering local businesses can become franchise partners.'
  },
  {
    question: 'What support does Trusted Network provide?',
    answer:
      'We offer comprehensive onboarding, marketing collateral, event management software, member management tools, and ongoing mentorship to ensure your franchise success.'
  },
  {
    question: 'How can I apply for a franchise?',
    answer:
      'Simply click the "Apply Now" button on this page, fill out the franchise application form, and our franchise expansion team will reach out to schedule an initial discovery call.'
  },
  {
    question: 'Can I operate the franchise in my city?',
    answer:
      'Yes, franchise territories are assigned on an exclusive city/region basis. Contact us to check territory availability for your city.'
  }
];

const FranchiseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        {/* Header Area */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>WHY FRANCHISE?</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Why Become a Trusted Network Franchise Partner?
          </h2>

          <p className={styles.sectionDescription}>
            Discover the opportunity to build a local business community with the support of the Trusted Network ecosystem.
          </p>
        </div>

        {/* Centered Accordion List */}
        <div className={styles.accordionContainer}>
          <div className={styles.accordionList}>
            {franchiseFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
                >
                  <button
                    className={styles.questionButton}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`franchise-faq-answer-${index}`}
                    id={`franchise-faq-question-${index}`}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={styles.toggleIconWrapper}>
                      {isOpen ? (
                        <FiMinus className={styles.toggleIcon} />
                      ) : (
                        <FiPlus className={styles.toggleIcon} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`franchise-faq-answer-${index}`}
                      aria-labelledby={`franchise-faq-question-${index}`}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseFAQ;
