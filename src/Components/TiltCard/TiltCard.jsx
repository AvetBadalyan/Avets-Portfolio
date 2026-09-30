import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * TiltCard - subtle 3D tilt toward the cursor on hover (like Apple TV icons).
 * On mouse move we work out where the cursor is relative to the card centre
 * and store the resulting tilt angles in state; Framer Motion animates to them.
 *
 * Performance: getBoundingClientRect() is NOT called on every mousemove —
 * that would flush style recalculations and force a synchronous layout (reflow)
 * on every pointer event. Instead we cache the rect once on mount and refresh
 * it only when the element is resized, via ResizeObserver.
 */
const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const rectRef = useRef(null); // cached bounding rect — never read during render
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Measure once on mount and re-measure on resize only — avoids forced reflow
  // inside the hot mousemove path.
  useEffect(() => {
    const el = cardRef.current;
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
    // How far the cursor is from the card centre, as -0.5 .. 0.5 on each axis.
    const percentX = (e.clientX - rect.left) / rect.width - 0.5;
    const percentY = (e.clientY - rect.top) / rect.height - 0.5;

    // rotateX is negated so the card tips toward the cursor.
    setTilt({
      x: -percentY * 2 * tiltAmount,
      y: percentX * 2 * tiltAmount,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const isTilting = tilt.x !== 0 || tilt.y !== 0;

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isTilting ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
