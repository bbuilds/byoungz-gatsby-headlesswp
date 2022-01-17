import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "@components/SectionHeader"

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
  const [allPosts] = useState(posts)

  return (
    <section className="home-recent pb-12">
      <div className="container mx-auto py-20 px-10">
        <SectionHeader
          title={data.wpPage.homePageTemplate.homeRecentBlogTitle}
        />
        <PostList posts={allPosts} showAmount={3} />
      </div>
    </section>
  )
}

export default RecentPosts
