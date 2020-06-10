import { Link, useEffect } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import BackgroundImage from "gatsby-background-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     LogoMob: imageSharp(id: { eq: "ea72edc3-f5bf-5488-894d-64f2048d4b8e" }) {
  //       fixed(width: 35) {
  //         ...GatsbyImageSharpFixed
  //       }
  //       id
  //     }
  //     imageSharp(id: { eq: "e9e4722e-43b0-5e26-a7f6-f54d983123eb" }) {
  //       fixed(width: 150) {
  //         ...GatsbyImageSharpFixed
  //       }
  //       id
  //     }
  //   }
  // `)

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
              {/* <BackgroundImage
                className="logo-desktop"
                fixed={data.imageSharp.fixed}
              >
                <Link to="/">{siteTitle}</Link>
              </BackgroundImage> */}
              {/* <BackgroundImage className="logo" src={LogoMob}>
                <Link to="/">{siteTitle}</Link>
              </BackgroundImage> */}
              {/* <img src={LogoMob} /> */}
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
