import React, { useRef } from "react"

import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => {
  const projectRef = useRef()

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({ behaviour: "smooth", block: "start" })
  }

  return (
    <>
      <SEO />
      <Landing scrollToProjects={scrollToProjects} />
      <Projects ref={projectRef} />
      <Contact />
    </>
  )
}

export default IndexPage
