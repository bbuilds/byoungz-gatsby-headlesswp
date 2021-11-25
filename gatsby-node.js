const fetch = require("node-fetch")
const crypto = require(`crypto`)
const { createRemoteFileNode } = require("gatsby-source-filesystem")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
      type ByoungzInstaNode implements Node {
        thumbnail: File @link(from: "fields.localFile")
      }

      type Thumbnail {
        thumbnailImgUrl: String
      }
    `)
}

//https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  store,
  cache,
  createNodeId,
}) => {
  // For all Byoungz Insta Nodes
  if (node.internal.type === "ByoungzInstaNode") {
    let fileNode = await createRemoteFileNode({
      url: node.mediaURL, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  //https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/#fields
  const fields = `timestamp,caption,media_url,media_type,permalink`

  // Download data from a remote API.
  const igResponse = await fetch(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=${process.env.IG_ACCESS_TOKEN}`
  )

  const { data } = await igResponse.json()

  if (data) {
    data.forEach(post =>
      createNode({
        id: `${post.id}`,
        parent: null,
        children: [],
        internal: {
          type: `ByoungzInstaNode`,
          mediaType: post.media_type,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(post))
            .digest(`hex`),
        },
        caption: post.caption,
        permalink: post.permalink,
        timestamp: post.timestamp,
        mediaURL: post.media_url,
      })
    )
  }

  return
}
