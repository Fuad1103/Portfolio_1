import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import Reveal from "./Reveal";

function About() {
  const stats = [
    {
      number: "3+",
      title: "Years Software Engineering",
      icon: "⚙️",
    },
    {
      number: "15+",
      title: "Projects & Applications",
      icon: "🚀",
    },
    {
      number: "10+",
      title: "AI & Software Technologies",
      icon: "🤖",
    },
    {
      number: "2",
      title: "Master's Specializations",
      icon: "🎓",
    },
  ];

  const timeline = [
    {
      year: "2026 – Current",
      title: "Master of Engineering in Media Engineering with AI",
      description:
        "Hochschule Anhalt, Germany • Specializing in Artificial Intelligence, Media Engineering, Machine Learning, and Intelligent Systems.",
    },
    {
      year: "2021 – 2022",
      title: "Master's in Data Science",
      description:
        "Maulana Abul Kalam Azad University of Technology, West Bengal, India • Studied Data Science, Machine Learning fundamentals, Data Analytics, and Statistical Computing.",
    },
    {
      year: "2017 – 2021",
      title: "B.Tech in Computer Science & Engineering",
      description:
        "Maulana Abul Kalam Azad University of Technology, India • Thesis: Mobile Voting System Based on Fingerprint Recognition.",
    },
  ];

  return (
    <Reveal>
      <section
        id="about"
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
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADING ================= */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              About Me 👨‍💻
            </h2>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              Get to know me and my Education Background
            </p>
          </motion.div>

          {/* ================= MAIN SECTION ================= */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              mt-16
            "
          >
            {/* ================= PROFILE CARD ================= */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden

                min-h-[650px]

                bg-white/70
                dark:bg-white/10
                backdrop-blur-xl

                border-2
                border-gray-200
                dark:border-white/10

                hover:border-blue-500
                dark:hover:border-blue-400

                rounded-3xl
                p-8

                shadow-xl
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]

                flex
                flex-col
                justify-center

                transition-all
                duration-300
              "
            >
              {/* Soft Hover Glow */}

              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-52
                  h-52

                  rounded-full

                  bg-blue-500/0
                  group-hover:bg-blue-500/10

                  blur-3xl

                  transition-all
                  duration-500
                "
              ></div>

              {/* Profile Header */}

              <div
                className="
                  relative
                  flex
                  items-center
                  gap-5
                  flex-wrap
                "
              >
                <img
                  src={profile}
                  alt="Fuad Bin Zafar"
                  className="
                    w-28
                    h-28

                    rounded-full

                    border-4
                    border-blue-400

                    object-contain

                    bg-white
                    dark:bg-slate-800
                  "
                />

                <div>
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Fuad Bin Zafar
                  </h3>

                  <p
                    className="
                      text-blue-600
                      dark:text-blue-400
                      font-semibold
                      mt-2
                    "
                  >
                    Software Engineer | AI/ML & Intelligent Embedded Systems
                  </p>
                </div>
              </div>

              {/* About Description */}

              <p
                className="
                  relative
                  mt-8
                  leading-8
                  text-gray-700
                  dark:text-gray-300
                "
              >
                I’m driven by the challenge of creating technology that can
                understand, adapt, and interact with the real world. My interests
                lie at the intersection of intelligent computing and
                hardware-aware development, where ideas can evolve into
                practical, high-impact systems.

                <br />
                <br />

                With an academic foundation in Computer Science, Data Science,
                and AI Engineering, I enjoy exploring areas such as autonomous
                technologies, real-time computing, data-driven decision-making,
                and next-generation intelligent applications. I’m continuously
                expanding my technical skills while working toward a career
                focused on meaningful and innovative engineering.
              </p>
            </motion.div>

            {/* ================= EDUCATION ================= */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
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

                    hover:border-blue-500
                    dark:hover:border-blue-400

                    rounded-3xl
                    p-6

                    shadow-xl
                    hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]

                    transition-all
                    duration-300
                  "
                >
                  {/* Soft Hover Glow */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16

                      w-36
                      h-36

                      rounded-full

                      bg-blue-500/0
                      group-hover:bg-blue-500/10

                      blur-3xl

                      transition-all
                      duration-500
                    "
                  ></div>

                  {/* Year */}

                  <span
                    className="
                      relative
                      text-blue-600
                      dark:text-blue-400
                      font-bold
                      text-xl
                    "
                  >
                    {item.year}
                  </span>

                  {/* Degree Title - NO COLOR CHANGE */}

                  <h3
                    className="
                      relative
                      text-xl
                      md:text-2xl
                      font-bold
                      mt-3
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      mt-4
                      leading-7
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ================= STATISTICS ================= */}
          {/* NO HOVER EFFECTS HERE */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
              mt-16
            "
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-white/70
                  dark:bg-white/10
                  backdrop-blur-xl

                  border-2
                  border-blue-400/60
                  dark:border-blue-400/40

                  rounded-3xl
                  p-8

                  shadow-xl
                "
              >
                {/* Icon */}

                <div className="text-4xl">
                  {stat.icon}
                </div>

                {/* Number */}

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-blue-600
                    dark:text-blue-400
                    mt-3
                  "
                >
                  {stat.number}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  {stat.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;