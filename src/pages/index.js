import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from "../components/Projects"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi, I'm Ian</h1> */}
    <Container className="d-flex justify-content-center">
      <Projects />
      <Link to="/about-me">About Me</Link>
    </Container>
  </Layout>
)

export default IndexPage
