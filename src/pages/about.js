import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'

function AboutPage() {
   return (
      <div>
         <Layout>
         <h1>About page</h1>
         <p>Hello my name is Paweł</p>
         <Link to="/contact">Contact Page</Link>
         </Layout>
      </div>
   )
}

export default AboutPage
