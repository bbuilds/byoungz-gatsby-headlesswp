import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import FeaturedPosts from "../components/FeaturedPosts"
import About from "../components/About"
import RecentPosts from "../components/RecentPosts"
import InstagramFeed from "../components/Instagram"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo post={data.wpPage} />
      <FeaturedPosts />
      <About />
      <RecentPosts />
      <InstagramFeed />
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 112 }) {
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        canonical
        schema {
          raw
        }
      }
    }
  }
`

export default IndexPage
