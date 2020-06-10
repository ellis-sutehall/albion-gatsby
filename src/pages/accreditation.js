import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import RepairCare from "../images/accreditation/repair-care-accreditation.svg"
import TrustMark from "../images/accreditation/trustmark-logo-accreditation.svg"
import Disclosure from "../images/accreditation/disclosure-scotland-logo.svg"
import DuluxPdf from "../pdf/dulux-select-decorators-accreditation.pdf"
import RepairPdf from "../pdf/dulux-select-decorators-accreditation.pdf"
import DisclosurePdf from "../pdf/dulux-select-decorators-accreditation.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

export const data = graphql`
  query {
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
  }
`

const Accreditation = ({ data }) => {
  return (
    <Layout>
      <SEO title="Accreditation" />
      <section className="section accreditation">
        <div className="container">
          <h1 className="title is-1 is-size-2-mobile">Accreditation</h1>
          <h4 className="title is-5 is-size-6-mobile">
            This page list our professional accreditation certificates and logos
            for the accreditating bodies.
          </h4>
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="columns is-vcentered">
                <div className="column is-one-third">
                  <Img
                    className="dulux"
                    fluid={data.file.childImageSharp.fluid}
                    alt="Dulux Select Decorators Logo"
                  />
                </div>
                <div className="column is-two-third">
                  <div className="pdf">
                    <FontAwesomeIcon icon={faFilePdf} />
                    <p>
                      <a href={DuluxPdf} target="_blank" rel="noreferrer">
                        Download
                      </a>{" "}
                      the Dulux Select Decorators accreditation certificate
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-one-third">
                  <img src={TrustMark} alt="Trustmark Logo" />
                </div>
                <div className="column is-two-thirds">
                  <p>Certificate coming soon</p>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-one-third">
                  <img src={RepairCare} alt="Repair Care Logo" />
                </div>
                <div className="column is-half">
                  <div className="pdf">
                    <FontAwesomeIcon icon={faFilePdf} />
                    <p>
                      <a href={RepairPdf} target="_blank" rel="noreferrer">
                        Download
                      </a>{" "}
                      the Repair Care accreditation certificate
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-one-thirds">
                  <img src={Disclosure} alt="Disclosure Scotland Logo" />
                </div>
                <div className="column is-two-thirds">
                  <div className="pdf">
                    <FontAwesomeIcon icon={faFilePdf} />
                    <p>
                      <a href={DisclosurePdf} target="_blank" rel="noreferrer">
                        Download
                      </a>{" "}
                      the Disclosure Scotland accreditation certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Accreditation
