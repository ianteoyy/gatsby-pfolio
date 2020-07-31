import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { FaExternalLinkAlt } from "react-icons/fa"

import SitePreview from "./SitePreview"
import { CardBox, StyledCard, Tagline } from "./ProjectsStyles"

export const ProjectCard = ({
  title,
  link,
  images,
  tagLine,
  desc,
  git,
  builtWith,
}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <CardBox
        onClick={() => setShowModal(true)}
        data-sal="zoom-in"
        data-sal-easing="ease"
        data-sal-duration="500"
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
          <a href={link} target="_blank" rel="noreferrer">
            <SitePreview images={images} />
          </a>
          <hr />
          <p
            style={{ fontSize: "0.8em", marginBottom: "0" }}
            className="text-muted"
          >
            Built with: {builtWith.join(", ")}
          </p>
          <a
            style={{
              display: "inline-block",
              fontSize: "0.8em",
              marginBottom: "1.45rem",
            }}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Visit site <FaExternalLinkAlt />
          </a>
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
