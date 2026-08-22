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

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const { pathname } = useLocation();
  const canonicalPath = getCanonicalPath(pathname);
  const currentSeo = seoData[canonicalPath] || {};

  // Direct props override default static metadata lookup
  const displayTitle = title || currentSeo.title || "Business Networking Platform | Trusted Network";
  const displayDescription =
    description ||
    currentSeo.description ||
    "Trusted Network is a business networking platform to connect with business owners, discover opportunities and grow your professional network across India.";
  const displayKeywords =
    keywords || currentSeo.keywords || "business networking, business network, business owners network";
  const displayImage = image || "https://trustednetwork.in/banner.svg";
  const displayUrl = url || (typeof window !== "undefined" ? window.location.href : `https://trustednetwork.in${pathname}`);

  useEffect(() => {
    if (displayTitle) {
      document.title = displayTitle;
    }

    const setMetaTag = (selector, attrName, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (displayDescription) {
      setMetaTag('meta[name="description"]', 'name', 'description', displayDescription);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', displayDescription);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', displayDescription);
    }

    if (displayKeywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', displayKeywords);
    }

    if (displayTitle) {
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', displayTitle);
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', displayTitle);
    }

    if (displayImage) {
      setMetaTag('meta[property="og:image"]', 'property', 'og:image', displayImage);
      setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', displayImage);
    }

    if (displayUrl) {
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', displayUrl);
    }

    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  }, [displayTitle, displayDescription, displayKeywords, displayImage, displayUrl, type]);

  return (
    <Helmet>
      {displayTitle && <title>{displayTitle}</title>}
      {displayDescription && <meta name="description" content={displayDescription} />}
      {displayKeywords && <meta name="keywords" content={displayKeywords} />}
      {displayTitle && <meta property="og:title" content={displayTitle} />}
      {displayDescription && <meta property="og:description" content={displayDescription} />}
      {displayImage && <meta property="og:image" content={displayImage} />}
      {displayUrl && <meta property="og:url" content={displayUrl} />}
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      {displayTitle && <meta name="twitter:title" content={displayTitle} />}
      {displayDescription && <meta name="twitter:description" content={displayDescription} />}
      {displayImage && <meta name="twitter:image" content={displayImage} />}
    </Helmet>
  );
};

export default SEO;
export { getCanonicalPath };
