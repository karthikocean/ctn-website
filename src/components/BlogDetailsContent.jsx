import React from 'react';
import styles from '../styles/BlogDetailsContent.module.css';

const BlogDetailsContent = ({ content }) => {
  if (!content) return null;

  // Fallback if content is a simple string instead of structured array
  if (typeof content === 'string') {
    return (
      <article className={styles.articleBody}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div
              className={styles.rawContent}
              dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.articleBody}>
      <div className="container">
        <div className={styles.contentWrapper}>
          {content.map((block, idx) => {
            switch (block.type) {
              case 'heading2':
                return (
                  <h2 key={idx} className={styles.heading2}>
                    {block.text}
                  </h2>
                );

              case 'heading3':
                return (
                  <h3 key={idx} className={styles.heading3}>
                    {block.text}
                  </h3>
                );

              case 'quote':
                return (
                  <blockquote key={idx} className={styles.quoteBlock}>
                    <p className={styles.quoteText}>{block.text}</p>
                  </blockquote>
                );

              case 'list':
                return (
                  <ul key={idx} className={styles.bulletList}>
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );

              case 'paragraph':
              default:
                return (
                  <p
                    key={idx}
                    className={styles.paragraph}
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  />
                );
            }
          })}
        </div>
      </div>
    </article>
  );
};

export default BlogDetailsContent;
