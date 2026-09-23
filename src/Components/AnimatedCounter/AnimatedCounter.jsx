import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * AnimatedCounter - Smooth number counter animation on scroll
 */
const AnimatedCounter = ({ value, duration = 2, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Strip any non-numeric characters (e.g. "3+" -> 3) and remember the suffix.
  const numericValue =
    parseFloat(value.toString().replace(/[^0-9.]/g, "")) || 0;
  const hasPlus = value.toString().includes("+");

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) => {
    const rounded = Math.round(current);
    return `${rounded}${hasPlus ? "+" : ""}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;
