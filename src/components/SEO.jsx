import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoData from '../data/seoData';

// Helper to resolve alias routes to canonical SEO pathnames
const getCanonicalPath = (path) => {
  const p = path.toLowerCase().replace(/\/$/, '');
  if (p === '' || p === '/') return '/';
  if (p === '/pricing') return '/membership-plans';
  if (p === '/privacy') return '/privacy-policy';
  if (p === '/terms') return '/terms-condition';
  if (p === '/refund') return '/refund-policy';
  return p;
};

const SEO = ({ title, description, keywords }) => {
  const { pathname } = useLocation();
  const canonicalPath = getCanonicalPath(pathname);
  const currentSeo = seoData[canonicalPath] || {};

  // Direct props override default static metadata lookup
  const displayTitle = title || currentSeo.title;
  const displayDescription = description || currentSeo.description;
  const displayKeywords = keywords || currentSeo.keywords;

  useEffect(() => {
    if (displayTitle) {
      document.title = displayTitle;
    }

    if (displayDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', displayDescription);
    }

    if (displayKeywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', displayKeywords);
    }
  }, [displayTitle, displayDescription, displayKeywords]);

  return (
    <Helmet>
      {displayTitle && <title>{displayTitle}</title>}
      {displayDescription && <meta name="description" content={displayDescription} />}
      {displayKeywords && <meta name="keywords" content={displayKeywords} />}
    </Helmet>
  );
};

export default SEO;
export { getCanonicalPath };
