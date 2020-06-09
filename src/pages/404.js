import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <div className="container">
        <h1 className="title is-1 is-size-2-mobile">Not Found</h1>
        <p>You just found a page that doesn&#39;t exist.</p>
        <Link className="button is-primary" to="/">
          Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
