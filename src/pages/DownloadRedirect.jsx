import React, { useEffect } from 'react';
import { APP_STORE_LINK, PLAY_STORE_LINK, detectOS } from '../config/appLinks';

const DownloadRedirect = () => {
  const performRedirect = () => {
    if (typeof window === 'undefined') return;
    const os = detectOS();
    if (os === 'ios') {
      window.location.replace(APP_STORE_LINK);
    } else {
      window.location.replace(PLAY_STORE_LINK);
    }
  };

  performRedirect();

  useEffect(() => {
    performRedirect();
  }, []);

  return null;
};

export default DownloadRedirect;
