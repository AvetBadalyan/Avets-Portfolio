/**
 * Framer Motion animation variants shared across the portfolio.
 * Only the variants actually used by components live here.
 */

// Fade/slide in from a direction. Used with staggerContainer for section reveals.
export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Parent variant that staggers its children's `show` transitions.
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Gentle vertical float for decorative elements (looping).
// Callers must skip this when prefers-reduced-motion is set.
export const floating = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};
