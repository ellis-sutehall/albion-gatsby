import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import FooterLogo from "../images/albion-decorators-logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          address_1
          address_2
          address_3
          address_4
          tel1
          tel2
          vat
        }
      }
    }
  `)
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="columns has-text-centered-mobile">
            <div className="column is-one-third">
              <h2 className="title is-6">Office Address</h2>
              <p>{data.site.siteMetadata.address_1}</p>
              <p>{data.site.siteMetadata.address_2}</p>
              <p>{data.site.siteMetadata.address_3}</p>
              <p>{data.site.siteMetadata.address_4}</p>
              <p>{data.site.siteMetadata.vat}</p>
            </div>
            <div className="column is-one-third">
              <h2 className="title is-6">Pages</h2>
              <ul className="menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <AnchorLink to="/#about" className="about">
                    About
                  </AnchorLink>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/accreditation">Accreditation</Link>
                </li>
              </ul>
            </div>
            <div className="column is-one-third">
              <h2 className="title is-6">General Enquiries</h2>
              <p className="is-hidden-mobile">
                Tel: {data.site.siteMetadata.tel1}
              </p>
              <p className="is-hidden-mobile">
                Tel: {data.site.siteMetadata.tel2}
              </p>
              <p className="is-hidden-tablet">
                <a href={`tel:${data.site.siteMetadata.tel1}`}>
                  Tel: {data.site.siteMetadata.tel1}
                </a>
              </p>
              <p className="is-hidden-tablet">
                <a href={`tel:${data.site.siteMetadata.tel2}`}>
                  Tel: {data.site.siteMetadata.tel2}
                </a>
              </p>
              <div className="footer-logo">
                <img src={FooterLogo} alt="Albion Decorators Logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item social-icons">
                <p>Albion Decorators © {new Date().getFullYear()}</p>
                <p>
                  <a
                    href="https://www.facebook.com/Albion-Decorators-2118723331673438/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://www.instagram.com/albiondecorators/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p className="site-credit">
                  Website by{" "}
                  <a
                    href="https://ellissutehall.co.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ellis Sutehall
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
