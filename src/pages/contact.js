import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faClipboard,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
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
    <Layout>
      <SEO
        title="Contact"
        description="Contact form and phone numbers for Albion Decorators"
      />
      <section className="section">
        <div className="container">
          <h1 className="title is-1 is-size-2-mobile">Contact Us</h1>
          <h6 className="title is-6 is-size-6-mobile">
            Send us an email via the contact form below or phoe us on either
            number
          </h6>
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="columns">
                <div className="column">
                  <div className="contact-form">
                    <div className="columns">
                      <div className="column is-half">
                        <div className="columns is-mobile">
                          <div className="column is-half">
                            <div className="mobile">
                              <FontAwesomeIcon icon={faMobileAlt} />
                              <p className="is-hidden-mobile">
                                {data.site.siteMetadata.tel1}
                              </p>
                              <p className="is-hidden-tablet">
                                <a href={`tel:${data.site.siteMetadata.tel1}`}>
                                  {data.site.siteMetadata.tel1}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="column is-half">
                            <div className="mobile">
                              <FontAwesomeIcon icon={faMobileAlt} />
                              <p className="is-hidden-mobile">
                                Tel: {data.site.siteMetadata.tel2}
                              </p>
                              <p className="is-hidden-tablet">
                                <a href={`tel:${data.site.siteMetadata.tel2}`}>
                                  {data.site.siteMetadata.tel2}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      name="contact"
                      method="POST"
                      action="/thank-you"
                      netlify
                      id="contact-form"
                    >
                      <div className="columns is-centered">
                        <div className="column is-half">
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                          />
                          <div className="field">
                            <p className="control has-icons-left has-icons-right">
                              <input
                                name="name"
                                className="input"
                                type="text"
                                placeholder="Name*"
                                required
                                id="name"
                              />
                              <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faUser} />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="column is-half">
                          <div className="field">
                            <p className="control has-icons-left has-icons-right">
                              <input
                                name="email"
                                className="input"
                                type="email"
                                placeholder="Email*"
                                id="email"
                                required
                              />
                              <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faEnvelope} />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column">
                          <div className="field">
                            <p className="control has-icons-left has-icons-right">
                              <input
                                name="subject"
                                type="text"
                                id="subject"
                                className="input"
                                placeholder="Subject*"
                                required
                              />
                              <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faClipboard} />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column">
                          <div className="field">
                            <textarea
                              name="message"
                              className="textarea"
                              placeholder="Your Message*"
                              id="message"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column">
                          <div className="field">
                            <div className="control">
                              <button
                                className="button is-primary"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Contact
