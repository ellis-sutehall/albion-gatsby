import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => {
  const handleOnClick = () => {
    document.body.classList.toggle("menu-is-open")
    document.querySelector(".navbar-burger").classList.toggle("is-active")
  }

  const closeMenu = () => {
    if (document.body.classList.contains("menu-is-open")) {
      document.body.classList.remove("menu-is-open")
    }
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="navbar-item">
              <div className="logo">
                <Link to="/">{siteTitle}</Link>
              </div>
            </div>
            <button
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={handleOnClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link
                  className="navbar-link is-arrowless"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <AnchorLink
                  to="/#about"
                  className="navbar-link is-arrowless about-link"
                  // onClick={closeMenu}
                  stripHash
                >
                  About
                </AnchorLink>
                <Link
                  className="navbar-link is-arrowless"
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Link
                  className="navbar-link is-arrowless"
                  to="/gallery"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
                <Link
                  className="navbar-link is-arrowless"
                  to="/accreditation"
                  onClick={closeMenu}
                >
                  Accreditation
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
