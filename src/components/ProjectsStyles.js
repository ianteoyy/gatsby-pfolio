import styled from "styled-components"

export const ProjectsSection = styled.section`
  padding-bottom: 15%;
  background: var(--light);
  > h2 {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
`

export const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px,
    inset rgba(0, 0, 0, 0.2) 0px -1px 2px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;

  &:hover {
    position: relative;
    top: 1px;
    left: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 3px,
      inset rgba(0, 0, 0, 0.1) 0px 1px 2px;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 16px;
  }
`

export const Tagline = styled.p`
  font-size: 0.8em;
`
