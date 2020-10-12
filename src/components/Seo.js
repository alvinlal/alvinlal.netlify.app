import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({
  description,
  keywords,
  title,
  image,
  siteUrl,
  schemaMarkup,
  index = false,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
        const metaImage = image || data.site.siteMetadata.siteUrl + "/logo.png"
        const metaAuthor = data.site.siteMetadata.author
        const metakeywords = keywords
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: "author",
                content: metaAuthor,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metakeywords && metakeywords.length > 0
                ? { name: `keywords`, content: metakeywords.join(`,`) }
                : {
                    name: "keywords",
                    content: [
                      "react",
                      "javascript",
                      "typescript",
                      "web",
                      "fullstack",
                      "frontend",
                      "backend",
                      "nodejs",
                      "express",
                      "ssr",
                      "alvinlal",
                      "blog",
                    ],
                  }
            )}
          >
            {schemaMarkup && (
              <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
              </script>
            )}

            <html lang="en" />
          </Helmet>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        siteUrl
      }
    }
  }
`
