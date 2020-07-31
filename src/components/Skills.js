import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import ContactIcon from "./ContactIcon"
import styled from "styled-components"

const SkillsSection = styled.section`
  color: var(--light);
  padding-bottom: 15%;

  > h2 {
    font-size: 3rem;
  }
  @media (min-width: 992px) {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`

const SkillsContainer = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  color: var(--white);
`;

const skillTooltips = [
  { skill: "Bootstrap", tooltip: "Bootstrap 4.5" },
  { skill: "HTML", tooltip: "HTML, CSS and JS" },
  { skill: "React", tooltip: "ReactJS (Class & Hooks)" },
  { skill: "Redux", tooltip: "Redux" },
  { skill: "NestJS", tooltip: "Nest JS" },
  { skill: "NPM", tooltip: "NPM" },
  { skill: "Yarn", tooltip: "Yarn" },
  { skill: "PostgreSQL", tooltip: "PostgreSQL" },
  { skill: "Python", tooltip: "Python" },
  { skill: "Git", tooltip: "Git" },
]

const contactTooltips = [
  { contact: "Gmail", tooltip: "Gmail", link: "mailto:teoyeetyang@gmail.com" },
  { contact: "Github", tooltip: "Github", link: "https://github.com/ianteoyy" },
  {
    contact: "LinkedIn",
    tooltip: "LinkedIn",
    link: "https://www.linkedin.com/in/ianteoyy",
  },
]

const Skills = () => {
  const { skillIcons, contactIcons } = useStaticQuery(graphql`
    query {
      skillIcons: allFile(
        filter: { relativeDirectory: { eq: "skills" } }
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
    <SkillsSection>
      <h2>I know these things:</h2>
      <SkillsContainer>
        {skillIcons.edges.map((skill, index) => (
          <ContactIcon
            key={skill.node.base}
            imageFluid={skill.node.childImageSharp.fluid}
            imageAlt={skill.node.base.split(".")[0]}
            tooltip={skillTooltips[index].tooltip}
          />
        ))}
      </SkillsContainer>
      <hr />
      <h2>Find me at:</h2>
      <Row className="align-items-center">
        {contactIcons.edges.map((contact, index) => (
          <ContactIcon
            key={contact.node.base}
            imageFluid={contact.node.childImageSharp.fluid}
            imageAlt={contact.node.base.split(".")[0]}
            tooltip={contactTooltips[index].tooltip}
            link={contactTooltips[index].link}
          />
        ))}
      </Row>
      <br />
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
    </SkillsSection>
  )
}

export default Skills
