require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Celso Henrique`,
    siteImage: ``,
    siteTitleAlt: `celsohenrique.com - Celso Henrique Personal Blog`,
    siteHeadline: `celsohenrique.com - Celso Henrique Personal Blog`,
    siteDescription: `celsohenrique.com - Celso Henrique Personal Blog`,
    siteUrl: `https://celsohenrique.com`,
    siteLanguage: `en`,
    author: `@celsohenrique_`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/celsohenrique_`
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/devfrontend/`
          },
          {
            name: `Github`,
            url: `https://github.com/celso-henrique`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `celsohenrique.com - Celso Henrique Personal Blog`,
        short_name: `celsohenrique.com`,
        description: `Celso Henrique personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2d3748`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
