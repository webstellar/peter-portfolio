import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Head/seo"

const IndexPage = () => (
  <Layout>
    <div>I think it's working now!</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
