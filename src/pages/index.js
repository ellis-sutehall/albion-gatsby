import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"

import RepairCare from "../images/accreditation/repair-care-accreditation.svg"
import TrustMark from "../images/accreditation/trustmark-logo-accreditation.svg"
import BigLogo from "../images/albion-decorators-logo.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBuilding, faChurch } from "@fortawesome/free-solid-svg-icons"

export const data = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    bigLogo: imageSharp(id: { eq: "e9e4722e-43b0-5e26-a7f6-f54d983123eb" }) {
      fluid(maxWidth: 534) {
        ...GatsbyImageSharpFluid
      }
      id
    }
    hero: imageSharp(id: { eq: "70ec0b1e-5c14-5c20-8b42-0bcbaaceae75" }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
      id
    }
    dulux: imageSharp(id: { eq: "eafc79b9-a051-56f4-9caa-544dd17642b9" }) {
      fluid(maxWidth: 505) {
        ...GatsbyImageSharpFluid
      }
    }
    site {
      siteMetadata {
        tel1
      }
    }
  }
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className="hero is-fullheight-with-navbar"
        fluid={data.hero.fluid}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <div className="columns">
                  <div className="column has-text-centered">
                    <div className="hero-logo">
                      {/* <Img
                        fluid={data.bigLogo.fluid}
                        alt="Albion Decorators Logo"
                      /> */}
                      <img src={BigLogo} alt="Albion Decorators Logo" />
                    </div>
                    <div className="intro">
                      <h4 className="title is-size-5-mobile is-4">
                        {data.site.siteMetadata.description}
                      </h4>
                    </div>
                    <div className="buttons is-centered is-hidden-tablet">
                      <Link
                        className="button is-primary is-fullwidth"
                        to="/contact"
                      >
                        Email
                      </Link>
                      <a
                        className="button is-primary is-fullwidth"
                        href={`tel:${data.site.siteMetadata.tel1}`}
                      >
                        Call
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      className="button is-primary is-hidden-mobile"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <section id="about" className="section about">
        <div className="container">
          <div className="about-info">
            <h1 className="title is-size-2-mobile is-1 has-text-centered-desktop">
              Albion Painters &amp; Decorators
            </h1>
            <h4 className="title is-4 has-text-centered-desktop">
              Covering the East of England, the experienced Albion Decorators
              team is Dulux Select accredited, endorsed by the Government’s
              Trusted Trade Mark, certified to carry out specialist Repair Care
              restoration work and fully DBS checked.
            </h4>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="expertise">
                <FontAwesomeIcon icon={faHome} />
                <h2 className="title is-size-4-mobile is-3">Domestic</h2>
              </div>
              <p>
                We are fortunate enough to have a long history of happy and
                satisfied customers that has resulted in the majority of our
                domestic work to have come through personal referrals and
                recommendations. We pride ourselves on our personal and
                professional approach to ensure that your work is completed to
                the highest standards with minimal disruption to your daily life
                - using a Mirka sanding system to keep your house dust-free. We
                work with a number of local trades and would be happy to provide
                recommendations for kitchen, bathroom, carpet, electrical and
                plumbing services.
              </p>
            </div>
            <div className="column is-one-third">
              <div className="expertise">
                <FontAwesomeIcon icon={faBuilding} />
                <h2 className="title is-size-4-mobile is-3">Commercial</h2>
              </div>
              <p>
                From office refurbishments to new commercial fit outs as well as
                retail, education and and health sector projects, we cover all
                aspects of commercial decoration. For large scale projects we
                can dramatically cut project time and reduce the impact on your
                business while keeping the overall finish to an exceptional
                standard through using specialist spraying techniques. We work
                with a large number of local building contractors and project
                consultants and would be happy to provide recommendations for
                these services.
              </p>
            </div>
            <div className="column is-one-third">
              <div className="expertise">
                <FontAwesomeIcon icon={faChurch} />
                <h2 className="title is-size-4-mobile is-3">Restoration</h2>
              </div>
              <p>
                Using the industry recognised Repair Care system, the Albion
                Decorators team has successfully completed a number of high
                profile restoration projects that include some the University of
                Cambridge colleges, The Fitzwilliam Museum, Grade II listed
                buildings as well as smaller scale domestic projects requiring
                improvements for wooden windows, porches and doors as well as
                sash window repairs and general decoration. We work with a
                number of local sash window and stain glass specialist companies
                and would be happy to provide recommendations for these
                services.
              </p>
            </div>
          </div>
          <div className="columns accreditation is-vcentered">
            <div className="column is-one-third">
              <Img
                className="dulux"
                fluid={data.dulux.fluid}
                alt="Dulux Select Decorators Logo"
              />
            </div>
            <div className="column is-one-third">
              <img src={RepairCare} alt="Repair Care Logo" />
            </div>
            <div className="column is-one-third">
              <img src={TrustMark} alt="Trustmark Logo" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
