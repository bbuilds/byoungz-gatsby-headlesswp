import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import LogoHand from "../assets/images/svg/logo-hand.svg"
import LogoText from "../assets/images/svg/logo-text.svg"
import HamburgerIcon from "../assets/images/svg/hamburger.svg"
import CloseIcon from "../assets/images/svg/close.svg"

import Navbar from "./Navbar"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)

  const {
    wp: {
      generalSettings: { title },
    },
  } = data

  // state // click handler for opening menu
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      id="site-header"
      className="site-header flex flex-no-wrap items-center z-800 bg-black border-b border-grey-darker w-full"
    >
      <div className="logo md:h-full">
        <Link
          to="/"
          className="flex items-center flex-no-wrap flex-shrink-0 p-1 lg:pl-4 hover:border-grey-darkest"
        >
          <div className="sr-only">{parse(title)}</div>
          <LogoHand className="logo-hand w-6 h-auto mr-2 md:w-8" />
          <LogoText className="logo-text h-12 w-auto" />
        </Link>
      </div>
      <Navbar isOpen={isOpen} />
      <div
        id="mobile-action"
        className={`ml-auto mobile-action animated border-l flex items-center border-grey-darkest p-2 md:hidden bg-primary ${
          isOpen ? "nav-is-open" : ""
        }`}
      >
        <button
          id="mobile-nav-button"
          className="mobile-nav-button"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Toggle Navigation</span>
          <HamburgerIcon className="icon-burger fill-black animated" />
          <CloseIcon className="icon-close fill-black hidden animated" />
        </button>
      </div>
    </header>
  )
}

export default Header
