import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core"

const useStyles = makeStyles({
  boxRoot: {
    minHeight: "72vh",
  },
  cardRoot: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  actionRoot: {
    justifyContent: "center",
  },
  readLink: {
    textDecoration: "none",
    height: "20px",

    "& :hover": {
      borderBottom: "1px solid #1976d2",
    },
  },
  readLinkText: {
    color: "#1976d2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContentRoot: {
    padding: 0,
  },
  cardContentText: {
    padding: "16px",
  },
})

const BlogCard = ({ posts }) => {
  const classes = useStyles()

  return (
    <Box className={classes.boxRoot}>
      <Grid container spacing={3}>
        {posts &&
          posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const imgSrc =
              (post.frontmatter.thumb &&
                post.frontmatter.thumb.childImageSharp.fluid) ||
              null

            return (
              <Grid key={post.fields.slug} item xs={12} sm={6} md={4}>
                <Card className={classes.cardRoot} key={post.fields.slug}>
                  <CardContent className={classes.cardContentRoot}>
                    <Img fluid={imgSrc} alt={title} />
                    <Box className={classes.cardContentText}>
                      <Typography gutterBottom variant="h5" component="h1">
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.frontmatter.description || post.excerpt}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions className={classes.actionRoot}>
                    <Link
                      className={classes.readLink}
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      <Box className={classes.readLinkText}>Read More </Box>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}

export default BlogCard
