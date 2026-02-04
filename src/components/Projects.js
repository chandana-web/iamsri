import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Management system",
      desc: "Full-stack restaurant management system with separate Admin and Guest interfaces. Admins can manage menu items, orders, tables, and chefs, while guests can view the menu and place orders.",
      tech: ["React", "Node", "MongoDB", "Bootstrap", "ContextAPI"],
    },
    {
      title: "Quizy- Quiz Game",
      desc: "Interactive quiz platform with category and difficulty-level based questions using the Open Triia API. Real-time score tracking, timer functionality, and dynamic rendering of questions and results.",
      tech: ["Next.JS", "Tailwind CSS", "Redux"],
    },
    {
      title: "Pocket-Notes",
      desc: "Personalized Note-taking Web app that enables users to Create, Edit, and Delete notes efficiently. Integrated Local Storage to ensure data persistence across browser sessions without a backend. Customizing avatar and color theme options for a tailored user experience.",
      tech: ["React", "Bootstrap","ContextAPI", "LocalStorage" ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      
      {/* ✅ Section Title */}
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      {/* ✅ Project Cards */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120, // ✅ Alternate slide
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2>{project.title}</h2>
            <p>{project.desc}</p>

            {/* ✅ Tech Pills */}
            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
