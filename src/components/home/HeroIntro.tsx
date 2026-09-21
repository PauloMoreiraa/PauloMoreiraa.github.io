import { motion } from "framer-motion"
import PixelBadge from "../common/PixelBadge"

export default function HeroIntro() {
  return (
    <>
      <PixelBadge color="pink">
        SOFTWARE_ENGINEER
      </PixelBadge>

      <motion.h1
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className="
          mt-6
          font-pixel
          text-4xl
          leading-[1.15]
          tracking-tight
          sm:text-5xl
          md:text-6xl
          lg:text-[5.2rem]
        "
      >
        PAULO
        <br />

        <span className="text-[var(--arcade-red)]">
          MOREIRA
        </span>
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          mt-5
          flex
          items-center
          justify-center
          gap-2
          font-pixel
          text-[8px]
          sm:text-[10px]
        "
      >
        <span>FULL_STACK</span>

        <span className="text-[var(--arcade-blue)]">
          ///
        </span>

        <span>WEB_DEVELOPER</span>
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="
          mt-7
          max-w-xl
          text-base
          leading-7
          text-gray-700
          dark:text-gray-300
          sm:text-lg
        "
      >
        I design and build digital products, interfaces
        and software systems with a focus on technology,
        usability and real-world impact.
      </motion.p>
    </>
  )
}