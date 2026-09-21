import { motion } from "framer-motion";
import TiltCard from "../../Components/TiltCard/TiltCard";
import { fadeIn, staggerContainer } from "../../utils/animations";
import "./Skills.scss";
import { aiToolsSkills, backendSkills, frontendSkills } from "./utils";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div variants={fadeIn("up", 0)} custom={index}>
      <TiltCard
        className="skill-card"
        tiltAmount={8}
        scale={1.03}
      >
        <div className="skill-card__icon">
          <img src={skill.logo} alt={skill.skillName} />
        </div>
        <span className="skill-card__name">{skill.skillName}</span>
        <div className="skill-card__level">
          <motion.div
            className="skill-card__level-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3 + index * 0.05,
              ease: "easeOut",
            }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: frontendSkills, icon: "⚛️" },
    { title: "Backend & Tools", skills: backendSkills, icon: "🔧" },
    { title: "AI Tools", skills: aiToolsSkills, icon: "🤖" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        {/* Header */}
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="skills__subtitle">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Skill Categories */}
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="skills__category"
            variants={staggerContainer(0.05, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              className="skills__category-title"
              variants={fadeIn("up", 0)}
            >
              <span>{category.icon}</span>
              {category.title}
            </motion.h3>

            <div className="skills__grid">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.skillName} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
