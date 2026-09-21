import { motion, AnimatePresence } from "framer-motion"
import { FiArrowDown } from "react-icons/fi"
import { useEffect, useState } from "react"

export default function HomeFooter() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="
        absolute
        bottom-5
        left-1/2
        hidden
        w-full
        max-w-7xl
        -translate-x-1/2
        px-5
        sm:block
        sm:px-7
        lg:px-8
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            font-pixel
            text-[6px]
            text-gray-500
            dark:text-gray-400
            sm:text-[8px]
          "
        >
        </div>

        <AnimatePresence>
          {isAtTop && (
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: [0, 5, 0],
              }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                opacity: {
                  duration: 0.25,
                },
                y: {
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                flex
                cursor-pointer
                items-center
                gap-2
                font-pixel
                text-[6px]
                text-[var(--arcade-blue)]
                transition-colors
                duration-300
                ease-in-out
                hover:text-[var(--arcade-pink)]
                dark:text-[var(--arcade-yellow)]
                dark:hover:text-[var(--arcade-pink)]
                sm:text-[8px]
              "
            >
              SCROLL TO EXPLORE

              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowDown size={14} />
              </motion.span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}