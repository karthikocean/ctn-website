import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogsData';
import styles from '../styles/BlogDetails.module.css';
import BlogCard from '../components/BlogCard';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Blog Not Found</h2>
        <Link to="/blogs" className={styles.backLink}>← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero Banner – image only, no overlay text */}
      <section className={styles.hero} style={{ backgroundImage: `url(${blog.image})` }}>
        <div className={styles.overlay} />
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.articleTitle}>{blog.title}</h2>
          <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />
        </div>
      </section>

      {/* Related Blogs */}
      <section className={styles.related}>
        <h3 className={styles.relatedTitle}>Related Blogs</h3>
        <div className={styles.relatedGrid}>
          {blog.relatedIds.map((relId) => {
            const rel = blogs.find((b) => b.id === relId);
            return rel ? <BlogCard key={rel.id} blog={rel} /> : null;
          })}
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
