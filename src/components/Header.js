import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Grid,
  Box,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import Search from "./Search"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  gridRoot: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  home: {
    "& :hover": {
      fill: "#1976d2",
    },
  },
  facebook: {
    "& :hover": {
      fill: "#1877F2",
    },
  },
  instagram: {
    "& :hover": {
      fill: "#E4405F",
    },
  },
  twitter: {
    "& :hover": {
      fill: "#1DA1F2",
    },
  },
}))

const Header = ({ title }) => {
  const classes = useStyles()
  return (
    <Box className="cs-header">
      <Box className={`${classes.root} header-wrapper`}>
        <AppBar position="fixed" className="cs-app-bar">
          <Toolbar>
            <Grid className={classes.gridRoot} container spacing={1}>
              <Grid
                className={`${classes.root} ${classes.infoRoot}`}
                item
                xs={12}
                sm={5}
                md={8}
              >
                <Typography className={classes.title} variant="h6" noWrap>
                  {title}
                </Typography>
              </Grid>
              <Grid
                className={`${classes.root} ${classes.pageRoot}`}
                item
                xs={12}
                sm={4}
                md={2}
              >
                <Search />
              </Grid>
              <Grid
                className={`${classes.root} ${classes.pageRoot}`}
                item
                xs={12}
                sm={3}
                md={2}
              >
                <Box>
                  <IconButton
                    className={classes.home}
                    href="/"
                    aria-label="Go to My Home"
                  >
                    <HomeIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.instagram.com/codingsparkles"
                    aria-label="Go to My Instagram"
                    target="_blank"
                    className={classes.instagram}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.facebook.com/codingsparkles"
                    aria-label="Go to My Facebook"
                    target="_blank"
                    className={classes.facebook}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.twitter.com/codingsparkles"
                    aria-label="Go to My Twitter"
                    target="_blank"
                    className={classes.twitter}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}

export default Header
