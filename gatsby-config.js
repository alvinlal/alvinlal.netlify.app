module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
