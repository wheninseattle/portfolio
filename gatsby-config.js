module.exports = {
  siteMetadata: {
    title: `Weston Norwood | Portfolio`,
    description: `A portfolio page to highlight the experience, skills, and passion I can bring to your team.`,
    author: `Weston Summers Norwood`,
    siteUrl: `http://www.westonnorwood.dev`,
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
        short_name: `Weston Portfolio`,
        start_url: `/`,
        background_color: `#003F48`,
        display: `minimal-ui`,
        icon: `src/images/weston-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    }
  }, 'gatsby-transformer-remark',
  ],
}
