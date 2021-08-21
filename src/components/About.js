import React from "react"
import parse from "html-react-parser"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LogoText from "../assets/images/svg/logo-text.svg"
const query = graphql`
  {
    wpPage(databaseId: { eq: 112 }) {
      id
      homePageTemplate {
        homeAboutContent
        homeAboutImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

function About() {
  const data = useStaticQuery(query)
  const content = data.wpPage.homePageTemplate.homeAboutContent
  const aboutImage = getImage(
    data.wpPage.homePageTemplate.homeAboutImage.localFile
  )
  return (
    <section className="byoungz-meet relative py-12 md:py-20">
      <h2 className="sr-only">BYOUNGZ About Section</h2>
      <div className="flex flex-wrap md:items-center max-w-3xl mx-auto">
        <div className="w-full md:w-1/2 px-8" data-aos="fade-right">
          <hr className="dashed border-t-3 border-dashed border-white mb-4 w-24 mx-0" />
          <div className="entry-content">
            <h2 className="flex flex-col uppercase md:text-2xl mb-4 md:mb-8">
              WHO IS
            </h2>
            <LogoText className="w-72 alignleft" />
            {parse(`${content}`)}
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end p-8 md:p-0"
          data-aos="fade-left"
        >
          <GatsbyImage
            image={aboutImage}
            imgClassName="mt-2 byoungz-meet__cutout w-auto rounded-xl"
            alt={"Byoungz Digital Nomad Headshot"}
          />
        </div>
      </div>
    </section>
  )
}

export default About
