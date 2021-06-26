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
   const renderer = data.allContentfulBlog.edges.slice(0,10)
   console.log(renderer);
   
   return (
     <main className="main">
      <div className="blog">
        <SEO title="Blog" />
         <ol className="posts">
           {renderer.map(({node}) =>{
          return(
            <React.Fragment key={node.id}>
            <Link to={`/blog/${node.slug}`}>
            <img src={Custom} alt="postImage" className="post__image"/>
            <li className="post" id={node.id}>
              
                <div className="post__title">
                  <h2>{node.title}</h2>
                </div>
                
                <div className="post__info">
                <p>{node.publishedDate}</p>
                <a href="https://www.instagram.com/anka_roj/" target="_blank" rel="noopener noreferrer">
                 <p className="beforeankadies">beforeankadies</p>
                 </a>
                 <p>14 komentarzy</p>
                </div>

             </li>
             </Link>
             </React.Fragment>
          )
         })}
         </ol>
      </div>
      </main>
   )
}

export default BlogPage
