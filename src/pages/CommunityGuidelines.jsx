import React, { useState } from 'react';
import SEO from '../components/SEO';
import CommonHero from '../components/CommonHero';
import styles from '../styles/CommunityGuidelines.module.css';

const faqData = [
  {
    id: 1,
    question: "What can I do on Trusted Network?",
    answer: "You can connect with verified business professionals, share business requirements, exchange recommendations, build professional relationships, and discover relevant business opportunities."
  },
  {
    id: 2,
    question: "Can I share my business requirements?",
    answer: "Yes. Members can share genuine business requirements to find relevant connections, services, products, or collaboration opportunities."
  },
  {
    id: 3,
    question: "Can I recommend another business?",
    answer: "Yes. You can recommend businesses or professionals based on genuine business experience and trusted relationships."
  },
  {
    id: 4,
    question: "Can I promote my business?",
    answer: "Yes. You can share relevant business information, services, achievements, offers, and professional updates without unnecessarily spamming other members."
  },
  {
    id: 5,
    question: "Can I contact other members?",
    answer: "Yes. You can connect and communicate with other members for genuine business networking, collaboration, referrals, and professional opportunities."
  },
  {
    id: 6,
    question: "What kind of content should I share?",
    intro: "Share content that is:",
    list: [
      "Business-related",
      "Genuine and useful",
      "Professional",
      "Relevant to the community",
      "Respectful to other members"
    ]
  },
  {
    id: 7,
    question: "What content is not allowed?",
    intro: "Do not share:",
    list: [
      "Fake or misleading information",
      "Spam or repeated promotional content",
      "Abusive or offensive content",
      "Harassment or threats",
      "Illegal content",
      "Content that violates another person's privacy",
      "Fraudulent business claims"
    ]
  },
  {
    id: 8,
    question: "Can I send repeated promotional messages?",
    answer: "No. Avoid unsolicited or excessive promotional messages. Use the platform for meaningful business conversations rather than repeated advertising."
  },
  {
    id: 9,
    question: "How should I treat other members?",
    answer: "Always communicate respectfully and professionally. Differences in opinions or business interests should not become personal attacks, harassment, or abusive behavior."
  },
  {
    id: 10,
    question: "Can I share another person's personal information?",
    answer: "No. Do not share private contact details, documents, business information, or other personal information without appropriate permission."
  },
  {
    id: 11,
    question: "What should I do if I see inappropriate content?",
    answer: "If you notice spam, misleading information, harassment, or other inappropriate activity, report it through the available reporting/support channel so the team can review it."
  },
  {
    id: 12,
    question: "What happens if someone violates the guidelines?",
    answer: "Trusted Network may review reported activity and take appropriate action, which can include removing content, restricting activity, suspending access, or taking other necessary action depending on the violation."
  }
];

const CommunityGuidelines = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.pageWrapper}>
      <SEO />
      <CommonHero title="Community Guidelines" />

      <section className={styles.faqSection} aria-label="Community Guidelines FAQ">
        <div className={styles.container}>
          <div className={styles.headerWrapper}>
            <div className={styles.sectionBadge}>
              <div className={styles.badgeLine} />
              <span>TRUSTED NETWORK COMMUNITY</span>
            </div>
            <h2 className={styles.sectionTitle}>How to Use Trusted Network Responsibly</h2>
            <p className={styles.sectionDescription}>
              Follow these simple guidelines to make Trusted Network a professional, respectful, and valuable business networking community.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            <div className={styles.accordionList}>
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={faq.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
                  >
                    <button
                      type="button"
                      id={questionId}
                      className={styles.questionButton}
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={styles.toggleIconWrapper} aria-hidden="true">
                        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
                      </span>
                    </button>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}
                    >
                      <div className={styles.answerInner}>
                        {faq.answer && (
                          <p className={styles.answerText}>{faq.answer}</p>
                        )}
                        {faq.intro && (
                          <p className={styles.answerIntro}>{faq.intro}</p>
                        )}
                        {faq.list && (
                          <ul className={styles.answerList}>
                            {faq.list.map((item, i) => (
                              <li key={i} className={styles.answerListItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityGuidelines;
