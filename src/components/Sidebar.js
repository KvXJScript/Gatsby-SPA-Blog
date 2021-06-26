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




function Sidebar({date, handleDate}) {

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
          <span>
            <Helper />
          </span>
          Najnowsze wpisy
        </p>
      </div>
      <div className="sidebar__list">
        <ul>
        {data.allContentfulBlog && renderer.map(item => (
          <Link href={item.node.slug} key={item.node.id}>
            <li>{item.node.title}</li>
          </Link>
        ))}
        </ul>
      </div>
      
      <div className="sidebar__instagram">
        <p>
          <span>
            <Helper />
          </span>
          Instagram
        </p>
      </div>
      <a href="https://www.instagram.com/anka_roj/" target="_blank" rel="noopener noreferrer">
      <div className="sidebar__photos">
        <img src={Photo1} alt="photo1" />
        <img src={Photo2} alt="photo2" />
        <img src={Photo3} alt="photo3" />
        <img src={Photo4} alt="photo4" />
        <img src={Photo5} alt="photo5" />
        <img src={Photo6} alt="photo6" />
        <img src={Photo7} alt="photo7" />
        <img src={Photo8} alt="photo8" />
        <img src={Photo9} alt="photo9" />
        <img src={Photo10} alt="photo10" />
        <img src={Photo11} alt="photo11" />
        <img src={Photo12} alt="photo12" />
      </div>
      </a>

      <div className="sidebar__related">
         <p>
          <span>
            <Helper />
          </span>
          Archiwum
        </p>
         <select name="" id="" value={date} onChange ={handleDate}>
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
        <div className="sidebar__hashmap">
          <ul className="sidebar__hashmap__wrapper">
          {data && data.allContentfulBlog.edges.map(item =>(
            <Link href={item.node.slug}>
              <li className="sidebar__hashmap__items">{item.node.slug}</li>
            </Link>
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
