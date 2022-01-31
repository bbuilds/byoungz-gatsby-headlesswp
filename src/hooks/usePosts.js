import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          date(formatString: "LL")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 470, placeholder: BLURRED)
                }
              }
              altText
            }
          }
          title
          slug
          categories {
            nodes {
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
    }
  `)

  return data.allWpPost.nodes.map(post => ({
    title: post?.title,
    slug: post?.slug,
    date: post?.date,
    image: post?.featuredImage.node.localFile,
    altText: post?.featuredImage.node.altText,
    excerpt: post?.excerpt,
    categories: post?.categories.nodes,
    tags: post?.tags.nodes,
  }))
}

export default usePosts
