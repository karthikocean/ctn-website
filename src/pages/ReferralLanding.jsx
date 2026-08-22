import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { APP_CONFIG } from '../config/config';
import styles from '../styles/ReferralLanding.module.css';

const checkIsApple = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  const platform = navigator.platform || '';
  return (
    /iPhone|iPad|iPod|Macintosh|Mac OS X|MacIntel|MacPPC/i.test(ua) ||
    /Mac|iPhone|iPad|iPod/i.test(platform) ||
    (platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
};

const checkIsAndroid = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  return /android/i.test(ua);
};

const ReferralLanding = () => {
  const { code = '' } = useParams();
  const normalizedCode = code.trim().toUpperCase();

  const playStoreUrl = APP_CONFIG.getPlayStoreUrl(normalizedCode);
  const appStoreUrl = APP_CONFIG.appStoreUrl;
  const deepLink = APP_CONFIG.getDeepLink(normalizedCode);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isApple = checkIsApple();
    const isAndroid = checkIsAndroid();

    // Target URL based on OS: Apple devices (Mac, iPhone, iPad) -> App Store, others -> Play Store
    const targetStoreUrl = isApple ? appStoreUrl : playStoreUrl;

    if (isAndroid || /iPhone|iPad|iPod/.test(navigator.userAgent || '')) {
      // Attempt deep link launch on mobile devices, then redirect to appropriate store
      let redirected = false;
      const timeout = setTimeout(() => {
        if (!redirected && !document.hidden) {
          window.location.replace(targetStoreUrl);
        }
      }, 500);

      const handleVisibilityChange = () => {
        if (document.hidden) {
          redirected = true;
          clearTimeout(timeout);
        }
      };

      window.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('pagehide', handleVisibilityChange);

      try {
        window.location.href = deepLink;
      } catch (e) {
        window.location.replace(targetStoreUrl);
      }

      return () => {
        clearTimeout(timeout);
        window.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('pagehide', handleVisibilityChange);
      };
    } else {
      // Desktop Mac / PC: directly redirect to appropriate store
      window.location.replace(targetStoreUrl);
    }
  }, [normalizedCode, playStoreUrl, appStoreUrl, deepLink]);

  const targetRedirectUrl = checkIsApple() ? appStoreUrl : playStoreUrl;

  return (
    <div className={styles.redirectContainer}>
      <SEO
        title={`Join Trusted Network - Referral Code ${normalizedCode}`}
        description={`Join Trusted Network with referral code ${normalizedCode}. Free users earn 500 points when friends register, and active subscribers receive 1 extra month of validity when friends subscribe.`}
        image="https://trustednetwork.in/banner.svg"
      />
      <div className={styles.redirectCard}>
        <div className={styles.spinner}></div>
        <h2 className={styles.redirectTitle}>Redirecting to Trusted Network App...</h2>
        <p className={styles.redirectSub}>
          Connecting you to the official app store for referral code <strong>{normalizedCode}</strong>.
        </p>
        <a href={targetRedirectUrl} className={styles.fallbackLink}>
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
};

export default ReferralLanding;
