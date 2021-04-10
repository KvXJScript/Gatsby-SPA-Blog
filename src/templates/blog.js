import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/pages-styles/_blog.scss";

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

function blog(props) {
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
      <div className="blog">
        <div className="blog__image">
          {documentToReactComponents(
            props.data.contentfulBlog.body.json,
            options
          )}
        </div>
        <div className="blog__title">
          <h1>{props.data.contentfulBlog.title}</h1>
        </div>
        <div className="blog__info">
          <p>{props.data.contentfulBlog.publishedDate}</p>
          <p>Beforeankadies</p>
          <p>14 Komentarzy</p>
        </div>
      </div>
    </Layout>
  )
}

export default blog
