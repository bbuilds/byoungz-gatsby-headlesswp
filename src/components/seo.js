/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ post }) => {
  const { wp, site } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
          }
          seo {
            social {
              facebook {
                url
                defaultImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const postSEO = post.seo
  const lang = `en`
  const title =
    postSEO?.title ||
    post?.title ||
    site?.siteMetadata.title ||
    wp?.generalSettings?.title

  let fullSchema

  //Setting JSON
  if (postSEO?.schema.raw) {
    fullSchema = JSON.parse(postSEO?.schema.raw)
  }

  const robotsIndex =
    postSEO?.metaRobotsNoindex === "noindex" ? "noindex" : "index"
  const robotsFollow =
    postSEO?.metaRobotsNofollow === "nofollow" ? "nofollow" : "follow"

  const metaDescription =
    postSEO?.metaDesc ||
    post?.excerpt?.replace(/(<([^>]+)>)/gi, "").trim() ||
    wp?.generalSettings?.description ||
    site?.siteMetadata.description

  const keywords = postSEO?.metaKeywords || site.siteMetadata.keywords

  const ogImage =
    postSEO?.opengraphImage?.localFile?.childImageSharp?.fluid?.src ||
    post?.featuredImage?.node?.localFile?.childImageSharp?.fluid?.src ||
    site?.siteMetadata.image

  const image = new URL(ogImage, site.siteMetadata.siteUrl)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `robots`,
          content: `max-snippet:-1, max-image-preview:large, max-video-preview:-1, ${robotsIndex}, ${robotsFollow}`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
      ].filter(m => !!m.content)}
    >
      {fullSchema && (
        <script type="application/ld+json">
          {JSON.stringify({ ...fullSchema }, null, null)}
        </script>
      )}
    </Helmet>
  )
}

export default Seo
