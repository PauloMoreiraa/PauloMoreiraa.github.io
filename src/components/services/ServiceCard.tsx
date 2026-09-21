import { motion } from "framer-motion"
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiServer,
} from "react-icons/fi"
import type { Service } from "../../data/services"

interface ServiceCardProps {
  service: Service
}

const icons = {
  globe: <FiGlobe size={25} />,
  layers: <FiLayers size={25} />,
  server: <FiServer size={25} />,
  code: <FiCode size={25} />,
  database: <FiDatabase size={25} />,
}

const accentColors = {
  red: {
    icon: "bg-[var(--arcade-red)]",
    line: "bg-[var(--arcade-red)]",
    text: "text-[var(--arcade-red)]",
    hover: "hover:border-[var(--arcade-red)]",
  },
  yellow: {
    icon: "bg-[var(--arcade-yellow)]",
    line: "bg-[var(--arcade-yellow)]",
    text: "text-[var(--arcade-yellow)]",
    hover: "hover:border-[var(--arcade-yellow)]",
  },
  blue: {
    icon: "bg-[var(--arcade-blue)]",
    line: "bg-[var(--arcade-blue)]",
    text: "text-[var(--arcade-blue)]",
    hover: "hover:border-[var(--arcade-blue)]",
  },
  green: {
    icon: "bg-[var(--arcade-green)]",
    line: "bg-[var(--arcade-green)]",
    text: "text-[var(--arcade-green)]",
    hover: "hover:border-[var(--arcade-green)]",
  },
  purple: {
    icon: "bg-[var(--arcade-purple)]",
    line: "bg-[var(--arcade-purple)]",
    text: "text-[var(--arcade-purple)]",
    hover: "hover:border-[var(--arcade-purple)]",
  },
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const colors = accentColors[service.accent]

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        border-[3px]
        border-[var(--arcade-shadow)]
        bg-white
        shadow-[6px_6px_0_var(--arcade-shadow)]
        transition-[background-color,border-color]
        duration-300
        dark:bg-[var(--arcade-panel)]
        ${colors.hover}
      `}
    >
      <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          border-b-[3px]
          border-[var(--arcade-shadow)]
          px-4
          py-4
        "
      >
        <span
          className={`
            font-pixel
            text-[6px]
            ${colors.text}
            sm:text-[7px]
          `}
        >
          {service.code}
        </span>

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            border-2
            border-[var(--arcade-shadow)]
            ${colors.icon}
            text-white
            shadow-[3px_3px_0_var(--arcade-shadow)]
          `}
        >
          {icons[service.icon]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div
          className={`
            h-1
            w-10
            shrink-0
            ${colors.line}
          `}
        />

        <h3
          className="
            mt-5
            font-pixel
            text-[10px]
            leading-relaxed
            text-[var(--arcade-black)]
            dark:text-[var(--arcade-cream)]
            sm:text-[11px]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-gray-600
            dark:text-gray-400
          "
        >
          {service.description}
        </p>

        <div className="mt-auto pt-7">
          <div
            className="
              mb-3
              font-pixel
              text-[6px]
              text-gray-500
              sm:text-[7px]
            "
          >
            INCLUDED_
          </div>

          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="
                  border
                  border-gray-300
                  bg-[var(--arcade-cream)]
                  px-2
                  py-1.5
                  text-[10px]
                  font-semibold
                  leading-tight
                  text-[var(--arcade-black)]
                  transition-colors
                  duration-200
                  dark:border-gray-600
                  dark:bg-[var(--arcade-dark)]
                  dark:text-gray-300
                "
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="
          mt-auto
          flex
          shrink-0
          items-center
          justify-between
          border-t-2
          border-gray-300
          px-5
          py-3
          dark:border-gray-700
        "
      >
        <span
          className="
            font-pixel
            text-[5px]
            text-gray-500
            sm:text-[6px]
          "
        >
          STATUS
        </span>

        <span
          className={`
            font-pixel
            text-[5px]
            ${colors.text}
            sm:text-[6px]
          `}
        >
          ONLINE_
        </span>
      </div>
    </motion.article>
  )
}