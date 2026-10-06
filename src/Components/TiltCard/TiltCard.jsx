import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * TiltCard - subtle 3D tilt toward the cursor on hover (like Apple TV icons).
 * On mouse move we work out where the cursor is relative to the card centre
 * and store the resulting tilt angles in state; Framer Motion animates to them.
 *
 * Performance: getBoundingClientRect() is NOT called on every mousemove, nor
 * on mount. Reading geometry during the initial render forces a synchronous
 * layout (reflow) across every mounted card at once — flagged by Lighthouse.
 * Instead the rect is measured lazily on the first hover, then refreshed only
 * on resize/scroll. The hot mousemove path reads the cached value, never the
 * DOM.
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

  // Measure lazily on first hover and re-measure on resize/scroll only — avoids
  // forced reflow on mount (a synchronous getBoundingClientRect during initial
  // render causes Lighthouse's "forced reflow" warning). The rect is populated
  // on mouseenter so we never block the paint path.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Lazy initial measurement — deferred until first interaction
    const measureRect = () => {
      rectRef.current = el.getBoundingClientRect();
    };

    // Measure on first mouseenter if not already measured
    const onMouseEnter = () => {
      if (!rectRef.current) measureRect();
    };
    el.addEventListener("mouseenter", onMouseEnter, { once: true });

    // Re-measure on resize (layout may have shifted)
    const ro = new ResizeObserver(() => {
      // Only update if we've measured at least once (user has interacted)
      if (rectRef.current) measureRect();
    });
    ro.observe(el);

    // Re-measure on scroll so cached position stays accurate
    const onScroll = () => {
      if (rectRef.current) measureRect();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (reduceMotion) return;

    // Lazy measure on first move if mouseenter didn't fire (edge case)
    if (!rectRef.current) {
      rectRef.current = cardRef.current?.getBoundingClientRect();
    }
    if (!rectRef.current) return;

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
        // CSS `perspective` only affects children; the card itself needs this.
        transformPerspective: 1000,
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
