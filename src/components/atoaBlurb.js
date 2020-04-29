import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AtoaBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      landing: file(relativePath: { eq: "landing.png" }) {
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
            health in the Polynesian community. Using Card Sorting, Tree Tests,
            Click Tests, this app was created with users goals in mind. The app
            was made responsive in order to reach a wider audience.
          </p>
          <div className="btn-row">
            <Link to="/work">View Series</Link>
          </div>
        </div>
        <div className="images">
        <div className="landing">
          <Img fluid={data.landing.childImageSharp.fluid} />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default AtoaBlurb
