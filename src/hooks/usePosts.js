import { useStaticQuery, graphql } from "gatsby"

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            date
            title
            slug
            timeToRead
            excerpt
            featureImage {
              childImageSharp {
                fixed(width: 200, height: 200, quality: 100) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    timeToRead: post.frontmatter.timeToRead,
    slug: post.frontmatter.slug,
    excerpt: post.frontmatter.excerpt,
    image: post.frontmatter.featureImage.childImageSharp.fixed,
  }))
}
