import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard"
import Paginator from "../components/Paginator"

const BlogIndex = props => {
  const { data, location, pageContext } = props
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || ""
  const siteUrl = data.site.siteMetadata?.siteUrl || ""
  const posts = data.allMarkdownRemark.nodes
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodingSparkles",
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/images/codingsparkles.jpg`,
  }
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" schemaMarkup={schema} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" schemaMarkup={schema} />
      <BlogCard posts={posts} />
      <Paginator pageContext={pageContext} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
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
`
