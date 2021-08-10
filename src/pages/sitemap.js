import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const Contact = ({ data }) => {
  const posts = data.allWpContentNode.nodes
  return (
    <Layout>
      <section className="sitemap">
        <div className="contact-form w-full px-8 max-w-lg mx-auto pt-10 pb-20 bg-dark-blue my-20 rounded">
          <h1>Sitemap</h1>
          <ul className="flex flex-wrap">
            {posts &&
              posts.map(post => {
                return (
                  <li key={post.title} className="w-1/2 md:w-1/3 p-2">
                    <Link to={post.uri}>{post.title}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpContentNode(filter: { nodeType: { in: ["Post", "Page"] } }) {
      nodes {
        ... on WpPost {
          uri
          title
        }
        ... on WpPage {
          uri
          title
        }
      }
    }
  }
`

export default Contact
