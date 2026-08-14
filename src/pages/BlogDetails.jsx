import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertCircle } from 'react-icons/fi';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import { blogs as staticBlogs } from '../data/blogsData';
import { getBlogByIdOrSlug } from '../apis/blogApi';
import BlogDetailsHeader from '../components/BlogDetailsHeader';
import BlogDetailsContent from '../components/BlogDetailsContent';
import RelatedBlogs from '../components/RelatedBlogs';
import LoadingState from '../components/LoadingState';
import styles from '../styles/BlogDetails.module.css';

const BlogDetails = () => {
  const { id, slug } = useParams();
  const targetKey = slug || id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchBlog = async () => {
      setLoading(true);
      const res = await getBlogByIdOrSlug(targetKey);
      if (res?.status && res.data) {
        setBlog(res.data);
      } else {
        const foundLocal = staticBlogs.find((b) => b.slug === targetKey || b.id === targetKey);
        setBlog(foundLocal || null);
      }
      setLoading(false);
    };

    if (targetKey) {
      fetchBlog();
    }
  }, [targetKey]);

  if (loading) {
    return (
      <div className={styles.detailsPage}>
        <LoadingState message="Loading blog article..." />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.notFoundContainer}>
        <SEO
          title={seoData.blogs.title}
          description={seoData.blogs.description}
          keywords={seoData.blogs.keywords}
        />
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

  const relatedBlogs = staticBlogs.filter((b) => {
    if (b.id === blog.id || b.slug === blog.slug) return false;
    if (blog.relatedIds && blog.relatedIds.includes(b.id)) return true;
    return b.category === blog.category;
  });

  return (
    <div className={styles.detailsPage}>
      <SEO
        title={`${blog.title} | Trusted Network`}
        description={blog.excerpt || seoData.blogs.description}
        keywords={`${blog.category || 'business'}, business blog, trusted network`}
      />
      <BlogDetailsHeader blog={blog} />
      <BlogDetailsContent content={blog.content} />
      {relatedBlogs.length > 0 && (
        <RelatedBlogs currentBlogId={blog.id} relatedBlogs={relatedBlogs} />
      )}
    </div>
  );
};

export default BlogDetails;
