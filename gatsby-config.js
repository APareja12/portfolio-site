module.exports = {
  siteMetadata: {
    title: 'Projects Portfolio',
    author: 'Alexis Pareja'
  },
  plugins: [
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
