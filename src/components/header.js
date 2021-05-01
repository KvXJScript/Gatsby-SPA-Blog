import React, {useState} from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import "../styles/_header.scss";
import Banner from '../images/main.png';
import Instagram from '../images/svg/instagram.svg'
import Youtube from '../images/svg/youtube.svg'
import Facebook from '../images/svg/facebook.svg'

function Header() {

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
          id
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
   `)

   const [searchValue, setSearchValue] = useState("");
  
   const Search = ({target:{value}})=>{
     setSearchValue(value);
     console.log(value);
   }

   return (
      <header className="header">
         <div className="header__banner">
            <Link to="/"><img src={Banner} alt="Banner"/></Link>
         </div>
         <div className="header__top_search">
            <div className="header__top_search--icons">
               <div>
                  <ul>
                  <li>
                        <a href="https://www.facebook.com/beforeankadies/"><Facebook className="icon"/></a>
                     </li>
                  </ul>
               </div>
               <div>
                  <ul>
                  <li>
                        <a href="https://www.instagram.com/anka_roj/"><Facebook className="icon"/></a>
                     </li>
                  </ul>
               </div>
               <ul>
                     <li>
                        <a href="https://www.youtube.com/channel/UC7pBEcJd6wj3Je2l3VqSzjg?disable_polymer=1"><Facebook className="icon"/></a>
                     </li>
               </ul>
            </div>
            <input type="text" placeholder="Wpisz swój temat..." value = {searchValue} onChange={Search}/>
          </div>
         <nav>
            <ul className="header__list">
               <li>
                  <Link to="/" className = "item" activeClassName="active-item">HOME</Link>
               </li>
               <li>
                  <Link to="/Podróż" className = "item" activeClassName="active-item">PODRÓŻ</Link>
               </li>
               <li>
                  <Link to="/Kraków" className = "item" activeClassName="active-item">KRAKÓW</Link>
               </li>
               <li>
                  <Link to="/Lifestyle" className = "item" activeClassName="active-item">LIFESTYLE</Link>
               </li>
               <li>
                  <Link to="/Instagramowemiejsca" className = "item" activeClassName="active-item">INSTAGRAMOWE MIEJSCA</Link>
               </li>
               <li>
                  <Link to="/Kontakt" className = "item" activeClassName="active-item">KONTAKT/WSPÓŁPRACA</Link>
               </li>
            </ul>
         </nav>
         
      </header>
   )
}

export default Header
