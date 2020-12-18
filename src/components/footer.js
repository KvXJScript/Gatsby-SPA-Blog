import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import "../styles/_footer.scss";

function Footer() {

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
      <footer className="footer"> 
         <p>Created by me Copyright {data.site.siteMetadata.author}</p>
      </footer>
   )
}

export default Footer
