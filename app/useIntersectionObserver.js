import { useEffect, useRef } from 'react';

// Custom hook for Intersection Observer
const useIntersectionObserver = (targetRef, options, callback) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, options);

    const { current: currentObserver } = observer;

    if (targetRef.current) {
      currentObserver.observe(targetRef.current);

      return () => {
        currentObserver.disconnect();
      };
    }
  }, [targetRef, options, callback]);
};

export default useIntersectionObserver;