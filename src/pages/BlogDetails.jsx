import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertCircle } from 'react-icons/fi';
import { blogs } from '../data/blogsData';
import BlogDetailsHeader from '../components/BlogDetailsHeader';
import BlogDetailsContent from '../components/BlogDetailsContent';
import RelatedBlogs from '../components/RelatedBlogs';
import styles from '../styles/BlogDetails.module.css';

const BlogDetails = () => {
  const { id, slug } = useParams();
  const targetKey = slug || id;

  // Find matching blog by slug or id
  const blog = blogs.find((b) => b.slug === targetKey || b.id === targetKey);

  // Scroll to top whenever URL route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [targetKey]);

  if (!blog) {
    return (
      <div className={styles.notFoundContainer}>
        <div className="container">
          <div className={styles.notFoundCard}>
            <FiAlertCircle className={styles.notFoundIcon} />
            <h1 className={styles.notFoundTitle}>Blog Article Not Found</h1>
            <p className={styles.notFoundDesc}>
              The business article you are looking for might have been moved, renamed, or is currently unavailable.
            </p>
            <Link to="/blogs" className={styles.backBtn}>
              <FiArrowLeft />
              <span>Back to All Blogs</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get related blogs by specified relatedIds or matching category
  const relatedBlogs = blogs.filter((b) => {
    if (b.id === blog.id || b.slug === blog.slug) return false;
    if (blog.relatedIds && blog.relatedIds.includes(b.id)) return true;
    return b.category === blog.category;
  });

  return (
    <div className={styles.detailsPage}>
      {/* Blog Details Header: Single Back Button, Breadcrumbs, Title, Meta & Hero Image */}
      <BlogDetailsHeader blog={blog} />

      {/* Article Content: Structured Headings, Quotes, Lists, Paragraphs */}
      <BlogDetailsContent content={blog.content} />

      {/* Additional Article Visuals disabled per prompt requirement */}
      {/* <BlogDetailsImages images={blog.additionalImages} title={blog.title} /> */}

      {/* Related Blogs Carousel / Grid directly following Conclusion */}
      <RelatedBlogs currentBlogId={blog.id} relatedBlogs={relatedBlogs} />
    </div>
  );
};

export default BlogDetails;
