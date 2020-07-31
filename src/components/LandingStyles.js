import { FaChevronDown } from "react-icons/fa"
import styled from "styled-components"
import { Jumbotron, Button } from "react-bootstrap"

import { bobDown } from "../keyframes"
import wall from "../images/wall.jpg"

export const LandingHero = styled(Jumbotron)`
  height: 100vh;
  background: rgb(34, 34, 34);
  background: radial-gradient(
    circle,
    rgba(34, 34, 34, 0.9416900549282213) 20%,
    #5d4a5e 100%
  );
  background-image: url(${wall});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  margin-bottom: 0;

  @media (max-width: 768px) {
    background-position: right;
  }
`

export const LandingText = styled.div`
  position: relative;
  top: 30%;

  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.5rem;
  }

  
  @media (max-width: 576px){
    h1{
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

export const LandingButton = styled(Button)`
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    background-color: rgba(22, 22, 22, 0.6);
  }
`

export const BobbingArrow = styled(FaChevronDown)`
  animation-duration: 1.2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-name: ${bobDown};
`