import React from "react"

const Footer = () => {
  return (
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
  )
}

export default Footer
