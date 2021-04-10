import React, {useState, useEffect} from "react";
import "../styles/_main.scss";
import SEO from "../components/seo";
import Layout from '../components/layout';
import Blog from './blog';
import {ReactComponent as IconSmall} from '../images/svg/helper24x24.svg'
import {ReactComponent as IconBig} from '../images/svg/helper32x32.svg'
import {ReactComponent as Triangle} from '../images/svg/nav-triangle.svg'

function IndexPage() {
  
  return (
  <Layout>
    <SEO title="main" />
      <main className="main">
        <Blog/>
      </main>
  </Layout>
  )
}

export default IndexPage