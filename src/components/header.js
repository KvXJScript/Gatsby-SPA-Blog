import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby';
import "../styles/header.scss";

function Header() {

   const data = useStaticQuery(graphql`
   query{
      site {
        siteMetadata{
          author
        }
      }
    }
   `)

   return (
      <header>
         <h1>{data.site.siteMetadata.author}</h1>
         <Link to="/">{data.site.siteMetadata.title}</Link>
         <nav>
            <ul className="nav-list">
               <li>
                  <Link to="/" className = "item" activeClassName="active-item">Home</Link>
               </li>
               <li>
                  <Link to="/blog" className = "item" activeClassName="active-item">Blog</Link>
               </li>
               <li>
                  <Link to="/about" className = "item" activeClassName="active-item">About</Link>
               </li>
               <li>
                  <Link to="/contact" className = "item" activeClassName="active-item">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
