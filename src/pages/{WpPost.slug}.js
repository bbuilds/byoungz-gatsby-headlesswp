import React from "react"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import ShareButtons from "../components/ShareButtons"
import Seo from "../components/seo"

const PostTemplate = ({ data, location }) => {
  const post = data.wpPost
  const featredImage = getImage(post.featuredImage.node.localFile)
  const categoriesLength = post.categories.nodes.length

  return (
    <Layout showBreadcrumbs={true} postSEO={post.seo}>
      <Seo post={post} />
      <article className="article bg-dark-blue w-full mx-auto lg:w-3/5 rounded overflow-hidden pb-10 my-10 lg:my-20">
        <GatsbyImage image={featredImage} alt={post.title} />
        <header className="px-4 py-8">
          {post.categories.nodes && (
            <div className="py-1">
              {post.categories.nodes?.map((category, i) => {
                return (
                  <Link
                    key={category.name}
                    className="text-sm text-primary"
                    to={`/category/${category.slug}`}
                  >
                    {category.name}
                    {categoriesLength.length !== i + 1 ? <span>, </span> : ""}
                  </Link>
                )
              })}
            </div>
          )}
          <h1 className="entry-title md:text-6xl mb-2">{post.title}</h1>

          {post.travelJournal.location && (
            <span className="byline text-lg">{`Roaming ${post.travelJournal.location} on `}</span>
          )}
          <time className="text-sm" dateTime={post.dateGmt}>
            {post.date}
          </time>
          <hr className="dashed border-t-3 border-dashed border-white mt-4 w-24 mx-0" />
        </header>
        <div className="entry-content p-4">{parse(`${post.content}`)}</div>
        <footer className="mt-8">
          <div className="border-t border-b border-grey-darker p-4 text-base flex items-center justify-between flex-wrap">
            <div className="mr-auto">
              Tags:{" "}
              {post.tags.nodes?.map((tag, i) => {
                if (tag.name !== "Personal") {
                  return (
                    <Link key={tag.name} to={`/tags/${tag.slug}`}>
                      {tag.name}
                      {categoriesLength.length !== i + 1 && <span>, </span>}
                    </Link>
                  )
                }
                return null
              })}
            </div>
            <div className="ml-auto">
              <ShareButtons
                url={location.href}
                title={post.title}
                twitterHandle={`byoungz`}
                tags={post.tags.nodes}
              />
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      tags {
        nodes {
          slug
          name
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
      content
      date(formatString: "LL")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
              fluid {
                src
              }
            }
          }
        }
      }
      travelJournal {
        location
      }
      dateGmt
      excerpt
      seo {
        breadcrumbs {
          text
          url
        }
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

export default PostTemplate
