import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi, I'm Ian</h1> */}
    <Container className="d-flex justify-content-center">
      <Card />
    </Container>
  </Layout>
)

export default IndexPage
