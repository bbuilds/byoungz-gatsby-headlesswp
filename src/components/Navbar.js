import React from "react"
import PageLinks from "../constants/links"
import FacebookIcon from "../assets/images/svg/facebook.svg"
import InstagramIcon from "../assets/images/svg/instagram.svg"
import socialData from "../constants/social.json"

const Navbar = ({ isOpen }) => {
  return (
    <nav
      id="main-nav"
      className={`z-800 nav-primary animated overflow-auto absolute bg-black p-3 w-full md:opacity-100 md:relative md:visible md:p-0 md:overflow-hidden md:h-full lg:ml-auto ${
        isOpen ? "nav-is-open" : ""
      }`}
    >
      <PageLinks></PageLinks>
      <div className="md:hidden md:invisible">
        <hr className="dashes border-t-3 border-dashed border-grey-darker my-8" />
        <span className="font-grenze text-center block mb-8 text-4xl text-white">
          Anti Social Club
        </span>
        <div className="flex justify-center">
          <a
            className="text-primary"
            href={socialData.facebookURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              className={"icon-fb fill-current max-w-40 mr-4 h-auto"}
            />
          </a>
          <a
            className="text-primary"
            href={socialData.instagramURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={"icon-ig max-w-40 fill-primary ml-4"} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
