import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import PostList from "../../components/PostList"
import Banner from "../../components/Banner"
import Seo from "../../components/seo"

function TagTemplate({ data }) {
  //formated for postlist component - similar to usePosts hook
  const posts = data.allWpPost.nodes.map(post => ({
    title: post.title,
    slug: post.slug,
    date: post.date,
    image: post.featuredImage.node.localFile,
    altText: post.featuredImage.node.altText,
    excerpt: post.excerpt,
    categories: post.categories.nodes,
    tags: post.tags.nodes,
  }))

  return (
    <Layout>
      <Seo post={data.wpTag} />
      <article>
        <Banner title={`Posts Tagged: ${data.wpTag.name}`} />
        <section>
          <div className="container mx-auto py-20 px-10">
            <PostList posts={posts} isFiltering={false} />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date(formatString: "LL")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 475, placeholder: BLURRED)
              }
            }
            altText
          }
        }
        title
        slug
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            slug
          }
        }
        excerpt
      }
    }
    wpTag(slug: { eq: $slug }) {
      name
      seo {
        metaDesc
        title
        schema {
          raw
        }
      }
    }
  }
`

export default TagTemplate
