import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Paper,
  Typography,
  Box,
  makeStyles,
  IconButton,
  Container,
} from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useSyles = makeStyles(theme => ({
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  columnDirection: {
    flexDirection: "column",
  },
  paperRoot: {
    minHeight: "80vh",
  },
  typoRoot: {
    padding: "0 1rem",
  },
  titleRoot: {
    margin: "1rem",
    width: "230px",
  },
  boxRoot: {
    width: "50%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  instagram: {
    fill: "#E4405F",
  },
  twitter: {
    fill: "#1DA1F2",
  },
  linkedin: {
    fill: "#0A66C2",
  },
}))

const About = ({ data, location }) => {
  const classes = useSyles()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Paper
        className={`${classes.paperRoot} ${classes.centerAlign} ${classes.columnDirection}`}
      >
        <Box className={classes.titleRoot}>
          <Typography className={classes.typoRoot} variant="h5">
            Hi and welcome to CodingSparkles!
          </Typography>
        </Box>
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <Typography className={classes.typoRoot} paragraph={true}>
            I am Velmurugan Sivaprakasam, the man behind CodingSparkles. I am a
            web developer who focuses on the front end development. Who loves to
            share that which is known and to learn that which is unknown? I am
            happy to connect with you through this web site and learn more along
            with you.
          </Typography>
        </Box>
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <Typography className={classes.typoRoot} paragraph={true}>
            I created this web site with the intent of sharing information on
            web development practices, tutorials. This blog contains articles
            and tutorials about Reactjs, JavaScript, HTML, CSS, Sass. It will
            probably extend into other areas going forward. So, We can learn
            about unknowns together.
          </Typography>
        </Box>
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <Typography paragraph={true}>
            If you're interested in following me, find me.
          </Typography>
          <Container className={`${classes.centerAlign}`}>
            <IconButton
              href="https://www.linkedin.com/in/velmurugan-sivapraksam-4aa108174"
              aria-label="Go to My LinkedIn"
              target="_blank"
            >
              <LinkedInIcon className={classes.linkedin} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/velprathap"
              aria-label="Go to My Instagram"
              target="_blank"
            >
              <InstagramIcon className={classes.instagram} />
            </IconButton>
            <IconButton
              href="https://www.twitter.com/velprathap"
              aria-label="Go to My Twitter"
              target="_blank"
            >
              <TwitterIcon className={classes.twitter} />
            </IconButton>
          </Container>
          <Typography variant="h6">Happy Learning!</Typography>
        </Box>
      </Paper>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
