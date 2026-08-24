import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Hero() {
  return (
    <Reveal>
      <section
        id="home"
        className="
          relative
          overflow-hidden
          min-h-[85vh]
          flex
          items-center
          pt-24
          md:pt-28
          bg-gradient-to-br
          from-blue-100
          via-white
          to-purple-100
          dark:from-slate-950
          dark:via-slate-900
          dark:to-blue-950
          transition-colors
          duration-500
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            top-20
            left-20
            w-72
            h-72
            bg-cyan-500/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        ></div>

        <div
          className="
            absolute
            bottom-20
            right-20
            w-72
            h-72
            bg-blue-500/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        ></div>

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[1500px]
            mx-auto
            px-6
            lg:px-10
            grid
            md:grid-cols-[0.9fr_1.1fr]
            gap-10
            lg:gap-14
            items-center
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome */}
            <p
              className="
                uppercase
                tracking-widest
                text-indigo-500
                font-bold
                text-xl
              "
            >
              👋 Welcome to my Digital Space
            </p>

            {/* Name */}
            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                mt-5
                leading-tight
                text-gray-900
                dark:text-white
              "
            >
              Hi, I'm{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Fuad Bin Zafar
              </span>
            </h1>

            {/* Profession */}
            <h2
              className="
                mt-6
                text-2xl
                md:text-3xl
                text-gray-700
                dark:text-gray-300
              "
            >
              Software Engineer | AI-Driven Intelligent Systems | Embedded System Software
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                text-lg
                leading-8
                text-gray-600
                dark:text-gray-400
                max-w-xl
              "
            >
              I build reliable and intelligent software by combining software engineering, artificial intelligence, machine learning, and embedded systems software. My work spans full-stack development, AI-driven applications, computer vision, and autonomous systems, with a focus on turning complex real-world problems into efficient and scalable solutions.
            </p>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  text-cyan-500
                  dark:text-cyan-400
                "
              >
                Software Engineering
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/20
                  text-blue-500
                  dark:text-blue-400
                "
              >
                AI & Machine Learning
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-purple-500/20
                  text-purple-500
                  dark:text-purple-400
                "
              >
                Embedded Systems Software
              </span>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-4
                items-center
              "
            >
              {/* Explore Work */}
              <a
                href="#projects"
                className="
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  hover:scale-105
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                Explore My Work
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="
                  px-6
                  py-3
                  rounded-xl
                  border-2
                  border-cyan-500
                  text-cyan-600
                  dark:text-cyan-400
                  hover:bg-cyan-500
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Download Resume
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  px-6
                  py-3
                  rounded-xl
                  border-2
                  border-gray-400
                  dark:border-gray-600
                  text-gray-700
                  dark:text-gray-300
                  hover:bg-gray-900
                  hover:text-white
                  dark:hover:bg-cyan-500
                  dark:hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              flex
              justify-center
              md:justify-end
              items-center
              w-full
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[800px]
              "
            >
              {/* Subtle Glow Behind Image */}
              <div
                className="
                  absolute
                  inset-8
                  bg-blue-400/10
                  blur-3xl
                  rounded-3xl
                "
              ></div>

              {/* Full 16:9 Image */}
              <img
                src="/fuad2.png"
                alt="Fuad Bin Zafar"
                className="
                  relative
                  block
                  w-full
                  h-auto
                  aspect-video
                  object-contain
                  rounded-2xl
                  shadow-[0_18px_50px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_22px_60px_rgba(37,99,235,0.20)]
                "
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}

export default Hero;