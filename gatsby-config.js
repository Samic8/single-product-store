module.exports = {
  siteMetadata: {
    title: `Single Product Store.`,
    description: `The simplest way to sell something online.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `single-product-store`,
        short_name: `singleproduct.store`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#433F4F`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-93793174-4",
        head: false
      }
    },
    `gatsby-plugin-offline`
  ]
};
