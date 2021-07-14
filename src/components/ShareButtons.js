import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div className="share-this items-center flex">
      <strong className="mr-4">Share: </strong>
      <FacebookShareButton url={url} className="mr-2 lg:mr-4">
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
        className="mr-2 lg:mr-4"
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} className="mr-2 lg:mr-4">
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} className="mr-2 lg:mr-4">
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  )
}
export default ShareButtons
