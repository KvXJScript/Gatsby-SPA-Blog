import React from "react"
import {Link} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Niestety napotkałeś error</h1>
    <p>Właśnie przeszedłeś na strone, która nie istnieje :(</p>
    <p><Link to="/">Zapraszam na strone główną </Link></p>
  </Layout>
)

export default NotFoundPage
