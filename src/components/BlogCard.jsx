import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={blog.image} alt={blog.title} className={styles.blogImage} />
      <h3 className={styles.title}>{blog.title}</h3>
    </div>
  );
};

export default BlogCard;
