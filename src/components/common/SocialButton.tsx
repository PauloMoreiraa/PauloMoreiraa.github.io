import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SocialButtonProps {
  label: string
  href: string
  icon: ReactNode
  className?: string
}

export default function SocialButton({
  label,
  href,
  icon,
  className = "",
}: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      whileHover={{
        y: -4,
        rotate: -3,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={`
        flex
        h-11
        w-11
        cursor-pointer
        items-center
        justify-center
        border-2
        border-[var(--arcade-shadow)]
        shadow-[3px_3px_0_var(--arcade-shadow)]
        transition-[background-color,box-shadow,transform]
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:shadow-[4px_4px_0_var(--arcade-shadow)]
        ${className}
      `}
    >
      {icon}
    </motion.a>
  )
}