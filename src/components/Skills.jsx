import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

import Reveal from "./Reveal";

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "GitHub",
  ];

  return (
    <Reveal>
      <section
        id="skills"
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

        <div className="max-w-6xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Skills
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build modern applications.
          </p>


          {/* Skill Icons */}
          <div className="flex justify-center gap-5 text-5xl mt-10">

            <FaReact className="text-blue-500 hover:scale-110 transition" />

            <FaJs className="text-yellow-500 hover:scale-110 transition" />

            <FaHtml5 className="text-orange-500 hover:scale-110 transition" />

            <FaCss3 className="text-blue-600 hover:scale-110 transition" />

          </div>


          {/* Skill Cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  bg-gray-100
                  dark:bg-gray-900
                  rounded-xl
                  p-6
                  shadow-md
                  hover:shadow-xl
                  hover:scale-105
                  transition
                  duration-300
                "
              >

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill}
                </h3>

              </div>
            ))}

          </div>


        </div>

      </section>
    </Reveal>
  );
}

export default Skills;