import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AtoaBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="atoa-blurb">
        <div className="inner-blurb">
          <div className="content">
            <h3>ATOA</h3>
            <p>
              Responsive web design project fighting the stigma around mental
              health in the Polynesian community. Using Card Sorting, Tree
              Tests, Click Tests, this app was created with users goals in mind.
              The app was made responsive in order to reach a wider audience.{" "}
            </p>
          </div>
          <div className="gallery">
            <div className="column">
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default AtoaBlurb
