import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./CursorGlow.scss";

/**
 * CursorGlow - subtle glow that follows the cursor.
 * Not rendered on touch devices or when the user prefers reduced motion.
 * Only mounts once the mouse actually moves, so it never sits off-origin
 * at (0,0) on load (which would extend the page and cause horizontal scroll).
 */
const CursorGlow = () => {
  const reduceMotion = useReducedMotion();
  const [hasMoved, setHasMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHasMoved(true);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, reduceMotion]);

  // Skip on reduced-motion, touch devices, and until the cursor has moved.
  if (reduceMotion) return null;
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;
  if (!hasMoved) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-glow"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CursorGlow;
