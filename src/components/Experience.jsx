import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      duration: "2024 - Present",
      description:
        "Building responsive web applications using React, JavaScript, and Tailwind CSS.",
    },
    {
      title: "Web Development Learner",
      company: "Self Learning",
      duration: "2023 - Present",
      description:
        "Learning modern frontend and full-stack development technologies.",
    },
  ];

  return (
    <Reveal>
      <section
        id="experience"
        className="
          py-20
          px-4
          md:px-10
          bg-white
          dark:bg-gray-950
          transition-colors
          duration-500
        "
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Experience
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              My learning journey and development experience.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="
                  bg-gray-100
                  dark:bg-gray-900
                  rounded-xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  transition
                  duration-500
                "
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">
                  {exp.company}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.duration}
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Experience;