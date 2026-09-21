import { motion } from "framer-motion"
import type { Project } from "../../data/projects"

interface ProjectCardProps {
  project: Project
  isActive: boolean
  onClick: () => void
}

export default function ProjectCard({
  project,
  isActive,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{
        scale: isActive ? 1 : 0.88,
        opacity: isActive ? 1 : 0.55,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        flex
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        border-[3px]
        text-left
        shadow-[6px_6px_0_var(--arcade-shadow)]
        transition-[filter,background-color,border-color]
        duration-300
        ${
          isActive
            ? `
              border-[var(--arcade-shadow)]
              bg-white
              dark:bg-[var(--arcade-panel)]
              hover:border-[var(--arcade-red)]
            `
            : `
              border-[var(--arcade-shadow)]
              bg-[#b7b2a5]
              grayscale
              dark:bg-[#25212b]
            `
        }
      `}
    >
      <div
        className={`
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          border-b-[3px]
          transition-colors
          duration-300
          ${
            isActive
              ? "border-[var(--arcade-shadow)] group-hover:border-[var(--arcade-red)]"
              : "border-[var(--arcade-shadow)]"
          }
        `}
      >
        <img
          src={project.image}
          alt={project.name}
          className={`
            h-full
            w-full
            object-cover
            ${
              isActive
                ? ""
                : "brightness-[0.55]"
            }
          `}
        />

        {isActive && (
          <div
            className="
              absolute
              left-3
              top-3
              border-2
              border-[var(--arcade-shadow)]
              bg-[var(--arcade-red)]
              px-2
              py-1
              font-pixel
              text-[6px]
              text-white
              shadow-[2px_2px_0_var(--arcade-shadow)]
            "
          >
            CLICK HERE
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3
          className={`
            font-pixel
            text-[10px]
            leading-relaxed
            sm:text-[11px]
            ${
              isActive
                ? `
                  text-[var(--arcade-black)]
                  dark:text-[var(--arcade-cream)]
                `
                : `
                  text-gray-600
                  dark:text-gray-400
                `
            }
          `}
        >
          {project.name}
        </h3>

        <p
          className="
            mt-3
            line-clamp-2
            text-xs
            leading-relaxed
            text-gray-600
            dark:text-gray-400
            sm:text-sm
          "
        >
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className={`
                border
                px-2
                py-1
                text-[10px]
                font-semibold
                sm:text-[11px]
                ${
                  isActive
                    ? `
                      border-gray-300
                      bg-[var(--arcade-cream)]
                      text-[var(--arcade-black)]
                      dark:border-gray-600
                      dark:bg-[var(--arcade-dark)]
                      dark:text-[var(--arcade-cream)]
                    `
                    : `
                      border-gray-500
                      bg-[#a09a90]
                      text-gray-600
                      dark:border-gray-700
                      dark:bg-[#302b36]
                      dark:text-gray-400
                    `
                }
              `}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}