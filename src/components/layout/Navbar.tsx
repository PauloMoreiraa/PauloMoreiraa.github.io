import { useEffect, useState } from "react"
import {
  FiHome,
  FiFolder,
  FiBriefcase,
  FiUser,
  FiMail,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  {
    label: "HOME",
    href: "#home",
    icon: FiHome,
  },
  {
    label: "PROJECTS",
    href: "#projects",
    icon: FiFolder,
  },
  {
    label: "SERVICES",
    href: "#services",
    icon: FiBriefcase,
  },
  {
    label: "ABOUT ME",
    href: "#aboutme",
    icon: FiUser,
  },
  {
    label: "CONTACT",
    href: "#contact",
    icon: FiMail,
  },
]

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => {
      const sections = menuItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 180
      let currentSection = "home"

      sections.forEach((section) => {
        if (
          section &&
          (section as HTMLElement).offsetTop <= scrollPosition
        ) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const toggleDarkMode = () => {
    const newTheme = !isDark

    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleNavigation = (section: string) => {
    setActiveSection(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              fixed
              inset-0
              z-40
              bg-black/35
              backdrop-blur-md
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          px-3
          pt-3
          sm:px-5
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            className={`
              relative
              w-full
              border-[3px]
              border-[var(--arcade-shadow)]
              shadow-[6px_6px_0_var(--arcade-shadow)]
              transition-colors
              duration-200
              ${
                isDark
                  ? "bg-[var(--arcade-dark)]"
                  : "bg-[var(--arcade-cream)]"
              }
            `}
          >
            <span
              className="
                pointer-events-none
                absolute
                -left-1
                -top-3
                font-pixel
                text-[12px]
                text-[var(--arcade-yellow)]
              "
            >
              ★
            </span>

            <span
              className="
                pointer-events-none
                absolute
                -right-1
                -top-3
                font-pixel
                text-[10px]
                text-[var(--arcade-pink)]
              "
            >
              ◆
            </span>

            <div
              className="
                flex
                min-h-[82px]
                items-center
                justify-between
                px-4
                py-3
                sm:px-7
              "
            >
              <motion.a
                href="#home"
                onClick={() => handleNavigation("home")}
                whileHover={{
                  scale: 1.02,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  min-w-0
                  cursor-pointer
                  flex-col
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      font-pixel
                      text-[8px]
                      leading-none
                      text-[var(--arcade-pink)]
                      sm:text-[10px]
                    "
                  >
                    SOFTWARE_ENGINEER
                  </span>
                </div>

                <div
                  className={`
                    mt-2
                    font-pixel
                    text-[17px]
                    leading-none
                    transition-colors
                    duration-200
                    sm:text-[24px]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[var(--arcade-black)]"
                    }
                  `}
                >
                  PAULO{" "}

                  <span className="text-[var(--arcade-red)]">
                    MOREIRA
                  </span>
                </div>

                <div
                  className={`
                    mt-2
                    flex
                    items-center
                    gap-2
                    font-pixel
                    text-[7px]
                    leading-none
                    sm:text-[9px]
                    ${
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  `}
                >
                  <span>FULL_STACK</span>

                  <span className="text-[var(--arcade-blue)]">
                    ///
                  </span>

                  <span>WEB_DEVELOPER</span>
                </div>
              </motion.a>

              <nav className="hidden items-center gap-2 md:flex">
                {menuItems.map((item) => {
                  const Icon = item.icon

                  const isActive =
                    activeSection ===
                    item.href.replace("#", "")

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() =>
                        handleNavigation(
                          item.href.replace("#", "")
                        )
                      }
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`
                        group
                        relative
                        flex
                        cursor-pointer
                        items-center
                        gap-2
                        border-2
                        border-[var(--arcade-shadow)]
                        px-3
                        py-2.5
                        text-[10px]
                        font-bold
                        transition-all
                        duration-100
                        ${
                          isActive
                            ? "bg-[var(--arcade-red)] text-white shadow-[3px_3px_0_var(--arcade-shadow)]"
                            : isDark
                              ? "bg-[var(--arcade-panel)] text-gray-300 hover:bg-[var(--arcade-blue)] hover:text-white hover:shadow-[3px_3px_0_var(--arcade-shadow)]"
                              : "bg-white text-[var(--arcade-black)] hover:bg-[var(--arcade-blue)] hover:text-white hover:shadow-[3px_3px_0_var(--arcade-shadow)]"
                        }
                      `}
                    >
                      <Icon size={15} />

                      <span>{item.label}</span>

                      {isActive && (
                        <span
                          className="
                            absolute
                            -right-1.5
                            -top-2
                            text-[10px]
                            text-[var(--arcade-yellow)]
                          "
                        >
                          ★
                        </span>
                      )}
                    </motion.a>
                  )
                })}

                <motion.button
                  type="button"
                  onClick={toggleDarkMode}
                  whileHover={{
                    y: -2,
                    rotate: -2,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  aria-label={
                    isDark
                      ? "Enable light mode"
                      : "Enable dark mode"
                  }
                  className={`
                    ml-2
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center
                    border-2
                    border-[var(--arcade-shadow)]
                    shadow-[3px_3px_0_var(--arcade-shadow)]
                    transition-colors
                    ${
                      isDark
                        ? "bg-[var(--arcade-yellow)] text-[var(--arcade-black)] hover:bg-[var(--arcade-pink)]"
                        : "bg-[var(--arcade-pink)] text-white hover:bg-[var(--arcade-yellow)] hover:text-[var(--arcade-black)]"
                    }
                  `}
                >
                  {isDark ? (
                    <FiSun size={17} />
                  ) : (
                    <FiMoon size={17} />
                  )}
                </motion.button>
              </nav>

              <motion.button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(
                    (current) => !current
                  )
                }
                whileTap={{
                  scale: 0.9,
                }}
                aria-label={
                  isMobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  border-2
                  border-[var(--arcade-shadow)]
                  shadow-[3px_3px_0_var(--arcade-shadow)]
                  md:hidden
                  ${
                    isMobileMenuOpen
                      ? "bg-[var(--arcade-red)] text-white"
                      : "bg-[var(--arcade-blue)] text-white"
                  }
                `}
              >
                {isMobileMenuOpen ? (
                  <FiX size={22} />
                ) : (
                  <FiMenu size={22} />
                )}
              </motion.button>
            </div>

            <div
              className={`
                flex
                items-center
                justify-between
                border-t-2
                border-[var(--arcade-shadow)]
                px-4
                py-2
                sm:px-7
                ${
                  isDark
                    ? "bg-[var(--arcade-black)]"
                    : "bg-[var(--arcade-dark)]"
                }
              `}
            >
              <span
                className="
                  flex
                  items-center
                  gap-2
                  font-pixel
                  text-[6px]
                  text-[var(--arcade-green)]
                  sm:text-[8px]
                "
              >
                <span className="animate-pulse">
                  ●
                </span>

                AVAILABLE FOR PROJECTS
              </span>

              <span
                className="
                  hidden
                  font-pixel
                  text-[8px]
                  text-gray-400
                  sm:block
                "
              >
                PORTFOLIO.HTML
              </span>

              <span
                className="
                  font-pixel
                  text-[8px]
                  text-[var(--arcade-pink)]
                "
              >
                LV. 99
              </span>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="
                  relative
                  z-10
                  w-full
                  md:hidden
                "
              >
                <div
                  className={`
                    mt-2
                    w-full
                    border-[3px]
                    border-[var(--arcade-shadow)]
                    p-3
                    shadow-[5px_5px_0_var(--arcade-shadow)]
                    ${
                      isDark
                        ? "bg-[var(--arcade-dark)]"
                        : "bg-[var(--arcade-cream)]"
                    }
                  `}
                >
                  <nav className="flex w-full flex-col gap-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon

                      const isActive =
                        activeSection ===
                        item.href.replace("#", "")

                      return (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          onClick={() =>
                            handleNavigation(
                              item.href.replace("#", "")
                            )
                          }
                          whileTap={{
                            scale: 0.97,
                          }}
                          className={`
                            flex
                            w-full
                            cursor-pointer
                            items-center
                            gap-3
                            border-2
                            border-[var(--arcade-shadow)]
                            px-4
                            py-3
                            text-[11px]
                            font-bold
                            transition-colors
                            ${
                              isActive
                                ? "bg-[var(--arcade-red)] text-white shadow-[3px_3px_0_var(--arcade-shadow)]"
                                : isDark
                                  ? "bg-[var(--arcade-panel)] text-gray-300 shadow-[3px_3px_0_var(--arcade-shadow)]"
                                  : "bg-white text-[var(--arcade-black)] shadow-[3px_3px_0_var(--arcade-shadow)]"
                            }
                          `}
                        >
                          <Icon size={18} />

                          <span>{item.label}</span>

                          {isActive && (
                            <span
                              className="
                                ml-auto
                                text-[var(--arcade-yellow)]
                              "
                            >
                              ★
                            </span>
                          )}
                        </motion.a>
                      )
                    })}

                    <motion.button
                      type="button"
                      onClick={toggleDarkMode}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        mt-1
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        gap-3
                        border-2
                        border-[var(--arcade-shadow)]
                        px-4
                        py-3
                        text-left
                        text-[11px]
                        font-bold
                        shadow-[3px_3px_0_var(--arcade-shadow)]
                        ${
                          isDark
                            ? "bg-[var(--arcade-yellow)] text-[var(--arcade-black)] hover:bg-[var(--arcade-pink)]"
                            : "bg-[var(--arcade-pink)] text-white hover:bg-[var(--arcade-yellow)] hover:text-[var(--arcade-black)]"
                        }
                      `}
                    >
                      {isDark ? (
                        <FiSun size={18} />
                      ) : (
                        <FiMoon size={18} />
                      )}

                      <span>
                        {isDark
                          ? "LIGHT MODE"
                          : "DARK MODE"}
                      </span>
                    </motion.button>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}