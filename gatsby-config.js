module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `gatsby-dev-setup`,
    description: `Setup your gatsby project.`,
    author: `sokrati`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-website`,
        short_name: `gatsby-website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    }
  ],
}
