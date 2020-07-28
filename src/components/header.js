import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: none;
  position: sticky;
  top: 0;
  z-index: 1240;
  margin-bottom: 1em;

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
      <HeaderRight>
        <h3>
          <StyledLink to="/">About Me</StyledLink>
        </h3>
        <h3>
          <StyledLink to="/projects">Projects</StyledLink>
        </h3>
      </HeaderRight>
    </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
