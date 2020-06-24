import React from "react"

import { ThemeContext } from "../providers/provider"
import { useStaticQuery, graphql } from "gatsby"
import { DarkModeTogglerWrapper } from "../styled-elements"

export const DarkModeToggler = ({ sideNav }) => {
  const files = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "sun.svg" }) {
        publicURL
      }
      image2: file(relativePath: { eq: "moon.svg" }) {
        publicURL
      }
    }
  `)

  const theme = React.useContext(ThemeContext)
  return (
    <DarkModeTogglerWrapper sideNav={sideNav} onClick={theme.changeTheme}>
      <img src={files.image1.publicURL} alt={"sun"} />
      <img src={files.image2.publicURL} alt={"moon"} />
    </DarkModeTogglerWrapper>
  )
}
