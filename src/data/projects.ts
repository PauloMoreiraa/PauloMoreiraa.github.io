export interface Project {
  id: number
  name: string
  image: string
  shortDescription: string
  description: string
  technologies: string[]
  projectUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: "My Finances",
    image: "/img/minhas.jpg",
    shortDescription:
      "A personal finance management system for tracking income and expenses.",
    description:
      "My Finances is a web application designed to help users manage personal income and expenses through an intuitive interface connected to a backend API.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "ArcGIS",
    ],
    githubUrl:
      "https://github.com/PauloMoreiraa/minhasfinancas-frontend",
  },

  {
    id: 2,
    name: "PlanejAI",
    image: "/img/planejai.png",
    shortDescription:
      "A personal financial planning application powered by artificial intelligence.",
    description:
      "PlanejAI is a web application focused on personal financial planning, integrating Google Gemini to generate insights, recommendations, and support for financial decision-making.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Google Gemini",
    ],
    projectUrl:
      "https://planejai-six.vercel.app/",
    githubUrl:
      "https://github.com/PauloMoreiraa/planejai",
  },

  {
    id: 3,
    name: "Fica Fácil",
    image: "/img/ficafacil.jpg",
    shortDescription:
      "An online platform for practice tests, learning, and performance tracking.",
    description:
      "Fica Fácil is an online learning platform that allows users to take practice tests, track their performance, and improve their knowledge through an accessible and interactive experience.",
    technologies: [
      "React",
      "Node.js",
      "PHP",
      "MySQL",
    ],
    githubUrl:
      "https://github.com/Deofino/FicaFacil",
  },

  {
    id: 4,
    name: "Real Estate Website",
    image: "/img/canary.jpg",
    shortDescription:
      "A fictional real estate website presenting a residential development.",
    description:
      "A fictional real estate website created to showcase a residential development, including property information, lot availability, project details, and contact information for potential clients.",
    technologies: [
      "Vue.js",
      "CSS",
    ],
    projectUrl:
      "https://imobiliariacanarywharf.vercel.app/",
    githubUrl:
      "https://github.com/PauloMoreiraa/imobiliaria",
  },

  {
    id: 5,
    name: "Geographic Analysis",
    image: "/img/analise.jpg",
    shortDescription:
      "A geospatial analysis application with interactive maps and area calculations.",
    description:
      "A geospatial analysis application that allows users to draw areas on a map, calculate geographic measurements, analyze IBAMA and IBGE data, export reports to PDF, and view coordinates in real time.",
    technologies: [
      "React",
      "TypeScript",
      "ArcGIS",
    ],
    projectUrl:
      "https://analise-de-area.vercel.app/",
    githubUrl:
      "https://github.com/PauloMoreiraa/analise-de-area",
  },

  {
    id: 6,
    name: "Today Converter",
    image: "/img/today.jpg",
    shortDescription:
      "A modern currency converter with real-time exchange rates.",
    description:
      "Today Converter is a web application that allows users to convert values between different currencies using real-time exchange rates and generate a PDF receipt of the conversion.",
    technologies: [
      "React",
      "TypeScript",
      "ExchangeRate API",
    ],
    projectUrl:
      "https://todayconverter.vercel.app/",
    githubUrl:
      "https://github.com/PauloMoreiraa/TodayConverter",
  },

  {
    id: 7,
    name: "Headery",
    image: "/img/clone.jpg",
    shortDescription:
      "A landing page for promoting medical products and services.",
    description:
      "Headery is a landing page created for academic and marketing purposes, presenting medical products and services through a clean and informative user experience.",
    technologies: [
      "HTML",
      "Bootstrap",
      "SCSS",
    ],
    projectUrl:
      "https://paulomoreiraa.github.io/Headery-Bootstrap/",
    githubUrl:
      "https://github.com/PauloMoreiraa/Headery-Bootstrap/",
  },

  {
    id: 8,
    name: "Mars",
    image: "/img/marte.jpg",
    shortDescription:
      "A website dedicated to Mars exploration, discoveries, and scientific facts.",
    description:
      "Mars is a personal website focused on exploring the red planet, bringing together curiosities, discoveries, scientific information, and advances related to Mars exploration.",
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
    ],
    projectUrl:
      "https://paulomoreiraa.github.io/Mars-LP/",
    githubUrl:
      "https://github.com/PauloMoreiraa/Mars-LP/",
  },

  {
    id: 9,
    name: "Psychologist Website",
    image: "/img/leo.jpg",
    shortDescription:
      "A professional website designed for a psychologist and their services.",
    description:
      "A professional website created for a psychologist, presenting services, specialties, and contact information through a clear, organized, and accessible experience for potential patients.",
    technologies: [
      "React",
      "Tailwind CSS",
    ],
    projectUrl:
      "https://leonardopsicologo.vercel.app/",
    githubUrl:
      "https://github.com/PauloMoreiraa/leonardo-psicologo",
  },
] 