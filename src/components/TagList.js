import React from "react"
import kebabCase from "lodash/kebabCase"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Paper, Chip, makeStyles, Typography, Box } from "@material-ui/core"

const useStyles = makeStyles({
  typoRoot: {
    textAlign: "center",
    padding: ".5rem",
  },
  boxRoot: {
    display: "flex",
    flexWrap: "wrap",
  },
  chipRoot: {
    padding: ".5rem",
    lineHeight: "32px",
    textDecoration: "none",
    display: "block",
  },
  reactBg: {
    backgroundColor: "#DEF3FD",
  },
  jsBg: {
    backgroundColor: "#FED9C9",
  },
  cssBg: {
    backgroundColor: "#FFEFD8",
  },
  sassBg: {
    backgroundColor: "#FFDDE4",
  },
  angularBg: {
    backgroundColor: "#FF7F7F",
  },
})

const TagList = () => {
  const classes = useStyles()

  const getClassName = tag => {
    if (tag === "JavaScript") {
      return "jsBg"
    }
    if (tag === "React JS") {
      return "reactBg"
    }
    if (tag === "CSS") {
      return "csstBg"
    }
    if (tag === "Sass") {
      return "sassBg"
    }
    if (tag === "Angular") {
      return "angularBg"
    }
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Paper>
      <Box className={classes.typoRoot}>
        <Typography variant="h6">Explore Topics</Typography>
      </Box>
      <Box className={classes.boxRoot}>
        {data.allMarkdownRemark.group.map(tag => (
          <Link
            key={tag.fieldValue}
            className={classes.chipRoot}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            <Chip
              key={tag.fieldValue}
              className={classes[getClassName(tag.fieldValue)]}
              label={`${tag.fieldValue} (${tag.totalCount})`}
              size="medium"
            />
          </Link>
        ))}
      </Box>
    </Paper>
  )
}

export default TagList
