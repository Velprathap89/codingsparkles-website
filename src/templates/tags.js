import React from "react"
import { graphql } from "gatsby"
import BlogCard from "../components/BlogCard"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/TagList"
import { Grid } from "@material-ui/core"

const Tags = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark
  const posts = edges.map(item => item.node)
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9} md={9}>
          <BlogCard posts={posts} />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TagList />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
