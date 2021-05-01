import React, {useState, useEffect} from 'react';
import "../styles/blog.scss";
import {Link, graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo";
import Custom from '../images/background-image.jpg';
import SideBar from '../components/Sidebar'
import Layout from '../components/layout';
import Loader from '../misc/Loader';

function IndexPage() {


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
  
  return (
  <Layout>
      <main className="main">
        <div className="blog">
        <SEO title="Blog" />
             <ol className="posts" style={{display: timeoutCheck ? "flex" : "none"}}>
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
                <a href="https://www.instagram.com/anka_roj/" target="_blank" rel="noopener noreferrer">
                 <p className="beforeankadies">beforeankadies</p>
                 </a>
                 <p>14 komentarzy</p>
                </div>

             </li>
             </>
          )
         })}
         </ol>
           <div className="loader" style={{display: !timeoutCheck ? "block" : "none"}}>
              <Loader/>
            </div>
        
      </div>
      <SideBar/>
      </main>
  </Layout>
       
  )
}

export default IndexPage
