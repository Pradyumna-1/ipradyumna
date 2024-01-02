import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "HTML", imgURL: "/icons_html.svg" },
  { name: "CSS", imgURL: "/icons_css.svg" },
  { name: "Javascript", imgURL: "/icons_js.svg" },
  { name: "Typescript", imgURL: "/icons-typescript.svg" },
  { name: "React", imgURL: "/logos_react.svg" },
  { name: "NextJS", imgURL: "/logo_next.svg" },
  { name: "Material UI", imgURL: "/logo_mui.svg" },
  { name: "Bootstrap", imgURL: "/logos_bootstrap.svg" },
  { name: "React Query", imgURL: "/react-query.svg" },
  { name: "Apache Echarts", imgURL: "/echarts-logo.svg" },
  { name: "Git", imgURL: "/logos_git.svg" },
  { name: "NPM", imgURL: "/npm-logo.svg" },
]

export const projectData: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "This is my personal portfolio website which features some of my github projects as well. It is fully responsive & user friendly website, also it supports both dark mode and light mode.",
    projectURL: "https://vercel.com/",
    githubURL: `${githubProfile}/My-Portfolio`,
    imgURL: "/portfolio.jpg",
  },
  {
    name: "Pokédex",
    description:
      "A pokedex website that allows users to search and view information about various Pokémon characters. A fuzzy search feature is present on the home page. User can view more details by clicking on the particular pokémon.",
    projectURL: "https://vercel.com/",
    githubURL: `${githubProfile}/my-pokedex`,
    imgURL: "/pokedex.jpg",
  },
  {
    name: "Pizzeria",
    description:
      "Pizzeria is a MEAN Stack web application, where users order pizza online. Users can choose from the existing menu and order pizzas, also they can also customize their pizza by choosing ingredients.",
    projectURL: "",
    githubURL: `${githubProfile}/Pizzeria`,
    imgURL: "pizzeria.jpg",
  },
]

export const aboutData: About = {
  summary:
    "I'm Nilkanth Patadiya, a front end developer with 3 years of experience in building user-friendly and responsive web applications using React.js and other modern technologies. Familiar with Agile methodologies, version control systems and debugging techniques. Since joining Accenture in December 2020, I have successfully completed multiple projects for clients across various domains and industries, delivering high-quality solutions that meet their needs and expectations. My hobbies include reading, watching various shows and films, gaming, and cycling when I have spare time.",
  badges: [
    {
      imgURL: "/aws-certified-cloud-practitioner.png",
      badgeURL:
        "https://www.credly.com/badges/41330447-cc91-4cab-b2ce-82d29552d72f/public_url",
    },
    {
      imgURL: "/microsoft-certified-power-platform-fundamentals.png",
      badgeURL:
        "https://www.credly.com/badges/1cb3e5da-1a8a-4c9a-81d0-aeb9b2a473f5/public_url",
    },
  ],
  education: {
    title: "Bachelor Of Engineering in Computer Engineering",
    grade: "9.0 CGPA",
    subtitle: "From L.D. College Of Engineering, Ahmedabad",
  },
}
