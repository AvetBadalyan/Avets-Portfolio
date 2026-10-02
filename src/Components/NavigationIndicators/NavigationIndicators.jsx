import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./NavigationIndicators.scss";

/**
 * NavigationIndicators component - Dot indicators and optional arrow buttons
 * for a category slider.
 *
 * @param {Object} props
 * @param {number} props.total - Total number of cards in the slider
 * @param {number} props.current - Currently active card index (0-indexed)
 * @param {function(number): void} props.onNavigate - Callback with target index
 * @param {boolean} props.showArrows - Render arrow buttons (when category has >6 projects)
 * @param {boolean} props.canScrollLeft - Arrow left is enabled (not at first card)
 * @param {boolean} props.canScrollRight - Arrow right is enabled (not at last card)
 */
const NavigationIndicators = ({
  total,
  current,
  onNavigate,
  showArrows,
  canScrollLeft,
  canScrollRight,
}) => {
  return (
    <nav className="nav-indicators" aria-label="Slide navigation">
      {showArrows && (
        <button
          type="button"
          className="nav-indicators__arrow nav-indicators__arrow--left"
          aria-label="Previous project"
          disabled={!canScrollLeft}
          onClick={() => onNavigate(current - 1)}
        >
          <FaChevronLeft />
        </button>
      )}

      <div className="nav-indicators__dots" role="tablist">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            className="nav-indicators__dot"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to project ${i + 1} of ${total}`}
            onClick={() => onNavigate(i)}
          />
        ))}
      </div>

      {showArrows && (
        <button
          type="button"
          className="nav-indicators__arrow nav-indicators__arrow--right"
          aria-label="Next project"
          disabled={!canScrollRight}
          onClick={() => onNavigate(current + 1)}
        >
          <FaChevronRight />
        </button>
      )}
    </nav>
  );
};

export default NavigationIndicators;
