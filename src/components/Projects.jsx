import { motion } from "framer-motion";
import projects from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        px-4
        sm:px-6

        bg-gradient-to-br
        from-slate-100
        via-blue-50
        to-slate-200

        dark:from-slate-900
        dark:via-slate-800
        dark:to-blue-950

        text-gray-900
        dark:text-white

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
              sm:text-5xl
              font-bold
            "
          >
            My Projects 🚀
          </h2>

          <p
            className="
              mt-4
              text-gray-600
              dark:text-gray-400
            "
          >
            Some things I have built recently
          </p>
        </motion.div>

        {/* Projects Swiper */}

        <div className="mt-14">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            watchOverflow={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projects-swiper pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={project.id || index}
                className="h-auto flex"
              >
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 50,
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    w-full
                    h-full

                    flex
                    flex-col

                    bg-white/70
                    dark:bg-white/10

                    backdrop-blur-xl

                    border
                    border-gray-200
                    dark:border-white/20

                    rounded-3xl
                    overflow-hidden

                    shadow-xl
                    hover:shadow-2xl

                    transition-all
                    duration-300
                  "
                >
                  {/* Project Image */}

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full
                      h-44
                      sm:h-52

                      object-cover
                      flex-shrink-0
                    "
                  />

                  {/* Project Content */}

                  <div
                    className="
                      p-5
                      sm:p-6

                      flex
                      flex-col
                      flex-1
                    "
                  >
                    {/* Project Title */}

                    <h3
                      className="
                        text-xl
                        md:text-2xl

                        font-bold
                        leading-tight
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Project Description */}

                    <p
                      className="
                        mt-4

                        text-sm
                        md:text-base

                        text-gray-700
                        dark:text-gray-300

                        leading-7
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div
                      className="
                        mt-5

                        flex
                        flex-wrap
                        justify-center

                        gap-2
                      "
                    >
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3
                            py-1.5

                            rounded-full

                            text-xs
                            sm:text-sm
                            font-semibold

                            bg-cyan-100
                            text-cyan-700

                            dark:bg-cyan-500/20
                            dark:text-cyan-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}

                    <div
                      className="
                        mt-auto
                        pt-6

                        flex
                        flex-col
                        sm:flex-row

                        gap-3

                        flex-shrink-0
                      "
                    >
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            w-full
                            sm:flex-1

                            text-center

                            px-5
                            py-3

                            rounded-xl

                            font-semibold
                            text-white

                            bg-gradient-to-r
                            from-cyan-400
                            to-blue-500

                            hover:scale-[1.02]

                            transition-transform
                            duration-300
                          "
                        >
                          Live Demo
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            w-full
                            sm:flex-1

                            text-center

                            px-5
                            py-3

                            rounded-xl

                            font-semibold

                            border
                            border-cyan-400

                            text-cyan-600
                            dark:text-cyan-300

                            hover:bg-cyan-500
                            hover:text-white

                            transition-colors
                            duration-300
                          "
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;