interface PixelLockProps {
  size?: "sm" | "md" | "lg"
}

export default function PixelLock({
  size = "md",
}: PixelLockProps) {
  const sizes = {
    sm: {
      body: "h-3 w-4",
      shackle: "h-2 w-2",
      dot: "h-1 w-1",
    },
    md: {
      body: "h-5 w-7",
      shackle: "h-3 w-3",
      dot: "h-1 w-1",
    },
    lg: {
      body: "h-7 w-9",
      shackle: "h-4 w-4",
      dot: "h-1.5 w-1.5",
    },
  }

  const current = sizes[size]

  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      <span
        className={`
          absolute
          ${current.shackle}
          left-1/2
          top-0
          -translate-x-1/2
          border-2
          border-[var(--arcade-cream)]
          border-b-0
        `}
      />

      <span
        className={`
          relative
          mt-2
          ${current.body}
          border-2
          border-[var(--arcade-cream)]
          bg-[var(--arcade-yellow)]
          shadow-[2px_2px_0_var(--arcade-shadow)]
        `}
      >
        <span
          className={`
            absolute
            left-1/2
            top-1/2
            ${current.dot}
            -translate-x-1/2
            -translate-y-1/2
            bg-[var(--arcade-black)]
          `}
        />
      </span>
    </div>
  )
}