module.exports = async ({ actions, graphql }) => {
  // Create paginated allPosts page
  const { data } = await graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `
  const postPerPage = 3
  const numOfPage = Math.ceil(data.allMdx.edges.length / postPerPage)

  Array.from({ length: numOfPage }).forEach((_, i) => {
    actions.createPages({
      path: i == 0 ? "/" : `${i + 1}`,
      component: require.resolve("./src/components/AllPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numOfPage,
        currentPage: i + 1,
      },
    })
  })
  // Create Pages for individual posts.
  data.allMdx.edges.forEach(post => {
    actions.createPages({
      path: post.frontmatter.slug,
      component: require.resolve("./src/components/Post.js"),
      context: { id },
    })
  })
}
