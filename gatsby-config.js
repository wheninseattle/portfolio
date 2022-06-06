module.exports = {
  siteMetadata: {
    title: `Weston Norwood | LEAP Hopeful`,
    description: `A portfolio page to highlight the experience, skills, and passion I can bring to your team.`,
    author: `Weston Summers Norwood`,
    siteUrl: `http://www.westonnorwood.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Weston Norwood Portfolio`,
        short_name: `Weston's Portfolio`,
        start_url: `/`,
        background_color: `#003F48`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/weston-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
