const { keyframes } = require("styled-components")

export const bobUp = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -10px);
  }

  100% {
    transform: translate(0, 0px);
  }
`

export const bounceUp = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  } 
  40% {
    transform: translateY(-10px);
  } 
  60% {
    transform: translateY(-5px);
  } 
`

export const bobDown = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }

  100% {
    transform: translate(0, 0px);
  }
`