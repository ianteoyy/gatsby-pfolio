import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1rem`,
    }}
  >
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <HeaderRight>
        <h5>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            My Projects
          </Link>
        </h5>
        <h5>
          <Link
            to="/about-me"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About Me
          </Link>
        </h5>
      </HeaderRight>
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
