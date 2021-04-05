import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/header.css"
import toggle__menu from '../utils/toggle_menu'

const Header = ({ siteTitle }) => (
  <header>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div id="toggle__menu" onClick={ toggle__menu }>
      </div>      
      <div id="options__menu">
        <Link to="/">Opción 1</Link>
        <Link to="/">Opción 2</Link>
        <Link to="/">Opción 3</Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
