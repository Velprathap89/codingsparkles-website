import React from "react"
import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  infoRoot: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  pageRoot: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  activeLink: {
    color: "green",
  },
  copyRight: {
    textTransform: "capitalize",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className="cs-footer">
      <Grid container spacing={3}>
        <Grid
          className={`${classes.root} ${classes.infoRoot}`}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <Typography variant="overline" className={classes.copyRight}>
            CodingSparkles © {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Grid>
        <Grid
          className={`${classes.root} ${classes.pageRoot}`}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <Box className="page-menu-container">
            <Link
              to="/"
              rel="Home"
              activeStyle={{ color: "#1976d2" }}
            >
              <Typography variant="button" className="home-page">
                Home
              </Typography>
            </Link>
            <Link to="/About/" rel="About" activeStyle={{ color: "#1976d2" }}>
              <Typography variant="button" className="about-page">
                About
              </Typography>
            </Link>
            <Link
              to="/Contact/"
              rel="Contact"
              activeStyle={{ color: "#1976d2" }}
            >
              <Typography variant="button" className="contact-page">
                Contact
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
