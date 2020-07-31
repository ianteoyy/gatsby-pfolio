import React, { useRef } from "react"

import Landing from "../components/Landing"
import { Projects } from "../components/Projects"
import { ProjectsSection } from "../components/ProjectsStyles"

const IndexPage = () => {
  const projectRef = useRef()

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behaviour: "smooth", block: "start" })
  }

  return (
    <>
      <Landing scrollToProjects={scrollToProjects} />
      <ProjectsSection ref={projectRef} className="text-center">
        <Projects />
      </ProjectsSection>
      <div style={{ height: "200vh" }} />
    </>
  )
}

export default IndexPage
