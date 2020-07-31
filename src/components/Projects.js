import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectCard } from "./ProjectCard"
import Referral from "./Referral"
import { CardContainer } from "./ProjectsStyles"

export const Projects = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativePath: { glob: "card*" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <h2>Stuff I've worked on</h2>
      <CardContainer>
        <ProjectCard
          title="kuvira-M"
          builtWith={["HTML5", "SCSS", "Bootstrap 4", "jQuery"]}
          link="https://kuvira-M.netlify.app"
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-kuvira")
          )}
          tagLine="An online store mockup"
          desc={() => (
            <>
              <p>
                Built this as an interview assignment. I was only allowed to use
                the Bootstrap 4 and jQuery packages and no others. Site design
                and layout was provided to me in jpegs so I can't take credit
                for the design!!
              </p>
              <p>
                Pictures found in{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noreferrer"
                  alt="Pexels"
                >
                  Pexels
                </a>
              </p>
              <p>
                <small>
                  Picture credits: <Referral handleName="@meduzakos" />
                  <Referral handleName="@steinportraits" />
                  <Referral handleName="@brunosalvadori" />
                  <Referral handleName="@mentatdgt-330508" />
                  <Referral handleName="@wancukz" />
                  <Referral handleName="@eliasdecarvalho" />
                  <Referral handleName="@rhiannonstone" />
                  <Referral handleName="@elijahsad" />
                  <Referral handleName="@soldiervip" />
                  <Referral handleName="@pixabay" />
                  <Referral handleName="@olly" />
                  <Referral handleName="@myca" />
                  <Referral handleName="@arnie-chou-304906" />
                  <Referral handleName="@black-star-151202" />
                  <Referral handleName="@eulucasqueiroz" />
                  <Referral handleName="@anastasiya-gepp-654466" />
                  <Referral handleName="@postiglioni" />
                  <Referral handleName="@athena" />
                  <Referral handleName="@ngqah83" />
                  <Referral handleName="@scottwebb" />
                </small>
              </p>
            </>
          )}
          git="https://github.com/ianteoyy/kuvira-m"
        />
        <ProjectCard
          title="Orders-React"
          link="https://orders-react.netlify.app"
          builtWith={["ReactJS", "Redux", "NestJS", "MongoDB"]}
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-orders")
          )}
          tagLine="Ordering system front-end"
          desc={() => (
            <>
              <p>
                Another interview assignment! This one involved building a
                NodeJS backend of my choosing (I went with NestJS, which was new
                for me) to manage orders and payments.
              </p>
              <p>
                For the database, I used MongoDB Atlas since I figured, "hey two
                birds with one stone!" So now I have a basic understanding of
                the MERN stack!
              </p>
              <p>
                If you'd like to check out the code for the NestJS backend,{" "}
                <a
                  href="https://github.com/ianteoyy/ordersystem"
                  target="_blank"
                  rel="noreferrer"
                  alt="Order System github"
                >
                  here's its Github page.
                </a>
              </p>
            </>
          )}
          git="https://github.com/whoabe/splits-react"
        />
        <ProjectCard
          title="Nextagram"
          builtWith={["ReactJS", "Redux"]}
          link="https://nextyy.netlify.app"
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-nextyy")
          )}
          tagLine="An Instagram clone"
          desc={() => (
            <>
              <p>
                An Instagram clone single-page-app I built using Next Academy's
                back-end as part of their React course. My go-to project to
                alter when learning new things. Started with using class
                components, now uses mostly hooks!
              </p>
              <small style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
                4/7/2020 update: Now restores user sessions and stores them with
                Redux!
              </small>
            </>
          )}
          git="https://github.com/ianteoyy/nextagram"
        />
        <ProjectCard
          title="Splits"
          builtWith={["ReactJS", "Python (Peewee & Flask)", "PostgreSQL"]}
          link="https://splits.netlify.app"
          images={allFile.edges.filter(edge =>
            edge.node.base.startsWith("card-splits")
          )}
          tagLine="A simple bill splitter"
          desc={() => (
            <>
              <p>
                Final project from Next Academy. A simple bill splitter.
                Back-end built by my teammate using Python, Google Cloud Vision
                to read the images, and front-end with React.
              </p>
            </>
          )}
          git="https://github.com/whoabe/splits-react"
        />
      </CardContainer>
    </>
  )
}
