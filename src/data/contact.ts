import { homeAssets } from "../assets/HomeAssets"

export interface ContactChannel {
  id: number
  code: string
  label: string
  value: string
  description: string
  href: string
  icon: "email" | "whatsapp" | "linkedin"
  accent: "red" | "green" | "blue"
}

export interface ContactData {
  eyebrow: string
  title: string
  description: string
  terminalLabel: string
  terminalTitle: string
  terminalText: string
  statusValue: string
  channelsTitle: string
  availabilityTitle: string
  availability: string[]
  email: string
  emailButtonLabel: string
  copyButtonLabel: string
  copiedButtonLabel: string
  footerLeft: string
  footerRight: string
  channels: ContactChannel[]
}

export const contactData: ContactData = {
  eyebrow: "/// COMMUNICATION TERMINAL",

  title: "LET'S CONNECT",

  description:
    "I'm open to freelance projects, employment opportunities, contract work, and other opportunities in software development and technology.",

  terminalLabel: "CONNECTION_STATUS",

  terminalTitle: "OPEN TO OPPORTUNITIES",

  terminalText:
    "Whether you need a website, a complete web application, help with an existing system, or a developer to join your team, feel free to get in touch.",

  statusValue: "ONLINE",

  channelsTitle: "SELECT_CHANNEL",

  availabilityTitle: "WORK_MODE",

  availability: [
    "REMOTE WORK",
    "FREELANCE PROJECTS",
    "FULL-TIME ROLE",
	"PART-TIME ROLE",
    "CONTRACT WORK",
    "OTHER TECH OPPORTUNITIES",
  ],

  email: "paulo.martins2004@hotmail.com",

  emailButtonLabel: "START_BY_EMAIL",
  copyButtonLabel: "COPY_EMAIL",
  copiedButtonLabel: "EMAIL_COPIED",

  footerLeft: "COMMUNICATION_TERMINAL /// READY",
  footerRight: "CONNECTION_ESTABLISHED_",

  channels: [
    {
      id: 1,
      code: "CHANNEL_01",
      label: "EMAIL",
      value: "paulo.martins2004@hotmail.com",
      description:
        "Best for professional inquiries, projects, and opportunities.",
      href: "mailto:paulo.martins2004@hotmail.com",
      icon: "email",
      accent: "red",
    },
    {
      id: 2,
      code: "CHANNEL_02",
      label: "WHATSAPP",
      value: "START A CONVERSATION",
      description:
        "Quick and direct communication for questions and opportunities.",
      href: homeAssets.socialLinks.whatsapp,
      icon: "whatsapp",
      accent: "green",
    },
    {
      id: 3,
      code: "CHANNEL_03",
      label: "LINKEDIN",
      value: "PAULO MOREIRA",
      description:
        "Professional profile, networking, and career opportunities.",
      href: homeAssets.socialLinks.linkedin,
      icon: "linkedin",
      accent: "blue",
    },
  ],
}