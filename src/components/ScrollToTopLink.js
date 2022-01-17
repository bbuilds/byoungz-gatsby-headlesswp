import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ScrollTopIcon from "../assets/images/svg/scroll-top.svg"

const ScrollToTopLink = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  const toggleVisibility = () => {
    if (isMounted) {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("scroll", toggleVisibility)
    }
    return () => {
      setIsMounted(false)
      window.removeEventListener("scroll", toggleVisibility)
    }
  })

  return (
    <>
      {isVisible && (
        <Link
          id="top-button"
          to="#top-of-site"
          className="fixed top-of-site-link z-300 animated"
        >
          <span className="sr-only">Back to Top</span>
          <ScrollTopIcon className="w-8 h-8 md:w-6 md:h-6" />
        </Link>
      )}
    </>
  )
}

export default ScrollToTopLink
