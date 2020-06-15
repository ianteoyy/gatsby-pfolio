import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"

const CardContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`

const CardLink = styled.a`
  display: inline-block;
  :link,
  :visited {
    color: initial;
    text-decoration: initial;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const StyledCard = styled.div`
  background-color: rgba(200, 200, 200, 0.15);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px,
    inset rgba(0, 0, 0, 0.2) 0px -1px 2px;
  border-radius: 20px;
  min-height: 60vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 16px;
  }
`

const ImageContainer = styled.div`
  width: 80%;
`
const Separator = styled.hr`
  margin: 0.5em;
  border-width: 1px;
  color: #000;
  width: 90%;
  margin-bottom: 1rem;
`

const GitLink = styled.a`
  margin-top: auto;
  margin-left: auto;
  font-size: 16px;
`

export const Card = () => {
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
      <CardLink href="https://nextyy.netlify.app" target="_blank">
        <StyledCard>
          <h3>Nextagram</h3>
          <ImageContainer>
            <Carousel
              fade={true}
              controls={false}
              interval={1000}
              indicators={false}
            >
              {allFile.edges
                .filter(edge => edge.node.base.startsWith("card-nextyy"))
                .map(image => (
                  <Carousel.Item>
                    <Img
                      key={image.node.base.split(".")[0]}
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </ImageContainer>
          <small>An Instagram clone</small>
          <Separator />
          <p>
            Built using Next Academy's back-end. Sign up via the Login button!
          </p>
          <p>
            If the cat doesn't stop spinning, try clicking{" "}
            <a href="https://insta.nextacademy.com/api/v1/users/" target="_blank">
              <b>this link</b>
            </a>{" "}
            and allow the certificate.
          </p>
          <GitLink href="https://github.com/ianteoyy/nextagram" target="_blank">
            Github
          </GitLink>
        </StyledCard>
      </CardLink>

      <CardLink href="https://tw-swarbox.netlify.app" target="_blank">
        <StyledCard>
          <h3>SW Database</h3>
          <ImageContainer>
            <Carousel
              fade={true}
              controls={false}
              interval={1000}
              indicators={false}
            >
              {allFile.edges
                .filter(edge => edge.node.base.startsWith("card-sw"))
                .map(image => (
                  <Carousel.Item>
                    <Img
                      key={image.node.base.split(".")[0]}
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </ImageContainer>
          <small>An Summoner's War DB Mockup</small>
          <Separator />
          <p>
            Friend's project where I assisted with parts of React code and
            database structure. View my commits to see which parts I helped with.
          </p>
          <GitLink href="https://github.com/ericltwee/SW-react" target="_blank">
            Github
          </GitLink>
        </StyledCard>
      </CardLink>

      <CardLink href="https://splits.netlify.app" target="_blank">
        <StyledCard>
          <h3>Splits</h3>
          <ImageContainer>
            <Carousel
              fade={true}
              controls={false}
              interval={1000}
              indicators={false}
            >
              {allFile.edges
                .filter(edge => edge.node.base.startsWith("card-splits"))
                .map(image => (
                  <Carousel.Item>
                    <Img
                      key={image.node.base.split(".")[0]}
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </ImageContainer>
          <small>A simple bill splitter</small>
          <Separator />
          <p>
            Final project from Next Academy. A simple bill splitter. Back-end
            built by my teammate using Python, Google Cloud Vision to read the
            images, and front-end with React.
          </p>
          <GitLink
            href="https://github.com/whoabe/splits-react"
            target="_blank"
          >
            Github
          </GitLink>
        </StyledCard>
      </CardLink>
    </CardContainer>
  )
}
