/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <main>{children}</main>
        <footer>
          <small>
            I protecc, I attacc, but most importantly, I code with Reacc.
          </small>
          <br />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby
          </a>
          <br />
          {` `}
          <small>
            And{" "}
            <a
              href="https://github.com/ianteoyy/ianteoyy.github.io"
              target="_blank"
              rel="noreferrer"
            >
              here's the Github
            </a>{" "}
            for this page
          </small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
