import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Niestety napotkałeś error</h1>
    <p>Właśnie przeszedłeś na strone, która nie istnieje :(</p>
  </Layout>
)

export default NotFoundPage
