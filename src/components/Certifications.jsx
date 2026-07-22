import { motion } from "framer-motion";
import certifications from "../data/certifications";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications 🏆
          </h2>

          <p
            className="
              mt-4
              text-gray-600
              dark:text-gray-400
            "
          >
            Professional certificates and achievements
          </p>
        </motion.div>

        {/* Swiper */}

        <div className="certification-swiper-wrapper relative mt-14">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".certificate-button-next",
              prevEl: ".certificate-button-prev",
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
            className="certification-swiper pb-16"
          >
            {certifications.map((certificate, index) => (
              <SwiperSlide
                key={index}
                className="h-auto"
              >
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
                    min-h-[600px]
                    sm:min-h-[620px]
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
                    flex
                    flex-col
                  "
                >
                  {/* Certificate Image */}

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      w-full
                      h-48
                      sm:h-56
                      object-cover
                      flex-shrink-0
                    "
                  />

                  {/* Content */}

                  <div
                    className="
                      p-5
                      sm:p-6
                      flex
                      flex-col
                      flex-1
                    "
                  >
                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        leading-tight
                      "
                    >
                      {certificate.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-cyan-600
                        dark:text-cyan-400
                        font-semibold
                      "
                    >
                      {certificate.issuer}
                    </p>

                    {/* Description */}

                    <ul
                      className="
                        mt-4
                        space-y-2
                        text-sm
                        text-gray-700
                        dark:text-gray-300
                        leading-6
                        flex-1
                      "
                    >
                      {certificate.description?.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex gap-2"
                        >
                          <span className="text-cyan-500">•</span>

                          <span>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}

                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-6
                        w-full
                        px-5
                        py-3
                        rounded-xl
                        bg-cyan-500
                        text-black
                        font-semibold
                        text-center
                        hover:bg-cyan-600
                        transition
                        flex-shrink-0
                      "
                    >
                      View Certificate
                    </a>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous Button */}

          <button
            type="button"
            aria-label="Previous certificates"
            className="
              certificate-button-prev
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

          {/* Next Button */}

          <button
            type="button"
            aria-label="Next certificates"
            className="
              certificate-button-next
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
  );
}


export default Certifications;