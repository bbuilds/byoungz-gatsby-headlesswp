import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const query = graphql`
  {
    wpPage(databaseId: { eq: 112 }) {
      homePageTemplate {
        homeFeaturedPost {
          ... on WpPost {
            title
            categories {
              nodes {
                name
              }
            }
            id
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
            date(formatString: "LL")
            slug
          }
        }
        homeSecondaryPosts {
          ... on WpPost {
            categories {
              nodes {
                name
              }
            }
            title
            slug
            date(formatString: "LL")
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 575, layout: FULL_WIDTH)
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  }
`

const FeaturedPosts = () => {
  const data = useStaticQuery(query)
  const featuredPost = data.wpPage.homePageTemplate.homeFeaturedPost
  const featuredPostImage = getImage(featuredPost.featuredImage.node.localFile)
  const seondaryFeaturedPosts = data.wpPage.homePageTemplate.homeSecondaryPosts

  return (
    <section className="home-featured flex flex-wrap">
      <h2 className="sr-only">Featured Posts Section</h2>
      <div className="featured__primary flex-grow w-full">
        <article className="featured__post featured__post--primary relative h-full overflow-hidden">
          <Link
            to={`/${featuredPost.slug}`}
            className="featured__post-link w-full h-full flex flex-col justify-end text-white"
          >
            <GatsbyImage
              image={featuredPostImage}
              imgClassName="animated absolute w-full h-full scale-0 featured__img"
              alt={featuredPost.title}
              className="absolute w-full h-full"
              loading="eager"
            />
            <div className="featured__post-txt post-styles w-full flex flex-col z-300 p-4">
              <div className="featured__post-cat-outer">
                {featuredPost.categories.nodes.map(category => {
                  if (category.name !== "Personal") {
                    return (
                      <span
                        key={category.name}
                        className="featured__post-cat text-sm md:text-xl text-primary"
                      >
                        {category.name}
                      </span>
                    )
                  }
                  return null
                })}
                <span className="text-white text-sm md:text-xl">
                  | {featuredPost.date}
                </span>
                <h2 className="featured__post-title text-2xl md:text-5xl md:mt-2">
                  {featuredPost.title}
                </h2>
              </div>

              <div className="animated absolute bottom-0 right-0 bg bg-primary py-2 px-4 z-300 rounded-tl-lg text-dark-blue opacity-0 featured__marker">
                <span className="font-bold text-3xl">&gt;</span>
              </div>
            </div>
          </Link>
        </article>
      </div>
      <div className="featured__secondary hidden md:flex md:flex-col">
        {seondaryFeaturedPosts.map(post => {
          const secondaryFeaturedPostImage = getImage(
            post.featuredImage.node.localFile
          )
          return (
            <article
              key={post.id}
              className="featured__post featured__post--secondary relative h-full overflow-hidden w-full"
            >
              <Link
                to={`/${post.slug}`}
                className="featured__post-link w-full h-full flex flex-col justify-end text-white"
              >
                <GatsbyImage
                  image={secondaryFeaturedPostImage}
                  imgClassName="animated absolute w-full h-full scale-0 featured__img"
                  alt={featuredPost.title}
                  className="absolute w-full h-full"
                  loading="eager"
                />
                <div className="featured__post-txt post-styles w-full flex flex-col z-300 p-4">
                  <div className="featured__post-cat-outer">
                    {post.categories.nodes.map(category => {
                      if (category.name !== "Personal") {
                        return (
                          <span
                            key={category.name}
                            className="featured__post-cat text-sm md:text-xl text-primary"
                          >
                            {category.name}
                          </span>
                        )
                      }
                      return null
                    })}
                    <span className="text-white text-sm md:text-xl">
                      {" "}
                      | {post.date}
                    </span>
                    <h2 className="featured__post-title leading-none  md:text-3xl md:mt-2 text-white">
                      {post.title}
                    </h2>
                  </div>
                  <div className="animated absolute bottom-0 right-0 bg bg-primary py-2 px-4 z-300 rounded-tl-lg text-dark-blue opacity-0 featured__marker">
                    <span className="font-bold text-3xl">&gt;</span>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedPosts
