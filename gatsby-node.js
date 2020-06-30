exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }
  const posts = result.data.allMdx.nodes

  posts.forEach((post, index) => {
    actions.createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/Post.js"),
      context: {
        id: post.id,
        nextPage: {
          link:
            index === posts.length - 1
              ? posts[0].frontmatter.slug
              : posts[index + 1].frontmatter.slug,
          title:
            index === posts.length - 1
              ? posts[0].frontmatter.title
              : posts[index + 1].frontmatter.title,
        },
        previousPage: {
          link: index === 0 ? null : posts[index - 1].frontmatter.slug,
          title: index === 0 ? null : posts[index - 1].frontmatter.title,
        },
        githubLink: `https://github.com/alvinlal/alvinlal.com/blob/master/src/posts/${post.frontmatter.slug}/index.mdx`,
      },
    })
  })
}
