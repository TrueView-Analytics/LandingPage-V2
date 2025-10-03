// src/components/ScrollToHash.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hash) {
        // Scroll to the element matching the hash
        const element = document.querySelector<HTMLElement>(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // No hash — scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // delay to ensure content has mounted

    return () => clearTimeout(timeout);
  }, [pathname, hash]); // run when route or hash changes

  return null;
};

export default ScrollToHash;
