import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

/**
 * AnimatedCounter - Smooth number counter animation on scroll
 */
const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Parse the numeric part
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;
  const hasPlus = value.toString().includes('+');
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });
  
  const display = useTransform(spring, (current) => {
    const rounded = Math.round(current);
    return `${prefix}${rounded}${hasPlus ? '+' : ''}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;
