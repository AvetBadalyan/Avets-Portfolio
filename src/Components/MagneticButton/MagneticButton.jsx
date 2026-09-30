import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

/**
 * MagneticButton - button/link that subtly follows the cursor while hovered.
 * On mouse move we store an offset from the element's centre in state and let
 * Framer Motion spring toward it; on leave it springs back.
 */
const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current || reduceMotion) return;

    const rect = ref.current.getBoundingClientRect();
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
