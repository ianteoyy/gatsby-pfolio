import React from "react"

import {
  LandingHero,
  LandingText,
  LandingButton,
  BobbingArrow,
} from "./LandingStyles"

const Landing = ({ scrollToProjects }) => {
  return (
    <LandingHero fluid className="p-5">
      <LandingText
        className="text-center text-light"
        data-sal="flip-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h1>Hi, I'm Ian</h1>
        <p>A full stack developer based in Kuala Lumpur, Malaysia</p>
        <LandingButton
          className="mt-5 rounded-pill px-5"
          variant="outline-light"
          onClick={scrollToProjects}
        >
          <p className="m-0">Check out my work!</p>
          <p className="m-0">
            <BobbingArrow />
          </p>
        </LandingButton>
      </LandingText>
    </LandingHero>
  )
}

export default Landing
