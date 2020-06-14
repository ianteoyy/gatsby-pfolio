import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Ian</h1>
    <Card/>
  </Layout>
)

export default IndexPage
