import HeroIntro from "./HeroIntro"
import HeroActions from "./HeroActions"
import SocialLinks from "./SocialLinks"
import ProfileCard from "./ProfileCard"
import HomeFooter from "./HomeFooter"

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--arcade-cream)]
        text-[var(--arcade-black)]
        transition-colors
        duration-300
        dark:bg-[var(--arcade-black)]
        dark:text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          pb-24
          pt-36
          sm:px-7
          sm:pt-40
          lg:px-8
          lg:pt-32
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >
            <HeroIntro />

            <HeroActions />

            <SocialLinks />
          </div>

          <ProfileCard />
        </div>
      </div>

      <HomeFooter />
    </section>
  )
}