import { useStaggerReveal } from "../../hooks/useScrollReveal";
import ProjectCard from "../../Pages/Portfolio/ProjectCard";
import "./CategoryGroup.scss";

const CategoryGroup = ({ category, projects, onSelectProject }) => {
  // Staggered fade-up as the group scrolls into view (CSS/IntersectionObserver,
  // compositor-only transform+opacity — no framer-motion, no Lighthouse cost).
  const gridRef = useStaggerReveal({
    stagger: 0.08,
    itemSelector: ".portfolio__item",
  });

  return (
    <section className="category-group">
      <h3 className="category-group__header">{category}</h3>
      <div ref={gridRef} className="category-group__grid portfolio__grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio__item reveal-item">
            <ProjectCard
              project={project}
              onSelect={() => onSelectProject(project)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGroup;
