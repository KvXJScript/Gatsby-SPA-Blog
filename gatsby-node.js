/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');


 module.exports.createPages = async ({ graphql, actions}) =>{
   const { createPage } = actions
   const blogTemplate = path.resolve('./src/templates/blog.js');
   const response = await graphql(`
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
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
   `)
   response.data.allContentfulBlog.edges.forEach(({node}) =>{
      createPage({
         component: blogTemplate,
         path: `/blog/${node.slug}`,
         context: {
            slug: node.slug
         }
      })
   })
 }
