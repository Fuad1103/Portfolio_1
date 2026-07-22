import { motion } from "framer-motion";
import Reveal from "./Reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Blog() {
  const posts = [
    {
      title: "How I Learned React",
      description:
        "My journey of learning React, components, hooks, and building real-world applications using modern frontend development practices.",
      category: "React Development",
      link: "https://react.dev/learn",
    },
    {
      title: "Building My First Portfolio",
      description:
        "How I designed and developed a responsive developer portfolio using React, Tailwind CSS, and Framer Motion with modern UI principles.",
      category: "Frontend Development",
      link: "https://developer.mozilla.org/en-US/docs/Learn",
    },
    {
      title: "JavaScript Tips",
      description:
        "Important JavaScript concepts, ES6 features, and programming techniques that helped me improve my software development skills.",
      category: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      title: "Getting Started with Embedded AI",
      description:
        "Exploring embedded systems, Raspberry Pi, sensors, and Artificial Intelligence integration for intelligent edge devices.",
      category: "Embedded Systems",
      link: "https://www.raspberrypi.com/documentation/",
    },
    {
      title: "Building Autonomous Systems",
      description:
        "My experience working with robotics, drones, sensor processing, and intelligent autonomous technologies.",
      category: "AI & Robotics",
      link: "https://docs.px4.io/main/en/",
    },
  ];

  return (
    <Reveal>
      <section
        id="blog"
        className="
          py-24
          px-4
          sm:px-6
          bg-white
          dark:bg-gray-950
          transition-colors
          duration-500
          overflow-hidden
        "
      >
        <div className="max-w-screen-2xl mx-auto px-0 sm:px-4">
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
              duration: 0.6,
            }}
            className="text-center mb-14"
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
              Latest Articles ✍️
            </h2>

            <p
              className="
                mt-4
                max-w-3xl
                mx-auto
                text-gray-600
                dark:text-gray-300
              "
            >
              Sharing knowledge about software development, AI, embedded
              systems, robotics, and modern technology.
            </p>
          </motion.div>

          {/* Blog Swiper */}
          <div className="blog-swiper-wrapper relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".blog-button-next",
                prevEl: ".blog-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              grabCursor={true}
              watchOverflow={true}
              spaceBetween={24}
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
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="blog-swiper pb-16"
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <motion.article
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
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      h-full
                      min-h-[350px]
                      bg-gray-100
                      dark:bg-gray-900
                      rounded-3xl
                      p-6
                      sm:p-8
                      shadow-lg
                      hover:shadow-2xl
                      transition-all
                      duration-300
                      flex
                      flex-col
                      border
                      border-gray-200
                      dark:border-gray-800
                    "
                  >
                    {/* Category */}
                    <span
                      className="
                        inline-flex
                        w-fit
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-semibold
                        bg-cyan-100
                        text-cyan-700
                        dark:bg-cyan-500/20
                        dark:text-cyan-300
                      "
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        mt-5
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        leading-tight
                        min-h-[58px]
                      "
                    >
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        text-gray-600
                        dark:text-gray-300
                        leading-7
                        flex-1
                      "
                    >
                      {post.description}
                    </p>

                    {/* Read More */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-auto
                        pt-6
                        inline-flex
                        items-center
                        gap-2
                        w-fit
                        text-blue-600
                        dark:text-blue-400
                        font-semibold
                        hover:text-cyan-600
                        dark:hover:text-cyan-300
                        transition-colors
                      "
                    >
                      Read More
                      <span aria-hidden="true">→</span>
                    </a>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Previous Button */}
            <button
              type="button"
              aria-label="Previous articles"
              className="
                blog-button-prev
                hidden
                lg:flex
                absolute
                left-[-20px]
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
                items-center
                justify-center
                rounded-full
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                text-2xl
                shadow-xl
                border
                border-gray-200
                dark:border-white/10
                hover:scale-110
                hover:text-cyan-500
                transition
              "
            >
              ←
            </button>

            {/* Custom Next Button */}
            <button
              type="button"
              aria-label="Next articles"
              className="
                blog-button-next
                hidden
                lg:flex
                absolute
                right-[-20px]
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
                items-center
                justify-center
                rounded-full
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                text-2xl
                shadow-xl
                border
                border-gray-200
                dark:border-white/10
                hover:scale-110
                hover:text-cyan-500
                transition
              "
            >
              →
            </button>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Blog;