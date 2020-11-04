require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Celso Henrique`,
    siteImage: `/banner.jpg`,
    siteTitleAlt: `Celso Henrique`,
    siteHeadline: `Celso Henrique`,
    siteDescription: `Boas-vindas ao meu blog. Sou engineering lead na Creditas, cofundador do Comproo, desenvolvedor, instrutor, palestrante e pai do Vicente. Aqui escrevo sobre tecnologia, programação, cultura, a web, meu cotidiano e mais.`,
    siteUrl: `https://celsohenrique.com`,
    siteLanguage: `pt-br`,
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
            title: `Sobre`,
            slug: `/sobre`
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
            name: `GitHub`,
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
        name: `Celso Henrique`,
        short_name: `Celso Henrique`,
        description: `Boas-vindas ao meu blog. Sou engineering lead na Creditas, cofundador do Comproo, desenvolvedor, instrutor, palestrante e pai do Vicente. Aqui escrevo sobre tecnologia, programação, cultura, a web, meu cotidiano e mais.`,
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
