import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"

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

  /* fade-in styles*/
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "none" : "translateY(20%)")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  will-change: opacity, visibility;
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

  &:hover {
    position: relative;
    top: 1px;
    left: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 3px,
      inset rgba(0, 0, 0, 0.1) 0px 1px 2px;
  }

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

export const ProjectCard = ({ title, link, images, tagLine, desc, git }) => {
  const [isVisible, setIsVisible] = useState(false)
  const visibleRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting))
    })
    const currentRef = visibleRef.current
    observer.observe(visibleRef.current)
    return () => observer.unobserve(currentRef)
  }, [])

  return (
    <CardLink
      href={link}
      target="_blank"
      rel="noreferrer"
      ref={visibleRef}
      isVisible={isVisible}
    >
      <StyledCard>
        <h3>{title}</h3>
        <ImageContainer>
          <Carousel
            fade={true}
            controls={false}
            interval={1000}
            indicators={false}
          >
            {images.map(image => (
              <Carousel.Item key={image.node.base.split(".")[0]}>
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </ImageContainer>
        <small>{tagLine}</small>
        <Separator />
        {desc()}
        <GitLink href={git} target="_blank" rel="noreferrer">
          Github
        </GitLink>
      </StyledCard>
    </CardLink>
  )
}
