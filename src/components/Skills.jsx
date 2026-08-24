import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Skills() {
  const skills = [
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: "🤖",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "NumPy",
        "Pandas",
      ],
    },

    {
      category: "Web Development & Modern Frameworks",
      icon: "🌐",
      items: [
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
      ],
    },

    {
      category: "Programming Languages",
      icon: "💻",
      items: ["C", "C++", "Python"],
    },

    {
      category: "Embedded Systems & Hardware",
      icon: "⚙️",
      items: [
        "Raspberry Pi",
        "GPIO Programming",
        "IoT Sensor Integration",
        "Signal Processing",
      ],
    },

    {
      category: "Robotics & Autonomous Systems",
      icon: "🚁",
      items: [
        "Autonomous Systems",
        "Sensor Fusion",
        "Robot Algorithms",
        "Intelligent Robotics",
      ],
    },

    {
      category: "Development Tools",
      icon: "🛠️",
      items: [
        "Jupyter Notebook",
        "VS Code",
        "Git",
        "GitHub",
        "Linux",
        "Docker",
      ],
    },
  ];

  return (
    <Reveal>
      <section
        id="skills"
        className="
          py-24
          px-6
          bg-gradient-to-br
          from-slate-100
          via-blue-50
          to-slate-200
          dark:from-slate-900
          dark:via-slate-800
          dark:to-blue-950
          transition-colors
          duration-500
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >
            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Technical Skills & Technologies ⚡
            </h2>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              Technologies and tools I use to build modern applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
              mt-14
            "
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  bg-white/80
                  dark:bg-white/10
                  backdrop-blur-xl

                  border-2
                  border-gray-200
                  dark:border-white/10

                  hover:border-indigo-400
                  dark:hover:border-purple-400

                  rounded-3xl
                  p-6

                  shadow-lg
                  hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]

                  transition-all
                  duration-300
                "
              >

                {/* Background Glow */}
                <div
                  className="
                    absolute
                    -top-20
                    -right-20

                    w-48
                    h-48

                    rounded-full

                    bg-gradient-to-br
                    from-blue-500/0
                    via-indigo-500/0
                    to-purple-500/0

                    group-hover:from-blue-500/10
                    group-hover:via-indigo-500/10
                    group-hover:to-purple-500/10

                    blur-3xl

                    transition-all
                    duration-500
                  "
                ></div>

                {/* Icon */}
                <div
                  className="
                    relative
                    text-4xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {skill.icon}
                </div>

                {/* Category Title */}
                <h3
                  className="
                    relative
                    text-xl
                    font-bold
                    mt-4

                    text-gray-900
                    dark:text-white

                    group-hover:text-indigo-600
                    dark:group-hover:text-purple-400

                    transition-colors
                    duration-300
                  "
                >
                  {skill.category}
                </h3>

                {/* Technology Items */}
                <div
                  className="
                    relative
                    mt-4
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-full

                        bg-white/80
                        dark:bg-slate-800/70

                        text-gray-800
                        dark:text-gray-100

                        border
                        border-gray-200
                        dark:border-slate-600

                        font-medium
                        shadow-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2

                    w-0
                    h-[3px]

                    bg-gradient-to-r
                    from-blue-500
                    via-indigo-500
                    to-purple-500

                    group-hover:w-full
                    group-hover:left-0

                    transition-all
                    duration-500
                  "
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Skills;