import { useRef, useState } from "react";

/**
 * MagneticButton — follows the cursor while hovered.
 * CSS `transition: transform` replaces the framer-motion spring so that
 * framer-motion is NOT part of the initial bundle.
 * The magnetic effect is kept for pointer devices; touch / reduced-motion
 * users get the plain element with no JS overhead.
 */
const MagneticButton = ({
  children,
  className = "",
  strength = 0.3,
  as: Tag = "button",
  ...props
}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const reduceMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const handleMouseMove = (e) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  const handleMouseLeave = () => setStyle({});

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
