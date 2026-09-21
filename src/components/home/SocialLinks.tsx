import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi"
import {
  SiTiktok,
  SiWhatsapp,
} from "react-icons/si"
import SocialButton from "../common/SocialButton"
import { homeAssets } from "../../assets/HomeAssets"

const socialLinks = [
  {
    label: "GitHub",
    href: homeAssets.socialLinks.github,
    icon: <FiGithub size={19} />,
    className:
      "bg-[#24292e] text-white hover:bg-[#171a1d]",
  },
  {
    label: "LinkedIn",
    href: homeAssets.socialLinks.linkedin,
    icon: <FiLinkedin size={19} />,
    className:
      "bg-[#0a66c2] text-white hover:bg-[#084d91]",
  },
  {
    label: "Instagram",
    href: homeAssets.socialLinks.instagram,
    icon: <FiInstagram size={19} />,
    className:
      "bg-[#e1306c] text-white hover:bg-[#c2185b]",
  },
  {
    label: "TikTok",
    href: homeAssets.socialLinks.tiktok,
    icon: <SiTiktok size={18} />,
    className:
      "bg-[#010101] text-white hover:bg-[#252525]",
  },
  {
    label: "WhatsApp",
    href: homeAssets.socialLinks.whatsapp,
    icon: <SiWhatsapp size={19} />,
    className:
      "bg-[#25d366] text-white hover:bg-[#1da851]",
  },
]

export default function SocialLinks() {
  return (
    <div
      className="
        mt-10
        flex
        items-center
        justify-center
        gap-3
      "
    >
      {socialLinks.map((social) => (
        <SocialButton
          key={social.label}
          label={social.label}
          href={social.href}
          icon={social.icon}
          className={social.className}
        />
      ))}
    </div>
  )
}