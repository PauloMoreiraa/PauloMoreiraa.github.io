import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { homeAssets } from "../../assets/HomeAssets"

interface ProfileCardProps {
  images?: string[]
  imageAlt?: string
  location?: string
  showLocation?: boolean
}

export default function ProfileCard({
  images = homeAssets.profileImages,
  imageAlt = homeAssets.profileImageAlt,
  location = "SÃO PAULO, SP · BRAZIL",
  showLocation = true,
}: ProfileCardProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const changeImage = () => {
    setCurrentImage(
      (current) =>
        (current + 1) % images.length,
    )
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }}
      className="
        flex
        items-center
        justify-center
        lg:justify-end
      "
    >
      <button
        type="button"
        onClick={changeImage}
        aria-label="Change profile photo"
        className="
          relative
          block
          h-[400px]
          w-[285px]
          cursor-pointer
          overflow-hidden
          border-[3px]
          border-[var(--arcade-shadow)]
          bg-[var(--arcade-panel)]
          shadow-[7px_7px_0_var(--arcade-shadow)]
          transition-transform
          duration-300
          ease-in-out
          hover:-translate-y-1
          sm:h-[500px]
          sm:w-[335px]
          md:h-[560px]
          md:w-[375px]
          lg:h-[610px]
          lg:w-[405px]
        "
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={imageAlt}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              h-full
              w-full
              object-cover
            "
          />
        </AnimatePresence>

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            border-t-2
            border-[var(--arcade-shadow)]
            bg-[var(--arcade-black)]/90
            px-3
            py-3
            sm:px-4
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
            "
          >
            <span
              className="
                font-pixel
                text-[6px]
                text-[var(--arcade-green)]
                sm:text-[7px]
              "
            >
              PHOTO_
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span
              className="
                font-pixel
                text-[6px]
                text-[var(--arcade-yellow)]
                sm:text-[7px]
              "
            >
              CLICK_TO_CHANGE
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  )
}