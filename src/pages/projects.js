import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from "../components/Projects"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Container className="d-flex justify-content-center">
      <Projects />
    </Container>
  </Layout>
)

export default ProjectPage
