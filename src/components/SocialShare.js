import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share"
import TwitterIcon from "@material-ui/icons/Twitter"
import RedditIcon from "@material-ui/icons/Reddit"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TelegramIcon from "@material-ui/icons/Telegram"

const useStyles = makeStyles({
  boxRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& button": {
      height: "40px",
    },
  },
  iconPadding: {
    padding: ".5rem",
  },
  linkedIn: {
    fill: "#0A66C2",
  },
  reddit: {
    fill: "#FF5700",
  },
  facebook: {
    fill: "#1877F2",
  },
  twitter: {
    fill: "#1DA1F2",
  },
  telegran: {
    fill: "#0088cc",
  },
})

const SocialShare = ({ url, post, tags }) => {
  const classes = useStyles()
  const { title, description } = post.frontmatter
  return (
    <Box className={classes.boxRoot}>
      <Typography variant="subtitle1">Share:</Typography>
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
      <TwitterShareButton url={url} title={title} hashtags={tags}>
        <TwitterIcon className={`${classes.iconPadding} ${classes.twitter}`} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={title} hashtag={tags.toString()}>
        <FacebookIcon
          className={`${classes.iconPadding} ${classes.facebook}`}
        />
      </FacebookShareButton>
      <RedditShareButton url={url} title={title} description={description}>
        <RedditIcon className={`${classes.iconPadding} ${classes.reddit}`} />
      </RedditShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon
          className={`${classes.iconPadding} ${classes.telegran}`}
        />
      </TelegramShareButton>
    </Box>
  )
}

export default SocialShare
