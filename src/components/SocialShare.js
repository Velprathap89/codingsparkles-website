import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles({
  boxRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '& button': {
      height: "40px"
    }
  },
  iconPadding: {
    padding: "0 .5rem",
  },
  linkedIn: {
    fill: "#0A66C2",
  },
  instagram: {
    fill: "#E4405F",
  },
  facebook: {
    fill: "#1877F2"
  },
  twitter: {
    fill: "#1DA1F2"
  }
})

const SocialShare = ({ url, post, tags }) => {
  const classes = useStyles()
  const { title, description } = post.frontmatter
  return (
    <Box className={classes.boxRoot}>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        hashtags={tags}
      >
        <LinkedInIcon
          className={`${classes.iconPadding} ${classes.linkedIn}`}
        />
      </LinkedinShareButton>
      <InstapaperShareButton url={url} title={title} description={description}>
        <InstagramIcon
          className={`${classes.iconPadding} ${classes.instagram}`}
        />
      </InstapaperShareButton>
      <FacebookShareButton url={url} quote={title} hashtag={tags.toString()}>
        <FacebookIcon
          className={`${classes.iconPadding} ${classes.facebook}`}
        />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} hashtags={tags}>
        <TwitterIcon className={`${classes.iconPadding} ${classes.twitter}`} />
      </TwitterShareButton>
    </Box>
  )
}

export default SocialShare
