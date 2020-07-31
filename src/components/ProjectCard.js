import React from "react"
import { Row, Col } from "react-bootstrap"

import SitePreview from "./SitePreview"
import { Tagline } from "./ProjectsStyles"

export const ProjectCard = ({
  title,
  link,
  images,
  tagLine,
  desc,
  git,
  builtWith,
}) => {
  return (
    <Row
      className="p-5"
      data-sal="zoom-in"
      data-sal-easing="ease"
      data-sal-duration="500"
    >
      <Col sm={12} lg={4} className="text-left">
        <h3 className="mb-0">{title}</h3>
        <Tagline className="mb-3">{tagLine}</Tagline>
        {desc()}
        <p
          style={{ fontSize: "0.8em", marginBottom: "0" }}
          className="text-muted mb-3"
        >
          Built with: {builtWith.join(", ")}
        </p>
        <div className="mb-3 mb-lg-0">
          <a
            className="cta-btn cta-btn--hero"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View Live
          </a>
          <a
            className="cta-btn text-dark"
            href={git}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </Col>
      <Col sm={12} lg={8}>
        <a href={link} target="_blank" rel="noreferrer">
          <SitePreview images={images} />
        </a>
      </Col>
    </Row>
  )
}
