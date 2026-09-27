import { useState } from "react";
import "./LazyImage.scss";

/**
 * LazyImage - lazy-loaded image with a skeleton placeholder and fade-in.
 * Uses the browser's native loading="lazy" (no IntersectionObserver needed)
 * and a simple CSS fade once the image has loaded. On load failure it hides
 * the skeleton and shows the alt text instead of a skeleton that never resolves.
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
  const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"

  return (
    <div className={`lazy-image-wrapper ${wrapperClassName}`}>
      {status === "loading" && <div className="lazy-image-skeleton" />}

      {status === "error" ? (
        <div className="lazy-image-fallback" role="img" aria-label={alt}>
          <span>{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`lazy-image ${status === "loaded" ? "lazy-image--loaded" : ""} ${className}`}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
