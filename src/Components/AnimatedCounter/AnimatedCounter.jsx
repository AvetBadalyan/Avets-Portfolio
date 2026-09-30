import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter — counts up to `value` when it enters the viewport.
 * Pure React + IntersectionObserver; no framer-motion, so the motion-vendor
 * chunk stays out of the initial JS bundle.
 */
const AnimatedCounter = ({ value, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const rafRef = useRef(null);

  // Strip non-numeric characters ("3+" → 3) and remember the suffix.
  const numericValue =
    parseFloat(value.toString().replace(/[^0-9.]/g, "")) || 0;
  const hasPlus = value.toString().includes("+");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setDisplay(`${numericValue}${hasPlus ? "+" : ""}`);
          return;
        }

        // Ease-out cubic easing
        const ease = (t) => 1 - Math.pow(1 - t, 3);
        const startTime = performance.now();
        const durationMs = duration * 1000;

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          const current = Math.round(ease(progress) * numericValue);
          setDisplay(`${current}${hasPlus ? "+" : ""}`);
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { rootMargin: "-50px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [numericValue, hasPlus, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
