import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/TagList"
import {
  Paper,
  makeStyles,
  Typography,
  Box,
  Chip,
  Grid,
} from "@material-ui/core"
import Img from "gatsby-image"
import ArrowBack from "@material-ui/icons/ArrowBack"
import ArrowForward from "@material-ui/icons/ArrowForward"
import SocialShare from "../components/SocialShare"

const useStyles = makeStyles({
  root: {
    padding: "1rem",
  },
  typeContainer: {
    margin: "0 1rem",
  },
  typoRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxRoot: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "1rem",
  },
  chipRoot: {
    margin: "0 .25rem",
  },
  btnRoot: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
  },
  linkTextContainer: {
    textDecoration: "none",

    "& :hover": {
      color: "#1976d2",
    },
  },
  footerGrid: {
    padding: "1rem",
  },
  nextPostRoot: {
    borderLeft: "2px solid #ccc",
  },
  nextPost: {
    justifyContent: "flex-end",

    "& $subtitle": {
      textAlign: "end",
    },
  },
  footerIconContainer: {
    padding: ".5rem",
  },
  footerIcon: {
    fill: "#757575",
  },
  subtitle: {
    color: "#757575",
  },
  title: {
    color: "#333333",
  },
})

const BlogPostTemplate = props => {
  const classes = useStyles()
  const { data, location, pageContext } = props
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const readingTime = post.fields.readingTime.text
  const previous = pageContext.previous
  const next = pageContext.next
  const imgSrc =
    (post.frontmatter.thumb && post.frontmatter.thumb.childImageSharp.fluid) ||
    null
  const tags = post.frontmatter.tags
  const url = typeof window !== "undefined" ? window.location.href : ""

  const getStyle = tag => {
    if (tag === "JavaScript") {
      return { backgroundColor: "#FED9C9" }
    }
    if (tag === "React JS") {
      return { backgroundColor: "#DEF3FD" }
    }
    if (tag === "CSS") {
      return { backgroundColor: "#FFEFD8" }
    }
    if (tag === "Sass") {
      return { backgroundColor: "#FFDDE4" }
    }
    if (tag === "Angular") {
      return { backgroundColor: "#FF7F7F" }
    }
  }
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9} md={9}>
          <Paper className={classes.root}>
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <Typography className={classes.typoRoot} variant="h4">
                  {post.frontmatter.title}
                </Typography>
                <Box className={classes.boxRoot}>
                  <Box>
                    {tags.map(tag => (
                      <Chip
                        key={tag}
                        className={classes.chipRoot}
                        style={getStyle(tag)}
                        label={tag}
                      />
                    ))}
                  </Box>
                  <Box className={classes.typeContainer}>
                    <Typography
                      className={classes.typoRoot}
                      variant="subtitle1"
                    >
                      {readingTime}
                    </Typography>
                  </Box>
                  <Box className={classes.typeContainer}>
                    <Typography
                      className={classes.typoRoot}
                      variant="subtitle1"
                    >
                      {post.frontmatter.date}
                    </Typography>
                  </Box>
                </Box>
              </header>
              <Paper>
                <Img fluid={imgSrc} />
              </Paper>
              <Box>
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
              </Box>
            </article>
            <SocialShare url={url} post={post} tags={tags} />
          </Paper>
          <Grid container className={classes.footerGrid}>
            <Grid item xs={6} sm={6} md={6}>
              {previous && (
                <Box className={classes.btnRoot}>
                  <Box className={classes.footerIconContainer}>
                    <ArrowBack className={classes.footerIcon} />
                  </Box>
                  <Box>
                    <Typography
                      className={classes.subtitle}
                      variant="subtitle1"
                    >
                      Previous Post
                    </Typography>
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      className={classes.linkTextContainer}
                    >
                      <Typography className={classes.title} variant="h6">
                        {previous.frontmatter.title}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid
              className={`${previous ? classes.nextPostRoot : ""}`}
              item
              xs={6}
              sm={6}
              md={6}
            >
              {next && (
                <Box className={`${classes.btnRoot} ${classes.nextPost}`}>
                  <Box>
                    <Typography
                      className={classes.subtitle}
                      variant="subtitle1"
                    >
                      Next Post
                    </Typography>
                    <Link
                      to={next.fields.slug}
                      rel="next"
                      className={classes.linkTextContainer}
                    >
                      <Typography className={classes.title} variant="h6">
                        {next.frontmatter.title}
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={classes.footerIconContainer}>
                    <ArrowForward className={classes.footerIcon} />
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TagList />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
