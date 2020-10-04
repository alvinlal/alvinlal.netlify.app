import React from "react"
import {
  PostPreviewWrapperMobile,
  InfoWrapperMobile,
  TitleWrapperMobile,
  DateWrapperMobile,
  ExcerptWrapperMobile,
  TimeToReadWrapperMobile,
} from "../styled-elements"
import { useStaticQuery, graphql } from "gatsby"

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

export const PostPreviewMobile = ({ info }) => {
  const { theme } = React.useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    {
      clockIconLight: file(relativePath: { eq: "clock-light.svg" }) {
        publicURL
      }
      clockIconDark: file(relativePath: { eq: "clock-dark.svg" }) {
        publicURL
      }
    }
  `)

  const { date, title, slug, excerpt, timeToRead } = info

  return (
    <Link
      to={`/blog/${slug}`}
      style={{ appearance: "none", textDecoration: "none" }}
    >
      <PostPreviewWrapperMobile>
        <InfoWrapperMobile>
          <TitleWrapperMobile>{title}</TitleWrapperMobile>
          <DateWrapperMobile>
            {"Published on " +
              months[parseInt(date.split("-")[1], 10) - 1] +
              " " +
              date.split("-")[0].toString() +
              " " +
              date.split("-")[2].toString() +
              "  "}
            <TimeToReadWrapperMobile>
              {theme === "dark" ? (
                <img src={data.clockIconDark.publicURL} alt="clock icon" />
              ) : (
                <img src={data.clockIconLight.publicURL} alt="clock icon" />
              )}
              {timeToRead + " Read"}
            </TimeToReadWrapperMobile>
          </DateWrapperMobile>
          <ExcerptWrapperMobile>{excerpt}</ExcerptWrapperMobile>
        </InfoWrapperMobile>
      </PostPreviewWrapperMobile>
    </Link>
  )
}
