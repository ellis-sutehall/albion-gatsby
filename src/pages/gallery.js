import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"
import Img from "gatsby-image"

const Gallery = () => {
  const images = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { order: ASC, fields: relativePath }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1344) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <Layout>
      <SEO
        title="Gallery"
        description="View some of our work using the gallery"
      />
      <section className="section">
        <div className="container">
          <div className="slick-gallery">
            <h1 className="title is-1 is-size-2-mobile">Gallery</h1>
            <h4 className="title is-5 is-size-6-mobile">
              View some examples of our previous work in the gallery below
            </h4>
            <div className="columns is-centered">
              <div className="column is-half">
                <Slider {...settings}>
                  {images.allFile.edges.map(({ node }, index) => (
                    <div className="gallery-wrapper" key={index}>
                      <Img
                        fluid={node.childImageSharp.fluid}
                        alt={`Albion Example Work ${index}`}
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
