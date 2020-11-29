import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Video from "../components/video"
import ScrollOut from "scroll-out"

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
    hero: file(relativePath: { eq: "albion-decorators-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file(
      relativePath: {
        eq: "accreditation/dulux-select-decorators-accreditation.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 303) {
          ...GatsbyImageSharpFluid
        }
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
  useEffect(() => {
    ScrollOut({
      once: true,
    })
    return () => {
      ScrollOut().teardown()
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className="hero is-fullheight-with-navbar"
        fluid={data.hero.childImageSharp.fluid}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <div className="columns">
                  <div className="column has-text-centered">
                    <div className="hero-logo" data-scroll>
                      <img src={BigLogo} alt="Albion Decorators Logo" />
                    </div>
                    <div className="intro" data-scroll>
                      <h4 className="title is-size-5-mobile is-4">
                        {data.site.siteMetadata.description}
                      </h4>
                    </div>
                    <div
                      className="buttons is-centered is-hidden-tablet"
                      data-scroll
                    >
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
                      className="button contact-btn is-primary is-hidden-mobile"
                      data-scroll
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
          
          
          <div className="columns is-centered video">
            <div className="column is-two-thirds">
              <Video
                videoSrcURL="https://drive.google.com/file/d/100322lSQEnrCM6VGRcN1pLhToQp0Mn1J/preview"
                videoTitle="About Albion"
              />
            </div>
          </div>

          <div className="columns">
            <div className="column is-one-third" data-scroll>
              <div className="expertise">
                <FontAwesomeIcon icon={faHome} />
                <h2 className="title is-size-4-mobile is-3">Domestic</h2>
              </div>
              <p>
                We are delighted that 95% of our domestic work is through
                referrals and recommendations. We pride ourselves on our
                personal and professional approach to ensure that your work is
                completed to the highest standards with minimal disruption to
                your daily life. We work with a number of local trades and would
                be happy to provide recommendations for kitchen, bathroom,
                carpet, electrical, plastering and plumbing services.
              </p>
            </div>
            <div className="column is-one-third" data-scroll>
              <div className="expertise">
                <FontAwesomeIcon icon={faBuilding} />
                <h2 className="title is-size-4-mobile is-3">Commercial</h2>
              </div>
              <p>
                With over 20 years experience in completing renovations, office
                refurbishments and full commercial fit outs in retail,
                education, hospitality, high volume student accommodation,
                leisure and health sector projects, as well as specialist
                restoration services, the Albion team covers all aspects of
                commercial decoration.
              </p>
              <p>&nbsp;</p>
              <p>
                For large scale projects we can dramatically cut project time
                and reduce the impact on your business while keeping the overall
                finish to an exceptional standard through using specialist
                spraying techniques. We work with a large number of local
                building contractors and project consultants and would be happy
                to provide recommendations for these services.
              </p>
            </div>
            <div className="column is-one-third" data-scroll>
              <div className="expertise">
                <FontAwesomeIcon icon={faChurch} />
                <h2 className="title is-size-4-mobile is-3">Restoration</h2>
              </div>
              <p>
                Fully trained in the industry recognised Repair Care
                International system, the Albion Decorators team has
                successfully completed a number of high profile restoration
                projects that include University of Cambridge colleges, The
                Fitzwilliam Museum, Grade II listed buildings as well as smaller
                scale domestic projects requiring improvements for wooden
                windows, porches and doors as well as sash window repairs and
                general decoration. We work with a number of local sash window
                and stain glass specialist companies and would be happy to
                provide recommendations for these services.
              </p>
            </div>
          </div>
          <div className="columns accreditation is-vcentered">
            <div className="column is-one-third" data-scroll>
              <Img
                className="dulux"
                fluid={data.file.childImageSharp.fluid}
                alt="Dulux Select Decorators Logo"
              />
            </div>
            <div className="column is-one-third" data-scroll>
              <img src={RepairCare} alt="Repair Care Logo" />
            </div>
            <div className="column is-one-third" data-scroll>
              <img src={TrustMark} alt="Trustmark Logo" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
