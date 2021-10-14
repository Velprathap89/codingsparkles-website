import React from "react"
import "@suziwen/gitalk/dist/gitalk.css"

// const Comments = ({post}) => {
//   let gitalkConfig = {
//     id: post.fields.slug || post.id,
//     title: post.frontmatter.title,
//   }
//   return <Gitalk options={gitalkConfig} />

// }
import { Disqus } from "gatsby-plugin-disqus"

const Comments = ({ post, url }) => (
  <Disqus
    config={{
      url: url,
      identifier: post.fields.slug || post.id,
      title: post.frontmatter.title,
    }}
  />
)
export default Comments
