import React from "react"
import { Link } from "gatsby"
import LogoText from "../assets/images/svg/logo-text.svg"
import FacebookIcon from "../assets/images/svg/facebook.svg"
import InstagramIcon from "../assets/images/svg/instagram.svg"
import socialData from "../constants/social.json"
const Footer = () => {
  return (
    <footer className="footer py-8 bg-grey-dark text-sm">
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-1/4 text-center lg:text-left footer-left mb-8 lg:mb-0">
              <Link to="/">
                <LogoText className="logo-text max-w-footer-logo h-auto w-auto mb-4 mx-auto md:ml-0" />
                <span className="sr-only">
                  BYOUNGZ Logo links to home page.
                </span>
              </Link>
              <span>
                &copy; {new Date().getFullYear()} BYOUNGZ Digital Nomad.
              </span>
            </div>
            <div className="lg:w-1/4 text-center lg:text-left footer-right">
              <div className="flex justify-center mb-4 lg:justify-end">
                <a
                  className="text-primary"
                  href={socialData.facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    className={"icon-fb fill-current max-w-40 mr-2 h-auto"}
                  />
                  <span className="sr-only">Link to BYOUNGZ Facebook.</span>
                </a>
                <a
                  className="text-primary"
                  href={socialData.instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    className={"icon-ig max-w-40 fill-primary ml-2"}
                  />
                  <span className="sr-only">Link to BYOUNGZ Instagram.</span>
                </a>
              </div>
              <nav>
                <ul className="flex space-x-4 list-none justify-center lg:justify-end">
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <a href="/sitemap">Sitemap</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
