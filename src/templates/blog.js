import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/pages-styles/_blog.scss";
import Sidebar from '../components/Sidebar'
import "../styles/_main.scss"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className="blog-image" />
      },
    },
  }

  return (
    <Layout>
      <main className="main">
      <div className="blog">
        <div className="blog__image">
          {documentToReactComponents(
            props.data.contentfulBlog.body !== null && props.data.contentfulBlog.body.json,
            options
          )}
        </div>
      </div>
      <Sidebar/>
      </main>
    </Layout>
  )
}

export default Blog
