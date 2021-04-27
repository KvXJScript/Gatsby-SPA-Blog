import React from "react"
import "../styles/_sidebar.scss"
import Helper from "../images/svg/helper32x32.svg";
import Photo1 from '../images/instagram/1.png';
import Photo2 from '../images/instagram/2.png';
import Photo3 from '../images/instagram/3.png';
import Photo4 from '../images/instagram/4.png';
import Photo5 from '../images/instagram/5.png';
import Photo6 from '../images/instagram/6.png';
import Photo7 from '../images/instagram/7.png';
import Photo8 from '../images/instagram/8.png';
import Photo9 from '../images/instagram/9.png';
import Photo10 from '../images/instagram/10.png';
import Photo11 from '../images/instagram/11.png';
import Photo12 from '../images/instagram/12.png';

import {Link, graphql, useStaticQuery} from 'gatsby';




function Sidebar() {

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

   const renderer = data.allContentfulBlog.edges.slice(0,5)

  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <p>
          {" "}
          <span>
            <Helper />
          </span>{" "}
          Najnowsze wpisy
        </p>
      </div>
      <div className="sidebar__list">
        <ul>
        { data.allContentfulBlog && renderer.map(item => (
          <li key={item.node.id}>{item.node.title}</li>
        ))}
        </ul>
      </div>
      
      <div className="sidebar__instagram">
        <p>
          {" "}
          <span>
            <Helper />
          </span>{" "}
          Instagram
        </p>
      </div>
      <Link href="https://www.instagram.com/anka_roj/" target="_blank">
      <div className="sidebar__photos">
        <img src={Photo1} alt="photo" />
        <img src={Photo2} alt="photo" />
        <img src={Photo3} alt="photo" />
        <img src={Photo4} alt="photo" />
        <img src={Photo5} alt="photo" />
        <img src={Photo6} alt="photo" />
        <img src={Photo7} alt="photo" />
        <img src={Photo8} alt="photo" />
        <img src={Photo9} alt="photo" />
        <img src={Photo10} alt="photo" />
        <img src={Photo11} alt="photo" />
        <img src={Photo12} alt="photo" />
      </div>
      </Link>

      <div className="sidebar__related">
         <p>
          <span>
            <Helper />
          </span>
          Archiwum
        </p>
         <select name="" id="">
            <option value="miesiąc">Wybierz miesiąc</option>
            <option value="Styczeń">Styczeń 2021</option>
            <option value="Luty">Luty 2021</option>
            <option value="Marzec">Marzec 2021</option>
            <option value="Kwiecień">Kwiecień 2021</option>
            <option value="Maj">Maj 2021</option>
         </select>
      </div>

      <div className="sidebar__topics">
         <p>
          <span>
            <Helper />
          </span>
          Najpopularniejsze Tematy
        </p>
      </div>
    </div>
  )
}

export default Sidebar
