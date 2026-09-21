import { FiArrowRight, FiSend } from "react-icons/fi"
import ArcadeButton from "../common/ArcadeButton"

export default function HeroActions() {
  return (
    <div
      className="
        mt-9
        flex
        flex-col
        items-center
        gap-3
        sm:flex-row
        lg:items-start
      "
    >
      <ArcadeButton
        href="#projects"
        variant="primary"
        icon={<FiArrowRight size={17} />}
      >
        EXPLORE PROJECTS
      </ArcadeButton>

      <ArcadeButton
        href="#contact"
        variant="secondary"
        icon={<FiSend size={16} />}
      >
        CONTACT ME
      </ArcadeButton>
    </div>
  )
}