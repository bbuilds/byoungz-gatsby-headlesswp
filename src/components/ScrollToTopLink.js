import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ScrollTopIcon from "../assets/images/svg/scroll-top.svg"

const ScrollToTopLink = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let mounted = true
    if (typeof window !== `undefined`) {
      const toggleVisibility = () => {
        if (mounted) {
          if (window.pageYOffset > 300) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        }
      }
      window.addEventListener("scroll", toggleVisibility)
    }
    return () => (mounted = false)
  }, [])

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
