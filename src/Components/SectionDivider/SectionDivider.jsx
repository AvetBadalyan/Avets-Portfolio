import './SectionDivider.scss';

/**
 * SectionDivider - Wave or diagonal dividers between sections
 */
const SectionDivider = ({ 
  type = 'wave', // 'wave' | 'diagonal' | 'curve'
  flip = false,
  className = '',
}) => {
  const dividers = {
    wave: (
      <svg 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none"
        className={`section-divider section-divider--wave ${flip ? 'section-divider--flip' : ''} ${className}`}
      >
        <path 
          d="M0,64 C288,120 576,0 864,64 C1152,128 1440,32 1440,32 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    ),
    diagonal: (
      <svg 
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none"
        className={`section-divider section-divider--diagonal ${flip ? 'section-divider--flip' : ''} ${className}`}
      >
        <polygon 
          points="0,80 1440,0 1440,80"
          fill="currentColor"
        />
      </svg>
    ),
    curve: (
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        className={`section-divider section-divider--curve ${flip ? 'section-divider--flip' : ''} ${className}`}
      >
        <path 
          d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  return dividers[type] || dividers.wave;
};

export default SectionDivider;
