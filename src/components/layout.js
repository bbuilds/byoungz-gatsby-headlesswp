import React from "react"
// import { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Breadcrumbs from "./Breadcrumbs"
import ScrollToTopLink from "./ScrollToTopLink"
import "@fontsource/noto-sans"
import "@fontsource/grenze/400.css"
import "@fontsource/grenze/700.css"

const Layout = ({ children, showBreadcrumbs, postSEO }) => {
  return (
    <div className="global-wrapper bg-black text-white" id="top-of-site">
      <Header />
      {showBreadcrumbs && <Breadcrumbs postSEO={postSEO} />}

      <main>{children}</main>

      <Footer />
      <ScrollToTopLink />
    </div>
  )
}

export default Layout
