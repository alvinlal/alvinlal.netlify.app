import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, Seo, ViewCounter } from "../components"
import { ThemeContext } from "../providers/provider"
import { Disqus } from "gatsby-plugin-disqus"
import {
  PostWrapper,
  PostHeaderWrapper,
  TimeToReadWrapper,
  DateWrapper,
  PostbodyWrapper,
  EditOnGithubWrapper,
  PageNavWrapper,
  DisqusWrapper,
} from "../styled-elements"
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const Post = ({ data, pageContext }) => {
  const { theme } = React.useContext(ThemeContext)
  const {
    date,
    title,
    timeToRead,
    slug,
    id,
    lastmod,
    excerpt,
  } = data.mdx.frontmatter
  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  const siteUrl = data.site.siteMetadata.siteUrl + `/blog/${slug}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },
    headline: title,
    description: excerpt,
    image: {
      "@type": "ImageObject",
      url: data.site.siteMetadata.siteUrl + seoImage,
    },
    author: {
      "@type": "Person",
      name: "Alvin lal",
    },
    publisher: {
      "@type": "Person",
      name: "Alvin lal",
      logo: {
        "@type": "ImageObject",
        url: "https://alvinlal.netlify.app/logo.png",
      },
    },
    datePublished:
      date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0],
    dateModified:
      lastmod.split("-")[0] +
      "-" +
      lastmod.split("-")[1] +
      "-" +
      lastmod.split("-")[2],
  }

  const disqusConfig = {
    url: `https://alvinlal.netlify.app/blog/${slug}`,
    identifier: id,
    title: title,
  }
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        image={data.site.siteMetadata.siteUrl + seoImage}
        description={data.mdx.frontmatter.excerpt}
        keywords={data.mdx.frontmatter.title.split(" ")}
        siteUrl={siteUrl}
        schemaMarkup={schema}
      />
      <PostWrapper>
        <PostHeaderWrapper>
          <h1>{title}</h1>
          <DateWrapper>
            {"Published on " +
              months[parseInt(date.split("-")[1], 10) - 1] +
              " " +
              date.split("-")[0].toString() +
              " " +
              date.split("-")[2].toString() +
              "  "}
            <TimeToReadWrapper>
              {theme === "dark" ? (
                <img src={data.clockIconDark.publicURL} alt="clock icon" />
              ) : (
                <img src={data.clockIconLight.publicURL} alt="clock icon" />
              )}
              {timeToRead + " Read"}
            </TimeToReadWrapper>
            <ViewCounter postUrl={siteUrl} title={title} />
          </DateWrapper>
        </PostHeaderWrapper>
        <PostbodyWrapper>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </PostbodyWrapper>
        <EditOnGithubWrapper
          href={pageContext.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              theme === "dark"
                ? data.githubIconDark.publicURL
                : data.githubIconLight.publicURL
            }
            alt="github icon"
          />
          See a mistake? Edit on Github.
        </EditOnGithubWrapper>
        <PageNavWrapper>
          {pageContext.nextPage.link && (
            <Link to={`/blog/${pageContext.nextPage.link}`}>
              Next:{pageContext.nextPage.title} &rarr;
            </Link>
          )}
          {pageContext.previousPage.link && (
            <Link to={`/blog/${pageContext.previousPage.link}`}>
              &larr; Previous:{pageContext.previousPage.title}
            </Link>
          )}
        </PageNavWrapper>
      </PostWrapper>
      <DisqusWrapper>
        <Disqus config={disqusConfig} />
      </DisqusWrapper>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query postQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        title
        slug
        date
        lastmod
        timeToRead
        excerpt
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    clockIconLight: file(relativePath: { eq: "clock-light.svg" }) {
      publicURL
    }
    clockIconDark: file(relativePath: { eq: "clock-dark.svg" }) {
      publicURL
    }
    githubIconDark: file(relativePath: { eq: "github-dark.svg" }) {
      publicURL
    }
    githubIconLight: file(relativePath: { eq: "github-light.svg" }) {
      publicURL
    }
  }
`
