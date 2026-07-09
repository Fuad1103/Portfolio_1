import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        md:px-10
        bg-gradient-to-r
        from-blue-50
        to-white
        dark:from-gray-950
        dark:to-gray-900
        transition-colors
        duration-500
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center max-w-3xl"
      >

        {/* Title */}
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            text-gray-800
            dark:text-white
          "
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Fuad
          </span>
        </h1>


        {/* Subtitle */}
        <h2
          className="
            text-xl
            md:text-2xl
            mt-4
            text-gray-600
            dark:text-gray-300
          "
        >
          Frontend / Full Stack Developer
        </h2>


        {/* Description */}
        <p
          className="
            mt-6
            text-gray-500
            dark:text-gray-400
            leading-relaxed
          "
        >
          I build modern, responsive, and high-performance web applications
          using React, JavaScript, Tailwind CSS, and modern web technologies.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
          "
        >

          {/* Projects Button */}
          <a
            href="#projects"
            className="
              px-6
              py-3
              bg-blue-600
              text-white
              rounded-lg
              hover:bg-blue-700
              hover:scale-105
              transition
              duration-300
            "
          >
            View Projects
          </a>


          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              border
              border-blue-600
              text-blue-600
              dark:text-blue-400
              dark:border-blue-400
              rounded-lg
              hover:bg-blue-600
              hover:text-white
              hover:scale-105
              transition
              duration-300
            "
          >
            Download Resume
          </a>


          {/* Contact Button */}
          <a
            href="#contact"
            className="
              px-6
              py-3
              border
              border-gray-400
              dark:border-gray-600
              text-gray-700
              dark:text-gray-300
              rounded-lg
              hover:bg-blue-600
              hover:text-white
              dark:hover:bg-blue-600
              hover:scale-105
              transition
              duration-300
            "
          >
            Contact Me
          </a>

        </div>


      </motion.div>

    </section>
  );
}

export default Hero;