import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allByoungzInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
        nodes {
          timestamp
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 250)
            }
          }
          id
          caption
          permalink
        }
      }
    }
  `)

  return data.allByoungzInstaNode.nodes.map(node => ({
    image: getImage(node.thumbnail),
    id: node.id,
    caption: node.caption,
    permalink: node.permalink,
  }))
}

export default useInstagram
