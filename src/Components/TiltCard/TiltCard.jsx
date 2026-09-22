import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/**
 * TiltCard - 3D tilt effect on hover (like Apple TV app icons).
 *
 * Uses Framer Motion motion values so the tilt animates OUTSIDE React's render
 * cycle: mouse movement writes to motion values directly, so the component does
 * not re-render on every mousemove (only the CSS transform updates). Springs
 * smooth the motion and the ease-back on mouse leave.
 */
const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  // Respect the OS "reduce motion" setting — skip the 3D tilt entirely.
  const reduceMotion = useReducedMotion();

  // Normalized pointer position within the card: -0.5 (top/left) .. 0.5 (bottom/right),
  // 0 at the center. Springs give the tilt a smooth, springy feel.
  const px = useSpring(0, { stiffness: 400, damping: 30 });
  const py = useSpring(0, { stiffness: 400, damping: 30 });
  const hovering = useMotionValue(0); // 0 = at rest, 1 = pointer over card

  // Map the normalized position to rotation degrees.
  // rotateX is negated so the card tips TOWARD the cursor (top-hover leans back).
  const rotateX = useTransform(py, (v) => -v * 2 * tiltAmount);
  const rotateY = useTransform(px, (v) => v * 2 * tiltAmount);
  const scaleValue = useTransform(hovering, [0, 1], [1, scale]);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el || reduceMotion) return;

    const rect = el.getBoundingClientRect();
    // (mouse - left) / width gives 0..1 across the card; subtract 0.5 to center it.
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
    hovering.set(1);
  };

  const handleMouseLeave = () => {
    // Ease everything back to flat/resting.
    px.set(0);
    py.set(0);
    hovering.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: scaleValue,
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
