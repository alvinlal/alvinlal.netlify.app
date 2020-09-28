module.exports = {
  siteMetadata: {
    title: "Alvin lal",
    image: "./al.png",
    description:
      "personal portfolio of alvin lal and a blog for everything about web development",
    twitterUsername: "@alvinlal7",
    author: "Alvin lal",
    url: "https://alvinlal.github.io",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "postFeatureimages",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extension: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              withWebp: true,
              tracedSVG: true,
              wrapperStyle: `margin:2rem auto;`,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        // prettier-ignore
        fonts: ["roboto\:400,600,700", "fira code"],
        display: "swap",
      },
    },
  ],
}
