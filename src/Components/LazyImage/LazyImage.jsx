import { useState } from "react";
import "./LazyImage.scss";

/**
 * LazyImage - lazy-loaded image with a skeleton placeholder and fade-in.
 * Uses the browser's native loading="lazy" (no IntersectionObserver needed)
 * and a simple CSS fade once the image has loaded.
 */
const LazyImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`lazy-image-wrapper ${wrapperClassName}`}>
      {/* Skeleton shows until the image finishes loading */}
      {!isLoaded && <div className="lazy-image-skeleton" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`lazy-image ${isLoaded ? "lazy-image--loaded" : ""} ${className}`}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
