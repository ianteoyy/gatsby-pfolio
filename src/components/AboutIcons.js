import React from "react"
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"

const FadingImage = styled(Img)`
  :hover {
    filter: drop-shadow(1px 1px 1px gray);
  }
`

export const AboutIcons = ({ imageFluid, imageAlt, tooltip, link = "" }) => {
  return (
    <OverlayTrigger placement={"top"} overlay={<Tooltip>{tooltip}</Tooltip>}>
      <Col lg={2} md={3} sm={2} xs={3}>
        {withLinkWrapper(
          link,
          <FadingImage fluid={imageFluid} alt={imageAlt} />
        )}
      </Col>
    </OverlayTrigger>
  )
}

const withLinkWrapper = (link, component) => {
  return link ? (
    <a href={link} target="_blank" rel="noreferrer">
      {component}
    </a>
  ) : (
    component
  )
}
