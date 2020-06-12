import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => {
  // Set state for menu
  const [menu, setMenu] = useState("")
  const [burger, setBurger] = useState("")

  // Change state on click
  useEffect(() => {
    const burgerEl = document.querySelector(".navbar-burger")
    const bodyEl = document.body
    const navLinks = [...document.querySelectorAll(".navbar-menu .navbar-link")]

    const burgerClick = () => {
      if (
        bodyEl.classList.contains("menu-is-open") &&
        burgerEl.classList.contains("is-active")
      ) {
        // setMenu("")
        // setBurger("")
        // bodyEl.classList.remove("menu-is-open")
        // burgerEl.classList.remove("is-active")
        closeMenu()
      } else {
        setMenu("menu-is-open")
        setBurger("is-active")
        bodyEl.classList.add("menu-is-open")
        burgerEl.classList.add("is-active")
      }
    }

    const closeMenu = () => {
      if (
        bodyEl.classList.contains("menu-is-open") &&
        burgerEl.classList.contains("is-active")
      ) {
        setMenu("")
        setBurger("")
        bodyEl.classList.remove("menu-is-open")
        burgerEl.classList.remove("is-active")
      }
    }
    burgerEl.addEventListener("click", burgerClick)
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", closeMenu)
    }

    return () => {
      burgerEl.removeEventListener("click", burgerClick)
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeEventListener("click", closeMenu)
      }
    }
  }, [menu, burger])

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
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link className="navbar-link is-arrowless" to="/">
                  Home
                </Link>
                <AnchorLink
                  to="/#about"
                  className="navbar-link is-arrowless about-link"
                  stripHash
                >
                  About
                </AnchorLink>
                <Link className="navbar-link is-arrowless" to="/contact">
                  Contact
                </Link>
                <Link className="navbar-link is-arrowless" to="/gallery">
                  Gallery
                </Link>
                <Link className="navbar-link is-arrowless" to="/accreditation">
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
