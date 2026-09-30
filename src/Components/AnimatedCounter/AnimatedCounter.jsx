import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter - counts up to a number the first time it scrolls into view.
 *
 * Deliberately dependency-free: uses requestAnimationFrame + IntersectionObserver
 * instead of framer-motion. This component renders in the eagerly-loaded hero,
 * so pulling framer-motion's spring/scroll APIs in here would inflate the
 * initial JS bundle (and hurt the exact mobile FCP/LCP we just optimized). A
 * hand-rolled ease-out tween gives the same "fun" count-up for a few bytes.
 *
 * Accepts values like "3+", "21" — strips non-numeric chars for the tween and
 * re-appends a trailing "+" if the original had one. Respects reduced motion.
 */
const AnimatedCounter = ({ value, duration = 1500, className = "" }) => {
  const ref = useRef(null);
  const rafRef = useRef(0);

  const target = parseFloat(value.toString().replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.toString().includes("+") ? "+" : "";

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic for a lively finish.
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * target));
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          run();
          observer.disconnect();
        }
      },
      { rootMargin: "-50px", threshold: 0 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
