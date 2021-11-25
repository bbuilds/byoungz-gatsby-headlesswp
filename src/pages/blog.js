import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import Banner from "../components/Banner"
import SearchIcon from "../assets/images/svg/search.svg"
import usePosts from "../hooks/usePosts"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const posts = usePosts()

  const allCategories = data.allWpCategory.nodes

  const [allData] = useState(posts)
  const [filteredData, setFilteredData] = useState(allData)

  const [subtitle, setSubtitle] = useState("")

  const handleFiltering = (event, filterType) => {
    let value
    let result = []
    let filteredTitle = subtitle

    if (filterType === "search") {
      value = event.target.value.toLowerCase()
      filteredTitle = value
    }

    if (filterType === "select") {
      value = event.target.value
      filteredTitle = event.target.options[event.target.selectedIndex].text
    }

    result = allData.filter(data => {
      if (filterType === "search") {
        let title = data.title.toLowerCase()
        return title.search(value) !== -1
      }
      if (filterType === "select") {
        const postCategories = data.categories
        return postCategories.some(cat => cat.slug === value)
      }
      return null
    })

    if (!result || result.length === 0) {
      result = [...allData]
    }

    setFilteredData(result)
    setSubtitle(filteredTitle)
  }

  useEffect(() => {
    setSubtitle(subtitle)
  }, [subtitle])

  return (
    <Layout>
      <Seo post={data.wpPage} />
      <Banner title={`Latest Blog Posts`} subtitle={subtitle} />
      <div className="container mx-auto px-4 lg:px-10 pb-20 pt-10 relative">
        <div className="filter-posts mb-10">
          <label
            htmlFor="search-input"
            className="block mb-4 text-xl lg:mb-8 font-grenze lg:text-3xl"
          >
            Search Byoungz Posts or Filter
          </label>
          <div className="flex flex-wrap md:items-center">
            <div className="input-search flex-grow search-form flex items-center p-2 mb-6 text-base leading-normal bg-white text-grey-darker border border-grey rounded md:w-2/5 md:mr-2 md:mb-0">
              <SearchIcon className="stroke-current" />
              <input
                id="search-input"
                type="search"
                name="search-input"
                placeholder={`Search Byoungz`}
                className="search p-2 flex-grow bg-white"
                onChange={event => {
                  handleFiltering(event, "search")
                }}
              />
            </div>
            <div className="w-full mb-6 md:w-1/4 md:mr-2 md:mb-0">
              <select
                id="category-select"
                className="bg-primary rounded text-black w-full p-1"
                onChange={event => {
                  handleFiltering(event, "select")
                }}
              >
                <option key={`all`} value={`all`}>
                  All Categories
                </option>
                {allCategories.map(category => {
                  return (
                    <option
                      key={`${category.slug}`}
                      name=""
                      value={`${category.slug}`}
                    >
                      {category.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <PostList posts={filteredData} showAmount={9} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allWpCategory(sort: { order: ASC, fields: name }) {
      nodes {
        slug
        name
      }
    }
    wpPage(databaseId: { eq: 2989 }) {
      seo {
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

export default Blog
