module.exports = {
  siteMetadata: {
    title: 'Alexis Pareja',
    author: 'Alexis Pareja'
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: 'process.env.CONTENTFUL_SPACE_ID',
    //     accessToken: 'process.env.CONTENTFUL_ACCESS_TOKEN'
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
