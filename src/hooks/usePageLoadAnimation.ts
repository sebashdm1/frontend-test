import { useEffect, useState } from 'react';

export const usePageLoadAnimation = (delay: number = 100) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

// Hook for staggered page load animations
export const useStaggeredPageLoad = (itemCount: number, baseDelay: number = 200, staggerDelay: number = 150) => {
  const [loadedItems, setLoadedItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    // Trigger each item with staggered timing
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setLoadedItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay + (i * staggerDelay));
    }

    // Cleanup function
    return () => {
      // Clear any pending timeouts
      for (let i = 0; i < itemCount; i++) {
        clearTimeout(baseDelay + (i * staggerDelay));
      }
    };
  }, [itemCount, baseDelay, staggerDelay]);

  return loadedItems;
}; 