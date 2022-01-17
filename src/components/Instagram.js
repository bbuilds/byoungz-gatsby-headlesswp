import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionHeader from "@components/SectionHeader"
import InstagramIcon from "@images/svg/instagram.svg"
import socialData from "../constants/social.json"
import useInstagram from "@hooks/useInstagram"
import InstaCard from "@components/InstaCard"

const query = graphql`
  {
    wpPage(databaseId: { eq: 112 }) {
      homePageTemplate {
        homeIgTitle
      }
    }
  }
`

const InstagramFeed = () => {
  const data = useStaticQuery(query)
  const instaPhotos = useInstagram()

  return (
    <section className="section-instagram pb-12">
      <div className="container mx-auto mb-10 px-10">
        <div className="flex flex-wrap items-center lg:justify-between">
          <SectionHeader title={data.wpPage.homePageTemplate.homeIgTitle} />
          <a
            className="flex items-center uppercase md:text-3xl mr-4 md:mr-8 text-primary "
            href={socialData.instagramURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">@BYOUNGZ</span>
            <InstagramIcon className="h-4 w-auto lg:h-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        {instaPhotos.map((photo, index) => {
          return <InstaCard photo={photo} index={index} key={index} />
        })}
      </div>
      <div className="text-center my-8">
        <a
          className="decor-link text-white relative animated hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
          href={socialData.instagramURL}
        >
          View Instagram
        </a>
      </div>
    </section>
  )
}

export default InstagramFeed
