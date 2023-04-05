import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Head/Seo"
import Intro from "../components/Intro/Intro"
import About from "../components/About/About"
import Resume from "../components/Resume/Resume"
import Certification from "../components/Certifications/Certification"
import Tool from "../components/Tool/Tool"
import Skill from "../components/Skill/Skill"
import ContactForm from "../components/ContactForm/ContactForm"
import Portfolio from "../components/Portfolio/Portfolio"

const IndexPage = () => (
  <Layout>
    <Intro />
    <About />
    <Resume />
    <Certification />
    <Tool />
    <Skill />
    <Portfolio />
    <ContactForm />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
