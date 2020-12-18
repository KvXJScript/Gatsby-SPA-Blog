import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import "../styles/_header.scss";
import Banner from '../images/main.png';
import Instagram from '../images/svg/instagram.svg'
import Youtube from '../images/svg/youtube.svg'
import Facebook from '../images/svg/facebook.svg'

function Header() {

   const [searchValue, setSearchValue] = useState("");
  
   const Search = ({target:{value}})=>{
     setSearchValue(value);
     console.log(value);
   }

   return (
      <header className="header">
         <Link to="/"><img src={Banner} alt="Banner"/></Link>
         <nav>
            <ul className="header__list">
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
         <div className="header__top_search">
            <div className="header__top_search--icons">
               <ul>
                  <li>
                     <a href="https://www.facebook.com/beforeankadies/" activeClassName="active-link"><Instagram/> facebook</a>
                     <a href="https://www.instagram.com/anka_roj/" activeClassName="active-link"><Instagram/>instagram</a>
                     <a href="https://www.youtube.com/channel/UC7pBEcJd6wj3Je2l3VqSzjg?disable_polymer=1" activeClassName="active-link"><Instagram/>youtube</a>
                  </li>
               </ul>
            </div>
            <input type="text" placeholder="Wpisz swój temat" value = {searchValue} onChange={Search}/>
          </div>
      </header>
   )
}

export default Header
