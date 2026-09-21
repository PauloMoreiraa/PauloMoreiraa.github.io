import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PixelBadgeProps {
  children: ReactNode
  color?: "green" | "red" | "yellow" | "blue" | "pink"
  dot?: boolean
}

const colors = {
  green: "text-[var(--arcade-green)]",
  red: "text-[var(--arcade-red)]",
  yellow: "text-[var(--arcade-yellow)]",
  blue: "text-[var(--arcade-blue)]",
  pink: "text-[var(--arcade-pink)]",
}

export default function PixelBadge({
  children,
  color = "pink",
  dot = true,
}: PixelBadgeProps) {
  return (
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
      }}
      className="
        flex
        items-center
        gap-3
        font-pixel
        text-[9px]
        sm:text-[11px]
      "
    >
		{dot && (
        <span
          className="
            h-2
            w-2
            animate-pulse
            bg-[var(--arcade-green)]
            shadow-[2px_2px_0_var(--arcade-shadow)]
          "
        />
      )}
      <span
        className={`
          text-[var(--arcade-black)]
          dark:text-white
          ${colors[color]}
        `}
      >
        {children}
      </span>

      
    </motion.div>
  )
}