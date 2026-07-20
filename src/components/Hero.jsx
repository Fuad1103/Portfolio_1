import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
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
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            grid
            md:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-widest text-indigo-500 font-bold text-xl">
              👋 Welcome to my Digital Space
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-5 leading-tight text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r
                 from-blue-600
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                  ">
                Fuad Bin Zafar
              </span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              Embedded Software Developer | AI-Driven Intelligent Systems
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-xl">
              I develop intelligent software solutions by integrating embedded systems,
              artificial intelligence, and modern software engineering. My focus is building
              efficient, reliable, and innovative technologies that solve real-world problems.
            </p>
            <div className="
              mt-6
              flex
              flex-wrap
              gap-3
              ">

              <span className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/20
                text-cyan-400
                ">
              Embedded Systems
              </span>


              <span className="
                px-4
                py-2
                rounded-full
                bg-blue-500/20
                text-blue-400
                ">
                Artificial Intelligence
              </span>


              <span className="
                px-4
                py-2
                rounded-full
                bg-purple-500/20
                text-purple-400
                ">
                Machine Learning
              </span>


</div>
            {/* Buttons */}
            <div className="mt-6 flex flex-row flex-nowrap gap-5 items-center">
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

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>

              <img
                src={profile}
                alt="Fuad"
                className="
                  relative
                  w-72
                  h-72
                  md:w-96
                  md:h-96
                  rounded-full
                  object-cover
                  object-top
                  border-8
                  border-white
                  dark:border-slate-800
                  shadow-2xl
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