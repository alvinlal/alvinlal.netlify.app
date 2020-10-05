import React, { useState } from "react"
import { Layout, PostPreviewMobile, Seo } from "../components"
import {
  IndexWrapper,
  FullStackWrapper,
  ReactWrapper,
  NodeWrapper,
  LogoWrapper,
  TopPostWrapper,
  PostsWrapper,
  BlogLink,
  NewsletterWrapper,
  MailInputWrapper,
} from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import addToMailchimp from "gatsby-plugin-mailchimp"
//TODO:-
// change react reveal animation to be from bottom up(i think it is fade)
// make site offline
// check post image crediting compatibility
// add google analytics
// add mailchimp rss newsltter
// medium,dev.to,twitter,facebook,instagram,linkedIn zap
// make subscribe to newsletter tab look better
export default function Index() {
  const [subscribeResult, setSubscribeResult] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    if (email.length === 0) {
      return false
    }
    const result = await addToMailchimp(email)

    setSubscribeResult(
      result.msg
        .slice(0, result.msg.indexOf("<"))
        .replace("site newsletter", "")
    )
  }
  const data = useStaticQuery(graphql`
    {
      reactLogo: file(relativePath: { eq: "react.png" }) {
        publicURL
      }
      nodeLogo: file(relativePath: { eq: "node.png" }) {
        publicURL
      }
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
        nodes {
          id
          frontmatter {
            title
            lastmod
            date
            excerpt
            slug
            timeToRead
          }
        }
      }
    }
  `)
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Alvin lal",
    url: "https://alvinlal.netlify.app",
    description:
      "personal portfolio of alvin lal and a blog for everything about web development",
    image: "https://alvinlal.netlify.app/logo.png",
    sameAs: [
      "https://www.instagram.com/lal_alvin_7/",
      "https://twitter.com/alvinlal7",
      "https://www.linkedin.com/in/alvin-lal-146a841b8/",
      "https://github.com/alvinlal",
    ],
    jobTitle: "student",
  }

  return (
    <Layout>
      <Seo
        title={"alvin lal's portfolio website and blog"}
        schemaMarkup={schema}
      />
      <IndexWrapper>
        <FullStackWrapper>
          <h1>
            Full<span>Stack</span> Developer.
          </h1>
          <LogoWrapper>
            <ReactWrapper>
              <img src={data.reactLogo.publicURL} alt="react logo" />
            </ReactWrapper>
            <NodeWrapper>
              <img src={data.nodeLogo.publicURL} alt="nodejs logo" />
            </NodeWrapper>
          </LogoWrapper>
        </FullStackWrapper>

        <TopPostWrapper>
          <h1>Recent Posts</h1>
          <PostsWrapper>
            {data.allMdx.nodes.map(post => {
              return (
                <Fade key={post.id} bottom={true}>
                  <PostPreviewMobile
                    key={post.id}
                    info={{ id: post.id, ...post.frontmatter }}
                  />
                </Fade>
              )
            })}
          </PostsWrapper>
          <BlogLink
            to={`/blog`}
            style={{ appearance: "none", textDecoration: "none" }}
          >
            See all &#8594;
          </BlogLink>
        </TopPostWrapper>
        {/* <Fade bottom={true}> */}
        <NewsletterWrapper>
          <h1>SUBSCRIBE TO NEWSLETTER</h1>

          <MailInputWrapper>
            <input
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>SUBSCRIBE</button>
          </MailInputWrapper>
          {subscribeResult && <p>{subscribeResult}</p>}
        </NewsletterWrapper>
        {/* </Fade> */}
      </IndexWrapper>
    </Layout>
  )
}
