import { AnimatePresence, motion } from "framer-motion"
import {
  FiExternalLink,
  FiGithub,
  FiX,
} from "react-icons/fi"
import type { Project } from "../../data/projects"
import PixelLock from "../common/PixelLock"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-md
            sm:p-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-y-auto
              border-[3px]
              border-[var(--arcade-shadow)]
              bg-[var(--arcade-cream)]
              shadow-[8px_8px_0_var(--arcade-shadow)]
              dark:bg-[var(--arcade-dark)]
            "
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                border-2
                border-[var(--arcade-shadow)]
                bg-[var(--arcade-red)]
                text-white
                shadow-[3px_3px_0_var(--arcade-shadow)]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <FiX size={20} />
            </button>

            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div
                className="
                  relative
                  h-[260px]
                  w-full
                  overflow-hidden
                  border-b-[3px]
                  border-[var(--arcade-shadow)]
                  sm:h-[340px]
                  md:h-[480px]
                  md:border-b-0
                  md:border-r-[3px]
                "
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    border-2
                    border-[var(--arcade-shadow)]
                    bg-[var(--arcade-red)]
                    px-3
                    py-2
                    font-pixel
                    text-[7px]
                    text-white
                    shadow-[3px_3px_0_var(--arcade-shadow)]
                  "
                >
                  PROJECT UNLOCKED
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <span
                  className="
                    font-pixel
                    text-[7px]
                    text-[var(--arcade-green)]
                  "
                >
                  /// PROJECT DATABASE
                </span>

                <h2
                  className="
                    mt-4
                    font-pixel
                    text-lg
                    leading-relaxed
                    text-[var(--arcade-black)]
                    dark:text-[var(--arcade-cream)]
                    sm:text-xl
                  "
                >
                  {project.name}
                </h2>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  {project.description}
                </p>

                <div className="mt-6">
                  <h3
                    className="
                      font-pixel
                      text-[7px]
                      text-[var(--arcade-red)]
                    "
                  >
                    TECHNOLOGIES
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          border-2
                          border-[var(--arcade-shadow)]
                          bg-[var(--arcade-yellow)]
                          px-2
                          py-2
                          text-[11px]
                          font-semibold
                          text-[var(--arcade-black)]
                          shadow-[2px_2px_0_var(--arcade-shadow)]
                          sm:text-xs
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        h-11
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2
                        border-2
                        border-[var(--arcade-shadow)]
                        bg-[var(--arcade-red)]
                        px-3
                        font-pixel
                        text-[7px]
                        text-white
                        shadow-[3px_3px_0_var(--arcade-shadow)]
                        transition-transform
                        duration-200
                        hover:-translate-y-1
                        sm:text-[8px]
                      "
                    >
                      <FiExternalLink size={15} />
                      LIVE SITE
                    </a>
                  ) : (
                    <LockedButton label="LIVE SITE" />
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        h-11
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2
                        border-2
                        border-[var(--arcade-shadow)]
                        bg-[var(--arcade-panel)]
                        px-3
                        font-pixel
                        text-[7px]
                        text-white
                        shadow-[3px_3px_0_var(--arcade-shadow)]
                        transition-transform
                        duration-200
                        hover:-translate-y-1
                        sm:text-[8px]
                      "
                    >
                      <FiGithub size={15} />
                      GITHUB
                    </a>
                  ) : (
                    <LockedButton label="GITHUB" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LockedButton({ label }: { label: string }) {
  return (
    <div
      className="
        flex
        h-11
        cursor-not-allowed
        items-center
        justify-center
        gap-2
        overflow-hidden
        border-2
        border-[var(--arcade-shadow)]
        bg-gray-400
        px-3
        font-pixel
        text-[7px]
        text-gray-700
        shadow-[3px_3px_0_var(--arcade-shadow)]
        dark:bg-gray-700
        dark:text-gray-400
        sm:text-[8px]
      "
    >
      <span className="opacity-50">
        {label}
      </span>

      <PixelLock size="sm" />
    </div>
  )
}