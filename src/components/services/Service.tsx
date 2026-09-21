import { motion } from "framer-motion"
import { services } from "../../data/services"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        min-h-screen
        scroll-mt-28
        overflow-hidden
        bg-[var(--arcade-cream)]
        py-24
        text-[var(--arcade-black)]
        transition-colors
        duration-300
        dark:bg-[var(--arcade-black)]
        dark:text-white
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-7
          lg:px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  font-pixel
                  text-[7px]
                  text-[var(--arcade-red)]
                  sm:text-[8px]
                "
              >
                /// SERVICES DATABASE
              </span>

              <h2
                className="
                  mt-4
                  font-pixel
                  text-xl
                  leading-relaxed
                  text-[var(--arcade-black)]
                  dark:text-[var(--arcade-cream)]
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                WHAT I DO
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-600
                  dark:text-gray-400
                  sm:text-[15px]
                "
              >
                Digital solutions designed to turn ideas,
                businesses, and projects into functional and
                professional web experiences.
              </p>
            </div>

            <div
              className="
                hidden
                border-2
                border-[var(--arcade-shadow)]
                bg-white
                px-4
                py-3
                font-pixel
                text-[6px]
                text-[var(--arcade-green)]
                shadow-[3px_3px_0_var(--arcade-shadow)]
                dark:bg-[var(--arcade-panel)]
                sm:block
              "
            >
              AVAILABLE_FOR_PROJECTS
            </div>
          </div>
        </motion.div>

        <div
          className="
            mt-12
            grid
            items-stretch
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex h-full"
              initial={{
                opacity: 0,
                y: 24,
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
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.35,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t-2
            border-gray-300
            pt-7
            dark:border-[var(--arcade-panel)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              font-pixel
              text-[6px]
              leading-relaxed
              text-gray-500
              sm:text-[7px]
            "
          >
            BUILDING_DIGITAL_SOLUTIONS /// SINCE_2019
          </div>

          <div
            className="
              font-pixel
              text-[6px]
              text-[var(--arcade-red)]
              sm:text-[7px]
              dark:text-[var(--arcade-yellow)]
            "
          >
            READY_TO_BUILD_
          </div>
        </motion.div>
      </div>
    </section>
  )
}