import { useState, useEffect, useCallback, useRef } from "react";

/**
 * useScrollState — tracks scroll position within a horizontal slider container
 * and provides programmatic navigation methods.
 *
 * Uses IntersectionObserver (threshold: 0.5) on direct children of the
 * container to determine which card is currently "active" (>50% visible).
 * Navigation respects prefers-reduced-motion by switching between smooth and
 * instant scroll behavior.
 *
 * @param {object}                    options
 * @param {React.RefObject}           options.containerRef  - Ref to the scroll container element
 * @param {number}                    options.itemCount     - Total number of items in the slider
 * @param {(index: number) => void}  [options.onIndexChange] - Optional callback fired when active index changes
 *
 * @returns {{
 *   currentIndex:   number,
 *   canScrollLeft:  boolean,
 *   canScrollRight: boolean,
 *   scrollToIndex:  (index: number) => void,
 *   scrollToPrev:   () => void,
 *   scrollToNext:   () => void,
 * }}
 */
export function useScrollState({ containerRef, itemCount, onIndexChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Derived booleans — kept as plain state so components can use them directly
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < itemCount - 1;

  // Keep the latest callback in a ref so the observer closure never stales
  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;

  // Debounce timer ref used in scroll-event fallback
  const debounceTimerRef = useRef(null);

  // Check whether the user prefers reduced motion
  const prefersReducedMotion = useCallback(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // ── IntersectionObserver: detect which direct child is >50% visible ──────
  useEffect(() => {
    const container = containerRef?.current;
    if (!container || itemCount === 0) return;

    const updateIndex = (newIndex) => {
      setCurrentIndex((prev) => {
        if (prev === newIndex) return prev;
        onIndexChangeRef.current?.(newIndex);
        return newIndex;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the DOM index of this child among the container's direct children
            const children = Array.from(container.children);
            const idx = children.indexOf(entry.target);
            if (idx !== -1) {
              updateIndex(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5, // Card must be >50% visible to be considered "current"
      }
    );

    // Observe every direct child (each one wraps a single ProjectCard)
    const children = Array.from(container.children);
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [containerRef, itemCount]);

  // ── Scroll fallback: debounced scroll listener for edge cases ────────────
  // IntersectionObserver covers most cases; the scroll listener handles rapid
  // scroll events that the observer might miss (e.g., programmatic jumps).
  useEffect(() => {
    const container = containerRef?.current;
    if (!container || itemCount === 0) return;

    const handleScroll = () => {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        const children = Array.from(container.children);
        if (children.length === 0) return;

        const containerLeft = container.getBoundingClientRect().left;
        const containerWidth = container.clientWidth;

        // Find the child whose center is closest to the container center
        let bestIndex = 0;
        let bestDistance = Infinity;

        children.forEach((child, idx) => {
          const rect = child.getBoundingClientRect();
          const childCenter = rect.left - containerLeft + rect.width / 2;
          const containerCenter = containerWidth / 2;
          const distance = Math.abs(childCenter - containerCenter);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = idx;
          }
        });

        setCurrentIndex((prev) => {
          if (prev === bestIndex) return prev;
          onIndexChangeRef.current?.(bestIndex);
          return bestIndex;
        });
      }, 150); // 150ms debounce
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimerRef.current);
    };
  }, [containerRef, itemCount]);

  // ── Navigation helpers ────────────────────────────────────────────────────

  const scrollToIndex = useCallback(
    (index) => {
      const container = containerRef?.current;
      if (!container) return;

      // Clamp to valid range
      const clamped = Math.max(0, Math.min(index, itemCount - 1));
      const child = container.children[clamped];
      if (!child) return;

      child.scrollIntoView({
        behavior: prefersReducedMotion() ? "instant" : "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [containerRef, itemCount, prefersReducedMotion]
  );

  const scrollToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.max(0, prev - 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const scrollToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.min(itemCount - 1, prev + 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex, itemCount]);

  return {
    currentIndex,
    canScrollLeft,
    canScrollRight,
    scrollToIndex,
    scrollToPrev,
    scrollToNext,
  };
}
