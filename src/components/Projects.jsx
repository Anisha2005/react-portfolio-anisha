import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="py-16 px-6">
      
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-40 rounded-xl shadow-md"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4 max-w-2xl"
            >
              <h3 className="mb-3 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-4 text-neutral-600 dark:text-neutral-400 text-justify leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      rounded-full
                      bg-purple-100
                      dark:bg-neutral-800
                      px-3
                      py-1
                      text-sm
                      font-medium
                      text-purple-700
                      dark:text-purple-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;