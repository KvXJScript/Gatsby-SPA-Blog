import React, {useEffect} from 'react';
import "../styles/blog.scss";
import {Link, graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo";
import Custom from '../images/background-image.jpg';
import Aos from 'aos'
import "aos/dist/aos.css"

function BlogPage() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

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
         <ol className="posts">
           {data.allContentfulBlog.edges.map(({node}) =>{
          return(
            <>
            <img src={Custom} alt="postImage"/>
            <li key={node.title} className="post" id={node.id}>
              <Link to={`/blog/${node.slug}`}>
                <div className="post__title">
                  <h2>{node.title}</h2>
                </div>
                </Link>
                <div className="post__info">
                <p>{node.publishedDate}</p>
                <Link href="https://www.instagram.com/anka_roj/" target="_blank">
                 <p className="beforeankadies">beforeankadies</p>
                 </Link>
                 <p>14 komentarzy</p>
                </div>

             </li>
             </>
          )
         })}
         </ol>
      </div>
   )
}

export default BlogPage
