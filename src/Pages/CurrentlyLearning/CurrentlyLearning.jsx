import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";
import "./CurrentlyLearning.scss";
import { learningItems } from "./data";

/**
 * Currently Learning section - uses CSS-based scroll reveal.
 * Keeps framer-motion out of this chunk for better code splitting.
 */
const CurrentlyLearning = () => {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({
    stagger: 0.1,
    itemSelector: ".learning-card",
    rootMargin: "-50px",
  });

  return (
    <section id="learning" className="learning">
      <div className="container">
        <div ref={headerRef} className="learning__header reveal">
          <h2 className="section-heading">Currently Learning</h2>
          <p className="learning__subtitle">
            Always growing — here's what I'm exploring right now
          </p>
        </div>

        <div ref={gridRef} className="learning__grid">
          {learningItems.map((item) => (
            <div key={item.id} className="learning-card reveal-item">
              <span className="learning-card__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="learning-card__content">
                <div className="learning-card__header">
                  <h3 className="learning-card__title">{item.title}</h3>
                  <span className="learning-card__status">{item.status}</span>
                </div>
                <p className="learning-card__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
