require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Celso Henrique personal blog`
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
        name: `Celso Henrique personal blog`,
        short_name: `Celso Henrique personal blog `,
        description: `Celso Henrique personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
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
