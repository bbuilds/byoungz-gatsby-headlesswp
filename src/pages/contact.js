import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
  return (
    <Layout>
      <Seo post={data.wpPage} />
      <section className="contact-page">
        <article className="contact-form w-full px-8 max-w-lg mx-auto pt-10 pb-20 bg-dark-blue my-20 rounded">
          <header>
            <h1 className="mb-6">Get in Touch</h1>
          </header>
          <div className="contact-section--left">
            <a
              href="https://www.facebook.com/byoungz4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            <a
              href="https://www.instagram.com/byoungz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>{" "}
            <a
              href="http://byoungz.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tumblr
            </a>
          </div>
          <form
            className="w-full max-w-lg"
            action={`${process.env.GATSBY_FORM_SPREE_URL}`}
            method="POST"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6"
                  htmlFor="your-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight text-grey-dark focus:outline-none focus:bg-white"
                  id="your-name"
                  name="your-name"
                  type="text"
                  placeholder="John Smith"
                />
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none text-grey-dark block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                />
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6"
                  htmlFor="your-message"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none text-grey-dark block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="your-message"
                  name="your-message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-primary hover:bg-dark-green animated focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 10 }) {
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

export default Contact
