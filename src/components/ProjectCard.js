import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Modal } from "react-bootstrap"
import SitePreview from "./SitePreview"

const CardBox = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
  font-size: 14px;
  margin-bottom: 1rem;

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
    width: 100%;
    margin-bottom: 1rem;
    min-height: unset;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 16px;
  }
`

const Tagline = styled.p`
  font-size: 0.5em;
  margin-bottom: unset;
`

export const ProjectCard = ({ title, link, images, tagLine, desc, git, builtWith }) => {
  const [showModal, setShowModal] = useState(false)
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
    <>
      <CardBox
        ref={visibleRef}
        isVisible={isVisible}
        onClick={() => setShowModal(true)}
      >
        <StyledCard>
          <h3>{title}</h3>
          <SitePreview images={images} />
          <Tagline>{tagLine}</Tagline>
        </StyledCard>
      </CardBox>
      <Modal show={showModal} onHide={() => setShowModal(prev => !prev)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{title}</h3>
            <Tagline>{tagLine}</Tagline>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SitePreview images={images}/>
          <hr/>
          <p style= {{fontSize: '0.8em'}} className="text-muted">Built with: {builtWith.join(", ")}</p>
          {desc()}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <a href={git} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            Visit site
          </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}
