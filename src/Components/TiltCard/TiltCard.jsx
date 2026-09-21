import { motion } from "framer-motion";
import { useRef, useState } from "react";

/**
 * TiltCard - 3D tilt effect on hover (like Apple TV app icons)
 */
const TiltCard = ({
  children,
  className = "",
  tiltAmount = 10,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const tiltX = (mouseY / (rect.height / 2)) * -tiltAmount;
    const tiltY = (mouseX / (rect.width / 2)) * tiltAmount;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: tilt.x !== 0 || tilt.y !== 0 ? scale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
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
