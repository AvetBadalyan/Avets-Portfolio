import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ParallaxSection - Creates parallax scrolling effect
 */
const ParallaxSection = ({ 
  children, 
  className = '',
  speed = 0.5, // 0 = no effect, 1 = full scroll speed
  direction = 'up', // 'up' | 'down'
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [100 * speed * multiplier, -100 * speed * multiplier]
  );

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
