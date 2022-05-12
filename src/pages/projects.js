import React from "react"
import { Layout, Seo, ProjectPreview } from "../components"
import { AllProjectsWrapper } from "../styled-elements"
import Fade from "react-reveal/Fade"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Leavemanager",
      type: "Academic project",
      description: "A leave management app for colleges",
      repoLink: "https://github.com/alvinlal/leavemanager",
      image: `https://opengraph.githubassets.com/${Date.now()}/alvinlal/leavemanager`,
      techUsed: [
        "React",
        "Tailwind css",
        "Express js",
        "MYSQL",
        "AWS",
        "Github Actions",
      ],
    },
    {
      id: 2,
      name: "Bookmart",
      type: "Academic project",
      description: "A bookstore management system",
      repoLink: "https://github.com/alvinlal/bookmart",
      image: `https://opengraph.githubassets.com/${Date.now()}/alvinlal/bookmart`,
      techUsed: ["PHP", "Javascript", "HTML & CSS", "MYSQL"],
    },
    {
      id: 3,
      name: "PHPmvc",
      type: "Personal project",
      description: "A lightweight MVC framework for PHP",
      repoLink: "https://github.com/alvinlal/phpmvc",
      image: `https://opengraph.githubassets.com/${Date.now()}/alvinlal/phpmvc`,
      techUsed: ["PHP"],
    },
    {
      id: 4,
      name: "Portfolio",
      type: "Personal project",
      description: "Personal portfolio and blogging site",
      repoLink: "https://github.com/alvinlal/alvinlal.netlify.app",
      image: `https://opengraph.githubassets.com/${Date.now()}/alvinlal/alvinlal.netlify.app`,
      techUsed: ["Gatsby js", "React", "Styled Component", "MDX", "Netlify"],
    },
  ]

  return (
    <Layout>
      <Seo title="projects page" />
      <AllProjectsWrapper>
        {projects.map(project => (
          <Fade key={project.id} bottom={true}>
            <ProjectPreview info={project} />
          </Fade>
        ))}
      </AllProjectsWrapper>
    </Layout>
  )
}

export default Projects
