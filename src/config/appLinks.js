export const APP_STORE_LINK = 'https://apps.apple.com/in/app/trusted-network/id6786537784';
export const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.oceansoftware.ctn_business_app&hl=en_IN';

/**
 * Detects whether the user device is Android, iOS, or Desktop/Other.
 */
export const detectOS = () => {
  if (typeof window === 'undefined') return 'desktop';
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';

  if (/android/i.test(userAgent)) {
    return 'android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  return 'desktop';
};

/**
 * Returns the appropriate store link based on device OS.
 * Android -> Google Play Store
 * iOS -> Apple App Store
 * Desktop -> Google Play Store or Apple App Store depending on platform preference
 */
export const getSmartStoreLink = () => {
  const os = detectOS();
  if (os === 'android') return PLAY_STORE_LINK;
  if (os === 'ios') return APP_STORE_LINK;
  return PLAY_STORE_LINK;
};

/**
 * Handles smart redirection on click, opening appropriate store based on device OS.
 */
export const handleSmartAppDownload = (e) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  const link = getSmartStoreLink();
  window.open(link, '_blank', 'noopener,noreferrer');
};
