import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const IconDiv = styled.div`
  width: 5rem;
  height: 5rem;
  vertical-align: center;
  display: flex;
  background-color: var(--light);
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

const StyledIcon = styled(Img)`
  width: 100%;
  :hover {
    filter: drop-shadow(1px 1px 1px gray);
  }
`

export default ({ imageFluid, imageAlt, link = "", index }) => {
  return (
    <>
      {withLinkWrapper(
        link,
        <IconDiv 
          className="p-2 p-md-3 rounded-circle"
          data-sal="zoom-in"
          data-sal-delay={`${index*100}`}
          data-sal-easing="ease"
          data-sal-duration="300"
        >
          <StyledIcon
            fluid={imageFluid}
            alt={imageAlt}
            objectFit="contain"
            fadeIn={true}
          />
        </IconDiv>
      )}
    </>
  )
}

const withLinkWrapper = (link, component) => {
  return link ? (
    <a className="d-block" href={link} target="_blank" rel="noreferrer">
      {component}
    </a>
  ) : (
    component
  )
}
