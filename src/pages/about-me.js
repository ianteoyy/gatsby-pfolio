import React, { useState } from "react"
import { Container, Row, Col, Collapse } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import code from "../images/personal/code.png"
import intro from "../images/personal/intro.png"
import language from "../images/personal/language.png"

const WallOfText = styled(Row)`
  p {
    font-size: 14px;
  }
`

const AboutMe = () => {
  const [showIntro, setShowIntro] = useState("")
  const { me, skillIcons, contactIcons } = useStaticQuery(graphql`
    query {
      me: allFile(filter: { relativePath: { glob: "me.jpg" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                src
                sizes
              }
            }
          }
        }
      }
      skillIcons: allFile(
        filter: { relativeDirectory: { eq: "skills" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
      contactIcons: allFile(
        filter: { relativeDirectory: { eq: "contact" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const handleAboutMeIcons = button => {
    switch (button) {
      case "intro":
        showIntro === "intro" ? setShowIntro("") : setShowIntro("intro")
        break
      case "experience":
        showIntro === "experience"
          ? setShowIntro("")
          : setShowIntro("experience")
        break
      case "language":
        showIntro === "language" ? setShowIntro("") : setShowIntro("language")
        break
      default:
        setShowIntro("")
        break
    }
  }

  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <Row>
          <Col md={6}>
            <Img
              fluid={me.edges[0].node.childImageSharp.fluid}
              alt={me.edges[0].node.base.split(".")[0]}
            />
          </Col>
          <Col md={6}>
            <WallOfText>
              <Col lg={2} md={3} sm={2} xs={3}>
                <img
                  src={intro}
                  alt="stuff about me"
                  onClick={() => handleAboutMeIcons("intro")}
                />
              </Col>
              <Col lg={2} md={3} sm={2} xs={3}>
                <img
                  src={code}
                  alt="my coding experience so far"
                  onClick={() => handleAboutMeIcons("experience")}
                />
              </Col>
              <Col lg={2} md={3} sm={2} xs={3}>
                <img
                  src={language}
                  alt="languages I know"
                  onClick={() => handleAboutMeIcons("language")}
                />
              </Col>
              <Collapse in={showIntro === "intro"}>
                <div>
                  <p>
                    I'm Ian Teo - Malaysian, born and raised in Brunei, and
                    studied Geophysics in The University of Auckland. I didn't
                    quite feel like I wanted to pursue a career in that field,
                    so I moved away from that.
                  </p>
                </div>
              </Collapse>
              <Collapse in={showIntro === "experience"}>
                <div>
                  <p>
                    I started off my web developer journey with Next Academy's
                    full stack bootcamp and things kinda just took off from
                    there. As far as my skills in programming go - it's mostly
                    in the context of web development. i.e. for loops and
                    arr.map() are my jam and I'd have more failed submissions
                    than correct ones in leetcode because I didn't know what
                    hash tables or linked lists were. I'm getting there, and I'm
                    having loads of fun on the way!
                  </p>
                </div>
              </Collapse>
              <Collapse in={showIntro === "language"}>
                <div>
                  <p>
                    I'm almost a banana but I can still speak enough Mandarin to
                    order from the hawker aunty (after telling her I can't speak
                    Cantonese).
                  </p>
                  <p>
                    I learnt German in Goethe Institut up to B1 level, but
                    that's in 2016 - also habe ich meine Deutsch meistens
                    vergessen.
                  </p>
                  <p>
                    I can speak some Japanese, enough that some Japanese will
                    compliment me - which means it's not very good (JLPT N3).
                  </p>
                  <p>
                    English is what I'm most comfortable with and I can whip out
                    a decent Louis Armstrong impression when singing What a
                    Wonderful World at the karaoke!
                  </p>
                </div>
              </Collapse>
            </WallOfText>
            <h4>I know these things:</h4>
            <Row className="align-items-center">
              {skillIcons.edges.map(skill => (
                <Col lg={2} md={3} sm={2} xs={3}>
                  <Img
                    fluid={skill.node.childImageSharp.fluid}
                    alt={skill.node.base.split(".")[0]}
                  />
                </Col>
              ))}
            </Row>
            <br />
            <h4>Find me at:</h4>
            <Row className="align-items-center">
              {contactIcons.edges.map(contact => (
                <Col lg={2} md={3} sm={2} xs={3}>
                  <Img
                    fluid={contact.node.childImageSharp.fluid}
                    alt={contact.node.base.split(".")[0]}
                  />
                </Col>
              ))}
            </Row>
            <br />
            <p>Or check out my resume!</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutMe
