module.exports = {
  siteMetadata: {
    title: `Hi, I'm Ian`,
    description: `Ian Teo's Portfolio`,
    author: `ian`,
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Josefin Sans']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ian's Portfolio`,
        short_name: `Ian T`,
        start_url: `/`,
        background_color: `#1b1c1e`,
        theme_color: `#1b1c1e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`],
      },
    }
  ],
}
