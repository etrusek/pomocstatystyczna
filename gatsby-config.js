module.exports = {
  siteMetadata: {
    title: "pomocstatystyczna",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-line-breaks`
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
