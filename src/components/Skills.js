import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Material UI",
    "Typescript",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills-section">
      
      {/* ✅ Title Animation */}
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      {/* ✅ Skill Boxes Container */}
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // ✅ one-by-one pop
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-box"
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 0.8, y: 0 },
            }}
            
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
