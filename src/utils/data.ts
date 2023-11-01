import { Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "HTML", imgURL: "/icons_html.svg" },
  { name: "CSS", imgURL: "/icons_css.svg" },
  { name: "Javascript", imgURL: "/icons_js.svg" },
  { name: "Typescript", imgURL: "/icons-typescript.svg" },
  { name: "React", imgURL: "/logos_react.svg" },
  { name: "Material UI", imgURL: "/logo_mui.svg" },
  { name: "React Query", imgURL: "/react-query.svg" },
  { name: "Apache Echarts", imgURL: "/echarts-logo.svg" },
  { name: "NextJS", imgURL: "/logo_next.svg" },
  { name: "Bootstrap", imgURL: "/logos_bootstrap.svg" },
  { name: "Git", imgURL: "/logos_git.svg" },
  { name: "NPM", imgURL: "/npm-logo.svg" },
]

export const projectData: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tincidunt metus. Duis accumsan nibh risus, vel ornare odio ultrices ut. Suspendisse egestas elit congue dolor eleifend mollis. Donec dapibus, turpis eu malesuada ullamcorper, justo purus ullamcorper ipsum, eget aliquet nibh augue ut lectus.",
    projectURL: "https://vercel.com/",
    githubURL: githubProfile,
  },
  {
    name: "Pokedex App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tincidunt metus. Duis accumsan nibh risus, vel ornare odio ultrices ut. Suspendisse egestas elit congue dolor eleifend mollis. Donec dapibus, turpis eu malesuada ullamcorper, justo purus ullamcorper ipsum, eget aliquet nibh augue ut lectus.",
    projectURL: "https://vercel.com/",
    githubURL: githubProfile,
  },
  {
    name: "Pizzeria App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tincidunt metus. Duis accumsan nibh risus, vel ornare odio ultrices ut. Suspendisse egestas elit congue dolor eleifend mollis. Donec dapibus, turpis eu malesuada ullamcorper, justo purus ullamcorper ipsum, eget aliquet nibh augue ut lectus.",
    projectURL: "https://vercel.com/",
    githubURL: githubProfile,
  },
]
