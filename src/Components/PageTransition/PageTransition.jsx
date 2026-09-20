import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * PageTransition - Smooth entrance animation for the entire page
 */
const PageTransition = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Remove initial loader and trigger entrance animation
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
