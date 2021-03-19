import React, { useState, useEffect } from "react"
import { Layout, PostPreviewMobile, Seo } from "../components"
import {
  IndexWrapper,
  HeroBannerOneWrapper,
  HeroBannerTwoWrapper,
  TopPostWrapper,
  PostsWrapper,
  BlogLink,
  NewsletterWrapper,
  MailInputWrapper,
  WhoamiWrapper,
  AboutWrapper,
  DeveloperWrapper,
  SkillsWrapper,
  SkillWrapper,
  DownArrow,
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
      phpLogo: file(relativePath: { eq: "php.svg" }) {
        publicURL
      }
      jsLogo: file(relativePath: { eq: "js.png" }) {
        publicURL
      }
      cppLogo: file(relativePath: { eq: "c++.png" }) {
        publicURL
      }
      dockerLogo: file(relativePath: { eq: "docker.png" }) {
        publicURL
      }
      nodeLogo: file(relativePath: { eq: "node.png" }) {
        publicURL
      }
      reactLogo: file(relativePath: { eq: "react.png" }) {
        publicURL
      }
      gatsbyLogo: file(relativePath: { eq: "gatsby.svg" }) {
        publicURL
      }
      graphqlLogo: file(relativePath: { eq: "graphql.svg" }) {
        publicURL
      }
      mongoLogo: file(relativePath: { eq: "mongodb.png" }) {
        publicURL
      }
      htmlLogo: file(relativePath: { eq: "html.png" }) {
        publicURL
      }
      cssLogo: file(relativePath: { eq: "css.png" }) {
        publicURL
      }
      mongoLogo: file(relativePath: { eq: "mongodb.png" }) {
        publicURL
      }
      mysqlLogo: file(relativePath: { eq: "mysql.png" }) {
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
            <AboutWrapper>
              <h1>Who Am I ?</h1>
              <p>
                {" "}
                My name is Alvin lal and I am a<span>
                  {" "}
                  fullstack developer
                </span>{" "}
                from Kerala, India.
              </p>
            </AboutWrapper>

            <button
              onClick={() => alert("resume is still work in progress")}
              aria-label="download cv"
            >
              DOWNLOAD RESUME
            </button>
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
          <h1>Skills</h1>
          <SkillsWrapper>
            <SkillWrapper>
              <img src={data.phpLogo.publicURL} alt="php logo" />
              <h1>Php</h1>
              <p>
                Php is a server side scripting language that is especially
                suited to web development
              </p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/phpmvc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Phpmvc
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.jsLogo.publicURL} alt="js logo" />
              <h1>Javascript</h1>
              <p>
                Javascript is a client side scripting language with rich
                frameworks and libraries
              </p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img class="cpp" src={data.cppLogo.publicURL} alt="c++ logo" />
              <h1>C++</h1>
              <p>
                C++ is general purpose programming language that is used to make
                high performing, mission critical apps
              </p>
              {/* <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/phpmvc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Phpmvc
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
            <SkillWrapper>
              <img
                class="docker"
                src={data.dockerLogo.publicURL}
                alt="docker logo"
              />
              <h1>Docker</h1>
              <p>Docker is a containerisation tool that is used for devops</p>
              {/* <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/phpmvc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Phpmvc
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.nodeLogo.publicURL} alt="nodejs logo" />
              <h1>Nodejs</h1>
              <p>
                Nodejs is a single-threaded event driven javascript runtime
                outside the browser
              </p>
              {/* <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/phpmvc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Phpmvc
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
            <SkillWrapper>
              <img
                class="react"
                src={data.reactLogo.publicURL}
                alt="react logo"
              />
              <h1>React</h1>
              <p>
                React is a javascript framework for building user interfaces by
                facebook
              </p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.gatsbyLogo.publicURL} alt="gatsby logo" />
              <h1>Gatsby</h1>
              <p>Gatsby is a static site generator for react</p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.graphqlLogo.publicURL} alt="graphql logo" />
              <h1>Graphql</h1>
              <p>
                GraphQL is an open-source data query and manipulation language
                for APIs, and a runtime for fulfilling queries with existing
                data
              </p>
              {/* <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.mongoLogo.publicURL} alt="mongodb logo" />
              <h1>Mongodb</h1>
              <p>
                MongoDB is a open-source cross-platform document-oriented noSql
                database
              </p>
              {/* <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.htmlLogo.publicURL} alt="html logo" />
              <h1>Html</h1>
              <p>
                Html stands for hyper text markup language which is used for
                creating webpages
              </p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.cssLogo.publicURL} alt="css logo" />
              <h1>Css</h1>
              <p>
                Css stands for cascading style sheets which is used for styling
                web pages
              </p>
              <br></br>
              <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p>
            </SkillWrapper>
            <SkillWrapper>
              <img src={data.mysqlLogo.publicURL} alt="mysql logo" />
              <h1>Mysql</h1>
              <p>
                Mysql is a relational database managment system which uses
                structured query language (SQL)
              </p>
              <br></br>
              {/* <p>
                projects :{" "}
                <span>
                  <a
                    href="https://github.com/alvinlal/alvinlal.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio Site
                  </a>
                </span>
              </p> */}
            </SkillWrapper>
          </SkillsWrapper>
          <DownArrow />
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
