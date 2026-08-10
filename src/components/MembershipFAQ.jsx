import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from '../styles/MembershipFAQ.module.css';

const MembershipFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is included in each membership plan?",
      answer: "Each plan includes access to network connections, member profiles, activity posts, and business discovery features scaled according to your tier.",
    },
    {
      question: "Which membership plan is best for a new business?",
      answer: "The Startup Plan is ideal for new entrepreneurs looking to build their initial network and establish foundational connections.",
    },
    {
      question: "Can I upgrade my membership later?",
      answer: "Yes, you can upgrade your membership at any time as your business grows and your networking needs expand.",
    },
    {
      question: "How does membership payment work?",
      answer: "Memberships are billed annually, giving you uninterrupted access to platform networking and business features for the full year.",
    },
    {
      question: "Can I change my membership plan?",
      answer: "Yes, you can modify or switch your membership plan anytime to match your changing business goals.",
    },
    {
      question: "What happens after I choose a membership plan?",
      answer: "After selecting your plan, your account privileges and networking features will be activated immediately.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        {/* Centered Header Area */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>MEMBERSHIP FAQ</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions
          </h2>

          <p className={styles.sectionDescription}>
            Have questions about our membership plans? Find answers to the most common questions below.
          </p>
        </div>

        {/* Centered Accordion List */}
        <div className={styles.accordionContainer}>
          <div className={styles.accordionList}>
            {faqs.map((faq, index) => {
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
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
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
                      id={`faq-answer-${index}`}
                      aria-labelledby={`faq-question-${index}`}
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

export default MembershipFAQ;

