import { useEffect, useState } from 'react';

export const usePageLoadAnimation = (delay: number = 100) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

export const useStaggeredPageLoad = (itemCount: number, baseDelay: number = 200, staggerDelay: number = 150) => {
  const [loadedItems, setLoadedItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    const timers: number[] = [];

    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setLoadedItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay + (i * staggerDelay));
      
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [itemCount, baseDelay, staggerDelay]);

  return loadedItems;
}; 