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
                  <Link to="/" className = "item" activeClassName="active-item">HOME</Link>
               </li>
               <li>
                  <Link to="/travel" className = "item" activeClassName="active-item">PODRÓŻ</Link>
               </li>
               <li>
                  <Link to="/cracow" className = "item" activeClassName="active-item">KRAKÓW</Link>
               </li>
               <li>
                  <Link to="/lifestyle" className = "item" activeClassName="active-item">LIFESTYLE</Link>
               </li>
               <li>
                  <Link to="/instagramplaces" className = "item" activeClassName="active-item">INSTAGRAMOWE MIEJSCA</Link>
               </li>
               <li>
                  <Link to="/contact" className = "item" activeClassName="active-item">KONTAKT/WSPÓŁPRACA</Link>
               </li>
            </ul>
         </nav>
         <div className="header__top_search">
            <div className="header__top_search--icons">
               <ul>
                     <li>
                        <a href="https://www.facebook.com/beforeankadies/"><Facebook/> facebook</a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/anka_roj/"><Facebook/>instagram</a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/channel/UC7pBEcJd6wj3Je2l3VqSzjg?disable_polymer=1"><Facebook/>youtube</a>
                     </li>
               </ul>
            </div>
            <input type="text" placeholder="Wpisz swój temat" value = {searchValue} onChange={Search}/>
          </div>
      </header>
   )
}

export default Header
