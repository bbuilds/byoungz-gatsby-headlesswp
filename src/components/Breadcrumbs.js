import React from "react"
import { Link } from "gatsby"
import RightIcon from "../assets/images/svg/right-chevron.svg"

const Breadcrumbs = ({ postSEO }) => {
  return (
    <section id="breadcrumbs" className="hidden md:block">
      <nav className="text-black font-bold my-1" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 leading-tight">
          <ol className="list-none p-0 inline-flex">
            {postSEO.breadcrumbs &&
              postSEO.breadcrumbs.map((crumb, index) => {
                return (
                  <li
                    key={crumb.url}
                    className="flex items-center text-grey-light text-xs"
                  >
                    <Link to={crumb.url}>{crumb.text}</Link>
                    {index + 1 !== postSEO.breadcrumbs.length ? (
                      <RightIcon className="fill-current w-3 h-3 mx-3" />
                    ) : (
                      ""
                    )}
                  </li>
                )
              })}
          </ol>
        </div>
      </nav>
    </section>
  )
}

export default Breadcrumbs
