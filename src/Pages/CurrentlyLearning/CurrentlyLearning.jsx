import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/animations";
import "./CurrentlyLearning.scss";

/**
 * What I'm currently learning/exploring.
 * Keep this updated — shows employers you're actively growing.
 * 
 * Icons: use emoji for simplicity, or swap for react-icons if you prefer.
 */
const learningItems = [
  {
    id: 1,
    emoji: "☁️",
    title: "AWS Cloud",
    description: "S3, Amplify, Lambda basics — building and deploying serverless apps",
    status: "In Progress",
  },
  {
    id: 2,
    emoji: "🤖",
    title: "Claude AI",
    description: "AI-assisted development with Anthropic's Claude and prompt engineering",
    status: "Exploring",
  },
  {
    id: 3,
    emoji: "⚡",
    title: "Next.js",
    description: "Server components, App Router, and full-stack React framework",
    status: "Learning",
  },
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="learning">
      <div className="container">
        {/* Header */}
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

        {/* Learning Cards */}
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
