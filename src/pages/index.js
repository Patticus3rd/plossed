import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Banner from "../components/banner"
import AtoaBlurb from "../components/atoaBlurb"
import Footer from "../components/footer"
//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AtoaBlurb />
    <Footer />
  </div>
)

export default IndexPage
