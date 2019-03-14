module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `./src/pdf_documents/`,
      }
    }
  ]
}
