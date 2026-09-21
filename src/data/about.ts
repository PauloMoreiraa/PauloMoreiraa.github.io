export interface Language {
	id: number
	name: string
	flag: "BR" | "GB" | "ES" | "KR" | "CN"
	level: string
}

export interface Certification {
	id: number
	title: string
	issuer: string
	date: string
	icon:
	| "aws"
	| "award"
	| "certificate"
	| "cloud"
	| "code"
}

export interface AboutData {
	eyebrow: string
	title: string
	paragraphs: string[]
	location: string
	languagesTitle: string
	certificationsTitle: string
	languages: Language[]
	certifications: Certification[]
}

export const aboutData: AboutData = {
	eyebrow: "/// PLAYER PROFILE",
	title: "ABOUT ME",

	paragraphs: [
		"I am a 22-year-old Developer from São Paulo, Brazil, with a degree in Systems Analysis and Development and a technical degree in Systems Development. I have been working with technology and programming since 2019.",

		"My main focus is full-stack web development, combining modern front-end and back-end technologies to build complete digital solutions, from intuitive user interfaces to APIs, databases, integrations, and cloud-based systems.",
	],

	location: "SÃO PAULO, SP · BRAZIL",

	languagesTitle: "LANGUAGES",
	certificationsTitle: "CERTIFICATIONS",

	languages: [
		{
			id: 1,
			name: "Portuguese",
			flag: "BR",
			level: "NATIVE",
		},
		{
			id: 2,
			name: "English",
			flag: "GB",
			level: "B2",
		},
		{
			id: 3,
			name: "Spanish",
			flag: "ES",
			level: "B2",
		},
		{
			id: 4,
			name: "Korean",
			flag: "KR",
			level: "A2",
		},
		{
			id: 5,
			name: "Mandarin Chinese",
			flag: "CN",
			level: "A1",
		},
	],

	certifications: [
		{
			id: 1,
			title: "AWS Partner: Sales Accreditation",
			issuer: "Amazon Web Services",
			date: "Jan 2025",
			icon: "aws",
		},
		{
			id: 2,
			title: "AWS Partner: Technical Accredited",
			issuer: "Amazon Web Services",
			date: "Jan 2025",
			icon: "aws",
		},
	],
}