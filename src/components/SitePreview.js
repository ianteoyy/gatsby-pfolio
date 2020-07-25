import React from "react"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  text-align: center;
  width: 100%;
`

const SitePreview = ({ images }) => {
  return (
    <ImageContainer>
      <Carousel fade={true} controls={false} interval={1000} indicators={false}>
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
  )
}

export default SitePreview
