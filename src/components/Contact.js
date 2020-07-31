import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import ContactIcon from "./ContactIcon"
import styled from "styled-components"

const ContactSection = styled.section`
  color: var(--light);
  padding-bottom: 15%;

  > h2 {
    font-size: 3rem;
  }
  @media (min-width: 992px) {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  color: var(--white);
  margin-bottom: 1rem;
`

const contactTooltips = [
  { contact: "Gmail", link: "mailto:teoyeetyang@gmail.com" },
  { contact: "Github", link: "https://github.com/ianteoyy" },
  {
    contact: "LinkedIn",
    link: "https://www.linkedin.com/in/ianteoyy",
  },
]

const Contact = () => {
  const { contactIcons } = useStaticQuery(graphql`
    query {
      contactIcons: allFile(
        filter: { relativeDirectory: { eq: "contact" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ContactSection>
      <h2>Find me at:</h2>
      <ContactContainer>
        {contactIcons.edges.map((contact, index) => (
          <ContactIcon
            key={contact.node.base}
            imageFluid={contact.node.childImageSharp.fluid}
            imageAlt={contact.node.base.split(".")[0]}
            tooltip={contactTooltips[index].tooltip}
            link={contactTooltips[index].link}
            index={index}
          />
        ))}
      </ContactContainer>
      <p>
        Or check out{" "}
        <a
          href="https://drive.google.com/file/d/15C1FhjP2sgzaKWdrXvkRoul2ckqTJIWQ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          my resume!
        </a>
      </p>
    </ContactSection>
  )
}

export default Contact
