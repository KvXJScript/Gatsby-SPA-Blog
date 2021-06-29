import React, {useState} from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import "../styles/_header.scss";
import Banner from '../images/main.png';
import Instagram from '../images/instagram.png'
import Youtube from '../images/youtube.png'
import Facebook from '../images/facebook.png'
import PDF from '../images/123.pdf'
import {Document, Page} from 'react-pdf';

function Header() {

   const [searchValue, setSearchValue] = useState("");
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
  
   const Search = ({target:{value}})=>{
     setSearchValue(value);
     console.log(value);
   }

    const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
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
                        <a href="https://www.facebook.com/beforeankadies/" target="_blank"><img src={Facebook} alt="Facebook" className="icon" /></a>
                     </li>
                  </ul>
               </div>
               <div>
                  <ul>
                  <li>
                        <a href="https://www.instagram.com/anka_roj/" target="_blank"><img src={Instagram} alt="Instagram" className="icon" /></a>
                     </li>
                  </ul>
               </div>
               <ul>
                     <li>
                        <a href="https://www.youtube.com/channel/UC7pBEcJd6wj3Je2l3VqSzjg?disable_polymer=1" target="_blank"><img src={Youtube} alt="Youtube" className="icon" /></a>
                     </li>
               </ul>
            </div>
            <input type="text" placeholder="Wpisz swój temat..." value = {searchValue} onChange={Search}/>
          </div>
         <nav>
            <ul className="header__list">
               <li>
                  <Link to="/" className = "item" >HOME</Link>
               </li>
               <li>
                  <Link to="/Podróż" className = "item" >PODRÓŻ</Link>
               </li>
               <li>
                  <Link to="/Kraków" className = "item" >KRAKÓW</Link>
               </li>
               <li>
                  <Link to="/Lifestyle" className = "item" >LIFESTYLE</Link>
               </li>
               <li>
                  <Link to="/blog/Kontakt" className = "item" >KONTAKT/WSPÓŁPRACA</Link>
               </li>
               <li className="Link__Background">
                  <a href="https://pdf-reader.en.softonic.com/download" target="_blank" rel="noopener noreferrer" className = "item" >E-BOOK O KRAKOWIE</a>
               </li>
               {/* <li>
                  <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                  </Document>
                  <p>Page {pageNumber} of {numPages}</p>
               </li> */}
            </ul>
         </nav>
         
      </header>
   )
}

export default Header
