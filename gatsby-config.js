module.exports = {
  siteMetadata: {
    title: `Albion Decorators`,
    description: `Located in St Neots Cambridgeshire, Albion Decorators has an expert team with a wide range of specialist skills delivering exceptional internal and external commercial, domestic and restoration decorating services.`,
    author: `Albion Decorators`,
    address_1: "3 FIELDING COURT",
    address_2: "EATON FORD",
    address_3: "ST NEOTS",
    address_3: "CAMBRIDGESHIRE",
    address_4: "PE19 7LP",
    tel1: `01480 473305`,
    tel2: `01223 524128`,
    vat: `VAT REGISTERED NO. 313374427`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0b1632`,
        theme_color: `#0b1632`,
        display: `minimal-ui`,
        icon: `src/images/albion-decorators-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -56,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
