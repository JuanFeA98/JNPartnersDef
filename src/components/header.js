import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MenuIcon from "../images/menu.png"

const Header = ({ siteTitle }) => (
  <header>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <img className="header__image" src={MenuIcon} alt="Menu"></img>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
