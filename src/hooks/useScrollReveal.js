import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Replaces framer-motion's whileInView for simple fade-in animations,
 * avoiding the ~40KB framer-motion bundle for basic reveals.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 *
 * CSS required (add to your component's SCSS):
 *   .reveal {
 *     opacity: 0;
 *     transform: translateY(30px);
 *     transition: opacity 0.6s ease, transform 0.6s ease;
 *   }
 *   .reveal--visible {
 *     opacity: 1;
 *     transform: translateY(0);
 *   }
 *
 * @param {Object} options
 * @param {string} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for earlier/later trigger
 * @returns {React.RefObject}
 */
export function useScrollReveal({ threshold = 0.1, rootMargin = "0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip animation if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("reveal--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal--visible");
          observer.unobserve(element); // Once revealed, stop observing
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook for staggered reveal of multiple children.
 * Each child gets a CSS custom property --reveal-delay for staggered animation.
 *
 * Usage:
 *   const containerRef = useStaggerReveal({ stagger: 0.1 });
 *   <div ref={containerRef} className="reveal-container">
 *     <div className="reveal-item">...</div>
 *     <div className="reveal-item">...</div>
 *   </div>
 *
 * CSS required:
 *   .reveal-container .reveal-item {
 *     opacity: 0;
 *     transform: translateY(20px);
 *     transition: opacity 0.5s ease, transform 0.5s ease;
 *     transition-delay: var(--reveal-delay, 0s);
 *   }
 *   .reveal-container.reveal--visible .reveal-item {
 *     opacity: 1;
 *     transform: translateY(0);
 *   }
 */
export function useStaggerReveal({
  threshold = 0.1,
  rootMargin = "0px",
  stagger = 0.1,
  itemSelector = ".reveal-item",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Set stagger delays on children
    const items = container.querySelectorAll(itemSelector);
    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * stagger}s`);
    });

    // Skip animation if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      container.classList.add("reveal--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.classList.add("reveal--visible");
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [threshold, rootMargin, stagger, itemSelector]);

  return ref;
}
