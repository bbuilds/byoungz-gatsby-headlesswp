import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostList from "./PostList"
import usePosts from "../hooks/usePosts"
const query = graphql`
  {
    wpPage(databaseId: { eq: 112 }) {
      homePageTemplate {
        homeRecentBlogTitle
      }
    }
  }
`

function RecentPosts() {
  const data = useStaticQuery(query)
  const posts = usePosts()
  return (
    <section className="home-recent pb-12">
      <div className="container mx-auto py-20 px-10">
        <header data-aos="zoom-out-right">
          <hr className="dashed border-t-3 border-dashed border-white mb-4 w-24 mx-0" />
          <h2 className="uppercase md:text-5xl mb-8">
            {data.wpPage.homePageTemplate.homeRecentBlogTitle}
          </h2>
        </header>
        <PostList posts={posts} showAmount={3} isFiltering={false} />
      </div>
    </section>
  )
}

export default RecentPosts
