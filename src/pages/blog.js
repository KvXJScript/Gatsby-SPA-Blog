import React from 'react';
import "../styles/blog.scss";
import {Link, graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo";

function BlogPage() {

   const data = useStaticQuery(graphql`
   query{
    allContentfulBlog (
      sort:{
        fields: publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
   `)
   
   return (
      <div className="blog">
        <SEO title="Blog" />
        <h1>Before Anka Dies</h1>
         <ol className="posts">
           {data.allContentfulBlog.edges.map(({node}) =>{
          return(
            <li key={node.title} className="post">
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p className="date">{node.publishedDate}</p>
             </Link>
             </li>
          )
         })}
         </ol>
      </div>
   )
}

export default BlogPage
