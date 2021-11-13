import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutline from "@material-ui/icons/MailOutline"

const useStyles = makeStyles({
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
  boxRoot: {
    padding: "1.5rem",
  },
  gridContent: {
    padding: "1rem",
  },
  mailContainer: {
    flexDirection: "column",
  },
  bold: {
    fontWeight: "bold",
  },
  paraTypo: {
    textAlign: "center",
  },
  facebook: {
    fill: "#4078c0",
  },
  instagram: {
    fill: "#E4405F",
  },
  twitter: {
    fill: "#1DA1F2",
  },
  btnRoot: {
    margin: "0.5rem 0",
  },
  btn: {
    width: "220px",
  },
  paperSize: {
    height: "320px",
    width: "320px",
  },
  mailIcon: {
    height: "100px",
    width: "100px",
    fill: "#1976d2",
  },
})

const Contact = ({ data, location }) => {
  const classes = useStyles()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <Paper
        className={`${classes.paperRoot} ${classes.centerAlign} ${classes.columnDirection}`}
      >
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <Typography variant="h4" className={classes.gridContent} component="h1">
            Get in touch!
          </Typography>
          <Typography className={classes.paraTypo} paragraph={true}>
            You have any feedback? We'd love to hear from you.
          </Typography>
          <Typography className={classes.paraTypo} paragraph={true}>
            Contact us with any of the following.
          </Typography>
        </Box>
        <Box className={`${classes.centerAlign}`}>
          <Grid container>
            <Grid
              item
              xs={12}
              sd={6}
              md={6}
              className={`${classes.centerAlign} ${classes.gridContent}`}
            >
              <Paper
                className={`${classes.paperSize} ${classes.mailContainer} ${classes.centerAlign}`}
              >
                <Box>
                  <Typography className={classes.bold} variant="h6">
                    Email
                  </Typography>
                </Box>
                <Box
                  className={`${classes.centerAlign} ${classes.columnDirection}`}
                >
                  <MailOutline className={classes.mailIcon} />
                  <Typography variant="h6">codingsparkles@gmail.com</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid
              className={`${classes.gridContent} ${classes.centerAlign} ${classes.columnDirection}`}
              item
              xs={12}
              sd={6}
              md={6}
            >
              <Paper
                className={`${classes.paperSize} ${classes.centerAlign} ${classes.columnDirection}`}
              >
                <Box>
                  <Typography className={classes.bold} variant="h6">
                    Socials
                  </Typography>
                </Box>
                <Box>
                  <Box className={classes.btnRoot}>
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      startIcon={
                        <InstagramIcon className={classes.instagram} />
                      }
                      href="https://www.instagram.com/codingsparkles"
                      aria-label="Go to My Instagram"
                      target="_blank"
                    >
                      Instagram
                    </Button>
                  </Box>
                  <Box className={classes.btnRoot}>
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      startIcon={<FacebookIcon className={classes.facebook} />}
                      href="https://www.instagram.com/codingsparkles"
                      aria-label="Go to My Instagram"
                      target="_blank"
                    >
                      Facebook
                    </Button>
                  </Box>
                  <Box className={classes.btnRoot}>
                    <Button
                      className={classes.btn}
                      variant="outlined"
                      startIcon={<TwitterIcon className={classes.twitter} />}
                      href="https://www.twitter.com/codingsparkles"
                      aria-label="Go to My Twitter"
                      target="_blank"
                    >
                      Twitter
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
