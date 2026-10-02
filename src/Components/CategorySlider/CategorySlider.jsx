import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useScrollState } from "../../hooks/useScrollState";
import ProjectCard from "../../Pages/Portfolio/ProjectCard";
import NavigationIndicators from "../NavigationIndicators/NavigationIndicators";
import "./CategorySlider.scss";

/**
 * CategorySlider — horizontal scroll carousel for a category's projects.
 * Swipe is pure CSS (scroll-snap). JS only tracks position for the counter.
 */
const CategorySlider = ({ category, projects, onSelectProject }) => {
  const trackRef = useRef(null);
  const revealRef = useScrollReveal({ rootMargin: "-40px" });
  const currentIndex = useScrollState(trackRef, projects.length);

  return (
    <div
      ref={revealRef}
      className="category-slider reveal"
      role="region"
      aria-label={`${category} projects`}
    >
      <h3 className="category-slider__header">{category}</h3>

      <div ref={trackRef} className="category-slider__track" role="list">
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

      {projects.length > 1 && (
        <NavigationIndicators total={projects.length} current={currentIndex} />
      )}
    </div>
  );
};

export default CategorySlider;
