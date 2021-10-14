import React from "react"
import Gitalk from "gatsby-plugin-gitalk"
import "@suziwen/gitalk/dist/gitalk.css"

const Comments = ({post}) => {
  let gitalkConfig = {
    id: post.fields.slug || post.id,
    title: post.frontmatter.title,
  }
  return <Gitalk options={gitalkConfig} />
}
export default Comments
