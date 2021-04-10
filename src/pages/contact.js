import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'
import SEO from "../components/seo";
import "../styles/pages-styles/_contact.scss"

function ContactPage() {
   return (
      <div className="contact">
         <SEO title="Contact" />
         <Layout>
         <h1>Hello here you can contact us!</h1>
         <p>feel free to sign in</p>
         <Link to="https://twitter.com/KevinSvenson_">Twitter</Link>
         </Layout>
      </div>
   )
}

export default ContactPage
