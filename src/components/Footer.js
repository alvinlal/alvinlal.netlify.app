import React from "react"
import { FooterWrapper, SocialIconsWrapper } from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../providers/provider"

export const Footer = () => {
  const { theme } = React.useContext(ThemeContext)
  const file = useStaticQuery(graphql`
    {
      githubLight: file(relativePath: { eq: "github-light.svg" }) {
        publicURL
      }
      githubDark: file(relativePath: { eq: "github-dark.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      gmail: file(relativePath: { eq: "gmail.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <SocialIconsWrapper>
        <a href="https://github.com/alvinlal" target="_blank" rel="noreferrer">
          <img
            src={
              theme === "dark"
                ? file.githubDark.publicURL
                : file.githubLight.publicURL
            }
            alt="github logo"
          />
        </a>
        <a
          href="https://twitter.com/Alvinlal4"
          target="_blank"
          rel="noreferrer"
        >
          <img src={file.twitter.publicURL} alt="twitter logo" />
        </a>
        <a
          href="mailto:alvinzzz2001@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={file.gmail.publicURL} alt="gmail logo" />
        </a>
      </SocialIconsWrapper>
    </FooterWrapper>
  )
}
