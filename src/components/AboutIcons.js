import React from "react"
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"

const FadingImage = styled(Img)`
  :hover {
    filter: drop-shadow(1px 1px 1px gray);
  }
  @media (max-width: 768px) {
    width: 25%;
  }
`

const StyledCol = styled(Col)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      display: block;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Caption = styled.p`
  font-size: 0.8rem;
  text-align: center;
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: inline-block;
  }
`

export const AboutIcons = ({ imageFluid, imageAlt, tooltip, link = "" }) => {
  return (
    <OverlayTrigger placement={"top"} overlay={<Tooltip>{tooltip}</Tooltip>}>
      <StyledCol lg={2} md={3} xs={6}>
        {withLinkWrapper(
          link,
          <FadingImage fluid={imageFluid} alt={imageAlt} />
        )}
        <Caption>{tooltip}</Caption>
      </StyledCol>
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
