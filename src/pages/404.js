import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const NotFoundPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
