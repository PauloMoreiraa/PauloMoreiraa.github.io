import { motion } from "framer-motion"
import {
  FiArrowUpRight,
  FiLinkedin,
  FiMail,
} from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"
import type { ContactChannel } from "../../data/contact"

interface ContactInfoProps {
  title: string
  channels: ContactChannel[]
}

const icons = {
  email: FiMail,
  whatsapp: SiWhatsapp,
  linkedin: FiLinkedin,
}

const accentColors = {
  red: {
    icon: "bg-[var(--arcade-red)] text-white",
    accent: "text-[var(--arcade-red)]",
    hover: "hover:border-[var(--arcade-red)]",
  },
  green: {
    icon: "bg-[var(--arcade-green)] text-white",
    accent: "text-[var(--arcade-green)]",
    hover: "hover:border-[var(--arcade-green)]",
  },
  blue: {
    icon: "bg-[var(--arcade-blue)] text-white",
    accent: "text-[var(--arcade-blue)]",
    hover: "hover:border-[var(--arcade-blue)]",
  },
}

export default function ContactInfo({
  title,
  channels,
}: ContactInfoProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex items-center gap-3">
        <span
          className="
            h-8
            w-1
            shrink-0
            bg-[var(--arcade-red)]
          "
        />

        <h3
          className="
            font-pixel
            text-[8px]
            leading-relaxed
            text-[var(--arcade-black)]
            dark:text-[var(--arcade-cream)]
          "
        >
          {title}
        </h3>
      </div>

      <div
        className="
          grid
          flex-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-1
        "
      >
        {channels.map((channel, index) => {
          const Icon = icons[channel.icon]
          const colors = accentColors[channel.accent]

          return (
            <motion.a
              key={channel.id}
              href={channel.href}
              target={
                channel.icon === "email"
                  ? undefined
                  : "_blank"
              }
              rel={
                channel.icon === "email"
                  ? undefined
                  : "noreferrer"
              }
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className={`
                group
                flex
                min-h-[150px]
                cursor-pointer
                flex-col
                border-[3px]
                border-gray-300
                bg-white
                p-5
                shadow-[4px_4px_0_var(--arcade-shadow)]
                transition-[border-color,background-color]
                duration-300
                ease-in-out
                ${colors.hover}
                dark:border-gray-700
                dark:bg-[var(--arcade-panel)]
              `}
            >
              <div className="flex items-start justify-between gap-4">
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
                    shadow-[2px_2px_0_var(--arcade-shadow)]
                    ${colors.icon}
                  `}
                >
                  <Icon size={21} />
                </div>

                <span
                  className={`
                    pt-1
                    font-pixel
                    text-[5px]
                    ${colors.accent}
                    sm:text-[6px]
                  `}
                >
                  {channel.code}
                </span>
              </div>

              <div className="mt-4">
                <h4
                  className="
                    font-pixel
                    text-[8px]
                    leading-relaxed
                    text-[var(--arcade-black)]
                    dark:text-[var(--arcade-cream)]
                  "
                >
                  {channel.label}
                </h4>

                <p
                  className="
                    mt-2
                    truncate
                    text-xs
                    font-semibold
                    text-gray-700
                    dark:text-gray-300
                    sm:text-sm
                  "
                >
                  {channel.value}
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {channel.description}
                </p>
              </div>

              <div
                className="
                  mt-auto
                  flex
                  justify-end
                  pt-4
                "
              >
                <FiArrowUpRight
                  size={18}
                  className={`
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    ${colors.accent}
                  `}
                />
              </div>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}