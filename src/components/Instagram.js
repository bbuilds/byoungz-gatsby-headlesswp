import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import InstagramIcon from "../assets/images/svg/instagram.svg"
import socialData from "../constants/social.json"

import useInstagram from "../hooks/useInstagram"

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
          <header data-aos="zoom-out-right">
            <hr className="dashed border-t-3 border-dashed border-white mb-2 w-24 mx-0" />
            <h2 className="uppercase md:text-5xl mb-8 lg:mb-0">
              {data.wpPage.homePageTemplate.homeIgTitle}
            </h2>
          </header>
          <a
            className="flex items-center uppercase md:text-3xl mr-4 md:mr-8 text-primary "
            href={socialData.instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-out-left"
          >
            <span className="mr-2">@BYOUNGZ</span>
            <InstagramIcon className="h-4 w-auto lg:h-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        {instaPhotos.map((photo, index) => (
          <a
            href={`${photo.permalink}`}
            className="block m-1"
            target="_blank"
            rel="noopener noreferrer"
            key={photo.id}
            data-aos="fade-right"
            data-aos-delay={`${index}00`}
          >
            <GatsbyImage image={photo.image} alt={photo.caption} />
          </a>
        ))}
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
