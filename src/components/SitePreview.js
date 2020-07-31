import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

const SitePreview = ({ images }) => {
  return (
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
  )
}

export default SitePreview
