import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
  const post = data.wpPage

  return (
    <Layout>
      <Seo post={post} />
      <article className="w-full px-8 max-w-lg mx-auto pt-10 pb-20 bg-dark-blue my-20 rounded">
        <header>
          <h1 className="mb-6">{post.title}</h1>
        </header>
        <div className="entry-content p-4">{parse(`${post.content}`)}</div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 2961 }) {
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
      title
      content
    }
  }
`

export default Contact
