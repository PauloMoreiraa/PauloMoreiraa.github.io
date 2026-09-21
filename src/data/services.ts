export interface Service {
  id: number
  code: string
  title: string
  description: string
  features: string[]
  icon: "globe" | "layers" | "server" | "code" | "database"
  accent: "red" | "yellow" | "blue" | "green" | "purple"
}

export const services: Service[] = [
  {
    id: 1,
    code: "SERVICE_01",
    title: "WEBSITE DEVELOPMENT",
    description:
      "Professional websites created to present businesses, services, professionals, and projects with a responsive and modern experience.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Responsive Design",
      "UI/UX Design",
    ],
    icon: "globe",
    accent: "red",
  },

  {
    id: 2,
    code: "SERVICE_02",
    title: "FRONT-END DEVELOPMENT",
    description:
      "Interactive and responsive interfaces focused on usability, visual quality, performance, and a smooth experience across different devices.",
    features: [
      "Interactive Interfaces",
      "Responsive Layouts",
      "Reusable Components",
      "UI/UX Implementation",
    ],
    icon: "layers",
    accent: "yellow",
  },

  {
    id: 3,
    code: "SERVICE_03",
    title: "BACK-END DEVELOPMENT",
    description:
      "Systems and services built to handle business rules, data, integrations, authentication, and the logic behind web applications.",
    features: [
      "APIs & Integrations",
      "Business Logic",
      "Authentication",
      "Data Processing",
    ],
    icon: "server",
    accent: "blue",
  },

  {
    id: 4,
    code: "SERVICE_04",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Complete web solutions covering both the interface and the systems behind it, connecting users, applications, services, and data.",
    features: [
      "Complete Web Applications",
      "Front-End & Back-End",
      "Database Integration",
      "System Architecture",
    ],
    icon: "code",
    accent: "green",
  },

  {
    id: 5,
    code: "SERVICE_05",
    title: "DATA, GIS & CLOUD SOLUTIONS",
    description:
      "Solutions involving databases, geographic data, geoprocessing, cloud environments, and the infrastructure required to support applications.",
    features: [
      "Database Solutions",
      "GIS & Geoprocessing",
      "Cloud Integration",
      "Data Visualization",
    ],
    icon: "database",
    accent: "purple",
  },
]