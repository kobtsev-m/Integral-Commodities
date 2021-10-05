import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};
