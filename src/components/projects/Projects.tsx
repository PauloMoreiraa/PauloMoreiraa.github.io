import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import {
  Swiper,
  SwiperSlide,
} from "swiper/react"

import type { Swiper as SwiperType } from "swiper"

import {
  Autoplay,
} from "swiper/modules"

import "swiper/css"

import { projects } from "../../data/projects"
import type { Project } from "../../data/projects"

import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null)

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  const goNext = () => {
    const swiper = swiperRef.current

    if (!swiper || swiper.destroyed) return

    swiper.slideNext(450)
  }

  const goPrevious = () => {
    const swiper = swiperRef.current

    if (!swiper || swiper.destroyed) return

    swiper.slidePrev(450)
  }

  const handleSlideClick = (
    project: Project,
    index: number,
    isActive: boolean,
  ) => {
    const swiper = swiperRef.current

    if (!swiper || swiper.destroyed) return

    if (!isActive) {
      swiper.slideToLoop(index, 450)
      return
    }

    setSelectedProject(project)
  }

  const navigationButtons = (
    <>
      <button
        type="button"
        onClick={goPrevious}
        className="
          flex
          h-11
          w-11
          cursor-pointer
          items-center
          justify-center
          border-2
          border-[var(--arcade-shadow)]
          bg-[var(--arcade-panel)]
          text-white
          shadow-[3px_3px_0_var(--arcade-shadow)]
          transition-transform
          duration-200
          hover:-translate-y-1
          active:translate-x-[1px]
          active:translate-y-[1px]
        "
        aria-label="Previous project"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={goNext}
        className="
          flex
          h-11
          w-11
          cursor-pointer
          items-center
          justify-center
          border-2
          border-[var(--arcade-shadow)]
          bg-[var(--arcade-red)]
          text-white
          shadow-[3px_3px_0_var(--arcade-shadow)]
          transition-transform
          duration-200
          hover:-translate-y-1
          active:translate-x-[1px]
          active:translate-y-[1px]
        "
        aria-label="Next project"
      >
        <FiChevronRight size={20} />
      </button>
    </>
  )

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        scroll-mt-28
        overflow-hidden
        bg-[var(--arcade-cream)]
        py-24
        dark:bg-[var(--arcade-black)]
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <span
                className="
                  font-pixel
                  text-[7px]
                  text-[var(--arcade-red)]
                  sm:text-[8px]
                "
              >
                /// PROJECT DATABASE
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
                MY PROJECTS
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Explore some of the projects I have developed
                throughout my journey as a software engineer.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              {navigationButtons}
            </div>
          </div>
        </motion.div>

        <div
          className="
            mt-12
            overflow-x-clip
            overflow-y-visible
            py-4
          "
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Autoplay]}
            centeredSlides
            loop={projects.length > 3}
            loopPreventsSliding={false}
            slidesPerView={1}
            spaceBetween={20}
            speed={450}
            allowTouchMove
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!w-full !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <ProjectCard
                    project={project}
                    isActive={isActive}
                    onClick={() =>
                      handleSlideClick(
                        project,
                        index,
                        isActive,
                      )
                    }
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            sm:hidden
          "
        >
          {navigationButtons}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}