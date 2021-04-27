import React from "react";
import "../styles/_main.scss";
import SEO from "../components/seo";
import Layout from '../components/layout';
import Blog from './blog';
import Sidebar from '../components/Sidebar';

function IndexPage() {
  
  return (
  <Layout>
    <SEO title="main" />
      <main className="main">
        <Blog/>
        <Sidebar/>
      </main>
  </Layout>
  )
}

export default IndexPage