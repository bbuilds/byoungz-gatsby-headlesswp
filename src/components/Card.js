import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { Link } from "gatsby"

function Card({
  slug,
  featuredImage,
  date,
  title,
  excerpt,
  altText,
  categories,
  tags,
  delay,
}) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      className="thumbnail rounded overflow-hidden bg-dark-blue h-full relative"
    >
      <Link
        to={`/${slug}`}
        className="text-white block relative h-full border-2 border-transparent hover:border-primary"
      >
        <figure className="relative">
          <GatsbyImage image={featuredImage} alt={altText} />
          <span className="bg-primary rounded-tr text-dark-blue p-2 absolute left-0 bottom-0 text-sm">
            <strong>{date}</strong>
          </span>
        </figure>
        <div className="p-4 text-base">
          <h2>{title}</h2>
          {parse(excerpt, {
            replace: domNode => {
              if (domNode.name === "a") {
                return <></>
              }
            },
          })}
        </div>
        <div className="filter sr-only">
          {categories & (categories.length > 0) &&
            categories.map(category => {
              return (
                <span key={category.slug} className="category">
                  {category.slug}
                </span>
              )
            })}
          {tags & (tags.length > 0) &&
            tags.map(tag => {
              return (
                <span key={tag.slug} className="tag">
                  {tag.slug}
                </span>
              )
            })}
        </div>
      </Link>
    </article>
  )
}

export default Card
