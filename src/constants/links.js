import React from "react"
import { Link } from "gatsby"

import UFOIcon from "../assets/images/svg/ufo.svg"
import IllIcon from "../assets/images/svg/illuminati.svg"
import GlobeIcon from "../assets/images/svg/globe.svg"
import GraveIcon from "../assets/images/svg/tombstone.svg"

const data = [
  {
    id: 1,
    text: "adventures",
    url: "/category/adventure-journal/",
    svg: UFOIcon,
  },
  {
    id: 2,
    text: "shadow work",
    url: "/category/shadow-work/",
    svg: IllIcon,
  },
  {
    id: 3,
    text: "blog",
    url: "/blog/",
    svg: GlobeIcon,
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
    svg: GraveIcon,
  },
]

const links = () => {
  return (
    <ul className="m-0 nav-primary-list flex flex-wrap md:justify-around md:h-full">
      {data.map(link => {
        const Icon = link.svg
        return (
          <li key={link.id} className={`${link.text.split(" ").join("-")}`}>
            <Link
              to={link.url}
              className={`icon-link ${link.text
                .split(" ")
                .join(
                  "-"
                )} animated flex flex-col items-center justify-center px-2 py-5 md:p-3 md:flex-row md:border-l md:border-r md:border-grey-darkest hover:border-grey-darkest hover:bg-blackout md:h-full`}
            >
              <Icon
                className={`animated icon-animate mb-1 md:mr-2 md:mb-0 icon-${link.text
                  .split(" ")
                  .join("-")}`}
              />
              <span className="capitalize text-lg md:text-sm lg:text-lg">
                {link.text}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default links
