import React from "react"
import {
  PostPreviewWrapper,
  FeatureImageWrapper,
  InfoWrapper,
  TitleWrapper,
  DateWrapper,
  ExcerptWrapper,
  TimeToReadWrapper,
} from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
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
      mobileImage: file(relativePath: { eq: "useless.png" }) {
        childImageSharp {
          fixed(width: 1, height: 1) {
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
      media: `(min-width:800px)`,
    },
  ]
  return (
    <Link
      to={`/blog/${slug}`}
      style={{ appearance: "none", textDecoration: "none" }}
    >
      <PostPreviewWrapper>
        <FeatureImageWrapper className={"featureImage"}>
          <Image key={id} fixed={source} fadeIn={true} alt="feature image" />
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
            <TimeToReadWrapper>
              {theme === "dark" ? (
                <img src={data.clockIconDark.publicURL} alt="clock icon" />
              ) : (
                <img src={data.clockIconLight.publicURL} alt="clock icon" />
              )}
              {timeToRead + " Read"}
            </TimeToReadWrapper>
          </DateWrapper>
          <ExcerptWrapper>{excerpt}</ExcerptWrapper>
        </InfoWrapper>
      </PostPreviewWrapper>
    </Link>
  )
}
