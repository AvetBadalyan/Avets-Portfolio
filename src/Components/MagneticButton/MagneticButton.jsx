import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * MagneticButton - button/link that subtly follows the cursor while hovered.
 * On mouse move we store an offset from the element's centre in state and let
 * Framer Motion spring toward it; on leave it springs back.
 *
 * Performance: getBoundingClientRect() is NOT called on every mousemove —
 * that would flush style recalculations and force a synchronous layout (reflow)
 * on every pointer event. Instead we cache the rect once on mount and refresh
 * it only when the element is resized, via ResizeObserver.
 */
const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  ...props
}) => {
  const ref = useRef(null);
  const rectRef = useRef(null); // cached bounding rect — never read during render
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Measure once on mount and re-measure on resize only — avoids forced reflow
  // inside the hot mousemove path.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    rectRef.current = el.getBoundingClientRect();

    const ro = new ResizeObserver(() => {
      rectRef.current = el.getBoundingClientRect();
    });
    ro.observe(el);

    // Also refresh on scroll so the cached position stays accurate when the
    // page has been scrolled since mount.
    const onScroll = () => {
      rectRef.current = el.getBoundingClientRect();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!rectRef.current || reduceMotion) return;

    const rect = rectRef.current;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const Component = motion[as] || motion.button;

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
