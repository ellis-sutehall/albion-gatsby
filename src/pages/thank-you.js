import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank you for your message" />
    <section className="section">
      <div className="container">
        <h1 className="title is-1 is-size-2-mobile">Thank you</h1>
        <p>
          Thank you for your message, someone will get back to you as soon as
          possible.
        </p>
        <Link className="button is-primary" to="/">
          Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default ThankYou
