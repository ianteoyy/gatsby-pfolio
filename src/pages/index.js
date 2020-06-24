import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <AboutMe />
    </Container>
  </Layout>
)

export default IndexPage
