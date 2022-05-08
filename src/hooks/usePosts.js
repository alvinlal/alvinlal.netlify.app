import { useStaticQuery, graphql } from "gatsby"

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            slug
            timeToRead
            excerpt
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 200
                  quality: 70
                  layout: FIXED
                  placeholder: TRACED_SVG
                )
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
    image: post.frontmatter.featureImage.childImageSharp.gatsbyImageData,
  }))
}
