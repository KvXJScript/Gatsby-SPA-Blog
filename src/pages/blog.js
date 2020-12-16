import React from 'react';
import Layout from '../components/layout'
import "../styles/blog.scss";
import {Link, graphql, useStaticQuery} from 'gatsby';

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
         <Layout>
         <h1>Blog</h1>
         <p>Posts will show up later here</p>
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
         </Layout>
      </div>
   )
}

export default BlogPage
