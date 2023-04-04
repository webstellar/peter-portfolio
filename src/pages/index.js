import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Head/Seo"
import Intro from "../components/Intro/Intro"
import About from "../components/About/About"
import Resume from "../components/Resume/Resume"

const IndexPage = () => (
  <Layout>
    <Intro />
    <About />
    <Resume />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
