import { motion } from "framer-motion"
import { useState } from "react"
import type { ReactNode } from "react"

interface ArcadeButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "yellow"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  type?: "button" | "submit"
  className?: string
}

const variants = {
  primary: `
    bg-[var(--arcade-red)]
    text-white
    hover:bg-[var(--arcade-pink)]
  `,
  secondary: `
    bg-white
    text-[var(--arcade-black)]
    hover:bg-[var(--arcade-yellow)]
    dark:bg-[var(--arcade-panel)]
    dark:text-white
    dark:hover:bg-[var(--arcade-yellow)]
    dark:hover:text-[var(--arcade-black)]
  `,
  yellow: `
    bg-[var(--arcade-yellow)]
    text-[var(--arcade-black)]
    hover:bg-[var(--arcade-pink)]
    hover:text-white
  `,
}

export default function ArcadeButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "right",
  type = "button",
  className = "",
}: ArcadeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const classes = `
    inline-flex
    h-12
    cursor-pointer
    items-center
    justify-center
    gap-3
    border-2
    border-[var(--arcade-shadow)]
    px-6
    text-[11px]
    font-bold
    shadow-[4px_4px_0_var(--arcade-shadow)]
    transition-[background-color,color]
    duration-300
    ease-in-out
    ${variants[variant]}
    ${className}
  `

  const iconContent = icon ? (
    <motion.span
      animate={{
        x: isHovered ? 5 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex shrink-0"
    >
      {icon}
    </motion.span>
  ) : null

  const content = (
    <>
      {iconPosition === "left" && iconContent}

      <span>{children}</span>

      {iconPosition === "right" && iconContent}
    </>
  )

  const motionProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    whileHover: {
      y: -4,
      boxShadow: "5px 5px 0 var(--arcade-shadow)",
    },
    whileTap: {
      y: 1,
      x: 1,
      scale: 0.98,
    },
    transition: {
      type: "tween" as const,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  )
}