import React from 'react';
import styles from '../styles/BlogDetailsContent.module.css';

const BlogDetailsContent = ({ content }) => {
  if (!content) return null;

  // 1. Handle HTML string from backend API directly without modification or splitting
  if (typeof content === 'string') {
    return (
      <article className={styles.articleBody}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div
              className={styles.rawContent}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </article>
    );
  }

  // 2. Handle Structured Block Array from backend API
  if (Array.isArray(content)) {
    if (content.length === 0) return null;

    return (
      <article className={styles.articleBody}>
        <div className="container">
          <div className={styles.contentWrapper}>
            {content.map((block, idx) => {
              if (!block) return null;

              if (typeof block === 'string') {
                return (
                  <div
                    key={idx}
                    className={styles.rawContent}
                    dangerouslySetInnerHTML={{ __html: block }}
                  />
                );
              }

              switch (block.type) {
                case 'heading1':
                case 'h1':
                  return (
                    <h1 key={idx} className={styles.heading1}>
                      {block.text}
                    </h1>
                  );

                case 'heading2':
                case 'h2':
                  return (
                    <h2 key={idx} className={styles.heading2}>
                      {block.text}
                    </h2>
                  );

                case 'heading3':
                case 'h3':
                  return (
                    <h3 key={idx} className={styles.heading3}>
                      {block.text}
                    </h3>
                  );

                case 'heading4':
                case 'h4':
                  return (
                    <h4 key={idx} className={styles.heading4}>
                      {block.text}
                    </h4>
                  );

                case 'quote':
                case 'blockquote':
                  return (
                    <blockquote key={idx} className={styles.quoteBlock}>
                      <p className={styles.quoteText}>{block.text}</p>
                    </blockquote>
                  );

                case 'list':
                case 'ul':
                  return (
                    <ul key={idx} className={styles.bulletList}>
                      {Array.isArray(block.items) &&
                        block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.listItem}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  );

                case 'ol':
                  return (
                    <ol key={idx} className={styles.numberedList}>
                      {Array.isArray(block.items) &&
                        block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.listItem}>
                            {item}
                          </li>
                        ))}
                    </ol>
                  );

                case 'image':
                case 'img':
                  return (
                    <div key={idx} className={styles.imageBlock}>
                      <img
                        src={block.src || block.url || block.image}
                        alt={block.alt || block.caption || 'Blog article image'}
                        className={styles.contentImage}
                      />
                      {block.caption && (
                        <p className={styles.imageCaption}>{block.caption}</p>
                      )}
                    </div>
                  );

                case 'html':
                case 'raw':
                  return (
                    <div
                      key={idx}
                      className={styles.rawContent}
                      dangerouslySetInnerHTML={{ __html: block.text || block.html || '' }}
                    />
                  );

                case 'paragraph':
                default:
                  return (
                    <div
                      key={idx}
                      className={styles.paragraph}
                      dangerouslySetInnerHTML={{
                        __html: block.text || block.content || '',
                      }}
                    />
                  );
              }
            })}
          </div>
        </div>
      </article>
    );
  }

  return null;
};

export default BlogDetailsContent;
