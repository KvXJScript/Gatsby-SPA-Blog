import React from 'react'
import {graphql} from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

export const query = graphql`
query($slug: String!){
  contentfulBlog(slug: {eq: $slug}){
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body{
      raw
    }
  }
}
`

function blog(props) {
   return (
      <Layout>
        
        <h1>{props.data.contentfulBlog.title}</h1>
        <p>{props.data.contentfulBlog.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlog.body.raw)}
      </Layout>
   )
}

export default blog
