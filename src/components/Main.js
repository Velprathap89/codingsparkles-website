import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  boxRoot: {
    minHeight: "80vh",
    marginTop: "64px",
    padding: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginTop: "170px",
    },
  },
}))
const Main = props => {
  const classes = useStyles()

  return (
    <Box className={classes.boxRoot}>
      <Box>{props.children}</Box>
    </Box>
  )
}

export default Main
