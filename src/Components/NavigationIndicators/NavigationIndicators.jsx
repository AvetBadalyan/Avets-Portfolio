import "./NavigationIndicators.scss";

/**
 * NavigationIndicators component - Position counter for a category slider.
 * Shows "n / total" format for all categories (consistent, compact).
 *
 * @param {Object} props
 * @param {number} props.total - Total number of cards in the slider
 * @param {number} props.current - Currently active card index (0-indexed)
 */
const NavigationIndicators = ({ total, current }) => {
  return (
    <nav className="nav-indicators" aria-label="Slide navigation">
      <span className="nav-indicators__counter" aria-live="polite">
        {current + 1} / {total}
      </span>
    </nav>
  );
};

export default NavigationIndicators;
