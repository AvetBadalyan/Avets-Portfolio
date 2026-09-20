import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * CursorGlow - Subtle glow effect that follows the cursor.
 * Skips rendering on touch devices and when the user prefers reduced motion.
 */
const CursorGlow = () => {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring animation for cursor
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, reduceMotion]);

  // Don't render on touch devices or when reduced motion is requested.
  if (reduceMotion) return null;
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, hsla(var(--primary-hue), 70%, 50%, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9998,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
        transition: "opacity var(--duration-base) var(--easing-default)",
      }}
    />
  );
};

export default CursorGlow;
