import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A real-time weather forecasting app using OpenWeather API.",
      tech: ["React", "API", "CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Todo App",
      description:
        "Task manager with add, delete and local storage support.",
      tech: ["JavaScript", "LocalStorage"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive developer portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <Reveal>
      <section
        id="projects"
        className="
          py-20
          px-4
          md:px-10
          bg-gray-100
          dark:bg-gray-900
          transition-colors
          duration-500
        "
      >

        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h2>


          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Some of the projects I've built recently
          </p>


          {/* Project Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <motion.div
                key={index}

                whileHover={{
                  scale: 1.05,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  bg-white
                  dark:bg-gray-950
                  rounded-xl
                  shadow-lg
                  p-6
                  transition-colors
                  duration-500
                "
              >

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>


                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="
                        text-sm
                        bg-blue-100
                        dark:bg-blue-900
                        text-blue-600
                        dark:text-blue-300
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>


                {/* Buttons */}
                <div className="flex justify-between mt-6">

                  <a
                    href={project.github}
                    className="
                      text-blue-600
                      dark:text-blue-400
                      hover:underline
                    "
                  >
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    className="
                      text-green-600
                      dark:text-green-400
                      hover:underline
                    "
                  >
                    Live Demo
                  </a>

                </div>


              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </Reveal>
  );
}

export default Projects;