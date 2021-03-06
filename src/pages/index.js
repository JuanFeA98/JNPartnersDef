import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Content/>
  </Layout>
)

export default IndexPage