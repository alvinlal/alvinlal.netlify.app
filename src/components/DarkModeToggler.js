import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../providers/provider"
import { useStaticQuery, graphql } from "gatsby"
const Button = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  /* margin: 0 auto; */
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: absolute;
  right: 20px;
  width: 4rem;
  height: 2rem;
  outline: none !important;
  box-shadow: none !important;
  img {
    height: auto;
    width: 1.2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ theme }) =>
        theme.lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`

export const DarkModeToggler = () => {
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
    <Button onClick={theme.changeTheme}>
      <img src={files.image1.publicURL} alt={"sun"} />

      <img src={files.image2.publicURL} alt={"moon"} />
    </Button>
  )
}
