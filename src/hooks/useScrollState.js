import { useEffect, useState } from "react";

/**
 * useScrollState — tracks which card is currently visible in a horizontal
 * scroll container. That's it. Swipe is handled by CSS scroll-snap.
 *
 * Uses IntersectionObserver (threshold: 0.5) to detect when a card becomes
 * >50% visible and updates currentIndex accordingly.
 *
 * @param {React.RefObject} containerRef - Ref to the scroll container
 * @param {number} itemCount - Total number of items
 * @returns {number} currentIndex - 0-based index of the visible card
 */
export function useScrollState(containerRef, itemCount) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container || itemCount === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(container.children);
            const idx = children.indexOf(entry.target);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.5 },
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [containerRef, itemCount]);

  return currentIndex;
}
