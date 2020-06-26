import React from "react"
import {
  PostPreviewWrapper,
  FeatureImageWrapper,
  InfoWrapper,
  TitleWrapper,
  DateWrapper,
  ExcerptWrapper,
} from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { ThemeContext } from "../providers/provider"
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

export const PostPreview = ({ info }) => {
  const { theme } = React.useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    {
      mobileImage: file(relativePath: { eq: "01-my-first-post/rio.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      clockIconLight: file(relativePath: { eq: "clock-light.svg" }) {
        publicURL
      }
      clockIconDark: file(relativePath: { eq: "clock-dark.svg" }) {
        publicURL
      }
    }
  `)

  const { id, date, title, slug, excerpt, image, timeToRead } = info

  const source = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...image,
      media: `(min-width:750px)`,
    },
  ]
  return (
    <PostPreviewWrapper>
      <FeatureImageWrapper>
        <Image fixed={source} fadeIn={true} />
      </FeatureImageWrapper>
      <InfoWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <DateWrapper>
          {"Published on " +
            months[parseInt(date.split("-")[1], 10) - 1] +
            " " +
            date.split("-")[0].toString() +
            " " +
            date.split("-")[2].toString() +
            "  "}
          {theme === "dark" ? (
            <img src={data.clockIconDark.publicURL} alt="clock icon" />
          ) : (
            <img src={data.clockIconLight.publicURL} alt="clock icon" />
          )}
          {timeToRead + " Read"}
        </DateWrapper>
        <ExcerptWrapper>{excerpt}</ExcerptWrapper>
      </InfoWrapper>
    </PostPreviewWrapper>
  )
}
