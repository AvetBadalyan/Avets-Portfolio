import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LazyImage.scss';

/**
 * LazyImage - Image component with lazy loading and fade-in effect
 */
const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${wrapperClassName}`}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="lazy-image-skeleton" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`lazy-image ${className} ${isLoaded ? 'lazy-image--loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
