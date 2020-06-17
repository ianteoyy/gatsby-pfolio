import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectCard } from "./ProjectCard"

const CardContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`

export const Projects = () => {
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
    <CardContainer>
      <ProjectCard
        title="Nextagram"
        link="https://nextyy.netlify.app"
        images={allFile.edges.filter(edge =>
          edge.node.base.startsWith("card-nextyy")
        )}
        tagLine="An Instagram clone"
        desc={() => <>
          <p>
            Built using Next Academy's back-end. Sign up via the Login button!
            </p>
          <p>
            If the cat doesn't stop spinning, try clicking{" "}
            <a
              href="https://insta.nextacademy.com/api/v1/users/"
              target="_blank"
              rel="noreferrer"
            >
              <b>this link</b>
            </a>{" "}
              and allow the certificate.
            </p>
        </>}
        git="https://github.com/ianteoyy/nextagram"
      />
      <ProjectCard
        title="Splits"
        link="https://splits.netlify.app"
        images={allFile.edges.filter(edge =>
          edge.node.base.startsWith("card-splits")
        )}
        tagLine="A simple bill splitter"
        desc={() => (
          <>
            <p>
              Final project from Next Academy. A simple bill splitter. Back-end
              built by my teammate using Python, Google Cloud Vision to read the
              images, and front-end with React.
            </p>
          </>
        )}
        git="https://github.com/whoabe/splits-react"
      />
      <ProjectCard
        title="SW Database"
        link="https://tw-swarbox.netlify.app"
        images={allFile.edges.filter(edge =>
          edge.node.base.startsWith("card-sw")
        )}
        tagLine="A Summoner's War DB Mockup"
        desc={() => (
          <>
            <p>
              Friend's project where I assisted with parts of React code and
              database structure. View my commits to see which parts I helped
              with.
            </p>
          </>
        )}
        git="https://github.com/ericltwee/SW-react"
      />
    </CardContainer>
  )
}
