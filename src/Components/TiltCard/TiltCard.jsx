import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * TiltCard - 3D tilt effect on hover (like Apple TV app icons)
 */
const TiltCard = ({ 
  children, 
  className = '', 
  tiltAmount = 10, 
  glareEnabled = true,
  scale = 1.02,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt (inverted for natural feel)
    const tiltX = (mouseY / (rect.height / 2)) * -tiltAmount;
    const tiltY = (mouseX / (rect.width / 2)) * tiltAmount;
    
    // Calculate glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTilt({ x: tiltX, y: tiltY });
    setGlare({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
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
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      {...props}
    >
      {children}
      
      {/* Glare effect */}
      {glareEnabled && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 50%)`,
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
