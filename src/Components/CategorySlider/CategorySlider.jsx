import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useScrollState } from "../../hooks/useScrollState";
import ProjectCard from "../../Pages/Portfolio/ProjectCard";
import NavigationIndicators from "../NavigationIndicators/NavigationIndicators";
import "./CategorySlider.scss";

/**
 * CategorySlider — renders a single category's projects as a horizontal
 * scroll carousel with CSS scroll-snap, navigation indicators, and
 * integration with the useScrollState hook for position tracking.
 *
 * @param {Object}   props
 * @param {string}   props.category          - Category name displayed as the section header
 * @param {Array}    props.projects           - Array of project objects in this category
 * @param {function} props.onSelectProject    - Callback invoked with a project when the user
 *                                             activates the Details button inside a ProjectCard
 */
const CategorySlider = ({ category, projects, onSelectProject }) => {
  const trackRef = useRef(null);
  // Fade-up the whole panel as it scrolls into view (compositor-only; no cost).
  const revealRef = useScrollReveal({ rootMargin: "-40px" });

  const {
    currentIndex,
    canScrollLeft,
    canScrollRight,
    scrollToIndex,
    scrollToPrev,
    scrollToNext,
  } = useScrollState({
    containerRef: trackRef,
    itemCount: projects.length,
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToNext();
    }
  };

  return (
    <div
      ref={revealRef}
      className="category-slider reveal"
      role="region"
      aria-label={`${category} projects`}
    >
      <h3 className="category-slider__header">{category}</h3>

      {/* Scrollable track — each direct child is observed by useScrollState */}
      {/* Visually hidden live region announces current position to screen readers.
          Kept OUTSIDE the track so aria-live on the track doesn't swallow it,
          and so button taps (which change no track content) don't re-trigger it. */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Card {currentIndex + 1} of {projects.length}
      </span>

      <div
        ref={trackRef}
        className="category-slider__track"
        role="list"
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`category-slider__item${projects.length === 1 ? " category-slider__item--single" : ""}`}
            role="listitem"
          >
            <ProjectCard
              project={project}
              onSelect={() => onSelectProject(project)}
            />
          </div>
        ))}
      </div>

      {/* Only show indicators when there is more than one card to navigate */}
      {projects.length > 1 && (
        <NavigationIndicators
          total={projects.length}
          current={currentIndex}
          onNavigate={scrollToIndex}
          showArrows={projects.length > 6}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
        />
      )}
    </div>
  );
};

export default CategorySlider;
