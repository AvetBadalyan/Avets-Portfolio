import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";
import "./CurrentlyLearning.scss";
import { learningItems } from "./data";

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="learning">
      <div className="container">
        <motion.div
          className="learning__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Currently Learning</h2>
          <p className="learning__subtitle">
            Always growing — here's what I'm exploring right now
          </p>
        </motion.div>

        <motion.div
          className="learning__grid"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="learning-card"
              variants={fadeIn("up", 0)}
              custom={index}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
