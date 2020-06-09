import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      imageSharp(id: { eq: "e9e4722e-43b0-5e26-a7f6-f54d983123eb" }) {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
        id
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns has-text-centered-mobile">
          <div className="column is-one-third">
            <h2 className="title is-4">Office Address</h2>
            <p>{data.site.siteMetadata.address_1}</p>
            <p>{data.site.siteMetadata.address_2}</p>
            <p>{data.site.siteMetadata.address_3}</p>
            <p>{data.site.siteMetadata.address_4}</p>
            <p>{data.site.siteMetadata.vat}</p>
          </div>
          <div className="column is-one-third">
            <h2 className="title is-4">Pages</h2>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/#about">About</a>
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
            <h2 className="title is-4">General Enquiries</h2>
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
            <Img
              className="footer-logo"
              fixed={data.imageSharp.fixed}
              alt="Albion Decorators Logo"
            />
          </div>
        </div>
        <div className="columns has-text-centered-mobile">
          <div className="column">
            Albion Decorators © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
