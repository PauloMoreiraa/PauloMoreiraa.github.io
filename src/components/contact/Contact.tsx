import { useState } from "react"
import { motion } from "framer-motion"
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
} from "react-icons/fi"

import { contactData } from "../../data/contact"
import ContactInfo from "./ContactInfo"

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const emailChannel = contactData.channels.find(
    (channel) => channel.icon === "email",
  )

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        contactData.email,
      )

      setIsCopied(true)

      window.setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch {
      setIsCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        scroll-mt-28
        overflow-hidden
        bg-[var(--arcade-cream)]
        py-24
        text-[var(--arcade-black)]
        transition-colors
        duration-300
        dark:bg-[var(--arcade-black)]
        dark:text-white
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-7
          lg:px-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span
            className="
              font-pixel
              text-[7px]
              text-[var(--arcade-red)]
              sm:text-[8px]
            "
          >
            {contactData.eyebrow}
          </span>

          <h2
            className="
              mt-4
              font-pixel
              text-xl
              leading-relaxed
              text-[var(--arcade-black)]
              dark:text-[var(--arcade-cream)]
              sm:text-2xl
              lg:text-3xl
            "
          >
            {contactData.title}
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-600
              dark:text-gray-400
              sm:text-[15px]
            "
          >
            {contactData.description}
          </p>
        </motion.div>

        <div
          className="
            mt-12
            grid
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-stretch
            lg:gap-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              flex
              h-full
              flex-col
              border-[3px]
              border-[var(--arcade-shadow)]
              bg-white
              p-5
              shadow-[6px_6px_0_var(--arcade-shadow)]
              dark:bg-[var(--arcade-panel)]
              sm:p-6
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b-2
                border-gray-200
                pb-4
                dark:border-gray-700
              "
            >
              <span
                className="
                  font-pixel
                  text-[6px]
                  text-[var(--arcade-green)]
                  sm:text-[7px]
                "
              >
                {contactData.terminalLabel}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  font-pixel
                  text-[6px]
                  text-[var(--arcade-green)]
                  sm:text-[7px]
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

                {contactData.statusValue}
              </span>
            </div>

            <div
              className="
                mt-5
                border-2
                border-gray-300
                bg-[var(--arcade-cream)]
                p-4
                dark:border-gray-700
                dark:bg-[var(--arcade-dark)]
              "
            >
              <span
                className="
                  font-pixel
                  text-[6px]
                  text-gray-500
                "
              >
                {">"} INITIALIZING_CONNECTION...
              </span>

              <h3
                className="
                  mt-5
                  font-pixel
                  text-sm
                  leading-relaxed
                  text-[var(--arcade-black)]
                  dark:text-[var(--arcade-cream)]
                  sm:text-base
                "
              >
                {contactData.terminalTitle}
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
                {contactData.terminalText}
              </p>
            </div>

            <div className="mt-6">
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  font-pixel
                  text-[6px]
                  text-[var(--arcade-red)]
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    bg-[var(--arcade-red)]
                  "
                />

                {contactData.availabilityTitle}
              </div>

              <div className="flex flex-wrap gap-2">
                {contactData.availability.map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        border
                        border-gray-300
                        bg-[var(--arcade-cream)]
                        px-2.5
                        py-2
                        font-pixel
                        text-[5px]
                        leading-relaxed
                        text-gray-600
                        dark:border-gray-700
                        dark:bg-[var(--arcade-dark)]
                        dark:text-gray-300
                        sm:text-[6px]
                      "
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mt-auto pt-7">
              {emailChannel && (
                <>
                  <div className="flex gap-2">
                    <a
                      href={emailChannel.href}
                      className="
                        flex
                        h-12
                        min-w-0
                        flex-1
                        cursor-pointer
                        items-center
                        justify-center
                        gap-3
                        border-2
                        border-[var(--arcade-shadow)]
                        bg-[var(--arcade-yellow)]
                        px-4
                        font-pixel
                        text-[6px]
                        text-[var(--arcade-black)]
                        shadow-[4px_4px_0_var(--arcade-shadow)]
                        transition-[background-color,transform]
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[var(--arcade-pink)]
                        hover:text-white
                        sm:text-[7px]
                      "
                    >
                      <span className="truncate">
                        {contactData.emailButtonLabel}
                      </span>

                      <FiArrowRight size={16} />
                    </a>

                    <motion.button
                      type="button"
                      onClick={handleCopyEmail}
                      whileHover={{ y: -3 }}
                      whileTap={{
                        x: 1,
                        y: 1,
                      }}
                      aria-label={
                        isCopied
                          ? contactData.copiedButtonLabel
                          : contactData.copyButtonLabel
                      }
                      title={
                        isCopied
                          ? contactData.copiedButtonLabel
                          : contactData.copyButtonLabel
                      }
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        cursor-pointer
                        items-center
                        justify-center
                        border-2
                        border-[var(--arcade-shadow)]
                        bg-[var(--arcade-cream)]
                        text-[var(--arcade-black)]
                        shadow-[4px_4px_0_var(--arcade-shadow)]
                        transition-colors
                        duration-300
                        hover:bg-white
                        dark:bg-[var(--arcade-dark)]
                        dark:text-[var(--arcade-cream)]
                        dark:hover:bg-[var(--arcade-cream)]
                        dark:hover:text-[var(--arcade-black)]
                      "
                    >
                      {isCopied ? (
                        <FiCheck
                          size={18}
                          className="text-[var(--arcade-green)]"
                        />
                      ) : (
                        <FiCopy size={18} />
                      )}
                    </motion.button>
                  </div>

                  <p
                    className="
                      mt-3
                      truncate
                      text-center
                      text-[10px]
                      text-gray-500
                    "
                  >
                    {contactData.email}
                  </p>
                </>
              )}
            </div>
          </motion.div>

          <ContactInfo
            title={contactData.channelsTitle}
            channels={contactData.channels}
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t-2
            border-gray-300
            pt-6
            dark:border-[var(--arcade-panel)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              font-pixel
              text-[6px]
              text-gray-500
              sm:text-[7px]
            "
          >
            {contactData.footerLeft}
          </span>

          <span
            className="
              font-pixel
              text-[6px]
              text-[var(--arcade-green)]
              sm:text-[7px]
            "
          >
            {contactData.footerRight}
          </span>
        </motion.div>
      </div>
    </section>
  )
}