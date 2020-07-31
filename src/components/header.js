import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100%;
  /* background-color: var(--dark); */
  position: fixed;
  top: 0;
  z-index: 1240;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > h1 {
    margin-right: auto;
  }

  h5 {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    h1 {
      margin: 0;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }

  *:not(:last-child) {
    margin-right: 1em;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderRight>
        <h3>
          <StyledLink to="/">About Me</StyledLink>
        </h3>
        <h3>
          <StyledLink to="/projects">Projects</StyledLink>
        </h3>
      </HeaderRight>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
