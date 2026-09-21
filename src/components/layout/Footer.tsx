import { motion } from "framer-motion"
import {
  FiArrowUp,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi"
import {
  SiTiktok,
  SiWhatsapp,
} from "react-icons/si"

import { homeAssets } from "../../assets/HomeAssets"

const footerLinks = [
  {
    label: "HOME",
    href: "#home",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "SERVICES",
    href: "#services",
  },
  {
    label: "ABOUT ME",
    href: "#aboutme",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
]

const socialLinks = [
  {
    label: "GitHub",
    href: homeAssets.socialLinks.github,
    icon: <FiGithub size={21} />,
    className:
      "bg-[#24292e] text-white hover:bg-[#171a1d]",
  },
  {
    label: "LinkedIn",
    href: homeAssets.socialLinks.linkedin,
    icon: <FiLinkedin size={21} />,
    className:
      "bg-[#0a66c2] text-white hover:bg-[#084d91]",
  },
  {
    label: "Instagram",
    href: homeAssets.socialLinks.instagram,
    icon: <FiInstagram size={21} />,
    className:
      "bg-[#e1306c] text-white hover:bg-[#c2185b]",
  },
  {
    label: "TikTok",
    href: homeAssets.socialLinks.tiktok,
    icon: <SiTiktok size={20} />,
    className:
      "bg-[#010101] text-white hover:bg-[#252525]",
  },
  {
    label: "WhatsApp",
    href: homeAssets.socialLinks.whatsapp,
    icon: <SiWhatsapp size={21} />,
    className:
      "bg-[#25d366] text-white hover:bg-[#1da851]",
  },
  {
    label: "Email",
    href: "mailto:paulo.martins2004@hotmail.com",
    icon: <FiMail size={21} />,
    className:
      "bg-[var(--arcade-red)] text-white hover:bg-[var(--arcade-pink)]",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="
        border-t-[3px]
        border-[var(--arcade-shadow)]
        bg-[var(--arcade-cream)]
        text-[var(--arcade-black)]
        transition-colors
        duration-300
        dark:bg-[var(--arcade-black)]
        dark:text-[var(--arcade-cream)]
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-12
          sm:px-7
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[1.3fr_0.8fr_1fr]
            lg:gap-16
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-10
                  w-2
                  shrink-0
                  bg-[var(--arcade-red)]
                "
              />

              <div>
                <div
                  className="
                    font-pixel
                    text-[10px]
                    leading-relaxed
                    text-[var(--arcade-black)]
                    dark:text-[var(--arcade-cream)]
                    sm:text-[12px]
                  "
                >
                  PAULO MOREIRA
                </div>

                <div
                  className="
                    mt-2
                    font-pixel
                    text-[6px]
                    text-[var(--arcade-blue)]
                    sm:text-[7px]
                  "
                >
                  SOFTWARE_ENGINEER
                </div>
              </div>
            </div>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-gray-600
                dark:text-gray-400
              "
            >
              Software Engineer & Full Stack Developer building
              websites, systems, applications, and digital
              solutions.
            </p>

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                border-2
                border-[var(--arcade-shadow)]
                bg-white
                px-3
                py-2
                shadow-[3px_3px_0_var(--arcade-shadow)]
                dark:bg-[var(--arcade-panel)]
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  bg-[var(--arcade-green)]
                "
              />

              <span
                className="
                  font-pixel
                  text-[6px]
                  text-[var(--arcade-green)]
                  sm:text-[7px]
                "
              >
                AVAILABLE_FOR_OPPORTUNITIES
              </span>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-7
                  w-1
                  bg-[var(--arcade-yellow)]
                "
              />

              <h3
                className="
                  font-pixel
                  text-[7px]
                  text-[var(--arcade-black)]
                  dark:text-[var(--arcade-cream)]
                  sm:text-[8px]
                "
              >
                NAVIGATION
              </h3>
            </div>

            <nav className="grid gap-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-gray-600
                    transition-colors
                    duration-200
                    hover:text-[var(--arcade-red)]
                    dark:text-gray-400
                    dark:hover:text-[var(--arcade-red)]
                    sm:text-[11px]
                  "
                >
                  <span
                    className="
                      font-pixel
                      text-[5px]
                      text-gray-400
                      transition-colors
                      duration-200
                      group-hover:text-[var(--arcade-red)]
                      sm:text-[6px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-7
                  w-1
                  bg-[var(--arcade-blue)]
                "
              />

              <h3
                className="
                  font-pixel
                  text-[7px]
                  text-[var(--arcade-black)]
                  dark:text-[var(--arcade-cream)]
                  sm:text-[8px]
                "
              >
                CONNECTIONS
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.label === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{
                    y: -4,
                    rotate: -3,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    flex
                    h-12
                    w-12
                    cursor-pointer
                    items-center
                    justify-center
                    border-2
                    border-[var(--arcade-shadow)]
                    shadow-[3px_3px_0_var(--arcade-shadow)]
                    transition-[box-shadow,background-color]
                    duration-300
                    ease-in-out
                    hover:shadow-[4px_4px_0_var(--arcade-shadow)]
                    ${social.className}
                  `}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            my-10
            h-[3px]
            w-full
            bg-[var(--arcade-shadow)]
          "
        />

        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-center
              sm:gap-4
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
              © {currentYear} PAULO MOREIRA
            </span>
          </div>

          <motion.a
            href="#home"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              inline-flex
              cursor-pointer
              items-center
              gap-3
              self-start
              border-2
              border-[var(--arcade-shadow)]
              bg-[var(--arcade-yellow)]
              px-4
              py-2.5
              font-pixel
              text-[6px]
              text-[var(--arcade-black)]
              shadow-[3px_3px_0_var(--arcade-shadow)]
              transition-[background-color,color]
              duration-300
              hover:bg-[var(--arcade-pink)]
              hover:text-white
              sm:self-auto
              sm:text-[7px]
            "
          >
            BACK_TO_TOP

            <FiArrowUp size={15} />
          </motion.a>
        </div>

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2
            font-pixel
            text-[5px]
            text-gray-400
            sm:text-[6px]
          "
        >
          <span>PORTFOLIO_SYSTEM</span>

          <span>//</span>

          <span>STATUS: ONLINE</span>

          <span>//</span>

          <span>END_OF_PAGE_</span>
        </div>
      </div>
    </footer>
  )
}