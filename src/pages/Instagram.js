import React, {useEffect, useState} from 'react';
import "../styles/blog.scss";
import {Link, graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo";
import Custom from '../images/background-image.jpg';
import "aos/dist/aos.css"
import "../styles/_main.scss";
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Loader from '../misc/Loader';

function InstagramPlaces() {

  const [timeoutCheck, setTimeoutCheck] = useState(false);

  useEffect(() => {
      setTimeout(()=>{
        setTimeoutCheck(true)
      }, 2000)  
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
   const travelParams = data.allContentfulBlog.edges.find(item => item.node.slug === "Instagram")
   let converter = [];
   if(travelParams){
      converter.push(travelParams)
   }

   return (
        <Layout>
      <main className="main">
        <div className="blog">
        <SEO title="Instagramowe miejsca" />
        <ol className="posts" style={{display: timeoutCheck ? "flex" : "none"}}>
           {converter.map(({node}) =>{
          return(
            <React.Fragment  key={node.title}>
            <img src={Custom} alt="postImage" className="post__image"/>
            <li className="post" id={node.id}>
              <Link to={`/blog/${node.slug}`}>
                <div className="post__title">
                  <h2>{node.title}</h2>
                </div>
                </Link>
                <div className="post__info">
                <p>{node.publishedDate}</p>
                <a href="https://www.instagram.com/anka_roj/" target="_blank" rel="noopener noreferrer">
                 <p className="beforeankadies">beforeankadies</p>
                 </a>
                 <p>14 komentarzy</p>
                </div>

             </li>
             </React.Fragment>
          )
         })}
         </ol>
            <div className="loader" style={{display: !timeoutCheck ? "block" : "none"}}>
              <Loader/>
            </div>
      </div>
        <Sidebar/>
      </main>
  </Layout>
       
   )
}

export default InstagramPlaces
