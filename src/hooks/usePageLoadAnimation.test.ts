import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { usePageLoadAnimation, useStaggeredPageLoad } from './usePageLoadAnimation';

// Mock timers for testing
describe('usePageLoadAnimation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('usePageLoadAnimation', () => {
    it('should initialize with isLoaded as false', () => {
      const { result } = renderHook(() => usePageLoadAnimation());
      
      expect(result.current).toBe(false);
    });

    it('should set isLoaded to true after default delay (100ms)', () => {
      const { result } = renderHook(() => usePageLoadAnimation());
      
      expect(result.current).toBe(false);
      
      act(() => {
        vi.advanceTimersByTime(100);
      });
      
      expect(result.current).toBe(true);
    });

    it('should set isLoaded to true after custom delay', () => {
      const customDelay = 500;
      const { result } = renderHook(() => usePageLoadAnimation(customDelay));
      
      expect(result.current).toBe(false);
      
      act(() => {
        vi.advanceTimersByTime(customDelay - 1);
      });
      expect(result.current).toBe(false);
      
      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(result.current).toBe(true);
    });

    it('should cleanup timer on unmount', () => {
      const { unmount } = renderHook(() => usePageLoadAnimation(1000));
      
      unmount();
      
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should handle negative delays gracefully', () => {
      const { result } = renderHook(() => usePageLoadAnimation(-100));
      
      act(() => {
        vi.advanceTimersByTime(0);
      });
      
      expect(result.current).toBe(true);
    });
  });

  describe('useStaggeredPageLoad', () => {
    it('should initialize with all items as false', () => {
      const itemCount = 3;
      const { result } = renderHook(() => useStaggeredPageLoad(itemCount));
      
      expect(result.current).toEqual([false, false, false]);
    });

    it('should load items with staggered timing', () => {
      const itemCount = 3;
      const { result } = renderHook(() => useStaggeredPageLoad(itemCount, 200, 150));
      
      expect(result.current).toEqual([false, false, false]);
      
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(result.current).toEqual([true, false, false]);
      
      act(() => {
        vi.advanceTimersByTime(150);
      });
      expect(result.current).toEqual([true, true, false]);
      
      act(() => {
        vi.advanceTimersByTime(150);
      });
      expect(result.current).toEqual([true, true, true]);
    });

    it('should cleanup all timers on unmount', () => {
      const { unmount } = renderHook(() => useStaggeredPageLoad(5));
      
      expect(vi.getTimerCount()).toBe(5);
      
      unmount();
      
      act(() => {
        vi.advanceTimersByTime(10000);
      });
      expect(vi.getTimerCount()).toBe(0);
    });

    it('should handle single item', () => {
      const { result } = renderHook(() => useStaggeredPageLoad(1, 100, 50));
      
      expect(result.current).toEqual([false]);
      
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current).toEqual([true]);
    });

    it('should handle zero items', () => {
      const { result } = renderHook(() => useStaggeredPageLoad(0));
      
      expect(result.current).toEqual([]);
    });

    it('should handle negative itemCount', () => {
      const { result } = renderHook(() => useStaggeredPageLoad(-1));
      
      expect(result.current).toEqual([]);
    });

    it('should reset state when itemCount changes', () => {
      let itemCount = 2;
      const { result, rerender } = renderHook(() => 
        useStaggeredPageLoad(itemCount, 100, 50)
      );
      
      expect(result.current).toEqual([false, false]);
      
      // Load first item
      act(() => {
        vi.advanceTimersByTime(100);
      });
      expect(result.current).toEqual([true, false]);
      
      // Change itemCount - should reset state
      itemCount = 3;
      rerender();
      
      expect(result.current).toEqual([false, false, false]);
    });

    it('should handle large number of items efficiently', () => {
      const itemCount = 10; // Reduced for test efficiency
      const baseDelay = 0;
      const staggerDelay = 1;
      const { result } = renderHook(() => 
        useStaggeredPageLoad(itemCount, baseDelay, staggerDelay)
      );
      
      expect(result.current).toHaveLength(10);
      expect(result.current.every(item => item === false)).toBe(true);
      
      // Load first 3 items
      act(() => {
        vi.advanceTimersByTime(2);
      });
      
      expect(result.current.slice(0, 3)).toEqual([true, true, true]);
      expect(result.current.slice(3).every(item => item === false)).toBe(true);
    });

    it('should handle negative delays gracefully', () => {
      const { result } = renderHook(() => useStaggeredPageLoad(2, -100, -50));
      
      act(() => {
        vi.advanceTimersByTime(0);
      });
      
      expect(result.current).toEqual([true, true]);
    });
  });
}); 