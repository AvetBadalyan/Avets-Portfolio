import { motion } from 'framer-motion';

/**
 * TextReveal - Animated text that reveals word by word or line by line
 */
const TextReveal = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'words', // 'words' | 'lines' | 'chars'
}) => {
  const text = children?.toString() || '';
  
  let elements = [];
  if (type === 'words') {
    elements = text.split(' ');
  } else if (type === 'chars') {
    elements = text.split('');
  } else {
    elements = [text];
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { 
      y: 20, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: 'inline-block',
            marginRight: type === 'words' ? '0.25em' : type === 'chars' ? '0' : '0',
            whiteSpace: type === 'chars' ? 'pre' : 'normal',
          }}
        >
          {element}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
