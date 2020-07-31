import React, { forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectCard } from "./ProjectCard"
import { ProjectsSection } from "./ProjectsStyles"
import { Container } from "react-bootstrap"

const Projects = forwardRef((props, ref) => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativePath: { glob: "card*" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ProjectsSection ref={ref}>
      <h2>Stuff I've worked on</h2>
      <Container>
        <ProjectCard
          title="kuvira-M"
          builtWith={["HTML5", "SCSS", "Bootstrap 4", "jQuery"]}
          link="https://kuvira-M.netlify.app"
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-kuvira")
          )}
          tagLine="An online store mockup"
          desc={() => (
            <p>
              An online storefront I was assigned to do for a front-end
              interview. It was done purely in HTML, CSS, and JS without
              libraries like React. Site design and layout was provided to me in
              jpegs.
            </p>
          )}
          git="https://github.com/ianteoyy/kuvira-m"
        />
        <ProjectCard
          title="Orders-React"
          link="https://orders-react.netlify.app"
          builtWith={["ReactJS", "Redux", "NestJS", "MongoDB"]}
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-orders")
          )}
          tagLine="Ordering system front-end"
          desc={() => (
            <>
              <p>
                Another interview assignment where I had to build an order and
                payment system using a NodeJS backend of my choosing. I went
                with NestJS and MongoDB, both of which were new to me.
              </p>
            </>
          )}
          git="https://github.com/ianteoyy/orders-react"
        />
        <ProjectCard
          title="Nextagram"
          builtWith={["ReactJS", "Redux"]}
          link="https://nextyy.netlify.app"
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-nextyy")
          )}
          tagLine="An Instagram clone"
          desc={() => (
            <>
              <p>
                An Instagram clone single-page-app I built using Next Academy's
                back-end as part of their React course. Started with using class
                components, now uses mostly hooks!
              </p>
              <p style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
                  4/7/2020 update: Now restores user sessions and stores them
                  with Redux!
              </p>
            </>
          )}
          git="https://github.com/ianteoyy/nextagram"
        />
      </Container>
    </ProjectsSection>
  )
})

export default Projects
