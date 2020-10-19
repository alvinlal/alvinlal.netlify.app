import React, { useState, useEffect } from "react"
import { Layout, PostPreviewMobile, Seo } from "../components"
import {
  IndexWrapper,
  HeroBannerOneWrapper,
  HeroBannerTwoWrapper,
  WorldWideWebImageWrapper,
  EternalWrapper,
  TopPostWrapper,
  PostsWrapper,
  BlogLink,
  NewsletterWrapper,
  MailInputWrapper,
  WhoamiWrapper,
  DeveloperWrapper,
  TechStackWrapper,
  TechStackIconsWrapper,
} from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import firebase from "gatsby-plugin-firebase"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ThemeContext } from "../providers/provider"

export default function Index() {
  const { theme } = React.useContext(ThemeContext)
  const [subscribeResult, setSubscribeResult] = useState(
    "Your Email won't be shared to anyone else other than me"
  )
  const [email, setEmail] = useState("")
  useEffect(() => {
    firebase.analytics().logEvent("Index page")
  }, [])
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
      developerLogoDark: file(relativePath: { eq: "developerDark.svg" }) {
        publicURL
      }
      developerLogoLight: file(relativePath: { eq: "developerLight.svg" }) {
        publicURL
      }
      wwwDark: file(relativePath: { eq: "wwwDark.svg" }) {
        publicURL
      }
      wwwLight: file(relativePath: { eq: "wwwLight.svg" }) {
        publicURL
      }
      gatsbyLogo: file(relativePath: { eq: "gatsby.svg" }) {
        publicURL
      }
      graphqlLogo: file(relativePath: { eq: "graphql.svg" }) {
        publicURL
      }
      reactLogo: file(relativePath: { eq: "react.png" }) {
        publicURL
      }
      nodeLogo: file(relativePath: { eq: "node.png" }) {
        publicURL
      }
      electronLogo: file(relativePath: { eq: "electron.svg" }) {
        publicURL
      }
      awsLogo: file(relativePath: { eq: "aws.png" }) {
        publicURL
      }
      firebaseLogo: file(relativePath: { eq: "firebase.svg" }) {
        publicURL
      }
      dockerLogo: file(relativePath: { eq: "docker.png" }) {
        publicURL
      }
      postgreLogo: file(relativePath: { eq: "postgre.png" }) {
        publicURL
      }
      mongoLogo: file(relativePath: { eq: "mongodb.png" }) {
        publicURL
      }
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
        nodes {
          id
          frontmatter {
            title
            lastmod
            date(formatString: "YYYY-MM-DD")
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
      "https://www.instagram.com/alvin__lal/",
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
        index={true}
      />

      <IndexWrapper>
        <HeroBannerOneWrapper>
          <WhoamiWrapper>
            <h1>Who Am I ?</h1>
            <p>
              {" "}
              My name is Alvin lal and I am a<span>
                {" "}
                fullstack developer
              </span>{" "}
              from Kerala, India. I specialize in everything Javascript all the
              way from frontend using React to backend using Node js.
            </p>
            <TechStackWrapper>
              <h2>Tech stack </h2>
              <TechStackIconsWrapper>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.nodeLogo.publicURL} alt="nodejs logo" />
                </a>
                <a
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.gatsbyLogo.publicURL} alt="gatsbyjs logo" />
                </a>
                <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                  <img src={data.graphqlLogo.publicURL} alt="graphql logo" />
                </a>
                <a
                  href="https://www.electronjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={data.electronLogo.publicURL}
                    alt="electronjs logo"
                  />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src={data.reactLogo.publicURL} alt="reactjs logo" />
                </a>
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.firebaseLogo.publicURL} alt="firebase logo" />
                </a>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.awsLogo.publicURL} alt="aws logo" />
                </a>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.dockerLogo.publicURL} alt="docker logo" />
                </a>
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.postgreLogo.publicURL} alt="postgreSQL logo" />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.mongoLogo.publicURL} alt="mongodb logo" />
                </a>
              </TechStackIconsWrapper>
            </TechStackWrapper>
          </WhoamiWrapper>{" "}
          <DeveloperWrapper>
            <Fade bottom={true}>
              <img
                src={
                  theme === "dark"
                    ? data.developerLogoDark.publicURL
                    : data.developerLogoLight.publicURL
                }
                alt={"developer illustration"}
              />
            </Fade>
          </DeveloperWrapper>
        </HeroBannerOneWrapper>
        <HeroBannerTwoWrapper>
          <WorldWideWebImageWrapper>
            <Fade bottom={true}>
              <img
                src={
                  theme === "dark"
                    ? data.wwwDark.publicURL
                    : data.wwwLight.publicURL
                }
                alt={"worldwideweb illustration"}
              />
            </Fade>
          </WorldWideWebImageWrapper>
          <EternalWrapper>
            <h1>Eternal learner of the WWW</h1>
            <p>
              Ever since I have been introduced to the world wide web, Scraping
              Knowledge about the world through it became my hobby.
            </p>
            <button
              onClick={() => alert("cv is still work in progress")}
              aria-label="subscribe to newletter"
            >
              DOWNLOAD CV
            </button>
          </EternalWrapper>
        </HeroBannerTwoWrapper>
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

        <NewsletterWrapper>
          <h1>SUBSCRIBE TO NEWSLETTER</h1>
          <MailInputWrapper>
            <input
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              aria-label="email"
            />
            <button onClick={handleSubmit} aria-label="subscribe to newletter">
              SUBSCRIBE
            </button>
          </MailInputWrapper>
          {subscribeResult && <p>{subscribeResult}</p>}
        </NewsletterWrapper>
      </IndexWrapper>
    </Layout>
  )
}
