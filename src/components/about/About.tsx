import { motion } from "framer-motion"
import {
  FiAward,
  FiCloud,
  FiCode,
  FiFileText,
} from "react-icons/fi"
import { FaAws } from "react-icons/fa"

import {
  BR,
  GB,
  ES,
  KR,
  CN,
} from "country-flag-icons/react/3x2"

import ProfileCard from "../home/ProfileCard"
import { aboutAssets } from "../../assets/AboutAssets"
import { aboutData } from "../../data/about"

const flagComponents = {
  BR,
  GB,
  ES,
  KR,
  CN,
}

const certificationIcons = {
  aws: <FaAws size={20} />,
  award: <FiAward size={20} />,
  certificate: <FiFileText size={20} />,
  cloud: <FiCloud size={20} />,
  code: <FiCode size={20} />,
}

export default function About() {
  return (
    <section
      id="aboutme"
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
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >
          <div className="flex justify-center lg:justify-start">
            <ProfileCard
              images={aboutAssets.profileImages}
              imageAlt={aboutAssets.profileImageAlt}
              location={aboutData.location}
            />
          </div>

          <div>
            <span
              className="
                font-pixel
                text-[7px]
                text-[var(--arcade-red)]
                sm:text-[8px]
              "
            >
              {aboutData.eyebrow}
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
              {aboutData.title}
            </h2>

            <div className="mt-6 space-y-4">
              {aboutData.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="
                    max-w-2xl
                    text-sm
                    leading-7
                    text-gray-600
                    dark:text-gray-400
                    sm:text-[15px]
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="
                      h-8
                      w-1
                      bg-[var(--arcade-red)]
                    "
                  />

                  <h3
                    className="
                      font-pixel
                      text-[8px]
                      text-[var(--arcade-black)]
                      dark:text-[var(--arcade-cream)]
                    "
                  >
                    {aboutData.languagesTitle}
                  </h3>
                </div>

                <div className="space-y-2">
                  {aboutData.languages.map((language) => {
                    const Flag = flagComponents[language.flag]

                    return (
                      <div
                        key={language.id}
                        className="
                          flex
                          cursor-default
                          items-center
                          justify-between
                          border-2
                          border-gray-300
                          bg-white
                          px-3
                          py-2.5
                          shadow-[2px_2px_0_var(--arcade-shadow)]
                          transition-[transform,border-color,background-color]
                          duration-300
                          ease-in-out
                          hover:-translate-y-1
                          hover:border-[var(--arcade-red)]
                          dark:border-gray-700
                          dark:bg-[var(--arcade-panel)]
                          dark:hover:border-[var(--arcade-red)]
                        "
                      >
                        <div className="flex items-center gap-3">
                          <Flag
                            title={`${language.name} flag`}
                            className="
                              h-5
                              w-7
                              shrink-0
                              border
                              border-black/30
                            "
                          />

                          <span
                            className="
                              text-xs
                              font-semibold
                              text-[var(--arcade-black)]
                              dark:text-gray-200
                              sm:text-sm
                            "
                          >
                            {language.name}
                          </span>
                        </div>

                        <span
                          className="
                            font-pixel
                            text-[8px]
                            text-[var(--arcade-red)]
                            sm:text-[9px]
                          "
                        >
                          {language.level}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="
                      h-8
                      w-1
                      bg-[var(--arcade-yellow)]
                    "
                  />

                  <h3
                    className="
                      font-pixel
                      text-[8px]
                      text-[var(--arcade-black)]
                      dark:text-[var(--arcade-cream)]
                    "
                  >
                    {aboutData.certificationsTitle}
                  </h3>
                </div>

                <div className="space-y-3">
                  {aboutData.certifications.map((certification) => (
                    <div
                      key={certification.id}
                      className="
                        cursor-default
                        border-2
                        border-gray-300
                        bg-white
                        p-4
                        shadow-[3px_3px_0_var(--arcade-shadow)]
                        transition-[transform,border-color,background-color]
                        duration-300
                        ease-in-out
                        hover:-translate-y-1
                        hover:border-[var(--arcade-yellow)]
                        dark:border-gray-700
                        dark:bg-[var(--arcade-panel)]
                        dark:hover:border-[var(--arcade-yellow)]
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            border-2
                            border-[var(--arcade-shadow)]
                            bg-[var(--arcade-yellow)]
                            text-[var(--arcade-black)]
                            shadow-[2px_2px_0_var(--arcade-shadow)]
                          "
                        >
                          {certificationIcons[certification.icon]}
                        </div>

                        <div className="min-w-0">
                          <h4
                            className="
                              text-sm
                              font-bold
                              text-[var(--arcade-black)]
                              dark:text-[var(--arcade-cream)]
                            "
                          >
                            {certification.title}
                          </h4>

                          <div
                            className="
                              mt-1
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            <FiAward size={13} />

                            <span>
                              {certification.issuer}
                            </span>

                            <span>·</span>

                            <span>
                              {certification.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}