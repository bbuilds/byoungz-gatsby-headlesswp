import React, { useState, useEffect } from "react"
import { getImage } from "gatsby-plugin-image"
import Card from "./Card"
const PostList = props => {
  const displayAmount = props.showAmount || 9

  //Create a new list from all props.posts
  const [list, setList] = useState([...props.posts.slice(0, displayAmount)])

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(props.posts.length > displayAmount)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < props.posts.length
      const nextResults = isMore
        ? props.posts.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, props.posts]) //eslint-disable-line

  useEffect(() => {
    const isMore = list.length < props.posts.length
    setHasMore(isMore)
  }, [list, props.posts])

  useEffect(() => {
    setList([...props.posts.slice(0, displayAmount)])
  }, [props.posts, displayAmount])

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <ul className="recent-props.posts list list-reset grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
          {list?.map((post, index) => {
            const featuredImage = getImage(post.image)

            return (
              <li key={post.title} className="blog-post">
                <Card
                  slug={post.slug}
                  featuredImage={featuredImage}
                  date={post.date}
                  title={post.title}
                  excerpt={post.excerpt}
                  altText={post.altText}
                  categories={post.categories}
                  tags={post.tags}
                  delay={`${index}00`}
                />
              </li>
            )
          })}
        </ul>
      </div>
      {hasMore ? (
        <div className="text-center my-8">
          <button
            className="decor-link text-white relative animated hover:text-primary"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      ) : (
        <p className="text-center">No more posts</p>
      )}
    </>
  )
}

export default PostList
