import React, { useState, useEffect } from "react"
import "../styles/blog.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Custom from "../images/background-image.jpg"
import SideBar from "../components/Sidebar"
import Layout from "../components/layout"
import Loader from "../misc/Loader"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function IndexPage(props) {
  const [timeoutCheck, setTimeoutCheck] = useState(false)
  const [date, setDate] = useState("")
  const [filteredValues, setFilteredValues] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setTimeoutCheck(true)
    }, 2000)
  }, [])

  useEffect(() => {
    const filteredValues =
      data.allContentfulBlog &&
      data.allContentfulBlog.edges.filter(
        item => item.node.publishedDate.split(" ")[0] === date
      )
    setFilteredValues(filteredValues)
  }, [date])

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className="blog-image" />
      },
    },
  }

  const handleDate = ({ target: { value } }) => {
    if (value === "Styczeń") setDate("January")
    if (value === "Luty") setDate("February")
    if (value === "Marzec") setDate("March")
    if (value === "Kwiecień") setDate("April")
    if (value === "Maj") setDate("May")
    if (value === "Czerwiec") setDate("June")
    if (value === "Lipiec") setDate("July")
    if (value === "Sierpnień") setDate("August")
    if (value === "Wrzesień") setDate("September")
    if (value === "Październik") setDate("October")
    if (value === "Listopad") setDate("November")
    if (value === "Grudzien") setDate("December")
  }

  return (
    <Layout>
      <main className="main">
        <div className="blog">
          <SEO title="Blog" />
          <ol
            className="posts"
            style={{ display: timeoutCheck ? "flex" : "none" }}
          >
            {filteredValues && filteredValues.length === 0 && date && (
              <p>Nie znaleziono żadnych wpisów :(</p>
            )}
            {date ? (
              <>
                {filteredValues &&
                  filteredValues.map(({ node }) => {
                    return (
                      <React.Fragment key={node.title}>
                        <div>
                          <img
                          src={Custom}
                          alt="postImage"
                          className="post__image"
                        />
                          <li className="post" id={node.id}>
                            <div className="post__title">
                              <Link to={`/blog/${node.slug}`}>
                                <h2>{node.title}</h2>
                              </Link>
                            </div>
                            <div className="post__info">
                              <p>{node.publishedDate}</p>
                              <a
                                href="https://www.instagram.com/anka_roj/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <p className="beforeankadies">beforeankadies</p>
                              </a>
                              <p>14 komentarzy</p>
                            </div>
                             <p className="post__content">
                            {node.body &&
                              node.body.json.content[0].content[0] &&
                              node.body.json.content[0].content[0].value.substring(
                                0,
                                200
                              )}
                          </p>
                          <p className="post__more">
                            <Link to={`/blog/${node.slug}`}>Czytaj dalej</Link>
                          </p>
                          </li>
                         
                        </div>
                      </React.Fragment>
                    )
                  })}
              </>
            ) : (
              <>
                {data.allContentfulBlog &&
                  data.allContentfulBlog.edges.map(({ node }) => {
                    return (
                      <React.Fragment key={node.title}>
                        <img
                          src={Custom}
                          alt="postImage"
                          className="post__image"
                        />
                        <li className="post" id={node.id}>
                          <Link to={`/blog/${node.slug}`}>
                            <div className="post__title">
                              <h2>{node.title}</h2>
                            </div>
                          </Link>
                          <div className="post__info">
                            <p>{node.publishedDate}</p>
                            <a
                              href="https://www.instagram.com/anka_roj/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p className="beforeankadies">beforeankadies</p>
                            </a>
                            <p>14 komentarzy</p>
                          </div>
                          <p className="post__content">
                            {node.body &&
                              node.body.json.content[0].content[0] &&
                              node.body.json.content[0].content[0].value.substring(
                                0,
                                200
                              )}
                            ...
                          </p>
                          <p className="post__more">
                            <Link to={`/blog/${node.slug}`}>Czytaj dalej</Link>
                          </p>
                        </li>
                      </React.Fragment>
                    )
                  })}
              </>
            )}
          </ol>
          <div
            className="loader"
            style={{ display: !timeoutCheck ? "block" : "none" }}
          >
            <Loader />
          </div>
        </div>
        <SideBar date={date} handleDate={handleDate} />
      </main>
    </Layout>
  )
}

export default IndexPage
