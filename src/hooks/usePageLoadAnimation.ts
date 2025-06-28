import { useEffect, useState } from 'react';

export const usePageLoadAnimation = (delay: number = 100) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, Math.max(0, delay));

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoaded;
};

export const useStaggeredPageLoad = (itemCount: number, baseDelay: number = 200, staggerDelay: number = 150) => {
  const safeItemCount = Math.max(0, itemCount);
  const [loadedItems, setLoadedItems] = useState<boolean[]>(new Array(safeItemCount).fill(false));

  useEffect(() => {
    setLoadedItems(new Array(safeItemCount).fill(false));
    
    if (safeItemCount === 0) return;

    const timers: number[] = [];

    for (let i = 0; i < safeItemCount; i++) {
      const timer = setTimeout(() => {
        setLoadedItems(prev => {
          const newState = [...prev];
          if (newState[i] !== undefined) {
            newState[i] = true;
          }
          return newState;
        });
      }, Math.max(0, baseDelay) + (i * Math.max(0, staggerDelay)));
      
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [safeItemCount, baseDelay, staggerDelay]);

  return loadedItems;
}; 